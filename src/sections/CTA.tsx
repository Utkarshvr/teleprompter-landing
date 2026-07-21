import { Container, SectionHeading } from "@/components/common";
import { AppAvailability } from "@/components/waiting-list";

export function CTA() {
  return (
    <section id="waitlist" className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-8 rounded-[32px] border border-border-subtle bg-surface px-6 py-16 text-center sm:px-16">
          <SectionHeading
            title="Ready when you are"
            description="Join the Early Access list and we'll send the app to your email shortly."
          />
          <AppAvailability />
        </div>
      </Container>
    </section>
  );
}
