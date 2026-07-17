"use client";

import { useEffect, useState } from "react";

import { Button, Container, Logo } from "@/components/common";
import { getIsAppPublished } from "@/utils/env";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

const isAppPublished = getIsAppPublished();

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="hidden items-center md:flex">
          <Button href="/#waitlist" size="md">
            {isAppPublished ? "Download" : "Join waitlist"}
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
