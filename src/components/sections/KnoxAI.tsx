"use client";

import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import {
  Brain,
  MessageSquare,
  Zap,
  Camera,
  CloudSun,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Tell Knox what you need in plain English. No menus to memorize.",
  },
  {
    icon: Zap,
    title: "32 Slash Commands",
    description: "/newjob, /estimate, /schedule, /weather — instant actions at your fingertips.",
  },
  {
    icon: Camera,
    title: "Photo Analysis",
    description: "Upload a roof photo. Knox identifies damage, materials, and condition.",
  },
  {
    icon: CloudSun,
    title: "Weather Aware",
    description: "Checks forecasts before you schedule installs. Reschedules when storms hit.",
  },
  {
    icon: BarChart3,
    title: "Proactive Insights",
    description: "Knox surfaces stalled jobs, overdue invoices, and upcoming deadlines automatically.",
  },
  {
    icon: Brain,
    title: "Undo Support",
    description: "Every action Knox takes can be undone within a configurable window. Stay in control.",
  },
];

export function KnoxAI() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimateIn direction="left">
          {/* Chat mockup */}
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Knox AI</p>
                <p className="text-xs text-slate-400">Online</p>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-end">
                <div className="bg-amber-600 text-white text-sm rounded-lg rounded-br-sm px-3 py-2 max-w-xs">
                  /newjob Storm damage at 1420 Oak Street for Marcus Johnson
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-200 text-sm rounded-lg rounded-bl-sm px-3 py-2 max-w-xs">
                  <p>Created job <span className="text-amber-400 font-medium">JOB-0048</span> &mdash; &ldquo;Storm Damage &mdash; Oak Street&rdquo;</p>
                  <p className="text-xs text-slate-400 mt-1">Customer: Marcus Johnson | Stage: Lead | Priority: Medium</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded">View Job</span>
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded">Undo (5 min)</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-amber-600 text-white text-sm rounded-lg rounded-br-sm px-3 py-2 max-w-xs">
                  Schedule an inspection for tomorrow morning
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-200 text-sm rounded-lg rounded-bl-sm px-3 py-2 max-w-xs">
                  <p>Inspection scheduled for <span className="text-amber-400 font-medium">tomorrow at 9:00 AM</span></p>
                  <p className="text-xs text-slate-400 mt-1">Assigned to: Available Inspector | Weather: 72&deg;F, Sunny</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn direction="right">
          <div>
            <Badge variant="primary" className="mb-4">AI-Powered</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Knox.{" "}
              <span className="text-primary">Your AI Co-Pilot.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Knox lives on every page of Keystone OS. It understands your
              jobs, customers, crews, and finances — and can take action on
              your behalf. Create jobs by typing. Get weather before you
              schedule. Analyze damage photos instantly.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cap.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{cap.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
