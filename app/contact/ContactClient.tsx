"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

import { siteConfig } from "@/lib/data";
import Input, { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: [siteConfig.phone, siteConfig.phone2],
    action: `tel:${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["Chat with us on WhatsApp"],
    action: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: Mail,
    title: "Email",
    details: [siteConfig.email],
    action: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    details: [siteConfig.address],
    action: "https://maps.google.com/?q=Trust+Care+Diagnostics+Bhagalpur",
  },
  {
    icon: Clock,
    title: "Hours",
    details: [siteConfig.hours.weekday, siteConfig.hours.sunday],
    action: null,
  },
];

export default function ContactClient() {
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
            Get in <span className="text-emerald">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-dark max-w-2xl mx-auto"
          >
            Have questions? We&apos;re here to help. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div className="space-y-6">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-navy mb-8 font-semibold">
                  Contact Information
                </h2>
              </ScrollReveal>

              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-navy/[0.02] transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald/10 text-emerald">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy mb-1">
                        {method.title}
                      </h3>
                      {method.details.map((detail) =>
                        method.action ? (
                          <a
                            key={detail}
                            href={method.action}
                            target={
                              method.action.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.action.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block text-sm text-slate-dark hover:text-emerald transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-sm text-slate-dark">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Social */}
              <ScrollReveal delay={0.5}>
                <div className="flex gap-3 pt-4">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center hover:bg-emerald/10 hover:text-emerald transition-all"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center hover:bg-emerald/10 hover:text-emerald transition-all"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl border border-navy/5 shadow-xl shadow-navy/5 p-8">
                <h2 className="font-display text-2xl text-navy mb-6 font-semibold">
                  Send us a Message
                </h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input label="First Name" placeholder="John" />
                    <Input label="Last Name" placeholder="Doe" />
                  </div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="+91 9876543210"
                  />
                  <Input label="Subject" placeholder="How can we help?" />
                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                  />
                  <Button type="submit" className="w-full" magnetic>
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="mt-16 rounded-3xl overflow-hidden border border-navy/5 shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps?q=25.162078857421875,86.81985473632812&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trust Care Diagnostics Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
