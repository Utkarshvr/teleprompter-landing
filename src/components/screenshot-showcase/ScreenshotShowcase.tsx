import { APP_SCREENSHOTS } from "@/constants";
import { ScreenshotCard } from "./ScreenshotCard";

/**
 * Horizontally swipeable on small screens, wraps into a centered row once
 * there's enough width. Add or remove entries in `constants/screenshots.ts`.
 */
export function ScreenshotShowcase() {
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
      {APP_SCREENSHOTS.map((screenshot, index) => (
        <div key={screenshot.id} className="snap-center">
          <ScreenshotCard screenshot={screenshot} priority={index === 0} />
        </div>
      ))}
    </div>
  );
}
