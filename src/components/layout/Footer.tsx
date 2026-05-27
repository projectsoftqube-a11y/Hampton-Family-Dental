"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
  ArrowUp,
  Send,
  Sparkles,
} from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "Technology", href: "#technology" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Invisalign",
  "Teeth Whitening",
  "Porcelain Veneers",
  "Dental Implants",
  "Pediatric Dentistry",
  "Emergency Care",
];

const socials = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: TwitterIcon, href: "https://x.com", label: "X / Twitter" },
  { icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark overflow-hidden">
      {/* Top accent gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-[30%] w-[500px] h-[300px] rounded-full bg-primary/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[250px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* ─── Top "Let's Connect" strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-16 pb-12 lg:pt-20 lg:pb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-white/8 border border-white/15 mb-5">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/90 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Let&apos;s Connect
                </span>
              </div>
              <h2
                className="font-heading text-white leading-[1.05] mb-3"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Your smile is{" "}
                <span className="italic font-normal bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent">
                  worth it.
                </span>
              </h2>
              <p className="text-white/55 text-sm md:text-base max-w-md">
                Premium family and cosmetic dentistry, designed entirely around
                you.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="#contact"
                className="group inline-flex justify-between items-center gap-3 pl-6 pr-2 py-2.5 rounded-full
                  bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
                  shadow-[0_10px_40px_rgba(11,179,182,0.4)]
                  hover:shadow-[0_15px_55px_rgba(11,179,182,0.55)]
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300 overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 text-sm tracking-wide">
                  Book Your Visit
                </span>
                <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white text-sm hover:bg-white/[0.08] hover:border-primary/30 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-primary-light" />
                <span className="font-semibold">(555) 123-4567</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/8" />

        {/* ─── Main Grid ─── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 lg:py-16">
          {/* Brand (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-flex items-center mb-5 group">
              <Image
                src="/logo.svg"
                alt="Hampton Family Dental"
                width={200}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-sm">
              Premium family and cosmetic dentistry. Where advanced technology
              meets compassionate, judgement-free care for every smile.
            </p>

            {/* Contact mini-cards */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-3 text-white/55 text-sm">
                <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-primary-light" />
                </div>
                <span>123 Hampton Boulevard, Suite 200, NY 11946</span>
              </div>
              <a
                href="mailto:hello@hamptonfamilydental.com"
                className="flex items-center gap-3 text-white/55 text-sm hover:text-primary-light transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3 text-primary-light" />
                </div>
                <span className="truncate">hello@hamptonfamilydental.com</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10
                    flex items-center justify-center text-white/55
                    hover:bg-primary/15 hover:border-primary/40 hover:text-primary-light
                    hover:scale-105 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary-light" />
              Explore
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/50 text-sm
                      hover:text-primary-light transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-light transition-all duration-300" />
                    <span className="group-hover:translate-x-0 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary-light" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-1.5 text-white/50 text-sm
                      hover:text-primary-light transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-light transition-all duration-300" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-white font-bold text-base mb-3 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary-light" />
              Stay in Touch
            </h4>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Get monthly dental wellness tips and exclusive offers — no spam,
              ever.
            </p>

            <form
              className="relative mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-4 pr-14 py-3 rounded-full bg-white/[0.05] border border-white/10
                  text-white text-sm placeholder:text-white/30 outline-none
                  focus:border-primary/40 focus:bg-white/[0.08] transition-all duration-300"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="group absolute right-1.5 top-1/2 -translate-y-1/2
                  w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark
                  flex items-center justify-center
                  shadow-[0_4px_15px_rgba(11,179,182,0.4)]
                  hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>

            {/* Hours card */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/45 text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Open Today
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 text-[10px] tracking-widest uppercase font-semibold">
                    Live
                  </span>
                </div>
              </div>
              <p className="text-white font-semibold text-sm">
                8:00 AM – 6:00 PM
              </p>
              <p className="text-white/45 text-[11px] mt-0.5">
                Mon–Fri · Sat 9–2 · Sun closed
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8" />

        {/* ─── Bottom bar ─── */}
        <div className="py-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center lg:text-left">
          <p className="text-white/30 text-xs order-1">
            © {new Date().getFullYear()} Hampton Family Dental. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs order-3 lg:order-2">
            <Link
              href="#"
              className="text-white/35 hover:text-primary-light transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <Link
              href="#"
              className="text-white/35 hover:text-primary-light transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <Link
              href="#"
              className="text-white/35 hover:text-primary-light transition-colors whitespace-nowrap"
            >
              Accessibility
            </Link>
          </div>

          <p className="text-white/30 text-xs inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 order-2 lg:order-3">
            <span>Designed &amp; developed by</span>
            <a
              href="https://softqubes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-light font-semibold hover:text-white transition-colors whitespace-nowrap"
            >
              Softqubes Technologies
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>

      {/* Back to top button — hidden on small screens to avoid overlapping
          the footer credit text; shown from md+ when there's room. */}
      <a
        href="#home"
        aria-label="Back to top"
        className="group hidden sm:flex fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full
          bg-[#0bb3b6] backdrop-blur-md border border-white/15 text-white
          hover:bg-primary hover:border-primary
          items-center justify-center
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          hover:scale-105 active:scale-95 transition-all duration-300
          opacity-70 hover:opacity-100 focus:opacity-100"
      >
        <ArrowUp className="w-4 h-4" />
      </a>
    </footer>
  );
}
