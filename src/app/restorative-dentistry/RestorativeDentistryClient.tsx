"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  Shield,
  Layers,
  HelpCircle,
  Activity,
  ChevronDown,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function RestorativeDentistryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      q: "How long does a root canal take?",
      a: "Most root canals are completed in one to two visits, with each appointment taking about 60 to 90 minutes depending on the tooth. Modern techniques make the procedure about as comfortable as a routine filling, and it relieves the pain an infected tooth causes.",
    },
    {
      q: "How much do dental implants and dentures cost?",
      a: "The cost depends on how many teeth you’re restoring and the materials used, so we provide a personalized quote at your consultation. We offer flexible financing and CareCredit, and our in-house membership plan includes 15% off restorative treatments — including implants and dentures.",
    },
    {
      q: "How long do dental implants last?",
      a: "With good oral hygiene and regular checkups, dental implants can last decades — often a lifetime. The titanium implant fuses with your jawbone to form a permanent foundation; only the crown on top may eventually need replacement after many years of use.",
    },
    {
      q: "Does insurance cover restorative dentistry?",
      a: "Many dental plans cover a portion of restorative care such as fillings, crowns, root canals, and dentures, while implant coverage varies by plan. We’ll review your benefits with you and explain your options, including financing and membership-plan savings.",
    },
    {
      q: "What’s the difference between a filling, a crown, and an implant?",
      a: "A filling repairs a small cavity, a crown caps and protects a more damaged tooth, and an implant replaces a tooth that’s missing entirely. At your exam we’ll recommend the most conservative option that fully restores your tooth’s health and function.",
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
              Restorative Dentistry in{" "}
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
              Restore the health, strength, and function of your teeth with our advanced restorative treatments. From fillings and root canals to dental implants, we help you chew and smile with confidence.
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
                <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Restore & Protect</span>
              </div>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                Rebuilding Your Smile’s Health, Strength & Function
              </h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
              <ul className="space-y-3 pt-2">
                {["Permanent Dental Implants", "Custom-Fit Crowns & Bridges", "Comfortable Root Canals & Dentures"].map((item) => (
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
                When teeth are damaged, decayed, or missing, restorative dentistry brings back their health, strength, and function. At Hampton Family Dental — formerly Brenner Dental Group — Dr. Brenner and Dr. Dudhat rebuild smiles in Southampton, PA with everything from simple tooth-colored fillings to full-mouth dental implants, all in one comfortable office.
              </p>
              <p className="text-navy/70 text-base leading-relaxed">
                Whether you need a single crown, a bridge to fill a gap, a{" "}
                <Link href="/restorative-dentistry/root-canal" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                  root canal to save a painful tooth
                </Link>
                , or{" "}
                <Link href="/restorative-dentistry/dentures" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                  dentures to restore a full smile
                </Link>
                , we’ll walk you through your options and what to expect. Explore our restorative services below, and call (215) 357-2224 to schedule your consultation.
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

      {/* ─── Why Restorative Dentistry Matters Section (Redesigned) ─── */}
      <section className="py-20 md:py-24 bg-beige-light/30 border-t border-navy/5">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Preventive Care</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">
              Why Restorative Dentistry Matters
            </h2>
            <div className="h-1 w-16 bg-primary/20 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            {/* Card 1: The Risks of Delay */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-navy/5 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-heading text-navy text-xl font-bold mb-4">
                  The Risks of Delayed Treatment
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Restoring a damaged or missing tooth is about much more than appearance. Left untreated, decay spreads, a cracked tooth can break further, and gaps from missing teeth let neighboring teeth drift out of place — which can affect your bite, your ability to chew, and even the shape of your face over time.
                </p>
              </div>
              <div className="text-[11px] font-mono text-navy/40 mt-6 pt-4 border-t border-navy/5">
                Preventive measures protect adjacent teeth
              </div>
            </div>

            {/* Card 2: Modern Restorative Solutions */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-primary/20 shadow-lg flex flex-col justify-between hover:border-primary/45 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-navy text-xl font-bold mb-4">
                  Modern Restorative Solutions
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Modern restorative dentistry fixes these problems with natural-looking, long-lasting results. Tooth-colored fillings blend in seamlessly, crowns and bridges rebuild strength, a{" "}
                  <Link href="/restorative-dentistry/root-canal" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    root canal to save a painful tooth
                  </Link>{" "}
                  relieves pain and saves your natural tooth, and we can{" "}
                  <Link href="/restorative-dentistry/dental-implants" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    replace missing teeth
                  </Link>{" "}
                  with a permanent foundation that looks and works like the real thing. We also offer custom{" "}
                  <Link href="/restorative-dentistry/dentures" className="text-primary hover:text-primary-dark hover:underline font-semibold transition-all">
                    dentures to restore a full smile
                  </Link>{" "}
                  after tooth loss.
                </p>
              </div>
              <div className="text-[11px] font-mono text-primary mt-6 pt-4 border-t border-navy/5 font-semibold">
                Permanent, fully-customized treatments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-20 bg-beige-light/20 border-t border-navy/5">
        <div className="max-w-[850px] mx-auto px-5">
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold mb-8 text-center">
            Restorative Dentistry in Southampton — FAQs
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

      {/* ─── In-House Plan Promo Box ─── */}
      <section className="py-16 bg-white border-t border-navy/5">
        <div className="max-w-[1000px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">
              15% Discount
            </span>
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
