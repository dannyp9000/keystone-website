import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Built by Roofers, for Roofers",
  description:
    "Keystone OS was built by a roofing company that was tired of juggling too many tools. Learn our story and why we built the all-in-one platform for roofing contractors.",
  openGraph: {
    title: "About Keystone OS | Built by Roofers, for Roofers",
    description: "We built the software we wished we had. Learn the Keystone OS story.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
