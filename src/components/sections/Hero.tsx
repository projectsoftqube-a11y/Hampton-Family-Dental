"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  "Cosmetic Dentistry",
  "Invisalign",
  "Dental Implants",
  "Teeth Whitening",
  "Family Care",
  "Porcelain Veneers",
  "Emergency Care",
];

/*
  ─── Readability note ───
  Earlier versions laid the headline over the photograph and relied on
  scrims. That measured acceptable on *average* but read badly, because the
  luminance behind the copy swung across the full 0–255 range — text crossed
  black-to-white boundaries mid-word.

  This layout removes the problem rather than masking it: every word sits on
  a flat cool-mist panel (#F2F5F9) in navy (#143C50), which is a fixed ~13:1
  and a luminance swing of zero. The photograph gets its own half of the
  frame at full fidelity, with no overlay at all.

  Note: Header.tsx keys off `pathname === "/"` to render its light-surface
  treatment from the top — its white-on-transparent state would be invisible
  against this panel.
*/

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-beige-light lg:min-h-[100svh]"
    >
      {/* ───────── Photograph ─────────
          The image extends much further left than it appears to, then
          dissolves into the panel across a long horizontal ramp. That way
          there is no seam — the photo emerges out of the background rather
          than butting against it. The copy still sits over the fully opaque
          part of the ramp, so contrast stays a flat, known quantity. */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[77%] z-0">
        <Image
          src="/images/hero-family.png"
          alt="A multi-generational family smiling together — patients of Hampton Family Dental in Southampton, PA"
          fill
          priority
          sizes="80vw"
          className="object-cover object-right"
        />
        {/* The family is grouped in the right half of the photograph and its
            left half is already near-white window light, so this ramp is
            shorter and lighter than the one the old clinic interior needed —
            it only has to close the last of the tonal gap into the panel, not
            mask a busy image. object-right keeps the group anchored so a
            narrower viewport crops the empty left side, never their faces. */}
        <div
          className="absolute inset-y-0 left-0 w-[46%]"
          style={{
            background:
              "linear-gradient(90deg, #F2F5F9 0%, #F2F5F9 30%, rgba(242,245,249,0.80) 52%, rgba(242,245,249,0.45) 72%, rgba(242,245,249,0.12) 89%, rgba(242,245,249,0) 100%)",
          }}
        />
        {/* Soften the top and bottom edges into the panel as well, so the
            photo has no straight boundary on any side. */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-beige-light/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-beige-light/70 to-transparent" />
      </div>

      {/* Soft brand wash on the panel — decorative only, never behind copy. */}
      <div className="absolute top-[-15%] left-[-10%] w-[560px] h-[560px] rounded-full bg-primary/[0.07] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[420px] h-[420px] rounded-full bg-steel/[0.10] blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto lg:min-h-[100svh] grid lg:grid-cols-[53%_47%] items-center">
        {/* ───────── Copy panel ───────── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="px-5 md:px-10 lg:pl-14 lg:pr-12 pt-32 sm:pt-36 lg:pt-28 pb-14 lg:pb-28"
        >
          <div className="max-w-xl">
            {/* Headline — solid fills only, no gradient-clipped text. */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-heading text-navy mb-5 md:mb-7"
              style={{
                fontSize: "clamp(2.4rem, 4.4vw, 4.4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block">Your Family</span>
              <span className="block">
                Dentist in{" "}
                <span className="relative inline-block text-primary italic font-normal">
                  Southampton, PA
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-[2px] md:h-[3px]
                      bg-gradient-to-r from-primary to-transparent origin-left"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-navy/75 leading-relaxed text-[15px] md:text-base lg:text-[1.1rem] mb-3"
            >
              Gentle, modern dental care for every age — from routine cleanings
              to dental implants, Invisalign, cosmetic dentistry, and same-day
              emergency care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-dark text-xs md:text-[13px] italic tracking-wide mb-7 md:mb-9 font-medium"
            >
              Formerly Brenner Dental Group — same trusted team, same
              Southampton location.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 md:gap-4"
            >
              <Link
                href="/patient-information/scheduling"
                className="group relative inline-flex items-center gap-3
                  pl-7 pr-2 py-2 rounded-full
                  bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
                  shadow-[0_10px_35px_rgba(30,96,118,0.3)]
                  hover:shadow-[0_15px_50px_rgba(30,96,118,0.45)]
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-500 overflow-hidden"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0
                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <span className="relative z-10 text-sm tracking-wide">
                  Book an Appointment
                </span>
                <span className="relative z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>

              <Link
                href="tel:+12153572224"
                className="group inline-flex items-center gap-2.5
                  px-6 py-3.5 rounded-full
                  bg-white border border-navy/12 text-navy font-semibold text-sm
                  shadow-sm hover:border-primary/40 hover:shadow-md
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary group-hover:bg-primary-dark transition-colors">
                  <Phone className="w-3 h-3 text-white" />
                </span>
                <span>Call (215) 357-2224</span>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-7 flex flex-wrap items-center gap-2.5"
            >
              {[
                "5.0★ on Google · 119 reviews",
                "New patients welcome",
                "Most insurance accepted",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy/[0.07] px-3 py-1.5 text-navy/80 text-[11px] font-semibold shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ───────── Mobile / tablet photo — below the copy, never behind it.
            Top edge feathers into the panel so it reads as one surface. ───────── */}
        <div className="lg:hidden relative w-full aspect-[16/10] sm:aspect-[2/1]">
          <Image
            src="/images/hero-family.png"
            alt="A multi-generational family smiling together — patients of Hampton Family Dental in Southampton, PA"
            fill
            priority
            sizes="100vw"
            /* Right-anchored here too: at these short aspect ratios a centred
               crop would slice the grandmother out of the group. */
            className="object-cover object-right"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-beige-light via-beige-light/60 to-transparent" />
        </div>
      </div>

      {/* ───────── Bottom Service Marquee ───────── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative lg:absolute left-0 right-0 bottom-0 z-20"
      >
        <div className="relative border-t border-navy/[0.07] bg-white/92 backdrop-blur-xl overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex overflow-x-auto py-4 md:py-5 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex items-center justify-center gap-10 md:gap-12 whitespace-nowrap shrink-0 px-6 md:px-12 w-max mx-auto min-w-full">
              {services.map((service, i) => (
                <div
                  key={service}
                  className="flex items-center gap-10 md:gap-12"
                >
                  <span
                    className="font-heading italic text-navy/85 text-lg md:text-2xl"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {service}
                  </span>
                  {i < services.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
