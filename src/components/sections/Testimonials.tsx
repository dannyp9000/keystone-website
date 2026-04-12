"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "We were juggling AccuLynx for CRM, CompanyCam for photos, and spreadsheets for everything else. Keystone OS replaced all of it in one weekend.",
    name: "Marcus Rivera",
    role: "Owner, Summit Roofing",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    text: "Knox AI alone is worth the subscription. My sales reps type /newjob and it handles the rest. We went from 45 minutes of data entry per job to about 3.",
    name: "Danielle Okafor",
    role: "Operations, Apex Commercial",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    text: "The crew portal changed how we run our field ops. GPS time tracking, work orders on their phones, photo uploads from the roof. No more excuses.",
    name: "Travis McBride",
    role: "Production, Iron Shield",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    text: "We manage 12 offices across 3 states. Before Keystone, I had zero visibility into branch performance. The HQ portal gives me everything at a glance.",
    name: "Kathleen Nguyen",
    role: "CEO, National Roof Partners",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Trusted by contractors
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Roofing professionals love Keystone OS
            </h2>
          </div>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 h-full"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                    unoptimized
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
