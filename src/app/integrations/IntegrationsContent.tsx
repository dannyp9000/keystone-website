"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { integrations } from "@/data/integrations";
import { CTA } from "@/components/sections/CTA";

export function IntegrationsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Connected Ecosystem
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Integrations that make roofing easier
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Keystone OS connects with the services roofing contractors already
                rely on. Phone systems, aerial measurements, material suppliers, and more.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Integration cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {integrations.map((integration) => (
              <StaggerItem key={integration.name}>
                <Card hover glow className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                      <integration.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold">{integration.name}</h3>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            integration.status === "active"
                              ? "bg-green-50 text-green-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {integration.status === "active" ? "Active" : "Partial"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{integration.category}</p>
                      <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* More integrations */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold">
              Need something else?
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              We add new integrations regularly. Enterprise plans include custom
              integration development. Tell us what you need and we will make it happen.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
