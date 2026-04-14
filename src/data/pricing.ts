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
      "Customer and lead tracking",
      "Job pipeline with custom stages",
      "Estimates with PDF export",
      "Digital contracts with e-signature",
      "Basic invoicing",
      "Roof inspections",
      "Photo documentation",
      "Email support",
    ],
    cta: "Get a Demo",
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
      "Knox AI assistant",
      "Crew and sales portals",
      "GPS time tracking and payroll",
      "Work order management",
      "Call tracking and SMS",
      "Suppliers and inventory",
      "Email and text campaigns",
      "Warranties and service tickets",
      "Custom dashboards",
      "Priority support",
    ],
    cta: "Get a Demo",
  },
  {
    name: "Enterprise",
    description: "For multi-location operations that need HQ oversight.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited users",
      "Everything in Professional, plus:",
      "Multi-location HQ portal",
      "Cross-branch analytics",
      "Custom integrations",
      "Dedicated account manager",
      "Custom onboarding and training",
      "Uptime guarantee",
      "Advanced security audit logs",
    ],
    cta: "Contact Sales",
  },
];
