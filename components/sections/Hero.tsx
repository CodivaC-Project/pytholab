"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm text-navy/60 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
              Trusted since 2016 in Bhagalpur
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-navy leading-[1.15] font-semibold tracking-tight"
            >
              Where Accuracy
              <br />
              Meets{" "}
              <span className="text-emerald">Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-dark max-w-md leading-relaxed"
            >
              Your trusted partner in accurate diagnostics and health
              monitoring. Comprehensive range of pathology tests with quick
              turnaround time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <Button href="/book-test" size="lg">
                Book a Test
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-2"
            >
              {[
                { icon: Shield, text: "NABL Certified" },
                { icon: Clock, text: "Same Day Reports" },
                { icon: Award, text: "99.9% Accuracy" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-xs text-navy/50"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Lab photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy/5">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                alt="Modern diagnostic laboratory with automated analyzers"
                fill
                className="object-cover"
                priority
              />
              {/* Small accent overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl shadow-navy/8 border border-navy/5 px-5 py-3.5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-navy">500+ Tests</div>
                <div className="text-xs text-slate-warm">Available on-site</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
