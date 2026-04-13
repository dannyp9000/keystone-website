"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // When not scrolled, text should be white (over dark hero images)
  const isLight = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <div className="flex h-18 items-center justify-between">
            <Link href="/" aria-label="Keystone OS home" className="relative z-10">
              <Logo light={isLight} />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    pathname === link.href
                      ? isLight
                        ? "text-amber-300 bg-white/10"
                        : "text-primary bg-amber-50"
                      : isLight
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://keystones.lovable.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  isLight
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                Sign In
              </Link>
              <Link href="/demo">
                <motion.span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get a Demo
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </div>

            <motion.button
              className={cn(
                "lg:hidden relative z-10 p-2",
                isLight ? "text-white" : "text-slate-700"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-2xl font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-slate-700 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex flex-col gap-3 mt-8 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="https://keystones.lovable.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-slate-600 font-medium border border-slate-200 rounded-full"
                >
                  Sign In
                </Link>
                <Link
                  href="/demo"
                  className="w-full py-3 text-center text-white font-semibold bg-primary rounded-full shadow-lg"
                >
                  Get a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
