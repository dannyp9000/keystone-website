"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { integrations } from "@/data/integrations";
import { CTA } from "@/components/sections/CTA";

export function IntegrationsContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                Connected Ecosystem
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Integrations That Make Roofing Easier
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Keystone OS connects with the services roofing contractors
                already rely on — from phone systems to aerial measurements to
                material suppliers.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, i) => (
            <AnimateIn key={integration.name} delay={i * 0.08}>
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <integration.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        {integration.name}
                      </h3>
                      <Badge
                        variant={
                          integration.status === "active"
                            ? "primary"
                            : "outline"
                        }
                      >
                        {integration.status === "active"
                          ? "Active"
                          : integration.status === "partial"
                          ? "Partial"
                          : "Coming Soon"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                      {integration.category}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">
              Don&apos;t See What You Need?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re always adding new integrations. Enterprise plans
              include custom integration development. Tell us what you need and
              we&apos;ll make it happen.
            </p>
          </div>
        </AnimateIn>
      </Section>

      <CTA />
    </>
  );
}
