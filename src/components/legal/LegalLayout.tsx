import { Container } from "@/components/common";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { LegalDocument } from "@/types/legal";

import { LegalSection } from "./LegalSection";
import { LegalTableOfContents } from "./LegalTableOfContents";

interface LegalLayoutProps {
  document: LegalDocument;
}

/** Shared shell for Privacy Policy and Terms pages. */
export function LegalLayout({ document }: LegalLayoutProps) {
  const { title, lastUpdated, sections } = document;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-border-subtle bg-gradient-to-b from-gradient-start to-gradient-end">
          <Container className="pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Legal</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-text-tertiary">Last updated: {lastUpdated}</p>
          </Container>
        </div>

        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <LegalTableOfContents sections={sections} />

            <article className="mx-auto w-full max-w-3xl space-y-12 lg:mx-0">
              {sections.map((section) => (
                <LegalSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  paragraphs={section.paragraphs}
                  lists={section.lists}
                />
              ))}
            </article>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
