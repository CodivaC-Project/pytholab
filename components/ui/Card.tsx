"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className,
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={hover ? { y: -6 } : undefined}
      className={cn(
        "bg-white rounded-2xl border border-navy/5 shadow-sm",
        hover &&
          "transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
