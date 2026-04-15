"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { integrations } from "@/data/integrations";
import { CTA } from "@/components/sections/CTA";
import { ArrowRight, Zap, ShieldCheck, Workflow, Plug, BookOpen, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "No setup required",
    description: "Most integrations work out of the box. Sign in to the service and Keystone OS handles the rest.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays safe",
    description: "All connections use secure tokens. We never store passwords for the services you connect.",
  },
  {
    icon: Workflow,
    title: "Real-time sync",
    description: "Changes sync automatically between Keystone OS and your other tools. No manual updates.",
  },
];

const supportItems = [
  {
    icon: Plug,
    title: "Easy Connection",
    description: "Connect any integration in under 2 minutes. Sign in, give permission, done.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Guides",
    description: "Every integration has a written walkthrough plus a short video so anyone on your team can get it set up.",
  },
  {
    icon: Headphones,
    title: "Live Support",
    description: "Stuck? Our support team will jump on a screen share and get the integration working with you.",
  },
];

export function IntegrationsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Connected Ecosystem
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Integrations that make roofing easier
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Keystone OS connects with the tools roofing contractors already use.
                Phone systems, payments, accounting, photo apps, and more.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-16 bg-warm">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{b.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Integration cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                All Integrations
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Built into the platform
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Every integration listed here is fully active and ready to use.
              </p>
            </div>
          </AnimateIn>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.06}
          >
            {integrations.map((integration) => (
              <StaggerItem key={integration.name}>
                <Card hover glow className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                      <integration.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold">{integration.name}</h3>
                        <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{integration.category}</p>
                      <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support / How it works section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                  alt="Modern team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </AnimateIn>

            <div>
              <AnimateIn direction="right">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Easy Setup
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                  We make integrations simple
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  You should not need an IT team to connect your tools. Every integration
                  in Keystone OS is built so anyone on your team can set it up in minutes.
                </p>
              </AnimateIn>

              <StaggerContainer className="mt-8 space-y-4" staggerDelay={0.08}>
                {supportItems.map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100"
                      whileHover={{ x: 4, borderColor: "rgba(217,119,6,0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Custom integration request */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-14 md:px-16 md:py-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Need an integration we do not have yet?
                  </h2>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    We are always adding new integrations based on what our customers ask for.
                    Enterprise plans include custom integration development built just for your business.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link href="/contact">
                    <motion.span
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-xl shadow-amber-500/25 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Request an Integration
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
