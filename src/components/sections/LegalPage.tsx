"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface Section {
  title: string;
  body: string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
              Legal
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
            <p className="mt-2 text-sm text-slate-400">Last updated: {lastUpdated}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <AnimateIn key={section.title} delay={i * 0.05}>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
