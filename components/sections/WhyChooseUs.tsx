"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Users,
  Clock,
  Award,
  IndianRupee,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Users,
  Clock,
  Award,
  IndianRupee,
  Home,
};

export default function WhyChooseUs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + arrows */}
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-md">
            <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
              Trust in every test we perform
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="min-w-[280px] sm:min-w-[300px] bg-white rounded-xl border border-navy/5 p-6 snap-start shrink-0 hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald mb-4">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <h3 className="font-display text-base text-navy font-semibold mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-dark leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
