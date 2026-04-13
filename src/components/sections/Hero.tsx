"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image - residential roofing */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
      </div>

      {/* Floating accents */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl -z-10"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              One app for your
              <br />
              entire roofing
              <br />
              <span className="text-amber-400">business</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Leads, estimates, contracts, scheduling, photos, crews, and
              payments. Keystone OS puts everything your team needs in one
              simple platform.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/demo">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full shadow-xl shadow-amber-500/25 cursor-pointer"
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(217,119,6,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
              <Link href="/features">
                <motion.span
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play className="h-4 w-4 fill-white" />
                  See How It Works
                </motion.span>
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.55}>
            <div className="mt-14 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-xs text-slate-400 mt-0.5">Tools Replaced</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">10hrs</p>
                <p className="text-xs text-slate-400 mt-0.5">Saved Per Week</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">4</p>
                <p className="text-xs text-slate-400 mt-0.5">Built-In Portals</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
