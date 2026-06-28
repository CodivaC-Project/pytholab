"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categoryColors: Record<string, string> = {
  "Health Guide": "bg-emerald/10 text-emerald",
  Diabetes: "bg-navy/10 text-navy",
  "Heart Health": "bg-rose-100 text-rose-600",
  Thyroid: "bg-violet-100 text-violet-600",
  "Infectious Disease": "bg-amber-100 text-amber-600",
  "Kidney Health": "bg-blue-100 text-blue-600",
};

export default function BlogClient() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const activePost = blogPosts.find((p) => p.slug === selectedPost);

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
            Health <span className="text-emerald">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Expert health tips, diagnostic insights, and wellness advice.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activePost ? (
              <motion.article
                key="article"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-emerald font-medium text-sm mb-8 hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[activePost.category] ||
                      "bg-navy/10 text-navy"
                    }`}
                  >
                    {activePost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-warm">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(activePost.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-warm">
                    <Clock className="w-3.5 h-3.5" />
                    {activePost.readTime}
                  </div>
                </div>

                <h1 className="font-display text-3xl md:text-4xl text-navy mb-8 font-semibold">
                  {activePost.title}
                </h1>

                <div className="prose prose-lg max-w-none">
                  {activePost.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h2
                          key={i}
                          className="font-display text-2xl text-navy mt-8 mb-4 font-semibold"
                        >
                          {paragraph.replace(/\*\*/g, "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                      return (
                        <ul key={i} className="space-y-2 my-4 ml-4">
                          {items.map((item, j) => (
                            <li
                              key={j}
                              className="text-navy/70 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2.5 shrink-0" />
                              {item.replace("- ", "").replace(/\*\*/g, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className="text-navy/70 leading-relaxed mb-4"
                      >
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    );
                  })}
                </div>
              </motion.article>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={i * 0.1}>
                      <button
                        onClick={() => setSelectedPost(post.slug)}
                        className="text-left bg-white rounded-2xl border border-navy/5 overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-1 w-full block"
                      >
                        <div className="h-48 bg-navy/5 relative overflow-hidden">
                          <div className="absolute bottom-4 left-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                categoryColors[post.category] ||
                                "bg-navy/10 text-navy"
                              }`}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs text-slate-warm mb-3">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                            <span className="text-navy/20">&middot;</span>
                            {post.readTime}
                          </div>

                          <h3 className="font-display text-lg text-navy mb-2 font-semibold">
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-dark leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
