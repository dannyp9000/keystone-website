"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
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
      "Your AI co-pilot on every page. Create jobs, update statuses, analyze photos, and get insights through natural language or 32 slash commands.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "10-Stage Pipeline",
    description:
      "Drag-and-drop Kanban, table, and card views. Custom stages with target days and automatic stalled job detection.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Camera,
    title: "Key Cam Photos",
    description:
      "A complete CompanyCam replacement. Job-organized folders, GPS tagging, public galleries, and one-click migration.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: PenTool,
    title: "E-Signature Contracts",
    description:
      "Generate from templates, send for signing via email, capture legally binding signatures. Customers sign on their phone.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: HardHat,
    title: "Crew and Sales Portals",
    description:
      "Purpose-built mobile interfaces for field crews and sales reps. GPS time tracking, work orders, and cold-call mapping.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle",
    description:
      "Multi-option estimates, contracts, invoicing with partial payments, expense tracking, and sales commissions in one flow.",
    color: "bg-teal-50 text-teal-600",
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Aerial view of residential rooftops"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-2xl font-bold text-primary">4 Portals</p>
                <p className="text-xs text-slate-500">Purpose-built per role</p>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right: content */}
          <div>
            <AnimateIn direction="right">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                All-in-one platform
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Everything you need to close more jobs, faster
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Stop switching between five different apps. Keystone OS manages
                your CRM, estimates, contracts, crews, photos, and finances in
                one place.
              </p>
            </AnimateIn>

            <StaggerContainer className="mt-10 grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {highlights.map((feature) => (
                <StaggerItem key={feature.title}>
                  <Card hover glow>
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${feature.color} mb-3`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
