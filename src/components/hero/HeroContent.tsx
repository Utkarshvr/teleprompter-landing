import { AppAvailability } from "@/components/waiting-list";
import { SITE } from "@/constants";

/** Headline, supporting copy, and the primary get-the-app action. */
export function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-6 text-left">
      <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
        {SITE.tagline}
      </h1>
      <p className="max-w-md text-lg leading-relaxed text-text-secondary">
        A calm, focused teleprompter for your phone. Import a script, set your pace, and read
        naturally while the camera rolls.
      </p>

      <div className="pt-2">
        <AppAvailability />
      </div>
    </div>
  );
}
