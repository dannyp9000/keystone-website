"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "AI Assistant", keystone: true, others: false },
  { feature: "Built-in Photo Documentation", keystone: true, others: false },
  { feature: "E-Signature Contracts", keystone: true, others: false },
  { feature: "GPS Crew Time Tracking", keystone: true, others: false },
  { feature: "Dedicated Crew Portal", keystone: true, others: false },
  { feature: "Multi-Location HQ Portal", keystone: true, others: false },
  { feature: "Call Tracking and SMS", keystone: true, others: false },
  { feature: "Marketing Automation", keystone: true, others: false },
  { feature: "Inventory Management", keystone: true, others: false },
  { feature: "Multi-Option Estimates", keystone: true, others: true },
];

export function Competitors() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why switch
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              More features. One platform. No add-ons.
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Other platforms charge extra for features that should be standard.
              Keystone OS includes everything out of the box.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-slate-100 bg-slate-50">
              <div className="py-4 px-6 text-slate-600">Feature</div>
              <div className="py-4 px-6 text-center text-primary">Keystone OS</div>
              <div className="py-4 px-6 text-center text-slate-400">Others</div>
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={row.feature}
                className="grid grid-cols-3 text-sm border-b border-slate-50 last:border-0"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <div className="py-3.5 px-6 text-slate-700 font-medium">{row.feature}</div>
                <div className="py-3.5 px-6 flex justify-center bg-amber-50/30">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="py-3.5 px-6 flex justify-center">
                  {row.others ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-slate-200" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
