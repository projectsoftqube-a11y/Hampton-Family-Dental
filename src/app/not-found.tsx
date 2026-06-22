"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight, Phone } from "lucide-react";

export default function NotFound() {
  const inlineLinks = [
    { label: "Why Choose Us", href: "/patient-information/why-choose-us" },
    { label: "Our Services", href: "/#services" },
    { label: "Wellness Specials", href: "/specials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <main className="min-h-[85vh] bg-navy-dark text-white pt-[160px] pb-24 overflow-hidden relative flex flex-col justify-center items-center">
      {/* ─── Ambient Glow Backgrounds ─── */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-light/5 blur-[130px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Large Typographic 404 Anchor */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-light/20 text-8xl sm:text-9xl md:text-[12rem] font-heading font-black tracking-tighter leading-none select-none mb-6"
        >
          404
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-white leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight"
        >
          Page Not Found
        </motion.h1>

        {/* Clear Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10"
        >
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Please use the links below to navigate back to our main sections.
        </motion.p>

        {/* Direct Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          {/* Return Home */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 rounded-full w-full sm:w-auto
              bg-primary text-white text-[11px] font-bold tracking-[0.1em] uppercase
              shadow-[0_4px_20px_rgba(11,179,182,0.2)] hover:shadow-[0_8px_30px_rgba(11,179,182,0.35)]
              hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Return Home
            </span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          {/* Book Appointment */}
          <Link
            href="/patient-information/scheduling"
            className="inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 rounded-full w-full sm:w-auto
              bg-white/10 text-white text-[11px] font-bold tracking-[0.1em] uppercase
              border border-white/10 hover:border-white/20 hover:bg-white/15
              hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary-light" />
              Schedule Visit
            </span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Minimalist Inline Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full border-t border-white/10 pt-8"
        >
          <p className="text-[18px] tracking-[0.10em] uppercase font-bold mb-4 text-white/90">
            Quick Navigation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            {inlineLinks.map((item, idx) => (
              <span key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  {item.label}
                </Link>
                {idx < inlineLinks.length - 1 && (
                  <span className="ml-6 text-white/25 select-none font-light">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Emergency/Support Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-white/50 text-[11px] flex items-center justify-center gap-1"
        >
          <span>Need immediate assistance?</span>
          <a
            href="tel:+12153572224"
            className="text-primary-light hover:text-white font-bold flex items-center gap-1 transition-colors underline decoration-primary/20 hover:decoration-white shrink-0"
          >
            <Phone className="w-3 h-3" />
            Call (215) 357-2224
          </a>
        </motion.div>
      </div>
    </main>
  );
}
