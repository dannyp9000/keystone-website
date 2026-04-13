import type { Metadata } from "next";
import { IntegrationsContent } from "./IntegrationsContent";

export const metadata: Metadata = {
  title: "Integrations | Twilio, CompanyCam, Conklin, and More",
  description:
    "Keystone OS connects with Twilio for calls and texts, Resend for email, CompanyCam for photo migration, and Conklin for roofing products. See all integrations.",
  openGraph: {
    title: "Integrations | Keystone OS Roofing Software",
    description: "Twilio, CompanyCam, Conklin products, email delivery, and AI. All connected inside Keystone OS.",
  },
};

export default function IntegrationsPage() {
  return <IntegrationsContent />;
}
