"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";

const items = [
  {
    title: "Roof Inspections",
    desc: "Checklists, measurements, and damage photos that flow right into your estimates. No double entry.",
    img: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=600&q=80",
  },
  {
    title: "Job Photos",
    desc: "Organize every photo by job. Share before-and-after galleries with homeowners in one click.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Crew Scheduling",
    desc: "Assign crews, track hours with GPS, and let your team see their assignments on their phone.",
    img: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=600&q=80",
  },
];

export function Showcase() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Built for the field
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Tools that work as hard as your crew
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.15} direction="scale">
              <motion.div
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
