"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  Sun,
  Stars,
  Layers,
  ChevronDown,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function CosmeticDentistryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Stars,
      title: "Porcelain Veneers",
      desc: "Individually handcrafted porcelain shells bonded to the front of teeth to correct color, shape, and size.",
      href: "/cosmetic-dentistry/porcelain-veneers",
    },
    {
      icon: Heart,
      title: "Invisalign",
      desc: "Orthodontic clear aligners to correct crowded teeth, gaps, and bite issues comfortably and invisibly.",
      href: "/cosmetic-dentistry/invisalign",
    },
    {
      icon: ShieldCheck,
      title: "Clear Correct",
      desc: "Comfortable, cost-effective orthodontic clear aligners to straighten teeth discreetly.",
      href: "/cosmetic-dentistry/clear-correct",
    },
    {
      icon: Sun,
      title: "Teeth Whitening",
      desc: "Professional-strength clinical teeth whitening to lift stains and brighten your smile up to 8 shades.",
      href: "/cosmetic-dentistry/teeth-whitening",
    },
    {
      icon: Layers,
      title: "Dental Bonding",
      desc: "Fast, single-visit composite resin applications to correct chipped, cracked, or discolored tooth edges.",
      href: "/cosmetic-dentistry/dental-bonding",
    },
    {
      icon: Sparkles,
      title: "Smile Makeover",
      desc: "A custom-tailored cosmetic plan combining multiple dental therapies to design your dream smile.",
      href: "/cosmetic-dentistry/smile-makeover",
    },
  ];

  const faqs = [
    {
      q: "How much do veneers and teeth whitening cost?",
      a: "Cost depends on the treatment and how many teeth you’re improving, so we provide a personalized quote at your consultation. Professional whitening is one of our most affordable options, while veneers are a longer-term investment. We offer low-interest monthly financing to fit cosmetic care into your budget.",
    },
    {
      q: "How long do veneers last?",
      a: "With good care, porcelain veneers typically last 10 to 15 years or more. They don’t decay, but the natural tooth underneath still needs healthy habits and regular checkups. Because a thin layer of enamel is reshaped to place them, veneers are considered a permanent, long-term treatment.",
    },
    {
      q: "What is cosmetic dentistry?",
      a: "Cosmetic dentistry covers treatments that improve the appearance of your smile — whitening, porcelain veneers, bonding, clear aligners, and full smile makeovers. Many cosmetic treatments also strengthen and protect your teeth, so they look great and stay healthy.",
    },
    {
      q: "Is professional teeth whitening safe?",
      a: "Yes. Professional whitening performed or supervised by a dentist is safe and far more effective than store-bought kits. We protect your gums and tailor the strength to your teeth, minimizing sensitivity while giving you a noticeably brighter smile.",
    },
    {
      q: "Veneers or bonding — which is right for me?",
      a: "Bonding is quick, affordable, and ideal for small chips or gaps, while veneers offer a longer-lasting, more dramatic transformation for multiple teeth. We’ll look at your goals and budget and recommend the option that gives you the best result.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Cosmetic Dentistry" }]} />

          <div className="max-w-3xl mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Aesthetic Care
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Cosmetic Dentistry in{" "}
              <span className="italic font-normal bg-gradient-to-r from-steel-light via-steel to-steel-light bg-clip-text text-transparent">
                Southampton, PA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Transform your smile and elevate your self-confidence with our custom cosmetic dental solutions. From quick clinical teeth whitening to comprehensive veneer reconstructions, we bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Services Grid Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          
          {/* Redesigned 2-Column Editorial Intro Section */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 text-left">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-px w-6 bg-primary" />
                <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Confidence & Artistry</span>
              </div>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                Rebuilding Your Smile’s Confidence & Brilliance
              </h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
              <ul className="space-y-3 pt-2">
                {["Porcelain Veneers & Bonding", "Invisalign Clear Aligners", "Professional Teeth Whitening"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-navy/80 text-xs md:text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7 space-y-6 border-l-2 border-primary/10 pl-6 lg:pl-10 py-2">
              <p className="text-navy/70 text-base leading-relaxed">
                A confident smile changes everything — and cosmetic dentistry is how we help you get there. At Hampton Family Dental — formerly Brenner Dental Group — Dr. Brenner and Dr. Dudhat design natural-looking smile transformations in Southampton, PA, from a simple whitening touch-up to a complete smile makeover.
              </p>
              <p className="text-navy/70 text-base leading-relaxed">
                Whether you want to brighten stained teeth, cover chips and gaps with{" "}
                <Link href="/cosmetic-dentistry/porcelain-veneers" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                  porcelain veneers
                </Link>
                , straighten discreetly with{" "}
                <Link href="/cosmetic-dentistry/invisalign" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                  clear aligners
                </Link>
                , or combine treatments into one tailored plan, we’ll show you what’s possible and what to expect. Explore our cosmetic services below, and call (215) 357-2224 to book your aesthetic consultation.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col justify-between bg-white rounded-3xl p-8 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-350">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-navy text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-navy/60 text-xs md:text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                  >
                    Explore Service
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Cosmetic Dentistry Section (Redesigned) ─── */}
      <section className="py-20 md:py-24 bg-beige-light/30 border-t border-navy/5">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Personalized Aesthetics</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">
              Why Choose Cosmetic Dentistry
            </h2>
            <div className="h-1 w-16 bg-primary/20 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            {/* Card 1: A Smile Built on Confidence */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-navy/5 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-navy text-xl font-bold mb-4">
                  A Smile Built on Confidence
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Cosmetic dentistry is about more than looks — when you love your smile, you smile more, and that confidence shows at work, in photos, and in everyday life. Modern cosmetic treatments are also more conservative and natural-looking than ever, so improvements blend in seamlessly with your own teeth.
                </p>
              </div>
              <div className="text-[11px] font-mono text-navy/40 mt-6 pt-4 border-t border-navy/5">
                Elevate your personal & professional lifestyle
              </div>
            </div>

            {/* Card 2: Tailored Treatments for Your Goals */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-primary/20 shadow-lg flex flex-col justify-between hover:border-primary/45 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-navy text-xl font-bold mb-4">
                  Tailored Treatments for Your Goals
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  The right treatment depends on your goals. {" "}
                  <Link href="/cosmetic-dentistry/teeth-whitening" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    Professional whitening
                  </Link>{" "}
                  brightens stained teeth in a single visit, {" "}
                  <Link href="/cosmetic-dentistry/porcelain-veneers" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    porcelain veneers
                  </Link>{" "}
                  reshape and perfect the teeth that show when you smile, {" "}
                  <Link href="/cosmetic-dentistry/dental-bonding" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    bonding
                  </Link>{" "}
                  repairs small chips quickly and affordably, and a full {" "}
                  <Link href="/cosmetic-dentistry/smile-makeover" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    smile makeover
                  </Link>{" "}
                  combines treatments into one personalized plan. At your consultation, we’ll recommend the approach that gives you the most natural, lasting result.
                </p>
              </div>
              <div className="text-[11px] font-mono text-primary mt-6 pt-4 border-t border-navy/5 font-semibold">
                Conservative techniques, maximum longevity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-20 bg-beige-light/20 border-t border-navy/5">
        <div className="max-w-[850px] mx-auto px-5">
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold mb-8 text-center">
            Cosmetic Dentistry in Southampton — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-navy/5 overflow-hidden transition-all duration-350 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-heading text-navy font-bold text-base sm:text-lg hover:text-primary transition-colors duration-350"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-navy/40 transition-transform duration-350 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-[max-height,opacity] duration-350 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] opacity-100 border-t border-navy/5"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p className="px-6 py-5 text-navy/65 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Financing Options Promo Box ─── */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="max-w-[1000px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">
              Aesthetic Consultation
            </span>
          </div>
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">
            Explore Cosmetic Financing Options
          </h2>
          <p className="text-navy/70 text-sm leading-relaxed max-w-xl mx-auto">
            We partner with leading healthcare lenders to provide low-interest monthly financing, allowing you to pay for your cosmetic smile makeovers or Invisalign aligners in convenient installments.
          </p>
          <div className="pt-2">
            <Link
              href="/patient-information/financing-options"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-all duration-300"
            >
              View Financing Options
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
