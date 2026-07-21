"use client";

import { Check, LoaderCircle, Send } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { subscribeToWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

interface WaitlistFormProps {
  className?: string;
}

/** Shown before launch — collects an email and saves it via Supabase. */
export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputId = useId();
  const statusId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await subscribeToWaitlist(email);

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex max-w-md items-start gap-3 rounded-2xl border border-accent/30 bg-accent-muted px-5 py-4 text-left text-sm font-medium leading-relaxed text-accent",
          className,
        )}
        role="status"
      >
        <Check size={18} className="mt-0.5 shrink-0" aria-hidden />
        <p>
          You&apos;re on the Early Access list. We&apos;ll provide the app to your email shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-start", className)}
      noValidate
    >
      <div className="flex-1">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby={status === "error" ? statusId : undefined}
          aria-invalid={status === "error"}
          className="h-12 w-full rounded-full border border-border bg-surface px-5 text-[15px] text-text placeholder:text-text-tertiary outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
        />
        {status === "error" ? (
          <p id={statusId} role="alert" className="mt-2 px-1 text-sm text-danger">
            {errorMessage}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-accent-contrast transition-all duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 active:scale-[0.98]"
      >
        {status === "submitting" ? (
          <LoaderCircle size={18} className="animate-spin" aria-hidden />
        ) : (
          <Send size={16} aria-hidden />
        )}
        Join Early access list
      </button>
    </form>
  );
}
