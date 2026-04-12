"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl -z-10"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-amber-600/10 blur-3xl -z-10"
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <AnimateIn delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-amber-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              v1.40 Now Available
            </span>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Run your roofing
              <br />
              business in
              <br />
              <span className="text-amber-400">one place</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              CRM, estimates, contracts, crew management, photo documentation,
              and AI assistance. Everything a roofing contractor needs, nothing they do not.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
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

          <AnimateIn delay={0.65}>
            <div className="mt-14 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white">89</p>
                <p className="text-xs text-slate-400 mt-0.5">Database Tables</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">310</p>
                <p className="text-xs text-slate-400 mt-0.5">Security Policies</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">21</p>
                <p className="text-xs text-slate-400 mt-0.5">Modules</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
