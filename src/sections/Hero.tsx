import { Container } from "@/components/common";
import { HeroContent, HeroMockup } from "@/components/hero";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[linear-gradient(180deg,var(--color-gradient-end),var(--color-gradient-start)_70%)]"
      />

      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <HeroContent />
        <HeroMockup />
      </Container>
    </section>
  );
}
