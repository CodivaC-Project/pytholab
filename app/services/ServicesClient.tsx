"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Activity,
  Zap,
  Shield,
  HeartPulse,
  Sun,
  Search,
} from "lucide-react";
import { services, allTests } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTA from "@/components/sections/CTA";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Activity,
  Zap,
  Shield,
  HeartPulse,
  Sun,
};

const categories = ["All", ...new Set(allTests.map((t) => t.category))];

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = allTests.filter((t) => {
    const matchesCategory =
      activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our <span className="text-emerald">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Comprehensive diagnostic testing with state-of-the-art equipment and
            expert analysis.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];

              return (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-navy/5 p-6 h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald/10 text-emerald">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <h3 className="font-display text-xl text-navy mb-2 font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-dark mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tests.map((test) => (
                        <span
                          key={test}
                          className="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy/60"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Full Test List */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-4 font-semibold">
                Complete Test Directory
              </h2>
              <p className="text-slate-dark max-w-xl mx-auto">
                Browse our full list of diagnostic tests with transparent
                pricing.
              </p>
            </div>
          </ScrollReveal>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-warm" />
              <input
                type="text"
                placeholder="Search tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm placeholder:text-slate-warm transition-all focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-lg shadow-navy/20"
                    : "bg-navy/5 text-navy/60 hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tests grid */}
          <div className="bg-white rounded-2xl border border-navy/5 overflow-hidden">
            <div className="grid grid-cols-[1fr,auto] md:grid-cols-[2fr,1fr,auto] gap-4 p-4 bg-navy/5 font-semibold text-sm text-navy/60">
              <div>Test Name</div>
              <div className="hidden md:block">Category</div>
              <div className="text-right">Price</div>
            </div>
            {filteredTests.length > 0 ? (
              filteredTests.map((test, i) => (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="grid grid-cols-[1fr,auto] md:grid-cols-[2fr,1fr,auto] gap-4 px-4 py-3 border-t border-navy/5 items-center hover:bg-navy/[0.02] transition-colors"
                >
                  <div className="text-sm text-navy font-medium">
                    {test.name}
                  </div>
                  <div className="hidden md:block text-xs text-slate-warm">
                    {test.category}
                  </div>
                  <div className="text-right text-sm font-semibold text-emerald">
                    {formatPrice(test.price)}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="px-4 py-12 text-center text-sm text-slate-warm">
                No tests found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
