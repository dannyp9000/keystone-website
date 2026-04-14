import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Plans for Roofing Companies of Every Size",
  description:
    "Simple, transparent pricing for Keystone OS. Starter, Professional, and Enterprise plans for roofing contractors. Book a free demo today.",
  openGraph: {
    title: "Pricing | Keystone OS Roofing Software",
    description: "Simple plans for every team size. Book a free demo to see Keystone OS in action.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
