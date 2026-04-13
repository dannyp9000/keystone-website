import {
  Phone,
  Mail,
  Camera,
  Package,
  Brain,
  type LucideIcon,
} from "lucide-react";

export interface Integration {
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const integrations: Integration[] = [
  {
    name: "Twilio",
    description:
      "Make and receive calls right from Keystone OS. Every call is tracked, recorded, and transcribed automatically. Send and receive text messages, set up auto-replies for missed calls, and manage your business phone numbers without switching apps. Your whole communication history stays linked to the right customer and job.",
    icon: Phone,
    category: "Calls and Texting",
  },
  {
    name: "Resend",
    description:
      "Send professional emails to customers automatically. Estimate links, contract signing requests, invoice reminders, and marketing campaigns all go out through Resend. You can track who opened your emails and who clicked. No need for a separate email marketing tool.",
    icon: Mail,
    category: "Email Delivery",
  },
  {
    name: "CompanyCam",
    description:
      "Already using CompanyCam? Bring your entire photo library into Keystone OS with a one-click migration. All your projects, photos, and metadata come over automatically. Once you are in Keystone OS, your photos live right next to your jobs, estimates, and invoices so everything is connected.",
    icon: Camera,
    category: "Photo Migration",
  },
  {
    name: "Conklin Products",
    description:
      "Access the complete Conklin roofing product catalog with specs, pricing, and coverage rates built right into your estimates. When you are building an estimate, pull in the exact products you need and the pricing fills in automatically. No more looking up prices on a separate website.",
    icon: Package,
    category: "Roofing Supplies",
  },
  {
    name: "AI Models",
    description:
      "Knox, your built-in AI assistant, is powered by the latest AI models including Gemini and GPT. You do not need your own API key or any technical setup. Knox works out of the box and gets smarter over time. It handles job creation, scheduling, photo analysis, weather checks, and dozens of other tasks through simple conversation.",
    icon: Brain,
    category: "Artificial Intelligence",
  },
];
