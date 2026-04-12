"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  { name: "Lead", color: "#3b82f6", jobs: 12 },
  { name: "Inspection", color: "#06b6d4", jobs: 8 },
  { name: "Insurance", color: "#8b5cf6", jobs: 5 },
  { name: "Estimate", color: "#f59e0b", jobs: 6 },
  { name: "Contract", color: "#f97316", jobs: 9 },
  { name: "Production", color: "#ef4444", jobs: 4 },
  { name: "Install", color: "#ec4899", jobs: 3 },
  { name: "Invoice", color: "#14b8a6", jobs: 7 },
  { name: "Paid", color: "#22c55e", jobs: 11 },
  { name: "Closed", color: "#10b981", jobs: 8 },
];

export function Pipeline() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
              Visual Workflow
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              One pipeline. Ten stages. Total visibility.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Every roofing job follows a predictable path. Keystone OS maps that path
              into a customizable pipeline your whole team can see.
            </p>
          </div>
        </AnimateIn>

        {/* Pipeline visualization */}
        <AnimateIn delay={0.2}>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 opacity-30" />

            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 md:gap-2">
              {stages.map((stage, i) => (
                <motion.div
                  key={stage.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <motion.div
                    className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg"
                    style={{ backgroundColor: stage.color }}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stage.jobs}
                  </motion.div>
                  <p className="text-xs font-medium text-slate-400">{stage.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Kanban View", desc: "Drag and drop jobs between stages" },
              { title: "Custom Stages", desc: "Build the pipeline that fits your workflow" },
              { title: "Stall Detection", desc: "Get alerts when jobs sit too long" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                whileHover={{ borderColor: "rgba(245,158,11,0.3)", y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/features">
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 cursor-pointer"
                whileHover={{ x: 4 }}
              >
                Explore all features
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
