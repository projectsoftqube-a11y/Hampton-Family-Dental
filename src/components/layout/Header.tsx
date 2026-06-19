"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";
import { mainNav, practiceInfo } from "@/lib/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 60;
    setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* ────────── Top Utility Bar (collapses on scroll) ────────── */}
        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 0 : 36,
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden hidden lg:block"
        >
          <div className="bg-navy-dark/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 xl:px-10 h-9 flex items-center justify-between text-[10.5px] text-white/65">
              <div className="flex items-center gap-5">
                <a
                  href={practiceInfo.phoneTel}
                  className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="tracking-wide font-medium">
                    Now Welcoming New Patients in Southampton, PA — Call{" "}
                    {practiceInfo.phone}
                  </span>
                </a>
                <span className="w-px h-3 bg-white/15" />
                <a
                  href={practiceInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span className="tracking-wide">
                    {practiceInfo.address.short}
                  </span>
                </a>
                <span className="w-px h-3 bg-white/15" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-primary-light/70" />
                  <span className="tracking-wide hidden 2xl:inline">
                    Mon: 8–6 · Tue: 8–4 · Wed: 9–1 · Thu: 8–4
                  </span>
                  <span className="tracking-wide 2xl:hidden">
                    Mon–Thu · See Hours
                  </span>
                </span>
              </div>
              <Link
                href="/specials"
                className="flex items-center gap-2 group hover:text-primary-light transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-widest uppercase text-white/55 group-hover:text-primary-light transition-colors font-medium">
                  No Insurance? No Problem
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ────────── Main Nav Bar ────────── */}
        <div
          className={`border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-out
            ${
              isScrolled
                ? "bg-white/[0.95] border-navy/[0.06] shadow-[0_2px_30px_rgba(40,47,90,0.06)]"
                : "bg-navy-dark/20 border-white/[0.08] shadow-none"
            }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-5 2xl:px-10 flex items-center justify-between h-[64px] md:h-[72px]">
            {/* ──────── Logo ──────── */}
            <Link
              href="/"
              className="flex items-center group relative shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt="Hampton Family Dental"
                  width={220}
                  height={55}
                  priority
                  className={`h-8 sm:h-9 xl:h-[32px] 2xl:h-10 w-auto object-contain transition-all duration-500
                    ${isScrolled ? "" : "brightness-0 invert"}
                  `}
                />
                {!isScrolled && (
                  <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full -z-10" />
                )}
              </motion.div>
            </Link>

            {/* ──────── Desktop Nav ──────── */}
            <nav className="hidden xl:flex items-center gap-0 mx-1 2xl:mx-4 relative">
              {mainNav.map((item) => (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  isScrolled={isScrolled}
                  pathname={pathname}
                />
              ))}
            </nav>

            {/* ──────── Right Actions ──────── */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Phone — icon only on desktop nav, full on utility bar hidden */}
              <a
                href={practiceInfo.phoneTel}
                className={`hidden xl:flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? "text-navy/60 hover:text-primary hover:bg-primary/5"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Call (215) 357-2224"
                title="Call (215) 357-2224"
              >
                <Phone className="w-4 h-4" />
                <span className="sr-only">215-357-2224</span>
              </a>

              {/* Schedule Now CTA */}
              <Link
                href="/patient-information/scheduling"
                className={`hidden sm:flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full
                  text-[11px] font-bold tracking-[0.1em] uppercase
                  shadow-[0_4px_20px_rgba(11,179,182,0.25)]
                  hover:shadow-[0_8px_30px_rgba(11,179,182,0.4)]
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300 group overflow-hidden relative
                  ${
                    isScrolled
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-white text-navy hover:bg-primary hover:text-white"
                  }
                `}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Schedule Now</span>
                <span
                  className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-white/20 group-hover:bg-white/30"
                      : "bg-primary text-white"
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>

              {/* Hamburger — visible below xl */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`xl:hidden relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? "bg-navy/5 border-navy/10 text-navy hover:bg-navy/10"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: mobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ────────── Mobile Menu ────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
