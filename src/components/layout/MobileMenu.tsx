"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  X,
  ArrowUpRight,
  Calendar,
  Sparkles,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

// Lenis instance exposed by SmoothScrollProvider — used to scroll smoothly
// to the target section when a menu link is clicked.
type LenisLike = {
  scrollTo: (
    target: HTMLElement | string | number,
    options?: { offset?: number; duration?: number }
  ) => void;
};

interface MobileMenuProps {
  links: { label: string; href: string }[];
  activeSection?: string;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.25 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.4 },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function MobileMenu({
  links,
  activeSection = "home",
  onClose,
}: MobileMenuProps) {
  // Centralized nav-link handler — closes the menu and smoothly scrolls to
  // the target section. The global SmoothScrollProvider handler is told to
  // ignore clicks inside this menu via the data-skip-smooth-scroll marker
  // so we never get racing handlers.
  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();

    const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";
    const hasHash = href.includes("#");

    if (isHomePage && hasHash) {
      const id = href.split("#")[1];
      onClose();

      // Run the scroll on the next frame so the menu starts its exit animation
      // before we move the page underneath it.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -72, duration: 1.4 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (window.history.replaceState) {
          window.history.replaceState(null, "", href);
        }
      });
    } else {
      onClose();
      // Navigate to another page or external link
      window.location.href = href;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      data-skip-smooth-scroll
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-navy-dark/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel — promoted to its own compositing layer so the slide-in transform
          doesn't force a re-rasterization of the heavy blurred orbs inside. */}
      <motion.div
        variants={panelVariants}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="absolute right-0 top-0 bottom-0 w-[92%] max-w-[420px]
          bg-gradient-to-br from-navy-dark via-navy to-navy-dark
          shadow-[-30px_0_80px_rgba(0,0,0,0.4)]
          flex flex-col overflow-hidden"
      >
        {/* Ambient orbs — GPU-promoted so the blur is rasterized once, not per frame.
            Reduced blur radius (100→70px) for a meaningful perf win at virtually
            identical visual cost. */}
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute top-[10%] -right-20 w-72 h-72 rounded-full bg-primary/20 blur-[70px] pointer-events-none"
        />
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute bottom-[15%] -left-20 w-64 h-64 rounded-full bg-primary/10 blur-[60px] pointer-events-none"
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url('/images/noise.webp')",
          }}
        />

        {/* ────────── Top: logo + close ────────── */}
        <motion.div
          variants={headerVariants}
          className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4"
        >
          <Image
            src="/logo.svg"
            alt="Hampton Family Dental"
            width={220}
            height={55}
            priority
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-white/8 border border-white/15
              flex items-center justify-center text-white
              hover:bg-white/15 hover:scale-105 active:scale-95
              transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Divider with chip */}
        <motion.div
          variants={headerVariants}
          className="relative z-10 flex items-center gap-3 px-6 mb-2"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/25">
            <Sparkles className="w-3 h-3 text-primary-light" />
            <span className="text-[10px] tracking-widest uppercase text-primary-light font-semibold">
              Luxury Care
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </motion.div>

        {/* ────────── Nav links ────────── */}
        <nav className="relative z-10 flex-1 min-h-0 px-6 py-2 overflow-y-auto scrollbar-soft">
          {links.map((link, i) => {
            const id = link.href.replace("/#", "").replace("#", "");
            const isActive = activeSection === id;
            return (
              <motion.div
                key={link.label}
                custom={i}
                variants={linkVariants}
                className="relative"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavigate(e, link.href)}
                  className="group flex items-center justify-between py-2.5
                    border-b border-white/8 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-[10px] font-mono tabular-nums transition-colors ${
                        isActive ? "text-primary-light" : "text-white/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-heading text-[1.25rem] leading-none transition-colors ${
                        isActive
                          ? "text-primary-light"
                          : "text-white group-hover:text-primary-light"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-all duration-300
                      ${
                        isActive
                          ? "text-primary-light translate-x-0.5 -translate-y-0.5"
                          : "text-white/30 group-hover:text-primary-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* ────────── Info cards ────────── */}
        <div className="relative z-10 px-6 pt-2 pb-5 space-y-2 shrink-0">
          <motion.a
            href="tel:+12153572224"
            custom={0}
            variants={cardVariants}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10
              hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 text-primary-light" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Call Us
              </p>
              <p className="text-white font-semibold text-sm">
                (215) 357-2224
              </p>
            </div>
          </motion.a>

          <div className="grid grid-cols-2 gap-2.5">
            <motion.div
              custom={1}
              variants={cardVariants}
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-2">
                <Clock className="w-3.5 h-3.5 text-primary-light" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Hours
              </p>
              <p className="text-white text-[11px] font-semibold mt-0.5 leading-snug">
                Mon: 8am–6pm
                <br />
                Tue/Thu: 8am–4pm
                <br />
                Wed: 9am–1pm
                <br />
                <span className="text-white/40 text-[10px] font-medium">Fri–Sun Closed</span>
              </p>
            </motion.div>

            <motion.a
              custom={2}
              variants={cardVariants}
              href="https://www.google.com/maps/search/?api=1&query=283+Second+Street+Pike,+Suite+140,+Southampton,+PA+18966"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-2xl bg-white/[0.04] border border-white/10
                hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-2">
                <MapPin className="w-3.5 h-3.5 text-primary-light" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Visit
              </p>
              <p className="text-white text-xs font-semibold mt-0.5 leading-tight">
                283 Second Street Pike,
                <br />
                Southampton, PA
              </p>
            </motion.a>
          </div>

          {/* CTA */}
          <motion.div custom={3} variants={cardVariants} className="pt-1">
            <Link
              href="#contact"
              onClick={(e) => handleNavigate(e, "#contact")}
              className="group relative flex items-center justify-between gap-2 w-full
                pl-5 pr-2 py-3 rounded-full
                bg-gradient-to-r from-primary to-primary-dark text-white
                shadow-[0_10px_40px_rgba(11,179,182,0.4)]
                hover:shadow-[0_15px_50px_rgba(11,179,182,0.55)]
                active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold tracking-wide">
                  Book Appointment
                </span>
              </span>
              <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            custom={4}
            variants={cardVariants}
            className="flex items-center justify-between pt-3"
          >
            <p className="text-[10px] tracking-widest uppercase text-white/30">
              Follow Us
            </p>
            <div className="flex items-center gap-2">
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/BrennerDentalGroup", label: "Facebook" },
                { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                { Icon: TwitterIcon, href: "https://x.com", label: "X / Twitter" },
                { Icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10
                    flex items-center justify-center text-white/60
                    hover:text-primary-light hover:bg-primary/10 hover:border-primary/30
                    hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
