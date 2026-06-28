"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { packages } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Packages() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
            Health Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
            Affordable health checkup packages
          </h2>
          <p className="text-slate-dark mt-3 leading-relaxed">
            Comprehensive health screening designed to give you complete peace
            of mind at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-white rounded-3xl border p-8 ${
                pkg.popular
                  ? "border-emerald shadow-xl shadow-emerald/10 scale-[1.02] md:scale-105"
                  : "border-navy/5 shadow-sm"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald to-emerald-dark text-white text-xs font-semibold flex items-center gap-1.5">
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
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
