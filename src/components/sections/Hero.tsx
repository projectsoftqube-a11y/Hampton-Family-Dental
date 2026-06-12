"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Star,
  ChevronDown,
  Play,
  ArrowUpRight,
  Sparkles,
  Award,
} from "lucide-react";

const services = [
  "Cosmetic Dentistry",
  "Invisalign",
  "Dental Implants",
  "Teeth Whitening",
  "Family Care",
  "Porcelain Veneers",
  "Emergency Care",
];

const avatars = [
  "/images/patient_testimonial_1_1779858256371.webp",
  "/images/patient_testimonial_2_1779858279502.webp",
  "/images/patient_testimonial_3_1779858302817.webp",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  useEffect(() => {
    const v = videoRef.current;
    const section = sectionRef.current;
    if (!v || !section) return;

    const onLoaded = () => setVideoLoaded(true);
    const onError = () => {
      console.warn("[Hero video] failed to load source");
    };
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("error", onError);

    // Defer the (multi-MB) download until the hero is actually on screen,
    // instead of preload="auto" forcing it to compete with fonts/LCP image
    // on first paint. The WebP poster shows instantly in the meantime.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            v.play().catch(() => {
              /* autoplay blocked — poster stays */
            });
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.1 }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("error", onError);
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-navy-dark"
    >
      {/* ───────── Video Layer ───────── */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="none"
          poster="/images/clinic_interior_1779858062605.webp"
        >
          {/* Prefer the small re-encoded WebM/720p MP4 once generated; the
              original is kept last as a guaranteed fallback. The browser skips
              any source that 404s and advances to the next. */}
          <source src="/videos/hero-dental.webm" type="video/webm" />
          <source src="/videos/hero-dental-720.mp4" type="video/mp4" />
          <source src="/videos/hero-dental.mp4" type="video/mp4" />
        </video>
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/clinic_interior_1779858062605.webp')",
            }}
          />
        )}
      </motion.div>

      {/* ───────── Overlays ───────── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-br from-navy-dark via-navy/65 to-navy-dark"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_40%,transparent_20%,rgba(26,31,61,0.85)_100%)]" />

      {/* Editorial grid lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.06] hidden md:block">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[5%] w-[480px] h-[480px] rounded-full bg-primary/25 blur-[150px] pointer-events-none z-[1] animate-pulse-glow" />
      <div className="absolute bottom-[5%] left-[2%] w-[400px] h-[400px] rounded-full bg-primary/12 blur-[130px] pointer-events-none z-[1]" />

      {/* Grain */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('/images/noise.webp')",
        }}
      />

      {/* ───────── Vertical accent text (desktop) ───────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 pointer-events-none"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-white/30" />
        <span
          className="text-white/50 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Est. 2004 · Southampton · PA
        </span>
        <div className="h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>

      {/* ───────── Top-right premium stamp ─────────
          Positioned safely below the fixed header at every breakpoint.
          Header height: ~120px (utility bar + main bar). Top-44 (176px)
          gives comfortable clearance even before the user scrolls. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute top-44 lg:top-48 right-4 lg:right-10 z-20
          w-32 lg:w-40 h-32 lg:h-40
          items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full will-change-transform"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full" shapeRendering="geometricPrecision">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text
              className="font-semibold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.32em",
                fill: "rgba(255,255,255,0.85)",
              }}
            >
              <textPath href="#circlePath">
                Award Winning · Premium Care · Trusted Since 2004 ·
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="absolute inset-3 rounded-full border border-primary-light/25" />
        <div className="relative flex flex-col items-center justify-center w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-primary/20 border border-primary/40 shadow-[0_0_30px_rgba(11,179,182,0.4)]">
          <Award className="w-5 lg:w-6 h-5 lg:h-6 text-primary-light mb-0.5 lg:mb-1" strokeWidth={2.2} />
          <span className="font-heading text-white text-sm lg:text-base font-bold leading-none">
            20+
          </span>
          <span className="text-primary-light text-[7px] lg:text-[8px] tracking-[0.2em] uppercase mt-0.5 font-semibold">
            Years
          </span>
        </div>
      </motion.div>

{/* ───────── Main Content ───────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16
          flex flex-col justify-center pt-28 pb-44 md:pb-40"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary-light" />
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/8 border border-white/15">
            <Sparkles className="w-3 h-3 text-primary-light" />
            <span className="text-white/90 text-[10px] tracking-[0.25em] uppercase font-semibold">
              Luxury Dental Excellence
            </span>
          </div>
        </motion.div>

        {/* MASSIVE Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-white mb-8"
          style={{
            fontSize: "clamp(2.8rem, 5vw, 8rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
          }}
        >
          <span className="block">Modern</span>
          <span className="block">
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary-light via-primary to-primary-light bg-clip-text text-transparent italic font-normal">
                Dentistry,
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.6, duration: 0.9, ease: "easeOut" }}
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-[2px] md:h-[3px]
                  bg-gradient-to-r from-transparent via-primary-light to-transparent origin-left"
              />
            </span>
          </span>
          <span className="block">Genuine Comfort.</span>
        </motion.h1>

        {/* Sub + side panel layout */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-end mb-12">
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-white/70 max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}
          >
            Premium family and cosmetic dentistry — blending advanced technology,
            world-class artistry, and a calm, refined experience designed entirely
            around your smile.
          </motion.p>

          {/* Patient trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full ring-2 ring-navy-dark overflow-hidden bg-navy"
                >
                  <Image
                    src={src}
                    alt="Happy patient"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full ring-2 ring-navy-dark bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary-light text-[10px] font-bold">
                +5K
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-primary-light text-primary-light"
                  />
                ))}
                <span className="text-white text-xs font-bold ml-1">4.9</span>
              </div>
              <p className="text-white/55 text-[11px] mt-0.5 tracking-wide">
                Trusted by 5,000+ happy smiles
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3
              pl-7 pr-2 py-2 rounded-full
              bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
              shadow-[0_10px_40px_rgba(11,179,182,0.4)]
              hover:shadow-[0_15px_60px_rgba(11,179,182,0.6)]
              hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0
              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 text-sm tracking-wide">
              Schedule Now
            </span>
            <span className="relative z-10 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          <a
            href="#services"
            className="group inline-flex items-center gap-2.5
              px-6 py-3.5 rounded-full
              backdrop-blur-md bg-white/8 border border-white/25 text-white font-semibold text-sm
              hover:bg-white/15 hover:border-white/40
              hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-300"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/90 group-hover:bg-primary transition-colors">
              <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
            </span>
            <span>Explore Services</span>
          </a>

        </motion.div>
      </motion.div>

      {/* ───────── Bottom Service Marquee ───────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute left-0 right-0 bottom-0 z-10"
      >
        <div className="relative border-t border-white/10 backdrop-blur-xl bg-navy-dark/50 overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-dark to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-dark to-transparent" />

          <div className="flex overflow-hidden py-5">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-12 whitespace-nowrap shrink-0 pr-12"
            >
              {[...services, ...services].map((service, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span
                    className="font-heading italic text-white/80 text-xl md:text-2xl"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {service}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light/70" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-white/40 text-[9px] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
