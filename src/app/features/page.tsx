import type { Metadata } from "next";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features | Roofing CRM, Estimates, Contracts, Crew Management",
  description:
    "See every feature Keystone OS offers. Job tracking, estimates, digital contracts, crew management, photo documentation, AI assistant, and more. Built for roofing contractors.",
  openGraph: {
    title: "Features | Keystone OS Roofing Software",
    description: "Job tracking, estimates, contracts, crew management, photos, and AI. Everything your roofing company needs in one app.",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
