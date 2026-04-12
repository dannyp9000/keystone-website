"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ className, hover = false, glow = false, children }: CardProps) {
  if (hover) {
    return (
      <motion.div
        className={cn(
          "rounded-2xl border border-border bg-card p-6 shadow-sm relative overflow-hidden group",
          glow && "hover:shadow-amber-500/10",
          className
        )}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6",
        className
      )}
      whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
