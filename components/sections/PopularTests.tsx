"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import { popularTests } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function PopularTests() {
  return (
    <section className="py-24 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-md">
            <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
              Popular Tests
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
              Most requested diagnostic tests
            </h2>
          </div>
          <motion.a
            href="/services"
            whileHover={{ x: 4 }}
            className="hidden sm:flex items-center gap-1.5 text-sm text-emerald font-medium"
          >
            View all tests
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTests.map((test, i) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-navy/5 p-5 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4 text-emerald" />
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-navy/5 text-navy/60">
                  {test.category}
                </span>
              </div>
              <h3 className="text-sm text-navy font-medium mb-2 leading-snug">
                {test.name}
              </h3>
              <div className="text-lg text-emerald font-bold">
                {formatPrice(test.price)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-emerald font-medium"
          >
            View all tests
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
