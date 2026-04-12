"use client";

import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "AI Assistant (Knox)", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Built-in Photo Documentation", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "E-Signature Contracts", keystone: true, acculynx: true, jobnimbus: false, roofr: false },
  { feature: "Multi-Option Estimates", keystone: true, acculynx: true, jobnimbus: true, roofr: true },
  { feature: "GPS Crew Time Tracking", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Dedicated Crew Portal", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Multi-Location HQ Portal", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Twilio Call Tracking + SMS", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Marketing Automation", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
  { feature: "Supplier & Inventory Mgmt", keystone: true, acculynx: false, jobnimbus: false, roofr: false },
];

function Cell({ value }: { value: boolean }) {
  return value ? (
    <Check className="h-5 w-5 text-green-500 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-slate-300 mx-auto" />
  );
}

export function Competitors() {
  return (
    <Section>
      <AnimateIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            See How Keystone OS Stacks Up
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Other platforms make you buy add-ons for features that should be standard.
            Keystone OS includes everything out of the box.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 font-medium text-muted-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-bold text-primary">Keystone OS</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">AccuLynx</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">JobNimbus</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground">Roofr</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">{row.feature}</td>
                  <td className="py-3 px-4 bg-primary/5"><Cell value={row.keystone} /></td>
                  <td className="py-3 px-4"><Cell value={row.acculynx} /></td>
                  <td className="py-3 px-4"><Cell value={row.jobnimbus} /></td>
                  <td className="py-3 px-4"><Cell value={row.roofr} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>
    </Section>
  );
}
