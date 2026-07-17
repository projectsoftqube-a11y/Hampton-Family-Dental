"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Phone,
  ArrowUpRight,
  Check,
  Star,
  Award,
} from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />

      {/* Ambient orbs */}
      <div className="absolute top-[-30%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('/images/noise.webp')",
        }}
      />

      {/* Vertical accent text */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 pointer-events-none">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-white/25" />
        <span
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap font-semibold"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          New · Patient · Offer
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT — Editorial content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Pulse chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
              <Sparkles className="w-3 h-3 text-primary-light" />
              <span className="text-primary-light text-[10px] tracking-[0.25em] uppercase font-semibold">
                New Patients Welcome
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-heading text-white mb-5"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              New to Hampton{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-steel-light via-steel to-steel-light bg-clip-text text-transparent italic font-normal">
                  Family Dental?
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent origin-left"
                />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-7 max-w-xl">
              We&apos;re currently welcoming new patients of all ages in
              Southampton and nearby communities. Booking your first visit is
              easy — and we&apos;ll handle the rest.
            </p>

            {/* Trust signal pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "New patients welcome",
                "Easy first visit",
                "Insurance accepted",
                "Same-day available",
              ].map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-sm"
                >
                  <Check className="w-3 h-3 text-primary-light" strokeWidth={3} />
                  <span className="text-white/75 text-[11px] font-semibold">
                    {s}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/patient-information/new-patients"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2
                  rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
                  shadow-[0_10px_40px_rgba(30,96,118,0.4)]
                  hover:shadow-[0_15px_60px_rgba(30,96,118,0.6)]
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Calendar className="relative z-10 w-4 h-4" />
                <span className="relative z-10 text-sm tracking-wide">
                  Book Your First Visit
                </span>
                <span className="relative z-10 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>

              <a
                href="tel:+12153572224"
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full
                  backdrop-blur-md bg-white/8 border border-white/25 text-white text-sm font-semibold
                  hover:bg-white/15 hover:border-white/40 hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-primary-light" />
                <span>(215) 357-2224</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — VIP Care Pass card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="lg:col-span-5 relative"
          >
            {/* Glow halo */}
            <div className="absolute -inset-4 bg-primary/15 blur-2xl rounded-[2rem] -z-10" />

            <div className="relative bg-gradient-to-br from-beige-light via-white to-beige-light
              rounded-[2rem] overflow-hidden
              shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]
              border border-white/40">

              {/* Decorative perforation strip on top */}
              <div className="absolute top-[88px] left-0 right-0 flex justify-between px-1 z-10 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-navy-dark/95"
                  />
                ))}
              </div>
              {/* Notch left + right */}
              <div className="absolute top-[83px] -left-2.5 w-5 h-5 rounded-full bg-navy-dark/95 z-10" />
              <div className="absolute top-[83px] -right-2.5 w-5 h-5 rounded-full bg-navy-dark/95 z-10" />

              {/* Top band */}
              <div className="relative bg-gradient-to-br from-navy via-navy-dark to-navy px-7 py-6">
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary-light" />
                    <span className="text-primary-light text-[10px] tracking-[0.3em] uppercase font-bold">
                      Hampton Care Pass
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-primary-light text-primary-light"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main coupon body */}
              <div className="pt-8 pb-7 px-7 lg:px-8 relative">
                <p className="font-mono text-navy/40 text-[10px] tracking-[0.3em] uppercase mb-2">
                  No. 2026·HFD·001
                </p>

                <h3
                  className="font-heading text-navy font-bold leading-[1.05] mb-4"
                  style={{
                    fontSize: "clamp(1.85rem, 3vw, 2.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $69 Emergency{" "}
                  <span className="italic font-normal bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    Visit
                  </span>
                </h3>

                <p className="text-navy/55 text-[13px] leading-relaxed mb-5">
                  Includes a limited emergency exam and diagnostic X-rays. Get relief when you need it.
                </p>

                {/* Value strip */}
                <div className="flex items-stretch gap-3 mb-5">
                  <div className="flex-1 rounded-xl bg-beige-light border border-navy/8 px-3 py-2.5">
                    <p className="text-navy/45 text-[9px] tracking-widest uppercase font-semibold">
                      Value
                    </p>
                    <p className="font-heading text-navy text-lg font-bold leading-none mt-0.5 line-through decoration-navy/40">
                      $150
                    </p>
                  </div>
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 px-3 py-2.5">
                    <p className="text-primary text-[9px] tracking-widest uppercase font-semibold">
                      Your Price
                    </p>
                    <p className="font-heading text-primary-dark text-lg font-bold leading-none mt-0.5">
                      $69
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-4 border-t border-dashed border-navy/15">
                  <div>
                    <p className="text-navy/35 text-[9px] tracking-[0.2em] uppercase">
                      Valid Through
                    </p>
                    <p className="font-mono text-navy font-bold text-xs mt-0.5 tracking-wide">
                      DEC · 31 · 2026
                    </p>
                  </div>

                  {/* Mock barcode */}
                  <div className="flex items-end gap-[1.5px] h-7">
                    {[3,5,2,4,6,2,5,3,4,5,2,6,3,4,2,5,4,3].map((h, i) => (
                      <span
                        key={i}
                        className="w-[2px] bg-navy"
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "NEW" stamp */}
            <div className="absolute -top-3 -right-3 w-16 h-16 z-10 pointer-events-none">
              <div className="relative w-full h-full rounded-full bg-primary
                shadow-[0_10px_30px_rgba(30,96,118,0.5)]
                flex flex-col items-center justify-center text-white
                rotate-12">
                <span className="font-mono text-[8px] tracking-widest leading-none">2026</span>
                <span className="font-heading italic text-base font-bold leading-none mt-0.5">NEW</span>
                <span className="font-mono text-[7px] tracking-widest leading-none mt-0.5">OFFER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
