"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, DollarSign, ShieldCheck, Heart, Award, CreditCard, ArrowRight, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function FinancingOptionsPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Financing Options" },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-3xl mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <DollarSign className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Affordable Care
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
              Financing Options
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Do not let costs stand in the way of your oral health or cosmetic goals. We offer flexible monthly payment options to ensure your dental treatments fit comfortably into your budget.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Financing Programs Grid ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Detailed financing channels */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Flexible Payments</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Budget-Friendly Dental Payment Plans
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  We believe that premium dental care should be accessible. For procedures that require out-of-pocket costs—like implants, veneers, crown work, or Invisalign aligners—we partner with leading third-party lenders to offer flexible monthly payments.
                </p>
              </div>

              {/* Financing Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* CareCredit */}
                <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-navy text-lg font-bold">CareCredit® Healthcare Card</h3>
                  <p className="text-navy/60 text-xs leading-relaxed">
                    CareCredit acts as a healthcare credit card. It allows you to pay for treatments in convenient monthly installments, with interest-free financing available for up to 12 months for qualifying procedures.
                  </p>
                  <a
                    href="https://www.carecredit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider hover:text-primary-dark"
                  >
                    Apply on CareCredit
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* In-House Wellness */}
                <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-navy text-lg font-bold">In-House Membership</h3>
                  <p className="text-navy/60 text-xs leading-relaxed">
                    If you do not have insurance, our wellness plan is the perfect option. Cover all your cleanings, checkups, and diagnostic x-rays for a low annual fee, and receive 15% off all restorative treatments.
                  </p>
                  <Link
                    href="/specials"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider hover:text-primary-dark"
                  >
                    View Plan Options
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Key Takeaway Notes */}
            <div className="lg:col-span-4 space-y-8">
              {/* Financial Checklist */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <h3 className="font-heading text-navy text-base font-bold">Financial Checklist:</h3>
                <ul className="space-y-3 text-xs text-navy/70 leading-relaxed font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>No waiting periods or deductibles with our in-house plans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Interest-free monthly installments available (up to 12 months).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Fast online pre-approvals that do not affect your credit score.</span>
                  </li>
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl shadow-lg space-y-4 relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/15 blur-2xl" />
                <h4 className="font-heading font-bold text-base">Cost Consultations</h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Have questions about treatment costs? Our coordinators will sit down with you to provide a clear, written cost breakdown before starting any procedure.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
