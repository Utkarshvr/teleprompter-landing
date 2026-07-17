import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_40px_-16px_rgba(26,26,24,0.16)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-contrast">
        <Icon size={20} aria-hidden />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-text">{feature.title}</h3>
        <p className="text-[15px] leading-relaxed text-text-secondary">{feature.description}</p>
      </div>
    </div>
  );
}
