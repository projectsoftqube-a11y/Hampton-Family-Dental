"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, ArrowUpRight, Shield, Layers, HelpCircle, Activity } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function RestorativeDentistryHub() {
  const services = [
    {
      icon: Shield,
      title: "Dental Implants",
      desc: "Restore missing teeth permanently with anchors that function and look exactly like natural tooth roots.",
      href: "/restorative-dentistry/dental-implants",
    },
    {
      icon: ShieldCheck,
      title: "Dental Crowns",
      desc: "Custom porcelain crowns to restore decay, protect weakened structures, and strengthen teeth.",
      href: "/restorative-dentistry/dental-crowns",
    },
    {
      icon: Activity,
      title: "Dental Bridges",
      desc: "Bridge gaps from missing teeth using premium porcelain dental restorations anchored to adjacent teeth.",
      href: "/restorative-dentistry/dental-bridges",
    },
    {
      icon: Layers,
      title: "Dental Fillings",
      desc: "Seamless, tooth-colored composite restorations to repair cavities and stop localized tooth decay.",
      href: "/restorative-dentistry/dental-fillings",
    },
    {
      icon: HelpCircle,
      title: "Root Canal Treatment",
      desc: "Relieve dental pain and save an infected tooth structure with safe, modern endodontic therapy.",
      href: "/restorative-dentistry/root-canal",
    },
    {
      icon: Heart,
      title: "Dentures",
      desc: "Modern full and partial removable dentures custom-molded to fit comfortably and restore smile functions.",
      href: "/restorative-dentistry/dentures",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Restorative Dentistry" }]} />
          
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
                  Restorative Care
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
              Restorative Dentistry in{"  "}
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
              Restore the health, strength, and function of your teeth with our advanced restorative treatments. From fillings and root canals to dental implants, we help you chew and smile with confidence.
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
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">15% Discount</span>
          </div>
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">
            Save 15% on All Restorative Work
          </h2>
          <p className="text-navy/70 text-sm leading-relaxed max-w-xl mx-auto">
            Our in-house dental wellness members receive a flat 15% discount on all restorative procedures, including dental implants, crowns, root canals, and fillings.
          </p>
          <div className="pt-2">
            <Link
              href="/specials"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-all duration-300"
            >
              Explore In-House Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
