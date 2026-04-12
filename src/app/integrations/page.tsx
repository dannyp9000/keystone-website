import type { Metadata } from "next";
import { IntegrationsContent } from "./IntegrationsContent";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Keystone OS integrates with Twilio, Google Maps, CompanyCam, EagleView, Conklin, and more. See the full list of supported integrations.",
};

export default function IntegrationsPage() {
  return <IntegrationsContent />;
}
