"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-lg shadow-navy/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-emerald/25 group-hover:shadow-emerald/40 transition-shadow">
                <Image
                  src="/logo.png"
                  alt="Trust Care Diagnostics Logo"
                  width={40}
                  height={40}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-lg text-navy leading-tight font-semibold">
                  Trust Care
                </div>
                <div className="text-[10px] text-slate-warm tracking-widest uppercase">
                  Diagnostics
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-navy/70 hover:text-navy rounded-lg hover:bg-navy/5 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden md:flex items-center gap-2 text-sm text-navy/70 hover:text-emerald transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{siteConfig.phone}</span>
              </a>
              <Button href="/book-test" size="sm" magnetic>
                Book Test
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-navy/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-navy" />
                ) : (
                  <Menu className="w-5 h-5 text-navy" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-white/70 backdrop-blur-xl shadow-xl shadow-navy/10 mx-4 rounded-2xl p-4 border border-navy/5">
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-navy/70 hover:text-navy hover:bg-navy/5 rounded-xl transition-all"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-navy/5">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-navy/70 hover:text-emerald transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
