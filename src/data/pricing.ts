export interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "For single-crew roofing companies getting organized.",
    price: "$149",
    period: "/month",
    features: [
      "Up to 5 users",
      "CRM & customer management",
      "10-stage jobs pipeline",
      "Estimates with PDF export",
      "E-signature contracts",
      "Basic invoicing",
      "Field inspections",
      "Key Cam photo documentation",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "For growing companies that need field ops and automation.",
    price: "$349",
    period: "/month",
    popular: true,
    features: [
      "Up to 25 users",
      "Everything in Starter, plus:",
      "Knox AI Assistant (32 commands)",
      "Crew & Sales Portals",
      "GPS time tracking & payroll",
      "Work order management",
      "Twilio call tracking & SMS",
      "Suppliers & inventory",
      "Marketing automation",
      "Warranties & service tickets",
      "18 dashboard widgets",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For multi-location operations that need HQ oversight.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited users",
      "Everything in Professional, plus:",
      "HQ Portal (multi-location)",
      "Cross-branch analytics",
      "Platform admin console",
      "Custom integrations",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA-backed uptime guarantee",
      "Advanced security audit logs",
    ],
    cta: "Contact Sales",
  },
];
