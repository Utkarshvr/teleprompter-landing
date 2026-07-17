import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal";
import { SITE, TERMS_OF_SERVICE } from "@/constants";

export const metadata: Metadata = {
  title: TERMS_OF_SERVICE.title,
  description: TERMS_OF_SERVICE.description,
  openGraph: {
    title: `${TERMS_OF_SERVICE.title} · ${SITE.name}`,
    description: TERMS_OF_SERVICE.description,
    url: `${SITE.url}/terms`,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TERMS_OF_SERVICE.title} · ${SITE.name}`,
    description: TERMS_OF_SERVICE.description,
    images: [SITE.ogImage],
  },
};

export default function TermsPage() {
  return <LegalLayout document={TERMS_OF_SERVICE} />;
}
