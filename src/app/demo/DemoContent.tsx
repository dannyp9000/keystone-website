"use client";

import { useForm } from "react-hook-form";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  CheckCircle2,
  Clock,
  Users,
  Monitor,
  ArrowRight,
} from "lucide-react";

interface DemoForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  crewSize: string;
  message: string;
}

const benefits = [
  {
    icon: Clock,
    title: "30 Minutes",
    description: "Quick, focused walkthrough tailored to your business.",
  },
  {
    icon: Monitor,
    title: "Live Platform Demo",
    description: "See real features, not a slide deck.",
  },
  {
    icon: Users,
    title: "Custom for Your Role",
    description: "Owner, sales, production — we show what matters to you.",
  },
];

export function DemoContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoForm>();

  const onSubmit = (data: DemoForm) => {
    console.log("Demo form submitted:", data);
    alert(
      "Thank you! We'll reach out within 24 hours to schedule your demo."
    );
  };

  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                Free Demo
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                See Keystone OS in Action
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Get a personalized walkthrough of the platform from someone who
                understands roofing operations. No pressure, no commitment.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            {benefits.map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 0.1}>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimateIn direction="left">
            <Card className="shadow-lg">
              <h2 className="text-xl font-semibold mb-6">
                Request Your Demo
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    id="demo-name"
                    label="Your Name"
                    placeholder="John Smith"
                    error={errors.name?.message}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  <Input
                    id="demo-email"
                    type="email"
                    label="Email Address"
                    placeholder="john@company.com"
                    error={errors.email?.message}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    id="demo-company"
                    label="Company Name"
                    placeholder="Your Roofing Company"
                    error={errors.company?.message}
                    {...register("company", {
                      required: "Company name is required",
                    })}
                  />
                  <Input
                    id="demo-phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="(555) 123-4567"
                    {...register("phone")}
                  />
                </div>
                <Input
                  id="demo-crew-size"
                  label="Team Size"
                  placeholder="e.g., 5-10 employees"
                  {...register("crewSize")}
                />
                <Textarea
                  id="demo-message"
                  label="What are you most interested in?"
                  placeholder="Tell us about your current setup and what you'd like to see..."
                  {...register("message")}
                />
                <Button type="submit" size="lg" className="w-full group">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Card>
          </AnimateIn>

          <AnimateIn direction="right">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                What You&apos;ll See in Your Demo
              </h2>
              <div className="space-y-4">
                {[
                  "Complete CRM-to-invoice revenue cycle",
                  "Knox AI creating jobs and scheduling inspections in real time",
                  "Multi-option estimate builder with Conklin product integration",
                  "E-signature contract flow from generation to signing",
                  "Crew portal with GPS time tracking and work orders",
                  "Key Cam photo documentation and public galleries",
                  "Dashboard widgets and pipeline analytics",
                  "Multi-location HQ portal (Enterprise)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;The demo sold us in 15 minutes. We saw our exact
                  workflow — from storm damage lead to paid invoice — running in
                  one system. We signed up that afternoon.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold">
                  — Travis McBride, Iron Shield Contracting
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
