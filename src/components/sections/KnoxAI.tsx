"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import {
  Brain,
  MessageSquare,
  Zap,
  Camera,
  CloudSun,
  BarChart3,
} from "lucide-react";

const capabilities = [
  { icon: MessageSquare, title: "Natural Language", desc: "Tell Knox what you need in plain English" },
  { icon: Zap, title: "32 Slash Commands", desc: "Instant actions at your fingertips" },
  { icon: Camera, title: "Photo Analysis", desc: "AI identifies damage and materials" },
  { icon: CloudSun, title: "Weather Aware", desc: "Checks forecasts before scheduling" },
  { icon: BarChart3, title: "Proactive Insights", desc: "Surfaces stalled jobs and deadlines" },
  { icon: Brain, title: "Undo Support", desc: "Reverse any action within a configurable window" },
];

export function KnoxAI() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chat mockup */}
          <AnimateIn direction="left">
            <div className="relative">
              <motion.div
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div className="px-5 py-3 border-b border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Knox AI</p>
                    <p className="text-xs text-slate-500">Online</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-primary text-white text-sm rounded-2xl rounded-br-md px-4 py-2.5 max-w-[280px]">
                      /newjob Storm damage at 1420 Oak Street for Marcus Johnson
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-slate-800 text-slate-200 text-sm rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[300px]">
                      <p>Created job <span className="text-amber-400 font-medium">JOB-0048</span></p>
                      <p className="text-xs text-slate-400 mt-1">Customer: Marcus Johnson | Stage: Lead</p>
                      <div className="flex gap-2 mt-2.5">
                        <span className="text-xs bg-slate-700 px-2.5 py-1 rounded-full">View Job</span>
                        <span className="text-xs bg-slate-700 px-2.5 py-1 rounded-full">Undo</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="bg-primary text-white text-sm rounded-2xl rounded-br-md px-4 py-2.5 max-w-[280px]">
                      Schedule an inspection for tomorrow morning
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="bg-slate-800 text-slate-200 text-sm rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[300px]">
                      <p>Inspection scheduled for <span className="text-amber-400 font-medium">tomorrow 9:00 AM</span></p>
                      <p className="text-xs text-slate-400 mt-1">Weather: 72F, Sunny</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating image accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl overflow-hidden shadow-xl border-2 border-white hidden lg:block"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80"
                  alt="Construction team"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          </AnimateIn>

          {/* Content */}
          <div>
            <AnimateIn direction="right">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                AI-Powered
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Meet Knox. Your AI co-pilot for every job.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Knox lives on every page of Keystone OS. It understands your
                jobs, customers, crews, and finances and can take action on
                your behalf. Create jobs by typing. Get weather before you
                schedule. Analyze damage photos instantly.
              </p>
            </AnimateIn>

            <StaggerContainer className="mt-8 grid grid-cols-2 gap-3" staggerDelay={0.06}>
              {capabilities.map((cap) => (
                <StaggerItem key={cap.title}>
                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                      <cap.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{cap.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{cap.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
