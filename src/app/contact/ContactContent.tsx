"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

const contactInfo = [
  { icon: Mail, title: "Email", detail: "hello@keystoneos.com", sub: "We reply within 24 hours" },
  { icon: Phone, title: "Phone", detail: "(216) 555-0100", sub: "Monday to Friday, 8am to 6pm EST" },
  { icon: MapPin, title: "Office", detail: "Cleveland, Ohio", sub: "Proudly built in the Midwest" },
];

export function ContactContent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (_data: ContactForm) => {
    // TODO: Wire up to backend (Supabase, Resend, etc.)
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Get in Touch
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                We would love to hear from you
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Have a question about Keystone OS? Want to see if it is a good fit
                for your company? Drop us a line.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-5 -mt-16 relative z-10">
            {contactInfo.map((info, i) => (
              <AnimateIn key={info.title} delay={i * 0.1} direction="scale">
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="mx-auto w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{info.detail}</p>
                  <p className="text-xs text-slate-400 mt-1">{info.sub}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <AnimateIn>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <Send className="h-6 w-6 text-green-500" />
                  </div>
                  <h2 className="text-xl font-bold">Message sent</h2>
                  <p className="mt-2 text-sm text-slate-500">We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary font-medium hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-2">Send us a message</h2>
                  <p className="text-sm text-slate-500 mb-6">Fill out the form below and we will get back to you quickly.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input id="name" label="Your Name" placeholder="John Smith"
                        error={errors.name?.message}
                        {...register("name", { required: "Name is required" })} />
                      <Input id="email" type="email" label="Email" placeholder="john@company.com"
                        error={errors.email?.message}
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                        })} />
                    </div>
                    <Input id="company" label="Company" placeholder="Your Roofing Company"
                      {...register("company")} />
                    <Textarea id="message" label="How can we help?" placeholder="Tell us what you are looking for..."
                      error={errors.message?.message}
                      {...register("message", { required: "Message is required" })} />
                    <motion.button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-full shadow-lg shadow-amber-500/20 cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
