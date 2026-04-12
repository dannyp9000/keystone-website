"use client";

import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Target, Lightbulb, Users, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Built for Roofers, by Roofers",
    description:
      "We didn't build a generic CRM and slap a roofing skin on it. Every feature, field, and workflow was designed around how roofing companies actually operate — from storm damage leads to Conklin product pricing.",
  },
  {
    icon: Lightbulb,
    title: "AI That Actually Helps",
    description:
      "Knox isn't a chatbot gimmick. It's an AI assistant that understands your jobs, customers, and finances — and can take real actions on your behalf. We built it to save your team hours every week, not to check a marketing box.",
  },
  {
    icon: Users,
    title: "Everyone Gets Their Own Portal",
    description:
      "Your sales rep doesn't need the same interface as your crew lead. We built purpose-specific portals for every role — so each team member sees exactly what they need and nothing they don't.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security, Day One",
    description:
      "310 Row Level Security policies, tenant isolation on every query, audit logging, and token-based access control. Your data is locked down from the architecture level, not bolted on as an afterthought.",
  },
];

const milestones = [
  { label: "Platform launched", detail: "First roofing contractor onboarded" },
  { label: "89 database tables", detail: "Comprehensive data model complete" },
  { label: "Knox AI released", detail: "32 slash commands, 4 AI models" },
  { label: "v1.40 — MVP complete", detail: "Feature-complete across all phases" },
];

export function AboutContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <Badge variant="primary" className="mb-4">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                We Got Tired of Duct-Taping Our Business Together
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Keystone OS started in the field. We were running a commercial
                roofing operation and drowning in disconnected tools — one app
                for CRM, another for photos, spreadsheets for invoicing, and a
                whiteboard for the pipeline. When we added a second location,
                the whole system collapsed.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                So we built the platform we wished existed: one system that
                handles lead capture, estimating, contracts, crew management,
                photo documentation, AI assistance, and multi-location
                oversight. That&apos;s Keystone OS.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Section variant="muted">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What We Believe
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section>
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Milestones
          </h2>
        </AnimateIn>
        <div className="max-w-2xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
            {milestones.map((ms, i) => (
              <AnimateIn key={ms.label} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <h3 className="font-semibold">{ms.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {ms.detail}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
