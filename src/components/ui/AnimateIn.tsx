"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  duration?: number;
  once?: boolean;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: AnimateInProps) {
  const variants = {
    up: { y: 40, x: 0, scale: 1 },
    down: { y: -40, x: 0, scale: 1 },
    left: { y: 0, x: -50, scale: 1 },
    right: { y: 0, x: 50, scale: 1 },
    none: { y: 0, x: 0, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.9 },
  };

  const { x, y, scale } = variants[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.05, margin: "0px 0px -10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
