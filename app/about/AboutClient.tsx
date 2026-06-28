"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTA from "@/components/sections/CTA";
import { timeline } from "@/lib/data";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accurate, reliable, and timely diagnostic services using modern technology, making quality healthcare accessible to all.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted diagnostic laboratory in Bihar, known for accuracy, innovation, and patient care.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, accuracy, compassion, innovation, and commitment to excellence in everything we do.",
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl text-navy mb-4 font-semibold"
          >
            About <span className="text-emerald">Trust Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Dedicated to accurate diagnostics and patient care since 2016.
          </motion.p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-navy/5 overflow-hidden relative">
                  <Image
                    src="/Md. Danish Alam.jpeg"
                    alt="Md. Danish Alam - Founder & Senior Lab Technologist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-navy/10 p-6 border border-navy/5">
                  <div className="font-display text-3xl text-emerald font-bold">
                    10+
                  </div>
                  <div className="text-sm text-slate-warm">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-display text-4xl text-navy font-semibold">
                  Founded by Md. Danish Alam
                </h2>
                <p className="text-slate-dark leading-relaxed">
                  Md. Danish Alam, Founder & Senior Lab Technologist, established
                  Trust Care Diagnostics with a vision to provide accurate and
                  affordable diagnostic services to the people of Bhagalpur and
                  surrounding areas.
                </p>
                <p className="text-slate-dark leading-relaxed">
                  What started as a small laboratory has grown into a
                  comprehensive diagnostic center with 500+ tests, advanced
                  automated analyzers, and a team of 20+ expert professionals.
                  Our commitment to accuracy and patient care has earned us the
                  trust of over 50,000 patients.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: "50K+", label: "Patients" },
                    { value: "500+", label: "Tests" },
                    { value: "99.9%", label: "Accuracy" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-navy/5"
                    >
                      <div className="font-display text-2xl text-navy font-bold">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-warm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl border border-navy/5 p-8 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl text-navy font-semibold">
                Our Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald/20" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8">
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-emerald flex items-center justify-center text-white font-mono text-sm font-bold">
                        {item.year.slice(2)}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm text-emerald font-semibold mb-1">
                        {item.year}
                      </div>
                      <h3 className="font-display text-xl text-navy mb-2 font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
