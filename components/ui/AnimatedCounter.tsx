"use client";

import { useCountUp } from "@/lib/hooks";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(value, 2000);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}K`;
    }
    return num.toString();
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="font-display text-4xl md:text-5xl font-bold text-navy">
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-slate-warm text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}
