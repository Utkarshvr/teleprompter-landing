import type { LegalDocument } from "@/types/legal";

import { SITE } from "./site";

/**
 * Contact email shown on legal pages.
 * TODO: Replace with the real support email before launch.
 */
export const LEGAL_CONTACT_EMAIL = process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL ?? "support@uv.teleprompter.app";

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your information when you use the app and website.`,
  lastUpdated: "July 17, 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        `This Privacy Policy explains how ${SITE.name} (“we,” “us,” or “our”) handles information when you use our mobile teleprompter app and our website at ${SITE.url}.`,
        "We built this app to help you read scripts while recording. We collect only what we need to provide that experience — signing in, saving your scripts and settings, syncing across devices, and (if you choose) joining the waiting list on our website.",
        "By using the app or website, you agree to this Privacy Policy. If you do not agree, please do not use our services.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect the following information, depending on how you use our services:",
      ],
      lists: [
        {
          intro: "Account information (when you sign in with Google)",
          items: [
            "Your name, if Google provides it",
            "Your email address",
            "A Google account identifier used to recognize your account",
          ],
        },
        {
          intro: "App content and preferences",
          items: [
            "Scripts you create or import (including text imported from .txt files or your clipboard)",
            "Script folders and how your scripts are organized",
            "Your app settings, such as scroll speed, font size, text alignment, and related display preferences",
          ],
        },
        {
          intro: "Website waiting list",
          items: [
            "Your email address, if you submit it through the waiting list form on our website",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      paragraphs: ["We use the information we collect to:"],
      lists: [
        {
          items: [
            "Create and manage your account",
            "Store your scripts, folders, and settings",
            "Sync your data across devices when you are signed in",
            "Provide and improve the teleprompter experience",
            "Contact you about the waiting list or app availability if you joined the list",
            "Respond to support requests you send us",
          ],
        },
      ],
    },
    {
      id: "cloud-storage",
      title: "Cloud Storage & Synchronization",
      paragraphs: [
        "When you sign in, your scripts, folders, and settings are stored securely in the cloud so they can sync across your devices. We use Supabase for authentication, database storage, and this synchronization.",
        "You own the content of your scripts. We store that content only to provide the sync and library features of the app — not to claim ownership of what you write.",
        "If you use the app without signing in, scripts and settings may remain only on your device and will not sync through our cloud service.",
      ],
    },
    {
      id: "google-sign-in",
      title: "Google Sign-In",
      paragraphs: [
        "We offer Google Sign-In so you can create an account without a separate password managed by us. When you choose Google Sign-In, Google shares limited account details with us (such as your name, email, and account identifier) so we can authenticate you and associate your scripts and settings with your account.",
        "Your use of Google Sign-In is also subject to Google’s own privacy policy and terms. We do not receive your Google password.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect your information, including storing account and sync data through Supabase with access controls appropriate for this kind of application.",
        "No method of transmission or storage is completely secure. While we work to protect your data, we cannot guarantee absolute security.",
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information.",
        "We share information only as needed to operate the service:",
      ],
      lists: [
        {
          items: [
            "With Google, for authentication when you use Google Sign-In",
            "With Supabase, which hosts authentication, database, and sync infrastructure for the app",
            "If required by law, such as in response to a valid legal request",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      paragraphs: [
        "Depending on where you live, you may have rights to access, correct, or delete personal information we hold about you. You can also request that we remove your account-related data.",
        `To exercise these rights, contact us at ${LEGAL_CONTACT_EMAIL}. We may need to verify your identity before completing certain requests.`,
        "You can also delete scripts and folders within the app. Signing out stops further cloud sync from that session; deleting your account data may require contacting us.",
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      paragraphs: [
        "The app and website are not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. When we do, we will change the “Last updated” date at the top of this page. Continued use of the app or website after changes means you accept the updated policy.",
        "If changes are significant, we will try to provide a clearer notice where practical.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `If you have questions about this Privacy Policy or how we handle your information, contact us at ${LEGAL_CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${SITE.name} app and website.`,
  lastUpdated: "July 17, 2026",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        `These Terms of Service (“Terms”) govern your use of the ${SITE.name} mobile app and website (together, the “Service”). By creating an account, using the app, or using the website, you agree to these Terms.`,
        "If you do not agree, do not use the Service.",
      ],
    },
    {
      id: "the-service",
      title: "The Service",
      paragraphs: [
        `${SITE.name} is a teleprompter app that helps you read scripts while recording. Features may include adjustable scroll speed and font size, text alignment, portrait and landscape layouts with settings that adapt to orientation, importing scripts from .txt files or the clipboard, a script library with folders, a draggable on-screen controller, Google Sign-In, and cloud sync for scripts and settings.`,
        "Our website may also offer a waiting list where you can submit your email before launch or store availability updates.",
        "We may add, change, or remove features over time. These Terms apply to the Service as it exists when you use it.",
      ],
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      paragraphs: [
        "Some features, including cloud sync, require an account. We currently support signing in with Google.",
        "You are responsible for activity under your account and for keeping access to your Google account secure. Notify us promptly if you believe someone has used your account without permission.",
        "You must provide accurate information when using the Service and keep your account details up to date where applicable.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      paragraphs: ["You agree to use the Service only for lawful purposes. You must not:"],
      lists: [
        {
          items: [
            "Attempt to break into, disrupt, overload, or interfere with the Service or its infrastructure",
            "Try to access other users’ accounts, scripts, or data without permission",
            "Misuse authentication, sync, or other account features",
            "Use the Service to store or distribute content that is illegal or that you do not have the right to use",
            "Reverse engineer or scrape the Service in a way that violates applicable law or these Terms, except where such restriction is not allowed",
          ],
        },
      ],
    },
    {
      id: "user-content",
      title: "User Content",
      paragraphs: [
        "You retain ownership of the scripts and other content you create or import into the app (“User Content”).",
        "By storing User Content with us for sync, you give us permission to host, back up, and process that content solely as needed to operate the Service (for example, saving your library and syncing settings across devices).",
        "You are responsible for your User Content and for making sure you have the rights needed to use it in the app. We do not claim ownership of your scripts.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        `The Service — including the app, website, design, branding, logos, and related materials — is owned by us and protected by applicable intellectual property laws. These Terms do not transfer ownership of the Service to you.`,
        `You may use ${SITE.name} for its intended purpose under these Terms. You may not copy, modify, distribute, or create derivative works from our branding or software except as allowed by law or with our written permission.`,
      ],
    },
    {
      id: "availability",
      title: "Availability of Service",
      paragraphs: [
        "We aim to keep the Service reliable, but we do not guarantee uninterrupted access. The Service may be unavailable at times due to maintenance, updates, network issues, outages at providers we rely on (such as Google or Supabase), or other technical problems.",
        "We are not liable for any loss of access or data that results from downtime, though we will take reasonable steps to restore service when issues are within our control.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      paragraphs: [
        'The Service is provided “as is” and “as available,” without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement, to the fullest extent permitted by law.',
        "We do not warrant that the Service will be error-free, completely secure, or always available, or that it will meet every recording or production need you may have.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, goodwill, or other intangible losses, arising from your use of (or inability to use) the Service.",
        "Our total liability for any claim related to the Service will not exceed the greater of (a) the amount you paid us for the Service in the twelve months before the claim, or (b) zero dollars if the Service is provided free of charge.",
        "Some jurisdictions do not allow certain limitations. In those places, our liability is limited to the maximum extent allowed by law.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "You may stop using the Service at any time. You may also request deletion of your account-related data by contacting us.",
        "We may suspend or end your access if you violate these Terms, misuse the Service, or if we need to shut down or significantly change the Service. Where practical, we will try to give notice before doing so.",
        "Provisions that by their nature should survive termination (such as intellectual property, disclaimers, and limitation of liability) will continue to apply.",
      ],
    },
    {
      id: "changes",
      title: "Changes to Terms",
      paragraphs: [
        "We may update these Terms from time to time. When we do, we will revise the “Last updated” date on this page. Continued use of the Service after changes take effect means you accept the updated Terms.",
        "If you do not agree to the new Terms, stop using the Service.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `Questions about these Terms? Contact us at ${LEGAL_CONTACT_EMAIL}.`,
      ],
    },
  ],
};
