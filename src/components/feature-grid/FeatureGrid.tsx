import { RevealOnScroll } from "@/components/common";
import { FeatureCard } from "@/components/feature-card";
import { FEATURES } from "@/constants";

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((feature, index) => {
        const isLastAloneOnTwoCol =
          index + 1 === FEATURES.length && FEATURES.length % 2 === 1;

        return (
          <RevealOnScroll
            key={feature.id}
            delayMs={(index % 3) * 80}
            className={
              isLastAloneOnTwoCol
                ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc((100%-1.25rem)/2)] lg:col-span-1 lg:mx-0 lg:max-w-none"
                : undefined
            }
          >
            <FeatureCard feature={feature} />
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
