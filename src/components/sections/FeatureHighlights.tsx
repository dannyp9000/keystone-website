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
    title: "Smart AI Assistant",
    description:
      "Just type what you need. Create a new job, check the weather, or get a status update without clicking through menus.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "Job Tracking",
    description:
      "See every job from first call to final payment. Drag and drop jobs between stages so you always know where things stand.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Camera,
    title: "Photo Management",
    description:
      "Take photos, organize them by job, and share galleries with customers. No more digging through camera rolls.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: PenTool,
    title: "Digital Contracts",
    description:
      "Send contracts by email. Customers sign on their phone. You get notified and start scheduling the job right away.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: HardHat,
    title: "Crew Management",
    description:
      "Your crews get their own app to clock in, see assignments, and upload photos from the roof. No more phone calls back and forth.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: DollarSign,
    title: "Estimates and Invoicing",
    description:
      "Build estimates with multiple options, send them to customers, and create invoices when the job is done. Track every dollar.",
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
                  src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80"
                  alt="Beautiful residential home with new roof"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-2xl font-bold text-primary">4 Portals</p>
                <p className="text-xs text-slate-500">One for every role</p>
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
                Stop juggling apps. Start running your business.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Most roofing companies use one tool for leads, another for photos,
                a spreadsheet for invoicing, and a whiteboard for scheduling.
                Keystone OS puts it all in one place.
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
