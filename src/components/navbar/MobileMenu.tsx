"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/common";
import { NAV_LINKS } from "@/constants";
import { getIsAppPublished } from "@/utils/env";

const isAppPublished = getIsAppPublished();

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-background-secondary"
      >
        {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-surface/95 backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-background-secondary hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Button href="/#waitlist" onClick={() => setIsOpen(false)} className="mt-3 w-full">
            {isAppPublished ? "Download" : "Join Early access list"}
          </Button>
        </nav>
      </div>
    </div>
  );
}
