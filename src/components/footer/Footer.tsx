import { Container, Logo } from "@/components/common";
import { SITE } from "@/constants";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Logo />
        <FooterLinks />
        <p className="text-sm text-text-tertiary">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
