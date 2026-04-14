"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { pricingTiers } from "@/data/pricing";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const faqs = [
  { q: "Can I see Keystone OS before I commit?", a: "Yes. Book a free demo and our team will walk you through the platform based on how your roofing business works today." },
  { q: "Can I change my plan later?", a: "You can upgrade or downgrade whenever you want. The change takes effect at the start of your next billing cycle." },
  { q: "What happens if I cancel?", a: "Your data stays safe for 90 days after you cancel. You can export everything at any time using the built-in export tool." },
  { q: "Is setup included?", a: "Professional plans include guided onboarding to get your team up and running. Enterprise plans come with a dedicated account manager and custom training." },
  { q: "How does pricing work for multiple locations?", a: "Companies with more than one office use the Enterprise plan. Pricing depends on the number of locations and team members. Contact us for details." },
  { q: "Can my crew use it on their phones?", a: "Yes. The crew portal works on any phone browser and the whole platform is installable as an app. No app store download needed." },
  { q: "Do I need to buy other tools to go with it?", a: "No. Keystone OS replaces your CRM, photo app, estimating tool, contract signing, and invoicing. It is all in one." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Pricing
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Simple plans for every team size
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                No hidden fees. No surprise charges. Pick the plan that fits your
                team and book a free demo to see it in action.
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

      {/* FAQ accordion */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Common questions
            </h2>
          </AnimateIn>
          <StaggerContainer className="space-y-3" staggerDelay={0.05}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
