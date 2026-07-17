import Link from "next/link";

import { FOOTER_LINKS } from "@/constants";

function isExternalHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://");
}

export function FooterLinks() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {FOOTER_LINKS.map((link) => (
        <li key={link.href}>
          {isExternalHref(link.href) ? (
            <a
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
