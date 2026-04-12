"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section variant="muted">
      <AnimateIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Roofing Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From single-crew companies to multi-state operations, contractors
            are switching to Keystone OS and never looking back.
          </p>
        </div>
      </AnimateIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimateIn key={t.name} delay={i * 0.1}>
            <Card className="h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.title}, {t.company}
                </p>
              </div>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
