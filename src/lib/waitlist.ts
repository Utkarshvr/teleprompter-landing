export type WaitlistResult = { ok: true } | { ok: false; error: string };

/**
 * Placeholder for the real waitlist API call. Swap the body for a `fetch`
 * to your backend/provider (e.g. an API route, Supabase, or a form service)
 * — the calling component only cares about the `WaitlistResult` shape.
 */
export async function subscribeToWaitlist(email: string): Promise<WaitlistResult> {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  // TODO: replace with a real request once the backend exists.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true };
}
