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
    title: "Built for Roofers",
    description:
      "Every feature was designed around how roofing companies actually work. This is not a generic business app with a roofing label on it.",
  },
  {
    icon: Lightbulb,
    title: "Smart Tools That Save Time",
    description:
      "Knox AI handles the busywork so your team can focus on selling and installing. It creates jobs, checks weather, and keeps track of deadlines for you.",
  },
  {
    icon: Users,
    title: "A Screen for Every Role",
    description:
      "Your sales rep does not need the same view as your crew lead. Everyone on your team gets a portal designed for exactly what they do.",
  },
  {
    icon: ShieldCheck,
    title: "Your Data is Locked Down",
    description:
      "Every company only sees their own data. Built-in security keeps your customer info, financials, and job details safe from day one.",
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
                We built the software we wished we had
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
                    alt="Team working together"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  We started Keystone OS because we were running a roofing operation
                  and could not find one tool that did everything. We had a CRM for
                  leads, a separate app for photos, spreadsheets for invoicing, and
                  a whiteboard for scheduling.
                </p>
                <p>
                  When we opened a second location, it all fell apart. Nothing
                  connected. We were losing leads, entering the same data twice,
                  and spending more time managing tools than managing the business.
                </p>
                <p>
                  So we built what we needed. One platform where you can track a
                  job from the first phone call to the final payment. Where your
                  crews can clock in on their phones. Where your office staff
                  can send estimates and contracts without leaving the app.
                  That is Keystone OS.
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
                What drives us
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Built different on purpose
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

      {/* Numbers - user friendly */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">What you get</h2>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: "5+", label: "Tools Replaced" },
              { value: "4", label: "Team Portals" },
              { value: "10+", label: "Hours Saved Weekly" },
              { value: "1", label: "Simple Monthly Bill" },
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
