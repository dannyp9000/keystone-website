import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Keystone OS was built by roofing professionals who were tired of duct-taping their business together with five different apps. Learn our story.",
};

export default function AboutPage() {
  return <AboutContent />;
}
