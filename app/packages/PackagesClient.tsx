"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { packages } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTA from "@/components/sections/CTA";

export default function PackagesClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-navy mb-4 font-semibold"
          >
            Health <span className="text-emerald">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Comprehensive health screening packages designed for complete peace
            of mind.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 0.15}>
                <div
                  className={`relative bg-white rounded-3xl border p-8 ${
                    pkg.popular
                      ? "border-emerald shadow-xl shadow-emerald/10 md:scale-105"
                      : "border-navy/5 shadow-sm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-emerald text-white text-xs font-semibold flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl text-navy mb-1 font-semibold">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-warm">
                      {pkg.tests} tests included
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl text-navy font-bold">
                        {formatPrice(pkg.price)}
                      </span>
                      <span className="text-sm text-slate-warm line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    </div>
                    <div className="text-xs text-emerald font-medium mt-1">
                      Save {formatPrice(pkg.originalPrice - pkg.price)}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald" />
                        </div>
                        <span className="text-sm text-navy/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/book-test"
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Book Package
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
