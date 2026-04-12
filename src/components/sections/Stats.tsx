"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const stats = [
  { value: "89", label: "Database Tables" },
  { value: "310", label: "Security Policies" },
  { value: "21", label: "Edge Functions" },
  { value: "32", label: "AI Commands" },
  { value: "18", label: "Dashboard Widgets" },
  { value: "11", label: "User Roles" },
];

export function Stats() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <StaggerContainer
        className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-3 md:grid-cols-6 gap-8"
        staggerDelay={0.08}
      >
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
