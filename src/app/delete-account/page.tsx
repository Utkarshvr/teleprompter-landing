import type { Metadata } from "next";

import { Container } from "@/components/common";
import { DeleteAccountForm } from "@/components/delete-account";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants";

export const metadata: Metadata = {
  title: "Request account deletion",
  description:
    "Request deletion of your Teleprompter account and associated profile data.",
  openGraph: {
    title: `Request account deletion · ${SITE.name}`,
    description:
      "Request deletion of your Teleprompter account and associated profile data.",
    url: `${SITE.url}/delete-account`,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Request account deletion · ${SITE.name}`,
    description:
      "Request deletion of your Teleprompter account and associated profile data.",
    images: [SITE.ogImage],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-border-subtle bg-gradient-to-b from-gradient-start to-gradient-end">
          <Container className="pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Account
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Request account deletion
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
              Enter the email linked to your {SITE.name} account. We&apos;ll review your request
              and follow up within 7 days.
            </p>
          </Container>
        </div>

        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-md">
            <DeleteAccountForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
