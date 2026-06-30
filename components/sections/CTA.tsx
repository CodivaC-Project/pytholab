"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-navy rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-transparent to-transparent" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h2 className="font-display text-3xl md:text-4xl text-white mb-3 font-semibold">
                  Book Your Test Today
                </h2>
                <p className="text-white/60 max-w-lg">
                  Take the first step toward better health. Book your diagnostic
                  test online or visit us at our lab in Bhagalpur.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button href="/book-test" size="lg" magnetic>
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white hover:text-navy transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
