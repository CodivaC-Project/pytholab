"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { allTests, packages } from "@/lib/data";
import Input, { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const fieldVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function BookTestClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning (7 AM - 10 AM)");
  const [test, setTest] = useState("");
  const [collection, setCollection] = useState("lab");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/book-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, age, date, time, test, collection, notes }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
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
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fieldVariants}
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </motion.div>
                <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>
                <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
                  <Input
                    label="Age"
                    type="number"
                    placeholder="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </motion.div>
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fieldVariants}
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-navy">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-navy">
                      Preferred Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    >
                      <option>Morning (7 AM - 10 AM)</option>
                      <option>Late Morning (10 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 3 PM)</option>
                      <option>Late Afternoon (3 PM - 6 PM)</option>
                      <option>Evening (6 PM - 9 PM)</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-navy">
                      Select Test or Package
                    </label>
                    <select
                      required
                      value={test}
                      onChange={(e) => setTest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy transition-all duration-300 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    >
                      <option value="" disabled>
                        Choose a test or package...
                      </option>
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
                </motion.div>

                <motion.div custom={5} initial="hidden" animate="visible" variants={fieldVariants}>
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
                          checked={collection === "lab"}
                          onChange={(e) => setCollection(e.target.value)}
                          className="w-4 h-4 text-emerald accent-emerald"
                        />
                        <span className="text-sm text-navy/70">Visit Lab</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="collection"
                          value="home"
                          checked={collection === "home"}
                          onChange={(e) => setCollection(e.target.value)}
                          className="w-4 h-4 text-emerald accent-emerald"
                        />
                        <span className="text-sm text-navy/70">
                          Home Collection
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>

                <motion.div custom={6} initial="hidden" animate="visible" variants={fieldVariants}>
                  <Textarea
                    label="Additional Notes"
                    placeholder="Any specific requirements or instructions..."
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.div custom={7} initial="hidden" animate="visible" variants={fieldVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    magnetic
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Book Appointment"
                    )}
                  </Button>
                </motion.div>

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
