import type { LucideIcon } from "lucide-react";

export interface Feature {
  /** Stable identifier, also used as the React key. */
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
