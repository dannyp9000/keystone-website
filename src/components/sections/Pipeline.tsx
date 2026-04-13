"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  { name: "New Lead", color: "#3b82f6" },
  { name: "Inspect", color: "#06b6d4" },
  { name: "Estimate", color: "#f59e0b" },
  { name: "Contract", color: "#f97316" },
  { name: "Install", color: "#ef4444" },
  { name: "Invoice", color: "#14b8a6" },
  { name: "Paid", color: "#22c55e" },
  { name: "Done", color: "#10b981" },
];

export function Pipeline() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
              Job Tracking
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              See every job from start to finish
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Every roofing job goes through the same steps. Keystone OS shows you
              exactly where each job is so nothing falls through the cracks.
            </p>
          </div>
        </AnimateIn>

        {/* Simple pipeline flow */}
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.name}
                className="flex items-center gap-2 md:gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <motion.div
                  className="px-4 py-2.5 md:px-5 md:py-3 rounded-full text-white text-sm font-medium shadow-lg"
                  style={{ backgroundColor: stage.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stage.name}
                </motion.div>
                {i < stages.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-600 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Drag and Drop", desc: "Move jobs between stages with a simple drag" },
              { title: "Custom Stages", desc: "Set up the steps that match how you work" },
              { title: "Never Miss a Job", desc: "Get alerts when jobs sit too long in one stage" },
            ].map((item) => (
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
                See all features
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
