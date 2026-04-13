"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Customer and Lead Tracking", keystone: true, acculynx: true, jobnimbus: true, companycam: false, roofr: true },
  { feature: "Job Photo Management", keystone: true, acculynx: false, jobnimbus: false, companycam: true, roofr: false },
  { feature: "Estimates with Multiple Options", keystone: true, acculynx: true, jobnimbus: true, companycam: false, roofr: true },
  { feature: "Digital Contracts and E-Sign", keystone: true, acculynx: true, jobnimbus: false, companycam: false, roofr: true },
  { feature: "Invoicing and Payment Tracking", keystone: true, acculynx: true, jobnimbus: true, companycam: false, roofr: false },
  { feature: "Built-in AI Assistant", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "GPS Crew Time Tracking", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Crew Mobile Portal", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: true },
  { feature: "Sales Rep Portal", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Multi-Location Headquarters View", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Call Tracking and Texting", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Email Marketing Campaigns", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Warranty Tracking", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "Supplier and Inventory Management", keystone: true, acculynx: false, jobnimbus: false, companycam: false, roofr: false },
  { feature: "No Hidden Fees for Core Features", keystone: true, acculynx: false, jobnimbus: false, companycam: true, roofr: false },
];

function Cell({ value }: { value: boolean }) {
  return value ? (
    <Check className="h-5 w-5 text-green-500 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-slate-200 mx-auto" />
  );
}

export function Competitors() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Keystone OS
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Everything in one place. No extra apps needed.
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Most platforms only cover part of what you need, so you end up
              paying for three or four tools. Keystone OS handles it all.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left py-4 px-5 font-medium text-slate-600 w-[240px]">Feature</th>
                  <th className="py-4 px-3 text-center font-bold text-primary whitespace-nowrap">Keystone OS</th>
                  <th className="py-4 px-3 text-center font-medium text-slate-400 whitespace-nowrap">AccuLynx</th>
                  <th className="py-4 px-3 text-center font-medium text-slate-400 whitespace-nowrap">JobNimbus</th>
                  <th className="py-4 px-3 text-center font-medium text-slate-400 whitespace-nowrap">CompanyCam</th>
                  <th className="py-4 px-3 text-center font-medium text-slate-400 whitespace-nowrap">Roofr</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    className="border-b border-slate-50 last:border-0"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <td className="py-3 px-5 text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-3 px-3 bg-amber-50/30"><Cell value={row.keystone} /></td>
                    <td className="py-3 px-3"><Cell value={row.acculynx} /></td>
                    <td className="py-3 px-3"><Cell value={row.jobnimbus} /></td>
                    <td className="py-3 px-3"><Cell value={row.companycam} /></td>
                    <td className="py-3 px-3"><Cell value={row.roofr} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
