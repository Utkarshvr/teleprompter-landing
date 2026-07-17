import { CloudCheck, Gauge } from "lucide-react";
import Image from "next/image";

/**
 * App preview for the hero. Points at `public/app-screenshots/hero.png` —
 * drop a real capture in that exact path and this component needs no changes.
 */
export function HeroMockup() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-muted),transparent)] opacity-70 blur-2xl"
      />

      <div className="relative w-full max-w-[320px]">
        <Image
          src="/app-screenshots/hero.png"
          alt="Teleprompter app open on a phone, showing a script with scrolling text"
          width={540}
          height={1170}
          priority
          className="h-auto w-full drop-shadow-[0_30px_60px_rgba(26,26,24,0.18)]"
        />

        <div
          className="animate-float absolute -left-8 top-10 hidden items-center gap-2.5 rounded-2xl border border-border-subtle bg-surface/95 px-4 py-3 shadow-[0_12px_30px_-8px_rgba(26,26,24,0.16)] backdrop-blur sm:flex"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-muted text-accent">
            <Gauge size={18} aria-hidden />
          </span>
          <span className="text-sm font-medium text-text">Adjustable speed</span>
        </div>

        <div
          className="animate-float absolute -right-6 bottom-16 hidden items-center gap-2.5 rounded-2xl border border-border-subtle bg-surface/95 px-4 py-3 shadow-[0_12px_30px_-8px_rgba(26,26,24,0.16)] backdrop-blur sm:flex"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-muted text-accent">
            <CloudCheck size={18} aria-hidden />
          </span>
          <span className="text-sm font-medium text-text">Cloud sync</span>
        </div>
      </div>
    </div>
  );
}
