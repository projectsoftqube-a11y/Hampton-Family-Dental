"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Award, DollarSign, Check, Phone, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function InsuranceAndPaymentPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Insurance & Payments" },
  ];

  const ppos = [
    "Delta Dental PPO",
    "Aetna PPO Dental",
    "Cigna PPO Dental",
    "MetLife PPO Dental",
    "United Healthcare PPO",
    "Guardian PPO Dental",
    "Principal Financial PPO",
    "Blue Cross Blue Shield PPO",
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
                <ShieldCheck className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Financials
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
              Insurance & Payments
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              We want to make paying for your dental health as straightforward as possible. Explore our participating PPO carriers, billing policies, and payment options.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Insurance PPO Lists ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Insurance Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">PPO Providers</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Maximizing Your Dental PPO Benefits
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  We are in-network with most major dental PPO insurance providers. Our experienced coordinators will submit claims directly to your carrier, track authorization windows, and verify your benefits to minimize out-of-pocket costs.
                </p>
              </div>

              {/* Grid of PPO Carriers */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-navy/5 shadow-md space-y-4">
                <h4 className="font-heading text-navy font-bold text-lg">Participating Dental PPOs Include:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ppos.map((ppo) => (
                    <div key={ppo} className="flex items-center gap-2.5 bg-beige-light/25 p-3 rounded-xl border border-navy/[0.03]">
                      <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={3} />
                      <span className="text-navy font-semibold text-xs">{ppo}</span>
                    </div>
                  ))}
                </div>
                <p className="text-navy/55 text-[10px] italic pt-2">
                  *Insurance networks change periodically. If you do not see your PPO provider listed above, call our office at (215) 357-2224 to verify coverage.
                </p>
              </div>
            </div>

            {/* Right: Payment options & No Insurance Box */}
            <div className="lg:col-span-4 space-y-8">
              {/* Payment Methods Card */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <DollarSign className="w-8 h-8 text-primary" />
                <h3 className="font-heading text-navy text-lg font-bold">Payment Methods</h3>
                <p className="text-navy/60 text-xs leading-relaxed">
                  For co-pays, deductibles, or self-pay services, we accept the following payment forms at checkout:
                </p>
                <ul className="space-y-2 text-xs font-semibold text-navy/80">
                  <li className="flex items-center gap-2">✓ Cash & Personal Checks</li>
                  <li className="flex items-center gap-2">✓ Major Credit Cards (Visa, MC, Amex)</li>
                  <li className="flex items-center gap-2">✓ Health Savings Accounts (HSA / FSA)</li>
                </ul>
              </div>

              {/* In-House Membership Card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl shadow-lg space-y-4 relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/15 blur-2xl" />
                <h4 className="font-heading font-bold text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-light" />
                  No Insurance?
                </h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Join our In-House Dental Wellness Plan! Receive all routine cleanings and checkups for a flat yearly rate, plus 15% off all restorations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/specials"
                    className="inline-flex items-center gap-1 text-xs text-primary-light hover:text-white font-semibold uppercase tracking-wider"
                  >
                    Explore In-House Plans
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
