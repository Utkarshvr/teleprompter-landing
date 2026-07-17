import { Container, SectionHeading } from "@/components/common";
import { FeatureGrid } from "@/components/feature-grid";

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
          description="Every feature is built around one job: helping you read your script naturally on camera."
        />
        <FeatureGrid />
      </Container>
    </section>
  );
}
