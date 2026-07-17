import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/** App icon + wordmark, linking back to the top of the page. */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 shrink-0", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={32}
        height={32}
        priority
        className="h-8 w-8 rounded-[9px]"
      />
      {showWordmark ? (
        <span className="text-[17px] font-semibold tracking-tight text-text">{SITE.name}</span>
      ) : null}
    </Link>
  );
}
