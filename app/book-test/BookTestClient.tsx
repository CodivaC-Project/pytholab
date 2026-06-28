"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { allTests, packages } from "@/lib/data";
import Input, { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BookTestClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-20 bg-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-navy mb-4 font-semibold"
            >
              Booking <span className="text-emerald">Confirmed</span>
            </motion.h1>
          </div>
        </section>
        <section className="py-24">
          <div className="max-w-xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald/10 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-emerald" />
            </motion.div>
            <h2 className="font-display text-2xl text-navy mb-3 font-semibold">
              Thank You!
            </h2>
            <p className="text-slate-dark mb-6">
              Your booking request has been received. Our team will contact you
              shortly to confirm your appointment.
            </p>
            <p className="text-sm text-navy/60">
              For urgent inquiries, call us at{" "}
              <a href="tel:+919608759500" className="text-emerald font-medium">
                +91 9608759500
              </a>
            </p>
          </div>
        </section>
      </>
    );
  }

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
            Book a <span className="text-emerald">Test</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Schedule your diagnostic test online. Quick, easy, and convenient.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-navy/5 shadow-xl shadow-navy/5 p-8 md:p-12"
            >
              <h2 className="font-display text-2xl text-navy mb-8 font-semibold">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input label="Full Name" placeholder="John Doe" required />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                />
                <Input label="Age" type="number" placeholder="30" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-navy">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-navy">
                      Preferred Time
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20">
                      <option>Morning (7 AM - 10 AM)</option>
                      <option>Late Morning (10 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 3 PM)</option>
                      <option>Late Afternoon (3 PM - 6 PM)</option>
                      <option>Evening (6 PM - 9 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-navy">
                    Select Test or Package
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20">
                    <optgroup label="Health Packages">
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — {pkg.tests} tests (₹{pkg.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Individual Tests">
                      {allTests.map((test) => (
                        <option key={test.name} value={test.name}>
                          {test.name} — ₹{test.price}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-navy">
                    Sample Collection
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        value="lab"
                        defaultChecked
                        className="w-4 h-4 text-emerald accent-emerald"
                      />
                      <span className="text-sm text-navy/70">Visit Lab</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        value="home"
                        className="w-4 h-4 text-emerald accent-emerald"
                      />
                      <span className="text-sm text-navy/70">
                        Home Collection
                      </span>
                    </label>
                  </div>
                </div>

                <Textarea
                  label="Additional Notes"
                  placeholder="Any specific requirements or instructions..."
                  rows={3}
                />

                <Button type="submit" size="lg" className="w-full" magnetic>
                  Book Appointment
                </Button>

                <p className="text-xs text-center text-slate-warm">
                  By booking, you agree to our terms. Our team will contact you
                  to confirm your appointment.
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
