"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, ArrowUpRight, Sun, Stars, Layers, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function CosmeticDentistryHub() {
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
              Cosmetic Dentistry in{"  "}
              <span className="italic font-normal bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent">
                Southampton.
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

      {/* ─── In-House Plan Promo Box ─── */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="max-w-[1000px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Aesthetic Consultation</span>
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
