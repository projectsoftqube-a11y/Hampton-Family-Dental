"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Calendar, Heart, ShieldCheck, DollarSign, HelpCircle, FileText, ArrowUpRight, Phone } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function PatientInformationHub() {
  const cards = [
    {
      icon: Heart,
      title: "Why Choose Us",
      desc: "Learn about our philosophy of care, advanced dental technology, and commitment to comfort.",
      href: "/patient-information/why-choose-us",
      cta: "Learn More",
    },
    {
      icon: FileText,
      title: "New Patients",
      desc: "Find patient forms, what to expect on your first visit, and our special introductory packages.",
      href: "/patient-information/new-patients",
      cta: "View Checklist",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      desc: "Book, modify, or request your dental checkups, routine cleanings, or cosmetic consults online.",
      href: "/patient-information/scheduling",
      cta: "Schedule Now",
    },
    {
      icon: HelpCircle,
      title: "Emergency Scheduling",
      desc: "Urgent same-day appointments and after-hours directions for toothaches, cracks, or trauma.",
      href: "/patient-information/emergency-scheduling",
      cta: "Get Urgent Help",
    },
    {
      icon: ShieldCheck,
      title: "Insurance & Payments",
      desc: "See a list of participating dental PPO providers and check our standard payment methods.",
      href: "/patient-information/insurance-and-payment",
      cta: "Check Insurance",
    },
    {
      icon: DollarSign,
      title: "Financing Options",
      desc: "Explore flexible monthly healthcare payment plans through CareCredit and our in-house plans.",
      href: "/patient-information/financing-options",
      cta: "View Financing",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Patient Information" }]} />
          
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
                  Patient Portal
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
              Patient Information &{" "}
              <span className="italic font-normal bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent">
                Resources.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Everything you need to prepare for your next visit at Hampton Family Dental. Access forms, examine financing plans, review scheduling times, or check PPO insurance policies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Grid Cards Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
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
                      {card.title}
                    </h3>
                    <p className="text-navy/60 text-xs md:text-sm leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                  >
                    {card.cta}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
