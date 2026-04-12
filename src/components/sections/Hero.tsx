"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-bl-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn delay={0}>
            <Badge variant="primary" className="mb-6">
              Now in v1.40 — Feature-Complete for MVP
            </Badge>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              The Operating System for{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Roofing Contractors
              </span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Replace your fragmented stack of CRM, estimating, scheduling, and
              photo tools with one AI-powered platform built exclusively for
              roofing companies. From lead capture to warranty service — run
              your entire business in Keystone OS.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <Button size="lg" className="group">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Explore Features
                </Button>
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Setup in under 10 minutes
              </span>
            </div>
          </AnimateIn>
        </div>

        {/* App preview placeholder */}
        <AnimateIn delay={0.5}>
          <div className="mt-16 md:mt-20 relative">
            <div className="mx-auto max-w-5xl rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-slate-400">keystones.lovable.app</span>
                </div>
              </div>
              <div className="p-8 md:p-12 space-y-6">
                {/* Dashboard mockup */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Shield, label: "Active Jobs", value: "47", color: "text-amber-400" },
                    { icon: Zap, label: "Revenue (MTD)", value: "$284K", color: "text-green-400" },
                    { icon: Users, label: "Crew Members", value: "23", color: "text-blue-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    >
                      <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {/* Pipeline stages */}
                <div className="flex gap-2">
                  {["Lead", "Inspection", "Estimate", "Contract", "Install", "Paid"].map(
                    (stage, i) => (
                      <div
                        key={stage}
                        className="flex-1 bg-slate-800/50 rounded-md p-2 border border-slate-700 text-center"
                      >
                        <p className="text-xs text-slate-400">{stage}</p>
                        <p className="text-sm font-semibold text-white mt-1">
                          {[12, 8, 6, 9, 4, 8][i]}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 rounded-2xl blur-3xl -z-10" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
