"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Cpu,
  CreditCard,
  Home,
  CalendarCheck,
  Wrench,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="relative py-20 md:py-28 lg:py-32 bg-primary/5 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-8%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[420px] h-[420px] rounded-full bg-navy/[0.05] blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary/15 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                The Hampton Difference
              </span>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Why Southampton Families{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Choose Us
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-navy/55 mt-5 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}
          >
            From same-day emergencies to membership plans for patients without
            insurance, our team keeps complete dental care comfortable,
            practical, and close to home.
          </motion.p>
        </div>

        {/* ──────── BENTO GRID ──────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(0,auto)] gap-4 md:gap-5">
          {/* ─── A · Featured DARK card (col-span-2 row-span-2) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative md:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[520px]
              rounded-[28px] overflow-hidden cursor-pointer
              bg-gradient-to-br from-navy via-navy-dark to-navy"
          >
            {/* Background image */}
            <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
              <Image
                src="/images/about_storytelling_1779858491119.webp"
                alt=""
                fill
                className="object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/70 to-navy-dark" />
            </div>

            {/* Ambient orbs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/30 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-[90px] pointer-events-none" />

            {/* Huge italic 01 number */}
            <div className="absolute top-6 right-7 font-heading italic text-white/15 text-7xl lg:text-8xl font-bold leading-none select-none">
              01
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-primary-light" />
                  <span className="text-primary-light text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Featured Pillar
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/40
                  flex items-center justify-center mb-6
                  group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <Heart className="w-6 h-6 text-primary-light group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="font-heading text-white text-3xl lg:text-4xl font-bold mb-4 leading-[1.05]"
                    style={{ letterSpacing: "-0.02em" }}>
                  Two Trusted{" "}
                  <span className="italic font-normal bg-gradient-to-r from-steel-light to-steel bg-clip-text text-transparent">
                    Dentists
                  </span>{" "}
                  in Southampton.
                </h3>
                <p className="text-white/65 text-[15px] leading-relaxed max-w-md mb-6">
                  Dr. Jeffrey Brenner and Dr. Keyur Dudhat bring decades of
                  combined experience and a genuinely gentle approach.
                </p>
              </div>

              {/* Footer mini-stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {[
                  { num: "4.9", lbl: "Rating" },
                  { num: "5K+", lbl: "Smiles" },
                  { num: "20+", lbl: "Years" },
                ].map((s) => (
                  <div key={s.lbl}>
                    <p className="font-heading text-white text-2xl font-bold leading-none tabular-nums">
                      {s.num}
                    </p>
                    <p className="text-white/45 text-[10px] tracking-widest uppercase mt-1">
                      {s.lbl}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700" />
          </motion.div>

          {/* ─── B · Same-Day (white card) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative rounded-[24px] overflow-hidden p-6 lg:p-7 min-h-[240px]
              bg-white border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.12)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.25)]
              hover:-translate-y-1
              transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute top-5 right-5 font-mono text-navy/15 text-[16px] tabular-nums">
              02
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20
                flex items-center justify-center mb-5
                group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <CalendarCheck className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-navy text-xl font-bold mb-2 leading-tight">
                Same-Day Emergencies
              </h3>
              <p className="text-navy/55 text-sm leading-relaxed">
                In pain today? We keep room in our schedule for urgent dental
                care whenever possible.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-4 mt-4 border-t border-navy/8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-navy/60 text-[11px] tracking-wider uppercase font-semibold">
                Available Today
              </span>
            </div>
          </motion.div>

          {/* ─── C · Modern Equipment (beige card) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="group relative rounded-[24px] overflow-hidden p-6 lg:p-7 min-h-[240px]
              bg-gradient-to-br from-beige to-beige-light border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.1)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.2)]
              hover:-translate-y-1
              transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute top-5 right-5 font-mono text-navy/15 text-[16px] tabular-nums">
              03
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-primary/15
                flex items-center justify-center mb-5 shadow-sm
                group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-navy text-xl font-bold mb-2 leading-tight">
                Comfort-First Care
              </h3>
              <p className="text-navy/55 text-sm leading-relaxed">
                From a calm, modern office to honest explanations at every step,
                we make dental visits something you don&apos;t dread.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-4 mt-4 border-t border-navy/8">
              <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              <span className="text-navy/60 text-[11px] tracking-wider uppercase font-semibold">
                State of the Art
              </span>
            </div>
          </motion.div>

          {/* ─── D · Advanced Technology (TEAL gradient, wide) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative md:col-span-2 rounded-[24px] overflow-hidden p-7 lg:p-8 min-h-[240px]
              bg-gradient-to-br from-primary via-primary to-primary-dark
              shadow-[0_15px_50px_-15px_rgba(30,96,118,0.4)]
              hover:shadow-[0_25px_70px_-15px_rgba(30,96,118,0.55)]
              hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.1] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Decorative orb */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-3xl pointer-events-none" />

            <div className="relative h-full flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex-1 max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-6 bg-white/60" />
                  <span className="text-white/80 text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Innovation · 04
                  </span>
                </div>
                <h3 className="font-heading text-white text-2xl lg:text-[1.7rem] font-bold leading-tight mb-2"
                    style={{ letterSpacing: "-0.02em" }}>
                  Everything{" "}
                  <span className="italic font-normal">Under One Roof</span>
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  General, cosmetic, restorative, and emergency dentistry — no
                  need to be referred elsewhere for most treatments.
                </p>
              </div>

              {/* Visual stack */}
              <div className="shrink-0 flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["3D", "AI", "X-Ray", "Laser"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] tracking-wider font-semibold whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ArrowUpRight className="absolute bottom-5 right-5 w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
          </motion.div>

          {/* ─── E · Flexible Financing (white wide) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative md:col-span-2 rounded-[24px] overflow-hidden p-7 lg:p-8 min-h-[220px]
              bg-white border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.12)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.2)]
              hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            <div className="absolute top-6 right-7 font-mono text-navy/15 text-[16px] tabular-nums">
              05
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20
                  flex items-center justify-center mb-4
                  group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <CreditCard className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-navy text-xl lg:text-2xl font-bold mb-2 leading-tight">
                  Affordable Without Insurance
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed max-w-md">
                  Our In-Office Membership Plans make quality care simple for
                  patients with no dental insurance — no deductibles, no annual
                  maximums.
                </p>
              </div>

              <div className="shrink-0 grid grid-cols-2 gap-2 max-w-[200px]">
                {[
                  "Insurance accepted",
                  "0% APR plans",
                  "Monthly options",
                  "No surprises",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-beige-light"
                  >
                    <Check className="w-2.5 h-2.5 text-primary shrink-0" strokeWidth={3} />
                    <span className="text-navy/70 text-[10px] font-semibold leading-tight">
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── F · Family-Friendly (beige wide with image) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative md:col-span-2 rounded-[24px] overflow-hidden min-h-[220px]
              bg-gradient-to-br from-beige to-beige-light border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.1)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.2)]
              hover:-translate-y-1 transition-all duration-500 cursor-pointer flex"
          >
            {/* Image side */}
            <div className="relative w-[40%] hidden sm:block overflow-hidden">
              <Image
                src="/images/family_dental_1779858082600.webp"
                alt="Family-friendly environment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-beige/30" />
            </div>

            {/* Content side */}
            <div className="flex-1 p-7 lg:p-8 flex flex-col justify-center relative">
              <div className="absolute top-5 right-5 font-mono text-navy/15 text-[16px] tabular-nums">
                06
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white border border-primary/15
                flex items-center justify-center mb-4 shadow-sm
                group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-navy text-xl lg:text-2xl font-bold mb-2 leading-tight">
                Family-Friendly{" "}
                <span className="italic font-normal text-primary">Space</span>
              </h3>
              <p className="text-navy/55 text-sm leading-relaxed mb-4 max-w-sm">
                Warm and welcoming for every age — toddlers, teens, parents, and
                grandparents.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-beige-light" />
                  <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-beige-light" />
                  <div className="w-6 h-6 rounded-full bg-primary/40 border-2 border-beige-light" />
                </div>
                <span className="text-navy/55 text-[11px] tracking-wide">
                  All ages welcome
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <p className="text-navy/55 text-sm">
            Ready to experience the Hampton difference?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full
              bg-navy text-white text-xs font-semibold tracking-[0.18em] uppercase
              hover:bg-primary hover:scale-105 active:scale-95
              transition-all duration-300"
          >
            <span>Book Your Visit</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
