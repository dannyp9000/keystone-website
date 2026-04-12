"use client";

import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

const stats = [
  { value: "89", label: "Database Tables", detail: "Comprehensive data model" },
  { value: "310", label: "Security Policies", detail: "Enterprise-grade RLS" },
  { value: "21", label: "Edge Functions", detail: "Serverless backend" },
  { value: "32", label: "AI Commands", detail: "Knox AI slash commands" },
  { value: "18", label: "Dashboard Widgets", detail: "Role-aware analytics" },
  { value: "11", label: "User Roles", detail: "Granular permissions" },
];

export function Stats() {
  return (
    <Section variant="dark">
      <AnimateIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for Scale from Day One
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Keystone OS isn&apos;t a prototype stitched together with plugins.
            It&apos;s a purpose-built platform with the depth to run your entire
            operation.
          </p>
        </div>
      </AnimateIn>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 0.08}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{stat.detail}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
