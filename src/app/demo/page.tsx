import type { Metadata } from "next";
import { DemoContent } from "./DemoContent";

export const metadata: Metadata = {
  title: "Request a Demo | See Keystone OS Live",
  description:
    "See Keystone OS in action with a free 30-minute demo. We will walk you through the platform and show you how it fits your roofing business. No commitment required.",
  openGraph: {
    title: "Request a Demo | Keystone OS",
    description: "Free 30-minute live demo of Keystone OS. See how it works for your roofing business.",
  },
};

export default function DemoPage() {
  return <DemoContent />;
}
