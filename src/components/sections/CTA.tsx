"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your roofing business deserves better software
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            See why contractors are switching to Keystone OS. Try it free for 14 days. No credit card. No commitment.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-xl shadow-amber-500/25 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
            <Link href="/pricing">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Pricing
              </motion.span>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
