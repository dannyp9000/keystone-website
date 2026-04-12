import {
  Phone,
  Mail,
  MapPin,
  Camera,
  Ruler,
  Package,
  Brain,
  type LucideIcon,
} from "lucide-react";

export interface Integration {
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  status: "active" | "partial" | "coming-soon";
}

export const integrations: Integration[] = [
  {
    name: "Twilio",
    description:
      "Call tracking, recording, AI transcription, SMS messaging, and phone number provisioning. Full professional phone system built right in.",
    icon: Phone,
    category: "Communications",
    status: "active",
  },
  {
    name: "Resend",
    description:
      "Transactional email delivery for estimates, contracts, invoices, and marketing campaigns with open and click tracking.",
    icon: Mail,
    category: "Communications",
    status: "active",
  },
  {
    name: "Google Maps",
    description:
      "Satellite property imagery for inspections, GPS-based cold call mapping, and property location verification.",
    icon: MapPin,
    category: "Location & Mapping",
    status: "active",
  },
  {
    name: "CompanyCam",
    description:
      "One-click migration of your entire photo library. Import projects, photos, and metadata directly into Key Cam.",
    icon: Camera,
    category: "Photo Documentation",
    status: "active",
  },
  {
    name: "EagleView",
    description:
      "Aerial roof measurement reports with automated data import. Facet counts, ridge lengths, valleys, waste factors — all imported automatically.",
    icon: Ruler,
    category: "Measurements",
    status: "partial",
  },
  {
    name: "Conklin",
    description:
      "Complete roofing product catalog with specifications, pricing, and coverage rates. Add products directly to estimates and purchase orders.",
    icon: Package,
    category: "Suppliers",
    status: "active",
  },
  {
    name: "AI Models (Knox)",
    description:
      "Powered by Gemini 2.5 Pro, Gemini Flash, GPT-5, and GPT-5-mini via Lovable AI Gateway. No API key required.",
    icon: Brain,
    category: "Artificial Intelligence",
    status: "active",
  },
];
