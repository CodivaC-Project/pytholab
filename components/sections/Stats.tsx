"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-16 border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0 sm:divide-x sm:divide-navy/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
