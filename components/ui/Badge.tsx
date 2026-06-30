"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "navy" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "emerald",
  className,
}: BadgeProps) {
  const variants = {
    emerald: "bg-emerald/10 text-emerald-dark border-emerald/20",
    navy: "bg-navy/10 text-navy border-navy/20",
    outline: "bg-transparent text-navy border-navy/20",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}
