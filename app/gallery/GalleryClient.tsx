"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import { galleryImages } from "@/lib/data";

const categories = [
  "All",
  ...new Set(galleryImages.map((img) => img.category)),
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
            Our <span className="text-emerald">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Take a virtual tour of our state-of-the-art diagnostic laboratory.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(filtered.indexOf(img))}
                    className="aspect-square rounded-2xl bg-navy/5 relative overflow-hidden group cursor-pointer w-full"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <Camera className="w-8 h-8 text-navy/20 group-hover:text-emerald/40 transition-colors" />
                      <span className="text-xs text-navy/30 group-hover:text-navy/50 transition-colors px-2 text-center">
                        {img.alt}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 text-navy/60">
                        {img.category}
                      </span>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full aspect-[4/3] rounded-3xl bg-navy/5 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <Camera className="w-16 h-16 text-navy/20 mx-auto mb-4" />
                <h3 className="font-display text-xl text-navy mb-1">
                  {filtered[selectedImage]?.alt}
                </h3>
                <p className="text-sm text-slate-warm">
                  {filtered[selectedImage]?.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-navy" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
