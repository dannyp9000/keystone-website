"use client";

import Image from "next/image";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { features, featureCategories } from "@/data/features";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const categoryImages: Record<string, string> = {
  "Get Paid Faster": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "Run Your Field Ops": "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=800&q=80",
  "Grow Your Business": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
};

const categoryDescriptions: Record<string, string> = {
  "Get Paid Faster": "From the first phone call to the final check. These tools help you close deals and collect payments without the runaround.",
  "Run Your Field Ops": "Send crews to the right job, track their time, document everything, and keep your materials stocked.",
  "Grow Your Business": "Smart tools that help you find new customers, keep existing ones happy, and see how your business is really doing.",
};

export function FeaturesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1600&q=80"
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
                Features
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Everything your roofing company needs in one app
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                No more switching between apps. No more lost paperwork. Keystone OS
                keeps your whole team on the same page from lead to final payment.
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
                  </div>
                </AnimateIn>

                <AnimateIn direction={isEven ? "right" : "left"}>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
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
