import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Keystone OS team. Questions about pricing, features, or integrations? We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactContent />;
}
