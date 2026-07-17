"use client";

import { useEffect, useState } from "react";

import type { LegalSectionData } from "@/types/legal";
import { cn } from "@/lib/utils";

interface LegalTableOfContentsProps {
  sections: LegalSectionData[];
}

/** Sticky section navigation for desktop legal pages. */
export function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="sticky top-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          On this page
        </p>
        <ul className="space-y-1 border-l border-border">
          {sections.map((section) => {
            const isActive = activeId === section.id;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                    isActive
                      ? "border-accent font-medium text-text"
                      : "border-transparent text-text-tertiary hover:border-border hover:text-text-secondary",
                  )}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
