"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-700 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00djR6TTYgMzRIMHYtMkgydi00aDJ2NGgydjJINnYtNGgydjRoNHYySDh2NGgtMnYtNHptMC0zMEg0di0yaDJ2LTRoMnY0aDJ2MkgwdjRIMnYtNHptMzAgMGgtMnYtNGgtNHYtMmg0di00aDJ2NGg0djJoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Stop Duct-Taping Your Business Together
          </h2>
          <p className="mt-4 text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Your competitors are still juggling spreadsheets, three different
            apps, and a whiteboard. Give your team the platform that runs
            circles around all of it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 shadow-lg group"
              >
                Request Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
