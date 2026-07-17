import Image from "next/image";

import type { AppScreenshot } from "@/types";

interface ScreenshotCardProps {
  screenshot: AppScreenshot;
  priority?: boolean;
}

export function ScreenshotCard({ screenshot, priority }: ScreenshotCardProps) {
  return (
    <figure className="flex w-[220px] shrink-0 flex-col gap-3 sm:w-[240px]">
      <div className="overflow-hidden rounded-[28px] border border-border-subtle bg-background-secondary shadow-[0_20px_45px_-20px_rgba(26,26,24,0.2)]">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={540}
          height={1170}
          loading={priority ? undefined : "lazy"}
          priority={priority}
          sizes="(min-width: 640px) 240px, 220px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="text-center text-sm font-medium text-text-secondary">
        {screenshot.caption}
      </figcaption>
    </figure>
  );
}
