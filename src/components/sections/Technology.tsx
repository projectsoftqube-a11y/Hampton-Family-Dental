"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Scan,
  Box,
  Zap,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  ArrowUpRight,
  Check,
  BadgeCheck,
} from "lucide-react";

const technologies = [
  {
    icon: Scan,
    title: "Digital X-Rays",
    tag: "Imaging",
    stat: "90%",
    statLabel: "Less Radiation",
    desc: "Crystal-clear digital imagery captured in seconds with a fraction of the radiation of traditional film X-rays.",
    features: [
      "Instant high-resolution capture",
      "90% less radiation",
      "Real-time chair-side review",
    ],
    image: "/images/dental_technology_1779858148872.webp",
  },
  {
    icon: Box,
    title: "3D Smile Scanning",
    tag: "Diagnostics",
    stat: "Mess-Free",
    statLabel: "No Impressions",
    desc: "Full mouth and jaw 3D imaging for treatment planning — without the mess of putty impressions.",
    features: [
      "Comfortable, mess-free scan",
      "Implant & aligner mapping",
      "View your smile in 3D",
    ],
    image: "/images/clinic_interior_1779858062605.webp",
  },
  {
    icon: Zap,
    title: "Soft-Tissue Laser",
    tag: "Treatment",
    stat: "Faster",
    statLabel: "Comfortable Healing",
    desc: "Minimally invasive laser dentistry for gum therapy and cavity care — gentler than a drill.",
    features: [
      "Gentler than traditional tools",
      "Less bleeding & swelling",
      "Often no anesthesia needed",
    ],
    image: "/images/service_general_1779858374972.webp",
  },
  {
    icon: Stethoscope,
    title: "Intraoral Cameras",
    tag: "Visibility",
    stat: "See It",
    statLabel: "Together With Us",
    desc: "Pen-sized HD cameras let you and your dentist see exactly what's happening — care decisions are transparent.",
    features: [
      "HD chair-side viewing",
      "Patient-friendly walkthroughs",
      "Honest, transparent diagnoses",
    ],
    image: "/images/about_storytelling_1779858491119.webp",
  },
  {
    icon: ShieldCheck,
    title: "Sterilization Suite",
    tag: "Safety",
    stat: "Hospital",
    statLabel: "Grade Protocol",
    desc: "Autoclave-validated instruments and CDC-aligned procedures — every tool meets the highest standards.",
    features: [
      "Hospital-grade autoclave cycles",
      "Single-use barrier protocols",
      "CDC-compliant procedures",
    ],
    image: "/images/reception_area_1779858343255.webp",
  },
];

const trustBadges = [
  { label: "ADA", sub: "Member" },
  { label: "FDA", sub: "Approved" },
  { label: "CDC", sub: "Compliant" },
  { label: "HIPAA", sub: "Secured" },
];

export default function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const active = technologies[activeIndex];
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track visibility — only auto-rotate when the section is in view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate every 5s while visible. The `activeIndex` dep restarts the
  // timer whenever the user manually picks a tab so the next tech won't
  // appear immediately after a manual click.
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isVisible, activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative py-16 md:py-20 lg:py-24 bg-beige-light overflow-hidden"
    >
      {/* Soft ambient orbs */}
      <div className="absolute top-[10%] right-[-6%] w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
        {/* ─── Compact Header ─── */}
        <div className="text-center mb-8 lg:mb-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/15 shadow-sm">
              <HeartPulse className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Care, Modernized
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.85rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Gentle Care, Built on{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Modern Tools
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* ──────── COMPACT SHOWCASE ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[24px] overflow-hidden border border-navy/[0.06]
            shadow-[0_25px_60px_-25px_rgba(20,60,80,0.15)]"
        >
          {/* ─── Horizontal Tab Chips ─── */}
          <div className="relative border-b border-navy/8 bg-beige-light/40 overflow-x-auto no-scrollbar">
            <div className="flex min-w-max">
              {technologies.map((t, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={t.title}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex items-center gap-2.5 px-4 md:px-5 py-4 transition-colors duration-300 group
                      ${isActive ? "text-navy" : "text-navy/55 hover:text-navy"}
                    `}
                  >
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="techTabUnderline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-full"
                      />
                    )}

                    {/* Number */}
                    <span
                      className={`font-mono text-[10px] tabular-nums ${
                        isActive ? "text-primary" : "text-navy/30"
                      }`}
                    >
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300
                        ${
                          isActive
                            ? "bg-primary border border-primary"
                            : "bg-white border border-navy/10 group-hover:border-primary/30"
                        }
                      `}
                    >
                      <t.icon
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white" : "text-primary/80"
                        }`}
                        style={{ width: "14px", height: "14px" }}
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* Label */}
                    <span className="text-xs md:text-[13px] font-semibold whitespace-nowrap">
                      {t.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Active Tech Detail Row ─── */}
          <div className="grid md:grid-cols-12 min-h-[280px]">
            {/* Image */}
            <div className="md:col-span-5 lg:col-span-5 relative h-[200px] md:h-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  {/* Soft right-side gradient for the seam */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/40 hidden md:block" />
                </motion.div>
              </AnimatePresence>

              {/* Floating tag chip */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-primary/15 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-navy text-[10px] tracking-[0.25em] uppercase font-semibold">
                  {active.tag}
                </span>
              </div>

              {/* Case number */}
              <div className="absolute top-4 right-4 z-10 flex items-end gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-navy/8 shadow-sm">
                <span className="font-heading italic text-navy text-sm font-bold leading-none">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-navy/40 text-[9px] tracking-widest pb-0.5">
                  / {String(technologies.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 p-6 md:p-7 lg:p-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Title row with stat */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-heading text-navy text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {active.title}
                    </h3>

                    {/* Stat callout */}
                    <div className="shrink-0 text-right">
                      <p className="font-heading text-primary-dark text-xl md:text-2xl font-bold leading-none">
                        {active.stat}
                      </p>
                      <p className="text-navy/45 text-[9px] tracking-widest uppercase font-semibold mt-1">
                        {active.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-navy/55 text-sm leading-relaxed mb-5">
                    {active.desc}
                  </p>

                  {/* Features inline */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {active.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                        </span>
                        <span className="text-navy/70 text-[12px]">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ─── Compact Trust Strip + CTA in one row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-col md:flex-row items-stretch gap-3"
        >
          {/* Trust badges */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 bg-white rounded-2xl border border-navy/[0.06] p-4 shadow-[0_10px_30px_-15px_rgba(20,60,80,0.1)]">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="group flex items-center gap-2.5 transition-all duration-300 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20
                  flex items-center justify-center shrink-0
                  group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <BadgeCheck className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-navy font-bold text-sm leading-none truncate">
                    {b.label}
                  </p>
                  <p className="text-navy/45 text-[10px] tracking-wide mt-0.5 truncate">
                    {b.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <a
            href="#contact"
            className="group shrink-0 flex items-center justify-between gap-3 px-5 py-4 rounded-2xl
              bg-gradient-to-r from-primary to-primary-dark text-white
              shadow-[0_10px_30px_rgba(30,96,118,0.35)]
              hover:shadow-[0_15px_40px_rgba(30,96,118,0.5)]
              hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <div className="text-left">
              <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase font-semibold leading-none mb-1">
                Curious?
              </p>
              <p className="font-semibold text-sm leading-none">Book a Tour</p>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
