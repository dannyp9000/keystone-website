import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Keystone OS Terms of Service. The agreement that governs your use of our website and platform.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    body: [
      "These Terms of Service (Terms) form a binding agreement between you and Keystone OS. By using our website or platform, you agree to these Terms.",
      "If you are using Keystone OS on behalf of a company, you confirm that you have authority to bind that company to these Terms.",
    ],
  },
  {
    title: "2. Use of Our Services",
    body: [
      "You may use Keystone OS only for lawful business purposes. You agree not to misuse our services, attempt to access them in unauthorized ways, or interfere with other users.",
      "You are responsible for any activity that happens under your account, including the actions of your team members.",
    ],
  },
  {
    title: "3. Account Registration",
    body: [
      "To use Keystone OS, you must create an account with accurate information and keep your login credentials secure.",
      "You agree to notify us right away if you suspect unauthorized access to your account.",
    ],
  },
  {
    title: "4. Subscription and Billing",
    body: [
      "Keystone OS is offered on a subscription basis. Pricing for each plan is listed on our pricing page and may change with reasonable notice.",
      "Subscriptions auto-renew unless cancelled before the next billing cycle. You can cancel anytime by contacting us or through your account settings.",
      "Refunds are handled on a case-by-case basis at our discretion.",
    ],
  },
  {
    title: "5. Your Data",
    body: [
      "You own all data you upload to Keystone OS. You give us a limited license to host, store, and process that data so we can provide our services.",
      "We do not sell, share, or use your business data for advertising. We will only access it to provide support, improve the platform, or as required by law.",
    ],
  },
  {
    title: "6. Acceptable Use",
    body: [
      "You agree not to upload content that is illegal, infringing, harmful, or that violates anyone's privacy.",
      "You may not use Keystone OS to send spam, harass others, distribute malware, or attempt to harm our infrastructure.",
      "We reserve the right to suspend accounts that violate these rules.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "Keystone OS and all related software, branding, and content are the property of Keystone OS or our licensors. You may not copy, modify, or redistribute any part of our platform without written permission.",
    ],
  },
  {
    title: "8. Third-Party Services",
    body: [
      "Keystone OS connects with third-party services such as Twilio, Resend, and CompanyCam. Your use of those services is governed by their own terms.",
      "We are not responsible for the availability, accuracy, or content of any third-party service.",
    ],
  },
  {
    title: "9. Disclaimer of Warranties",
    body: [
      "Our services are provided as is and as available without any warranties of any kind, whether express or implied.",
      "We do not guarantee that our platform will be error-free, uninterrupted, or that it will meet every business need you might have.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Keystone OS will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.",
      "Our total liability for any claim related to our services will not exceed the amount you paid us in the 12 months before the claim.",
    ],
  },
  {
    title: "11. Termination",
    body: [
      "You may stop using Keystone OS at any time. We may suspend or terminate your access if you violate these Terms or if we discontinue the service.",
      "Upon termination, you may export your data for 90 days. After that, we may delete it.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Ohio, without regard to conflict of law principles. Any disputes will be resolved in the courts of Cuyahoga County, Ohio.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. When we make material changes, we will notify you and post the updated version on our website. Continued use after changes means you accept them.",
    ],
  },
  {
    title: "14. Contact Us",
    body: [
      "Questions about these Terms? Email hello@keystoneos.com or reach out to our office in Cleveland, Ohio.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The agreement that governs your use of Keystone OS."
      lastUpdated="April 14, 2026"
      sections={sections}
    />
  );
}
