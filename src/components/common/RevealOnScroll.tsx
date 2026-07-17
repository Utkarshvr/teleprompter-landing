"use client";

import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, useful for lists of cards. */
  delayMs?: number;
}

/** Fades and slides children up into place the first time they scroll into view. */
export function RevealOnScroll({ children, className, delayMs = 0 }: RevealOnScrollProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", isInView && "is-visible", className)}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
