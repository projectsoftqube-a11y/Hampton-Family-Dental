"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Quote,
  Sparkles,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Amanda Richardson",
    role: "Invisalign Patient",
    image: "/images/patient_testimonial_1_1779858256371.webp",
    quote:
      "From the moment I walked in, I felt like a VIP. The staff is incredibly warm, and Dr. Hampton made my Invisalign journey completely painless. My smile has never looked better.",
    rating: 5,
    short: "Felt like a VIP from day one.",
  },
  {
    name: "David Chen",
    role: "Cosmetic Patient",
    image: "/images/patient_testimonial_2_1779858279502.webp",
    quote:
      "I was terrified of dentists my whole life. Hampton changed everything — the gentle approach, the modern tech. I actually look forward to my appointments now.",
    rating: 5,
    short: "Finally, a dentist I'm not afraid of.",
  },
  {
    name: "Robert Thompson",
    role: "Family Patient",
    image: "/images/patient_testimonial_3_1779858302817.webp",
    quote:
      "Our entire family goes here. The kids love it, my wife loves it, and I love the results. Professional, caring, and always on time.",
    rating: 5,
    short: "The whole family loves it.",
  },
  {
    name: "Jessica Park",
    role: "Veneers Patient",
    quote:
      "The attention to detail with my veneers was unbelievable. They look so natural — everyone keeps asking if I did something different.",
    rating: 5,
    short: "Veneers that look completely natural.",
  },
  {
    name: "Michael Foster",
    role: "Whitening Patient",
    quote:
      "Eight shades brighter in one visit. Painless, fast, and the team explained every step. Best dental decision I've made.",
    rating: 5,
    short: "8 shades brighter in one visit.",
  },
  {
    name: "Sarah Liu",
    role: "Implants Patient",
    quote:
      "Implants felt intimidating, but they walked me through every stage. The result feels exactly like my own tooth. Couldn't recommend more.",
    rating: 5,
    short: "Couldn't tell it's not my own tooth.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[5%] right-[-8%] w-[480px] h-[480px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-navy/[0.05] blur-[120px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* ─── Header ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-beige-light border border-primary/15">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Patient Stories
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-navy"
              style={{
                fontSize: "clamp(1.85rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              What Our Patients{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                  Say
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                />
              </span>
            </motion.h2>
          </div>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-beige-light border border-navy/[0.06] shadow-sm self-start lg:self-end"
          >
            <div className="w-11 h-11 rounded-xl bg-white border border-primary/15 flex items-center justify-center shadow-sm">
              <BadgeCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="font-heading text-navy font-bold text-sm leading-none ml-1">
                  4.9
                </span>
              </div>
              <p className="text-navy/55 text-[10px] tracking-wider uppercase mt-1 font-semibold">
                500+ Verified Reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(0,auto)] gap-4">
          {/* A · FEATURED DARK card (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative md:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[480px]
              rounded-[24px] overflow-hidden cursor-default
              bg-gradient-to-br from-navy via-navy-dark to-navy"
          >
            {/* Bg patient photo */}
            <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700">
              <Image
                src={testimonials[0].image!}
                alt=""
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/65 to-navy-dark" />
            </div>

            {/* Orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/30 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/15 blur-[90px] pointer-events-none" />

            {/* Giant decorative quote */}
            <Quote
              className="absolute top-6 right-6 w-36 h-36 text-primary/15 -rotate-180 pointer-events-none"
              strokeWidth={1}
            />

            <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-px w-8 bg-primary-light" />
                  <span className="text-primary-light text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Featured Story
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary-light text-primary-light"
                    />
                  ))}
                </div>

                {/* Big quote */}
                <p
                  className="font-heading italic text-white text-xl lg:text-2xl leading-snug mb-7 max-w-md"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
              </div>

              {/* Author block */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40">
                    <Image
                      src={testimonials[0].image!}
                      alt={testimonials[0].name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-white font-bold text-sm">
                      {testimonials[0].name}
                    </p>
                    <p className="text-white/50 text-[11px] tracking-wide">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                  <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B · White card (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative rounded-[20px] overflow-hidden p-5 lg:p-6 min-h-[230px]
              bg-white border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.1)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.2)]
              hover:-translate-y-1 transition-all duration-500 cursor-default flex flex-col"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/8 -rotate-180" strokeWidth={1} />

            <div className="flex gap-0.5 mb-3">
              {[...Array(testimonials[3].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-heading text-navy text-base font-semibold leading-snug mb-3 italic">
              &ldquo;{testimonials[3].short}&rdquo;
            </p>
            <p className="text-navy/55 text-[12px] leading-relaxed mb-auto line-clamp-3">
              {testimonials[3].quote}
            </p>
            <div className="flex items-center gap-2.5 pt-4 mt-3 border-t border-navy/8">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-xs">
                {testimonials[3].name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-heading text-navy font-bold text-[12px] leading-tight">
                  {testimonials[3].name}
                </p>
                <p className="text-primary text-[10px]">{testimonials[3].role}</p>
              </div>
            </div>
          </motion.div>

          {/* C · Beige card (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="group relative rounded-[20px] overflow-hidden p-5 lg:p-6 min-h-[230px]
              bg-gradient-to-br from-beige to-beige-light border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.08)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.18)]
              hover:-translate-y-1 transition-all duration-500 cursor-default flex flex-col"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/12 -rotate-180" strokeWidth={1} />

            <div className="flex gap-0.5 mb-3">
              {[...Array(testimonials[4].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-heading text-navy text-base font-semibold leading-snug mb-3 italic">
              &ldquo;{testimonials[4].short}&rdquo;
            </p>
            <p className="text-navy/60 text-[12px] leading-relaxed mb-auto line-clamp-3">
              {testimonials[4].quote}
            </p>
            <div className="flex items-center gap-2.5 pt-4 mt-3 border-t border-navy/8">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-xs">
                {testimonials[4].name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-heading text-navy font-bold text-[12px] leading-tight">
                  {testimonials[4].name}
                </p>
                <p className="text-primary text-[10px]">{testimonials[4].role}</p>
              </div>
            </div>
          </motion.div>

          {/* D · TEAL gradient wide (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative md:col-span-2 rounded-[20px] overflow-hidden p-6 lg:p-7 min-h-[230px]
              bg-gradient-to-br from-primary via-primary to-primary-dark
              shadow-[0_15px_50px_-15px_rgba(30,96,118,0.4)]
              hover:shadow-[0_25px_70px_-15px_rgba(30,96,118,0.55)]
              hover:-translate-y-1 transition-all duration-500 cursor-default flex flex-col justify-between"
          >
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-3xl pointer-events-none" />

            <Quote className="absolute top-5 right-6 w-12 h-12 text-white/20 -rotate-180" strokeWidth={1} />

            <div className="relative">
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <p
                className="font-heading text-white text-lg lg:text-xl italic leading-snug max-w-xl"
                style={{ letterSpacing: "-0.01em" }}
              >
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
            </div>

            <div className="relative flex items-center gap-3 pt-5 mt-5 border-t border-white/15">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                <Image
                  src={testimonials[1].image!}
                  alt={testimonials[1].name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading text-white font-bold text-sm leading-tight">
                  {testimonials[1].name}
                </p>
                <p className="text-white/70 text-[11px]">{testimonials[1].role}</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                <span className="text-white text-[9px] tracking-widest uppercase font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </motion.div>

          {/* E · Beige wide with photo (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative md:col-span-2 rounded-[20px] overflow-hidden min-h-[200px]
              bg-gradient-to-br from-beige to-beige-light border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.08)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.18)]
              hover:-translate-y-1 transition-all duration-500 cursor-default flex"
          >
            {/* Photo side */}
            <div className="relative w-[35%] sm:block hidden overflow-hidden">
              <Image
                src={testimonials[2].image!}
                alt={testimonials[2].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                sizes="250px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-beige/40" />
            </div>

            <div className="flex-1 p-5 lg:p-7 flex flex-col justify-between relative">
              <Quote className="absolute top-4 right-5 w-10 h-10 text-primary/10 -rotate-180" strokeWidth={1} />

              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-heading text-navy text-base lg:text-lg italic leading-snug max-w-md">
                  &ldquo;{testimonials[2].quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-navy/10">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/25 sm:hidden block">
                  <Image
                    src={testimonials[2].image!}
                    alt={testimonials[2].name}
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-navy font-bold text-sm leading-tight">
                    {testimonials[2].name}
                  </p>
                  <p className="text-primary text-[11px]">{testimonials[2].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* F · White wide with stats (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative md:col-span-2 rounded-[20px] overflow-hidden p-5 lg:p-7 min-h-[200px]
              bg-white border border-navy/[0.06]
              shadow-[0_15px_50px_-25px_rgba(20,60,80,0.1)]
              hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.18)]
              hover:-translate-y-1 transition-all duration-500 cursor-default flex flex-col justify-between"
          >
            <Quote className="absolute top-4 right-5 w-10 h-10 text-primary/10 -rotate-180" strokeWidth={1} />

            <div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonials[5].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading text-navy text-base lg:text-lg italic leading-snug max-w-md mb-3">
                &ldquo;{testimonials[5].quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-navy/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-sm">
                  {testimonials[5].name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-navy font-bold text-sm leading-tight">
                    {testimonials[5].name}
                  </p>
                  <p className="text-primary text-[11px]">{testimonials[5].role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[9px] tracking-widest uppercase font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <p className="text-navy/55 text-sm">
            Join 5,000+ patients who love their smiles
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full
              bg-navy text-white text-xs font-semibold tracking-[0.18em] uppercase
              hover:bg-primary hover:scale-105 active:scale-95
              shadow-[0_8px_25px_-10px_rgba(20,60,80,0.4)]
              transition-all duration-300"
          >
            <span>Write Your Story</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
