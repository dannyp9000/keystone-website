"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { pricingTiers } from "@/data/pricing";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const faqs = [
  { q: "Is there a free trial?", a: "Every plan includes a 14-day free trial with full access. No credit card required." },
  { q: "Can I switch plans later?", a: "Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle." },
  { q: "What happens to my data if I cancel?", a: "Your data is retained for 90 days after cancellation. Export everything at any time." },
  { q: "Do you offer annual billing?", a: "Annual plans save 20% compared to monthly billing. Contact sales for Enterprise annual pricing." },
  { q: "Is onboarding included?", a: "Professional includes guided onboarding. Enterprise includes a dedicated account manager and custom training." },
  { q: "How is multi-location pricing handled?", a: "Multi-location companies use the Enterprise plan with custom pricing based on locations and users." },
];

export function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Simple Pricing
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                One platform, three plans
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                No per-feature add-ons. No surprise charges. Pick the plan that
                fits your team and start your 14-day free trial.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricingTiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={i * 0.12} direction="scale">
                <motion.div
                  className={`relative rounded-2xl border p-7 h-full ${
                    tier.popular
                      ? "border-primary bg-white shadow-xl shadow-amber-500/10 ring-2 ring-primary"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center pt-2">
                    <h3 className="text-lg font-bold">{tier.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{tier.description}</p>
                    <div className="mt-5">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.period && (
                        <span className="text-slate-400 text-sm">{tier.period}</span>
                      )}
                    </div>
                  </div>
                  <ul className="mt-7 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/demo">
                      <motion.span
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full text-sm cursor-pointer ${
                          tier.popular
                            ? "bg-primary text-white shadow-lg shadow-amber-500/20"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        } transition-colors`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {tier.cta}
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
          </AnimateIn>
          <StaggerContainer className="space-y-4" staggerDelay={0.06}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <motion.div
                  className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
