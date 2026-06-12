"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Calendar,
  ShieldCheck,
} from "lucide-react";

const contactInfo: {
  icon: typeof MapPin;
  label: string;
  value: string;
  sub: string;
  href?: string;
}[] = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "283 Second Street Pike, Suite 140",
    sub: "Southampton, PA 18966",
    href: "https://www.google.com/maps/search/?api=1&query=283+Second+Street+Pike,+Suite+140,+Southampton,+PA+18966",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(215) 357-2224",
    sub: "Mon–Thu Office Hours",
    href: "tel:+12153572224",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@hamptonfamilydental.com",
    sub: "Replies within 24 hours",
    href: "mailto:hello@hamptonfamilydental.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon: 8am–6pm | Wed: 9am–1pm",
    sub: "Tue & Thu: 8am–4pm | Fri–Sun Closed",
  },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Invisalign",
  "Teeth Whitening",
  "Veneers",
  "Dental Implants",
  "Pediatric Dentistry",
  "Emergency Care",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-navy-dark"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.18]">
        <Image
          src="/images/clinic_interior_1779858062605.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/85 via-navy/80 to-navy-dark" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[420px] h-[420px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('/images/noise.webp')",
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-light" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-white/8 border border-white/15">
              <Sparkles className="w-3 h-3 text-primary-light" />
              <span className="text-white/90 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Get In Touch
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary-light" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-white"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Book Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent italic font-normal">
                Appointment
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent origin-left"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/55 mt-4 leading-relaxed text-sm md:text-base"
          >
            Ready to experience luxury dental care? Fill out the form below — we
            reply within hours, not days.
          </motion.p>
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* LEFT — Form (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[24px] overflow-hidden
                bg-white/[0.04] backdrop-blur-xl border border-white/10
                p-6 md:p-8 lg:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              {/* Decorative orb inside */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Mini header inside card */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary-light" />
                    </div>
                    <div>
                      <p className="font-heading text-white font-bold text-base leading-none">
                        Schedule a Visit
                      </p>
                      <p className="text-white/50 text-[11px] tracking-wide mt-1">
                        Free consultation · No obligation
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 text-[10px] tracking-widest uppercase font-semibold">
                      Replying now
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.05] border border-white/10
                        text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.08]
                        transition-all duration-300 placeholder-transparent"
                    />
                    <label
                      htmlFor="contact-name"
                      className="absolute left-4 top-2 text-[10px] text-primary-light font-semibold tracking-[0.15em] uppercase
                        peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                        peer-placeholder-shown:normal-case peer-placeholder-shown:text-white/40
                        peer-placeholder-shown:font-normal
                        peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.15em]
                        peer-focus:uppercase peer-focus:text-primary-light peer-focus:font-semibold
                        transition-all duration-200 pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.05] border border-white/10
                        text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.08]
                        transition-all duration-300 placeholder-transparent"
                    />
                    <label
                      htmlFor="contact-email"
                      className="absolute left-4 top-2 text-[10px] text-primary-light font-semibold tracking-[0.15em] uppercase
                        peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                        peer-placeholder-shown:normal-case peer-placeholder-shown:text-white/40
                        peer-placeholder-shown:font-normal
                        peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.15em]
                        peer-focus:uppercase peer-focus:text-primary-light peer-focus:font-semibold
                        transition-all duration-200 pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.05] border border-white/10
                        text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.08]
                        transition-all duration-300 placeholder-transparent"
                    />
                    <label
                      htmlFor="contact-phone"
                      className="absolute left-4 top-2 text-[10px] text-primary-light font-semibold tracking-[0.15em] uppercase
                        peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                        peer-placeholder-shown:normal-case peer-placeholder-shown:text-white/40
                        peer-placeholder-shown:font-normal
                        peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.15em]
                        peer-focus:uppercase peer-focus:text-primary-light peer-focus:font-semibold
                        transition-all duration-200 pointer-events-none"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.05] border border-white/10
                        text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.08]
                        transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-navy-dark text-white">
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option
                          key={s}
                          value={s.toLowerCase()}
                          className="bg-navy-dark text-white"
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="contact-service"
                      className="absolute left-4 top-2 text-[10px] text-primary-light font-semibold tracking-[0.15em] uppercase pointer-events-none"
                    >
                      Service
                    </label>
                    {/* Chevron */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                      ▾
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.05] border border-white/10
                      text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.08]
                      transition-all duration-300 resize-none placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-message"
                    className="absolute left-4 top-2 text-[10px] text-primary-light font-semibold tracking-[0.15em] uppercase
                      peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                      peer-placeholder-shown:normal-case peer-placeholder-shown:text-white/40
                      peer-placeholder-shown:font-normal
                      peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.15em]
                      peer-focus:uppercase peer-focus:text-primary-light peer-focus:font-semibold
                      transition-all duration-200 pointer-events-none"
                  >
                    Tell us what you need…
                  </label>
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitted}
                    className="group flex-1 relative inline-flex items-center justify-center gap-3
                      px-6 py-3.5 rounded-full
                      bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
                      shadow-[0_10px_40px_rgba(11,179,182,0.4)]
                      hover:shadow-[0_15px_50px_rgba(11,179,182,0.55)]
                      hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-300 overflow-hidden disabled:opacity-90"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {submitted ? (
                      <>
                        <CheckCircle2 className="relative z-10 w-5 h-5" />
                        <span className="relative z-10 text-sm tracking-wide">
                          Message Sent
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10 w-4 h-4" />
                        <span className="relative z-10 text-sm tracking-wide">
                          Send Message
                        </span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary-light" />
                    <span className="text-white/60 text-[11px]">
                      Your info is private & encrypted
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* RIGHT — Contact info (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-3"
          >
            {contactInfo.map((info, i) => {
              const Tag = info.href ? motion.a : motion.div;
              const linkProps = info.href
                ? {
                    href: info.href,
                    target: info.href.startsWith("http") ? "_blank" : undefined,
                    rel: info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};
              return (
                <Tag
                  key={info.label}
                  {...linkProps}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="group block rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10
                    hover:bg-white/[0.08] hover:border-primary/30
                    transition-all duration-500 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30
                      flex items-center justify-center shrink-0
                      group-hover:bg-primary group-hover:border-primary
                      transition-all duration-500">
                      <info.icon className="w-4 h-4 text-primary-light group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white/45 text-[10px] tracking-[0.2em] uppercase font-semibold mb-1">
                        {info.label}
                      </p>
                      <p className="font-semibold text-white text-sm leading-tight">
                        {info.value}
                      </p>
                      <p className="text-white/50 text-[11px] mt-1">{info.sub}</p>
                    </div>
                  </div>
                </Tag>
              );
            })}

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative overflow-hidden rounded-2xl p-5
                bg-gradient-to-br from-primary via-primary to-primary-dark
                shadow-[0_15px_40px_-15px_rgba(11,179,182,0.5)]"
            >
              {/* Decorative orb */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/15 blur-3xl pointer-events-none" />
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/85 text-[10px] tracking-[0.25em] uppercase font-bold">
                    Dental Emergency
                  </span>
                </div>
                <p className="font-heading text-white text-lg font-bold leading-tight mb-2">
                  Don&apos;t wait — call now.
                </p>
                <p className="text-white/75 text-[12px] leading-relaxed mb-4">
                  Same-day appointments available for urgent care.
                </p>
                <a
                  href="tel:+15551234567"
                  className="group flex items-center justify-between gap-2 pl-4 pr-2 py-2 rounded-full
                    bg-white text-primary-dark font-semibold
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    (215) 357-2224
                  </span>
                  <span className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
