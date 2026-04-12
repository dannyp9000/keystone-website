import type { Metadata } from "next";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every feature of Keystone OS — CRM, 10-stage pipeline, estimates, contracts, crew management, Knox AI, and more. Built exclusively for roofing contractors.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
