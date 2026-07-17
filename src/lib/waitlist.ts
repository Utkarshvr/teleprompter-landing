import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export type WaitlistResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/**
 * Saves a waitlist email to Supabase `waiting_list`.
 * Duplicate emails (unique constraint) are treated as success.
 */
export async function subscribeToWaitlist(email: string): Promise<WaitlistResult> {
  const normalized = email.trim().toLowerCase();

  if (!EMAIL_RE.test(normalized)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (!isSupabaseConfigured) {
    return {
      ok: false,
      error: "Waitlist is temporarily unavailable. Please try again later.",
    };
  }

  const { error } = await supabase.from("waiting_list").insert({ email: normalized });

  if (error) {
    // Unique violation — already signed up
    if (error.code === "23505") {
      return { ok: true };
    }

    console.error("[waitlist]", error.message);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
