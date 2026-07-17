import type { NavLink } from "@/types";

export const FOOTER_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  {
    label: "Contact",
    href: `mailto:${process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL}`,
  },
];
