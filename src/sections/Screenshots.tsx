import { Container, SectionHeading } from "@/components/common";
import { ScreenshotShowcase } from "@/components/screenshot-showcase";

export function Screenshots() {
  return (
    <section id="screenshots" className="bg-background-secondary py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Screenshots"
          title="A closer look"
          description="A quick look at the reading screen, your library, and the controls in between."
        />
        <ScreenshotShowcase />
      </Container>
    </section>
  );
}
