"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { features, featureCategories } from "@/data/features";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const categoryImages: Record<string, string> = {
  "Revenue Engine": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "Field Operations": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "Intelligence & Growth": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
};

const categoryDescriptions: Record<string, string> = {
  "Revenue Engine": "The modules that take a lead from first contact to final payment.",
  "Field Operations": "The tools that get the physical work done and documented properly.",
  "Intelligence & Growth": "The features that differentiate Keystone OS and help you scale.",
};

export function FeaturesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80"
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
                21 Modules, One Platform
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Every tool your roofing company needs
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                From lead capture to warranty service, Keystone OS covers the
                entire roofing business lifecycle. No add-ons. No data silos.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Feature categories */}
      {featureCategories.map((category, catIdx) => {
        const categoryFeatures = features.filter((f) => f.category === category);
        const isEven = catIdx % 2 === 0;

        return (
          <section
            key={category}
            className={`py-20 md:py-28 ${isEven ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              {/* Category header with image */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                <AnimateIn direction={isEven ? "left" : "right"} className={!isEven ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={categoryImages[category]}
                      alt={category}
                      width={800}
                      height={500}
                      className="w-full h-64 md:h-80 object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </AnimateIn>

                <AnimateIn direction={isEven ? "right" : "left"}>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Phase {catIdx + 1}
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                    {category}
                  </h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {categoryDescriptions[category]}
                  </p>
                </AnimateIn>
              </div>

              {/* Feature cards */}
              <StaggerContainer
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                staggerDelay={0.06}
              >
                {categoryFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <Card hover glow className="h-full">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-slate-500">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        );
      })}

      <CTA />
    </>
  );
}
