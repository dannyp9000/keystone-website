import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Keystone OS Privacy Policy to learn how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "1. Introduction",
    body: [
      "Keystone OS (we, us, our) values your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
      "By using our website or platform, you agree to the practices described here. If you do not agree, please do not use our services.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We collect information you give us directly. This includes your name, email address, phone number, company name, and any details you share when filling out our contact or demo request forms.",
      "We also collect information automatically when you visit our website. This may include your IP address, browser type, device information, pages you view, and how you got to our site. We use cookies and similar tools for this.",
      "If you become a customer, we collect business data you enter into the platform such as customer records, job details, photos, contracts, and payment information.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use your information to operate and improve our services, respond to your questions, schedule demos, send you product updates, and provide customer support.",
      "We may also use it to detect and prevent fraud, comply with legal obligations, and enforce our terms.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    body: [
      "We share information only with service providers who help us run our business. This includes hosting, email delivery, payment processing, and analytics. These providers are required to keep your data confidential.",
      "We may share information when required by law, to protect our rights, or in connection with a business transfer such as a merger or acquisition.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We use industry-standard security measures including encryption, secure servers, and access controls to protect your data.",
      "Despite our efforts, no system is 100 percent secure. If we learn of a security breach that affects your data, we will notify you as required by law.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You may request access to the personal information we hold about you, ask us to correct or delete it, or opt out of marketing emails at any time.",
      "Customers in California, the European Union, and other jurisdictions may have additional rights under local law. Contact us to exercise any of these rights.",
    ],
  },
  {
    title: "7. Cookies",
    body: [
      "We use cookies to remember your preferences, analyze site traffic, and improve our services. You can disable cookies in your browser settings, but some features of our site may not work properly.",
    ],
  },
  {
    title: "8. Children",
    body: [
      "Our services are not intended for anyone under 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will post the updated version on our website and update the Last Updated date at the top.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "Questions about this Privacy Policy or our data practices? Email us at hello@keystoneos.com or write to us at our office in Cleveland, Ohio.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      lastUpdated="April 14, 2026"
      sections={sections}
    />
  );
}
