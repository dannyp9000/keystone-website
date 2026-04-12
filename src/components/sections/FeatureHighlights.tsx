"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  Brain,
  ClipboardCheck,
  Camera,
  PenTool,
  HardHat,
  DollarSign,
} from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Knox AI Assistant",
    description:
      "Your AI-powered co-pilot on every page. Create jobs, update statuses, analyze photos, and surface insights through natural language or 32 slash commands.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: ClipboardCheck,
    title: "10-Stage Pipeline",
    description:
      "Drag-and-drop Kanban, table, and card views. Custom stages with target days, color coding, and stalled job detection that flags bottlenecks before they cost you money.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Camera,
    title: "Key Cam Photos",
    description:
      "Job-organized photo documentation that replaces CompanyCam. Folder hierarchies, GPS tagging, public galleries, commenting, and one-click migration from CompanyCam.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: PenTool,
    title: "E-Signature Contracts",
    description:
      "Generate contracts from templates, send for signing via email, and capture legally binding signatures. Customers sign on their phone — you schedule the job immediately.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: HardHat,
    title: "Crew & Sales Portals",
    description:
      "Purpose-built mobile interfaces for field crews and sales reps. GPS time tracking, work orders, cold-call mapping, and inspection tools — all in a simplified portal.",
    gradient: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: DollarSign,
    title: "Complete Financial Cycle",
    description:
      "Multi-option estimates, e-signature contracts, invoicing with partial payments, expense tracking, and sales commissions. The full revenue cycle in one flow.",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500",
  },
];

export function FeatureHighlights() {
  return (
    <Section variant="muted">
      <AnimateIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Close More Jobs, Faster
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop switching between five different apps. Keystone OS manages
            your CRM, estimates, contracts, crews, photos, and finances in one
            place — with AI that actually understands roofing.
          </p>
        </div>
      </AnimateIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((feature, i) => (
          <AnimateIn key={feature.title} delay={i * 0.1}>
            <Card hover className="h-full">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}
              >
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
