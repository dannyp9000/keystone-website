"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Request Demo", href: "/demo" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Sign In", href: "https://keystones.lovable.app/login" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA band */}
      <div className="relative bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimateIn direction="left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to simplify your roofing business?
              </h3>
              <p className="mt-2 text-slate-300 max-w-lg">
                Book a free demo and see how Keystone OS replaces all the apps you are using today.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <Link href="/demo">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-amber-500/25 cursor-pointer whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Demo
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </AnimateIn>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2 md:col-span-1">
              <Logo light />
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
                The all-in-one platform for roofing contractors. Manage leads, jobs, crews, and payments from one place.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              {new Date().getFullYear()} Keystone OS. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Built in Cleveland, Ohio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
