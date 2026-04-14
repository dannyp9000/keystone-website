"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Target, Lightbulb, Users, ShieldCheck, Heart, Zap } from "lucide-react";

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
  {
    icon: Heart,
    title: "We Listen to Customers",
    description:
      "Every feature on our roadmap came from a real conversation with a roofing contractor. We build what you actually need, not what looks good in a demo.",
  },
  {
    icon: Zap,
    title: "Always Improving",
    description:
      "We ship updates every two weeks. Bug fixes, new features, and improvements roll out automatically with no IT work needed on your end.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Idea Born",
    description: "After running a commercial roofing operation across two locations, our founders realized no platform existed that did everything they needed in one place.",
  },
  {
    year: "2025",
    title: "First Customers",
    description: "We launched with five beta roofing contractors who helped shape every feature. Their feedback drove the first version of the platform.",
  },
  {
    year: "2025",
    title: "Knox AI Launch",
    description: "We added Knox, our built-in AI assistant. Suddenly contractors could create jobs, schedule inspections, and analyze damage photos with simple language.",
  },
  {
    year: "2026",
    title: "Multi-Location Support",
    description: "We rolled out the HQ portal for franchises and multi-office operations. Companies running 5, 10, even 20 offices now have full visibility from one screen.",
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
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Keystone OS started in the field. We are roofers and operators
                who got fed up with juggling too many tools, so we built one
                platform that does it all.
              </p>
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
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Modern team working together"
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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How it started</h2>
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

      {/* Mission section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Our Mission
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Make running a roofing business simple
              </h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Roofing companies should spend their time on roofs, not in front
                  of computers. We are on a mission to give every roofing contractor
                  the tools they need to grow without drowning in admin work.
                </p>
                <p>
                  Whether you are a one-truck shop or a multi-state operation, you
                  deserve software that just works. No bloated features you do not
                  need. No hidden fees. No learning curve that takes weeks.
                </p>
                <p>
                  We measure our success by how much time we save you each week
                  and how many jobs you can close because we made things easier.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  whileHover={{ y: -4, borderColor: "rgba(245,158,11,0.3)" }}
                >
                  <p className="text-3xl font-bold text-amber-400">10+</p>
                  <p className="mt-1 text-sm text-slate-300">Hours saved weekly</p>
                </motion.div>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  whileHover={{ y: -4, borderColor: "rgba(245,158,11,0.3)" }}
                >
                  <p className="text-3xl font-bold text-amber-400">5+</p>
                  <p className="mt-1 text-sm text-slate-300">Tools replaced</p>
                </motion.div>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  whileHover={{ y: -4, borderColor: "rgba(245,158,11,0.3)" }}
                >
                  <p className="text-3xl font-bold text-amber-400">4</p>
                  <p className="mt-1 text-sm text-slate-300">Built-in portals</p>
                </motion.div>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  whileHover={{ y: -4, borderColor: "rgba(245,158,11,0.3)" }}
                >
                  <p className="text-3xl font-bold text-amber-400">24/7</p>
                  <p className="mt-1 text-sm text-slate-300">Access anywhere</p>
                </motion.div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                What drives us
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Built different on purpose
              </h2>
              <p className="mt-4 text-slate-600">
                Every decision we make comes back to these six principles.
              </p>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card hover glow className="h-full">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Journey so far
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Where we have been
              </h2>
            </div>
          </AnimateIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimateIn key={`${m.year}-${m.title}`} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-amber-50 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        whileHover={{ y: -4, borderColor: "#d97706" }}
                      >
                        <p className="text-sm font-bold text-primary">{m.year}</p>
                        <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{m.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where we are based */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Where we are
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Built in the heart of the Midwest
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Our team is based in Cleveland, Ohio. We are a short drive from some
              of the toughest weather conditions in the country, which means we
              understand exactly what roofing contractors deal with every day.
              Hail, snow, wind, and the surprise spring thunderstorm. Our software
              is built for the realities of the job.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
