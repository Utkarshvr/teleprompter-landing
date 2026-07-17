import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal";
import { PRIVACY_POLICY, SITE } from "@/constants";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.description,
  openGraph: {
    title: `${PRIVACY_POLICY.title} · ${SITE.name}`,
    description: PRIVACY_POLICY.description,
    url: `${SITE.url}/privacy-policy`,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRIVACY_POLICY.title} · ${SITE.name}`,
    description: PRIVACY_POLICY.description,
    images: [SITE.ogImage],
  },
};

export default function PrivacyPolicyPage() {
  return <LegalLayout document={PRIVACY_POLICY} />;
}
