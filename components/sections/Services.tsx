"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Activity,
  Zap,
  Shield,
  HeartPulse,
  Sun,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Activity,
  Zap,
  Shield,
  HeartPulse,
  Sun,
};

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned heading */}
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
            Comprehensive diagnostic testing
          </h2>
          <p className="text-slate-dark mt-3 leading-relaxed">
            From routine blood work to specialized panels — over 500 tests
            with state-of-the-art automated analyzers.
          </p>
        </div>

        {/* Asymmetric grid: first 2 large, next 4 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isLarge = i < 2;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i < 2 ? i * 0.1 : 0.2 + (i - 2) * 0.08,
                }}
                className={`group bg-pearl rounded-xl p-6 cursor-pointer hover:bg-white hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 ${
                  isLarge ? "lg:col-span-2 lg:p-8" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald mb-4 group-hover:bg-emerald group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <h3 className="font-display text-lg text-navy font-semibold mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-dark leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tests.slice(0, isLarge ? 5 : 3).map((test) => (
                    <span
                      key={test}
                      className="text-xs px-2 py-0.5 rounded bg-navy/5 text-navy/60"
                    >
                      {test}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
