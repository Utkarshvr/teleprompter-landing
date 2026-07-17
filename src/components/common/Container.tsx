import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centers content and applies the site's consistent max-width and gutters. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
