import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface StoreButtonProps {
  href: string;
  icon: LucideIcon;
  caption: string;
  storeName: string;
  className?: string;
}

/** A single store badge. Renders disabled with an "Available soon" hint when `href` is empty. */
export function StoreButton({ href, icon: Icon, caption, storeName, className }: StoreButtonProps) {
  const isDisabled = href.trim().length === 0;

  const classes = cn(
    "flex h-14 min-w-[168px] items-center gap-3 rounded-2xl border border-border bg-text px-4 text-text-inverse transition-all duration-200",
    isDisabled
      ? "cursor-not-allowed opacity-40"
      : "hover:-translate-y-0.5 hover:border-accent/40 active:translate-y-0",
    className,
  );

  const content = (
    <>
      <Icon size={26} aria-hidden className="shrink-0" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] text-text-inverse/70">
          {isDisabled ? "Available soon" : caption}
        </span>
        <span className="text-[15px] font-semibold">{storeName}</span>
      </span>
    </>
  );

  if (isDisabled) {
    return (
      <span
        className={classes}
        aria-disabled="true"
        role="button"
        tabIndex={-1}
        title="Available soon"
      >
        {content}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  );
}
