import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Keystone OS. Starter, Professional, and Enterprise plans for roofing companies of every size. 14-day free trial.",
};

export default function PricingPage() {
  return <PricingContent />;
}
