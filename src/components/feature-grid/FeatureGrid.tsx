import { RevealOnScroll } from "@/components/common";
import { FeatureCard } from "@/components/feature-card";
import { FEATURES } from "@/constants";

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((feature, index) => (
        <RevealOnScroll key={feature.id} delayMs={(index % 3) * 80}>
          <FeatureCard feature={feature} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
