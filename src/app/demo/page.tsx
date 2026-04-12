import type { Metadata } from "next";
import { DemoContent } from "./DemoContent";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See Keystone OS in action. Request a personalized demo and learn how the platform can transform your roofing business operations.",
};

export default function DemoPage() {
  return <DemoContent />;
}
