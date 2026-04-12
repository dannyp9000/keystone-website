"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { features, featureCategories } from "@/data/features";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export function FeaturesContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                21 Modules, One Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Every Tool Your Roofing Company Needs
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                From lead capture to warranty service, Keystone OS covers the
                entire roofing business lifecycle. No add-ons, no integrations
                to maintain, no data silos.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {featureCategories.map((category) => {
        const categoryFeatures = features.filter(
          (f) => f.category === category
        );
        return (
          <Section
            key={category}
            variant={category === "Field Operations" ? "muted" : "default"}
          >
            <AnimateIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {category}
              </h2>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                {category === "Revenue Engine" &&
                  "The modules that take a lead from first contact to final payment."}
                {category === "Field Operations" &&
                  "The tools that get the physical work done efficiently and documented properly."}
                {category === "Intelligence & Growth" &&
                  "The features that differentiate Keystone OS and help you scale."}
              </p>
            </AnimateIn>

            <div className="grid md:grid-cols-2 gap-6">
              {categoryFeatures.map((feature, i) => (
                <AnimateIn key={feature.title} delay={i * 0.08}>
                  <Card hover className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {feature.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </AnimateIn>
              ))}
            </div>
          </Section>
        );
      })}

      <CTA />
    </>
  );
}
