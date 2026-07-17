"use client";

import { Check, LoaderCircle } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/common";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

interface DeleteAccountFormProps {
  className?: string;
}

/** Demo form: accepts an email, then shows a confirmation (no backend). */
export function DeleteAccountForm({ className }: DeleteAccountFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputId = useId();
  const statusId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const normalized = email.trim().toLowerCase();
    if (!EMAIL_RE.test(normalized)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setStatus("submitting");
    // Demo only — simulate a short network delay, then confirm.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-accent/25 bg-accent-muted/60 px-6 py-8 text-center",
          className,
        )}
        role="status"
      >
        <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-accent text-accent-contrast">
          <Check size={20} aria-hidden />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-text">Request received</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          We&apos;ve gotten your profile deletion request. We&apos;ll process it and inform you
          within <span className="font-medium text-text">7 days</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full flex-col gap-4", className)}
      noValidate
    >
      <div>
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-text">
          Account email
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setErrorMessage("");
            }
          }}
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

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <LoaderCircle size={18} className="animate-spin" aria-hidden />
        ) : null}
        Request deletion
      </Button>
    </form>
  );
}
