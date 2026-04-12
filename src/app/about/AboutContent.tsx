"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Target, Lightbulb, Users, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Built for Roofers, by Roofers",
    description:
      "Every feature, field, and workflow was designed around how roofing companies actually operate. This is not a generic CRM with a roofing skin.",
  },
  {
    icon: Lightbulb,
    title: "AI That Actually Helps",
    description:
      "Knox is not a chatbot gimmick. It understands your jobs, customers, and finances. It takes real actions and saves your team hours every week.",
  },
  {
    icon: Users,
    title: "A Portal for Every Role",
    description:
      "Sales reps, crew leads, and office managers all see different things. Purpose-built portals mean everyone gets exactly what they need.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security from Day One",
    description:
      "310 Row Level Security policies, tenant isolation on every query, and audit logging. Your data is locked down at the architecture level.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Our Story
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                We got tired of duct-taping our business together
              </h1>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                    alt="Construction team working together"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl p-4 shadow-xl"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-2xl font-bold">v1.40</p>
                  <p className="text-xs text-amber-100">Feature complete</p>
                </motion.div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Keystone OS started in the field. We were running a commercial
                  roofing operation and drowning in disconnected tools. One app
                  for CRM, another for photos, spreadsheets for invoicing, and a
                  whiteboard for the pipeline.
                </p>
                <p>
                  When we added a second location, the whole system collapsed.
                  Nothing talked to anything else. We were losing leads, double-entering
                  data, and spending more time managing tools than managing the business.
                </p>
                <p>
                  So we built the platform we wished existed. One system that handles
                  lead capture, estimating, contracts, crew management, photo documentation,
                  AI assistance, and multi-location oversight. That is Keystone OS.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                What we believe
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Principles that guide every decision
              </h2>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card hover glow className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{value.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">By the numbers</h2>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: "89", label: "Database Tables" },
              { value: "310", label: "Security Policies" },
              { value: "21", label: "Serverless Functions" },
              { value: "4", label: "Dedicated Portals" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
                  whileHover={{ scale: 1.05, borderColor: "#d97706" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
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
