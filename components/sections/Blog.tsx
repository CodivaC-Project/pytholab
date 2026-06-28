"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Health Guide": "bg-emerald/10 text-emerald",
  Diabetes: "bg-navy/10 text-navy",
  "Heart Health": "bg-rose-100 text-rose-600",
  Thyroid: "bg-violet-100 text-violet-600",
  "Infectious Disease": "bg-amber-100 text-amber-600",
  "Kidney Health": "bg-blue-100 text-blue-600",
};

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-md">
            <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
              Health Blog
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mt-2 font-semibold">
              Latest articles & tips
            </h2>
          </div>
          <motion.a
            href="/blog"
            whileHover={{ x: 4 }}
            className="hidden sm:flex items-center gap-1.5 text-sm text-emerald font-medium"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Featured article — full width horizontal */}
        <motion.a
          href={`/blog#${featured.slug}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group block bg-pearl rounded-xl overflow-hidden mb-5 hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 h-56 md:h-auto bg-gradient-to-br from-navy/5 to-navy/10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-emerald-light/5" />
              <div className="absolute bottom-4 left-4">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                    categoryColors[featured.category] || "bg-navy/10 text-navy"
                  }`}
                >
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-slate-warm mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(featured.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                <span className="text-navy/20">&middot;</span>
                {featured.readTime}
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-navy mb-2 group-hover:text-emerald transition-colors font-semibold">
                {featured.title}
              </h3>
              <p className="text-sm text-slate-dark leading-relaxed">
                {featured.excerpt}
              </p>
            </div>
          </div>
        </motion.a>

        {/* 2 smaller cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.slice(0, 2).map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog#${post.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-pearl rounded-xl overflow-hidden hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-navy/5 to-navy/10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-emerald-light/5" />
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                      categoryColors[post.category] || "bg-navy/10 text-navy"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-warm mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <h3 className="font-display text-base text-navy mb-1.5 group-hover:text-emerald transition-colors font-semibold">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-dark leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-emerald font-medium"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
