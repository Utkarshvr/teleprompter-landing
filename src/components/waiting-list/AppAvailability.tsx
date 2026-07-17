import { getIsAppPublished } from "@/utils/env";
import { StoreButtons } from "./StoreButtons";
import { WaitlistForm } from "./WaitlistForm";

interface AppAvailabilityProps {
  className?: string;
}

/**
 * Single entry point for "how can I get the app right now".
 * Switches between the waitlist form and store buttons based on
 * `NEXT_PUBLIC_IS_APP_PUBLISHED` — no other component should branch on it.
 */
export function AppAvailability({ className }: AppAvailabilityProps) {
  const isAppPublished = getIsAppPublished();

  return isAppPublished ? (
    <StoreButtons className={className} />
  ) : (
    <WaitlistForm className={className} />
  );
}
