import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Plans for Roofing Companies of Every Size",
  description:
    "Simple, transparent pricing for Keystone OS. Starter, Professional, and Enterprise plans. 14-day free trial with no credit card required.",
  openGraph: {
    title: "Pricing | Keystone OS Roofing Software",
    description: "Simple plans for every team size. Try free for 14 days. No credit card required.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
