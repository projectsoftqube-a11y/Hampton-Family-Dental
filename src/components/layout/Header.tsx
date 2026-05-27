"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Phone, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Technology", href: "#technology" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  // Timer that brings the header back after the user stops scrolling.
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track active section
  useEffect(() => {
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 150;
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollObserver);
    return () => window.removeEventListener("scroll", handleScrollObserver);
  }, []);

  // Show/hide + scrolled state
  // Strategy: hide on downward scroll past 200px, then bring it back as soon
  // as the user stops scrolling (200ms of stillness counts as "stopped").
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    setIsScrolled(latest > 60);

    if (latest > 200 && diff > 8) {
      // Actively scrolling downward — hide the header.
      setIsHidden(true);
    } else if (latest <= 200) {
      // Near the top — always show.
      setIsHidden(false);
    }

    // Reset the idle timer on every scroll event. When this timeout fires,
    // it means no scroll has happened for the timeout window → user has
    // stopped → show the header again.
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsHidden(false);
    }, 200);

    lastScrollY.current = latest;
  });

  // Cleanup the idle timer on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: isHidden ? -160 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* ────────── Top Utility Bar (collapses on scroll) ────────── */}
        <motion.div
          initial={false}
          animate={{
            height: isScrolled ? 0 : 40,
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden hidden md:block"
        >
          <div className="bg-navy-dark/40 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between text-[11px] text-white/70">
              <div className="flex items-center gap-6">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="tracking-wide">(555) 123-4567</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  <span className="tracking-wide">123 Smile Ave, Hampton</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span className="tracking-wide">
                    Mon–Sat · 8:00 AM – 6:00 PM
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-widest uppercase text-white/60">
                  Now Accepting New Patients
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ────────── Main Bar ────────── */}
        {/* Static backdrop-blur with CSS transitions on cheap properties only.
            Previously animated backdrop-filter via framer-motion per-frame —
            backdrop-filter is one of the most expensive CSS properties to
            interpolate, which caused noticeable lag. */}
        <div
          className={`border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-out
            ${isScrolled
              ? "bg-white/[0.92] border-navy/[0.06] shadow-[0_2px_30px_rgba(40,47,90,0.05)]"
              : "bg-transparent border-white/[0.08] shadow-none"
            }`}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between h-[68px] md:h-[80px]">
            {/* ──────── Logo ──────── */}
            <Link href="#home" className="flex items-center group relative">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt="Hampton Family Dental"
                  width={260}
                  height={65}
                  priority
                  className={`h-9 sm:h-10 md:h-12 w-auto object-contain transition-all duration-500
                    ${isScrolled ? "" : "brightness-0 invert"}
                  `}
                />
                {/* Subtle teal glow behind logo on dark state */}
                {!isScrolled && (
                  <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full -z-10" />
                )}
              </motion.div>
            </Link>

            {/* ──────── Desktop Nav ──────── */}
            <nav
              onMouseLeave={() => setHoveredLink(null)}
              className="hidden lg:flex items-center gap-1 relative"
            >
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                const isHovered = hoveredLink === id;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(id)}
                    className="relative px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase group"
                  >
                    {/* Hover bg pill */}
                    {isHovered && (
                      <motion.span
                        layoutId="hoverPill"
                        className={`absolute inset-0 rounded-full ${
                          isScrolled ? "bg-primary/8" : "bg-white/10"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? isScrolled
                            ? "text-primary"
                            : "text-primary-light"
                          : isScrolled
                            ? "text-navy/70 group-hover:text-primary"
                            : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full ${
                          isScrolled ? "bg-primary" : "bg-primary-light"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ──────── Right side: CTA + Hamburger ──────── */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone (desktop, secondary visibility) */}
              <a
                href="tel:+15551234567"
                className={`hidden xl:flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? "text-navy/70 hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Call us"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold tracking-wider">
                  (555) 123-4567
                </span>
              </a>

              {/* CTA button */}
              <Link
                href="#contact"
                className={`hidden sm:flex items-center gap-2 pl-5 pr-2 py-2 rounded-full
                  text-xs font-semibold tracking-[0.14em] uppercase
                  shadow-[0_4px_20px_rgba(11,179,182,0.25)]
                  hover:shadow-[0_8px_30px_rgba(11,179,182,0.4)]
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300 group overflow-hidden relative
                  ${
                    isScrolled
                      ? "bg-navy text-white hover:bg-navy-dark"
                      : "bg-white text-navy hover:bg-primary hover:text-white"
                  }
                `}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Book Visit</span>
                <span
                  className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-primary group-hover:bg-primary-light"
                      : "bg-primary text-white"
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
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
      </motion.header>

      {/* ────────── Mobile Menu ────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            links={navLinks}
            activeSection={activeSection}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
