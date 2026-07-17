import { Apple, Play } from "lucide-react";

import { getAppStoreUrl, getPlayStoreUrl } from "@/utils/env";
import { cn } from "@/lib/utils";
import { StoreButton } from "./StoreButton";

interface StoreButtonsProps {
  className?: string;
}

/** Shown once the app is published — reads store URLs from env. */
export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
      <StoreButton
        href={getPlayStoreUrl()}
        icon={Play}
        caption="Get it on"
        storeName="Google Play"
      />
      <StoreButton
        href={getAppStoreUrl()}
        icon={Apple}
        caption="Download on the"
        storeName="App Store"
      />
    </div>
  );
}
