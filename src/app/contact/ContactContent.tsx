"use client";

import { useForm } from "react-hook-form";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@keystoneos.com",
    description: "We respond within 24 hours on business days.",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "(555) 123-4567",
    description: "Mon–Fri, 8 AM – 6 PM CST.",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Dallas, Texas",
    description: "Headquartered in the heart of roofing country.",
  },
];

export function ContactContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form submitted:", data);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <>
      <section className="pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" className="mb-4">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Let&apos;s Talk About Your Business
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you&apos;re exploring Keystone OS for the first time or
                need help with your account, we&apos;re here.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimateIn direction="left">
              <Card>
                <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      id="name"
                      label="Your Name"
                      placeholder="John Smith"
                      error={errors.name?.message}
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    <Input
                      id="email"
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
                  <Input
                    id="company"
                    label="Company Name"
                    placeholder="Your Roofing Company"
                    {...register("company")}
                  />
                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell us about your needs..."
                    error={errors.message?.message}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  <Button type="submit" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </AnimateIn>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <AnimateIn key={info.title} delay={i * 0.1} direction="right">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm font-medium text-primary mt-0.5">
                        {info.detail}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
