"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
            What our patients say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-pearl rounded-xl p-6 border-l-2 border-emerald/30 hover:border-emerald transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < t.rating
                        ? "text-amber-400 fill-current"
                        : "text-navy/10"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-navy/70 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="text-sm font-medium text-navy">{t.name}</div>
              <div className="text-xs text-slate-warm">Verified Patient</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
