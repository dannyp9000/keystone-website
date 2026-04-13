import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Get in Touch with Keystone OS",
  description:
    "Questions about Keystone OS? Contact our team in Cleveland, Ohio. We reply within 24 hours. Call, email, or send us a message.",
  openGraph: {
    title: "Contact Keystone OS",
    description: "Have questions? Our team in Cleveland, Ohio is ready to help. We reply within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
