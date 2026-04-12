"use client";

import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";

const stages = [
  { name: "Lead", color: "bg-blue-500" },
  { name: "Inspection", color: "bg-cyan-500" },
  { name: "Insurance", color: "bg-purple-500" },
  { name: "Estimate", color: "bg-amber-500" },
  { name: "Contract", color: "bg-orange-500" },
  { name: "Production", color: "bg-red-500" },
  { name: "Install", color: "bg-pink-500" },
  { name: "Invoice", color: "bg-teal-500" },
  { name: "Paid", color: "bg-green-500" },
  { name: "Closed", color: "bg-emerald-500" },
];

export function Pipeline() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimateIn direction="left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              One Pipeline. Ten Stages.{" "}
              <span className="text-primary">Total Visibility.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Every roofing job follows a predictable path. Keystone OS maps
              that path into a 10-stage pipeline you can customize, visualize,
              and automate. Drag-and-drop Kanban boards, sortable tables, and
              card views give your team the view that works for them.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Custom stages with target days and color coding",
                "Stalled job detection flags bottlenecks automatically",
                "Stage history tracks every transition with timestamps",
                "Insurance workflow fields built into the job record",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn direction="right">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-border">
            <div className="grid grid-cols-5 gap-2">
              {stages.map((stage, i) => (
                <div key={stage.name} className="text-center">
                  <div
                    className={`w-full h-2 rounded-full ${stage.color} mb-2`}
                    style={{ opacity: 0.3 + (i / stages.length) * 0.7 }}
                  />
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground">
                    {stage.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Kanban mockup */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { stage: "Lead", count: 12, items: ["Storm damage — Oak St", "Referral from Blake"] },
                { stage: "Estimate", count: 6, items: ["Flat roof — Industrial Pkwy", "Shingle replacement"] },
                { stage: "Contract", count: 9, items: ["Commercial reroof — Main", "Insurance approved"] },
              ].map((col) => (
                <div
                  key={col.stage}
                  className="bg-white rounded-lg p-3 border border-border"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold">{col.stage}</span>
                    <span className="text-xs bg-muted rounded-full px-2 py-0.5">
                      {col.count}
                    </span>
                  </div>
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="bg-slate-50 rounded-md p-2 mb-2 last:mb-0 border border-slate-100"
                    >
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
