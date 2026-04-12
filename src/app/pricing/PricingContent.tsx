"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { pricingTiers } from "@/data/pricing";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan includes a 14-day free trial with full access. No credit card required to start.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is retained for 90 days after cancellation. You can export everything at any time via the built-in data export tool.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual plans save 20% compared to monthly billing. Contact sales for annual pricing on Enterprise plans.",
  },
  {
    q: "Is onboarding included?",
    a: "Professional plans include guided onboarding. Enterprise plans include a dedicated account manager and custom training for your team.",
  },
  {
    q: "How is multi-location pricing handled?",
    a: "Multi-location companies use the Enterprise plan. Pricing is based on the number of locations and users. Contact sales for a custom quote.",
  },
];

export function PricingContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                Simple Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                One Platform, Three Plans
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                No per-feature add-ons. No surprise charges. Pick the plan that
                fits your team size and start your 14-day free trial today.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-16 grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={i * 0.1}>
                <Card
                  className={`relative h-full ${
                    tier.popular
                      ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary"
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="primary">Most Popular</Badge>
                    </div>
                  )}
                  <div className="text-center pt-2">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">
                        {tier.period}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/demo">
                      <Button
                        variant={tier.popular ? "primary" : "outline"}
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Section variant="muted">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
        </AnimateIn>
        <div className="max-w-3xl mx-auto grid gap-6">
          {faqs.map((faq, i) => (
            <AnimateIn key={faq.q} delay={i * 0.05}>
              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
