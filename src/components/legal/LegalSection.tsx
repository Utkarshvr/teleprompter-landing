import type { LegalListBlock } from "@/types/legal";

interface LegalSectionProps {
  id: string;
  title: string;
  paragraphs?: string[];
  lists?: LegalListBlock[];
}

function LegalList({ intro, items }: LegalListBlock) {
  return (
    <div className="space-y-3">
      {intro ? <p className="text-base leading-relaxed text-text-secondary">{intro}</p> : null}
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-text-secondary marker:text-accent">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** A single titled section within a legal document. */
export function LegalSection({ id, title, paragraphs = [], lists = [] }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">{title}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base leading-relaxed text-text-secondary">
          {paragraph}
        </p>
      ))}

      {lists.map((list, index) => (
        <LegalList key={list.intro ?? index} {...list} />
      ))}
    </section>
  );
}
