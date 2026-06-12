"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, CreditCard, ShieldCheck, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export default function TrustStats() {
  const plans = [
    {
      name: "Child Complete",
      age: "13 and Younger",
      price: "$312",
      period: "per year",
      features: [
        "2 Professional Cleanings",
        "2 Regular Exams",
        "1 Fluoride Treatment",
        "Routine X-Rays",
        "1 Emergency Exam",
      ],
      popular: false,
      badge: "Youth Care",
    },
    {
      name: "Adult Complete",
      age: "14 and Older",
      price: "$369",
      period: "per year",
      features: [
        "2 Professional Cleanings",
        "2 Regular Exams",
        "Routine X-Rays",
        "1 Emergency Exam",
      ],
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Perio",
      age: "Periodontal Support",
      price: "$569",
      period: "per year",
      features: [
        "3 Perio Maintenance",
        "2 Regular Exams",
        "2 Oral Screenings",
        "Routine X-Rays",
        "1 Emergency Exam",
      ],
      popular: false,
      badge: "Specialized Care",
    },
  ];

  return (
    <section
      id="membership"
      className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-beige-light/30 to-white"
    >
      {/* Subtle background grids */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-[15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-primary/[0.08] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-8%] w-[450px] h-[450px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/15 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Affordable Excellence
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            No Insurance?{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                No Problem!
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Insurance Target Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-primary/10 border border-primary/20 p-6 md:p-8 max-w-3xl mx-auto text-center mb-16 shadow-sm"
        >
          <span className="text-primary-dark font-bold text-xs uppercase tracking-widest block mb-2">
            No Dental Insurance?
          </span>
          <p className="text-navy font-medium text-sm md:text-base leading-relaxed">
            We are dedicated to making premium dental care affordable for patients with <strong className="text-navy-dark">no dental insurance</strong>. Our custom In-Office Member Plans provide comprehensive preventive coverage and generous discounts on treatments with absolutely no deductibles, no maximums, and no waiting periods. Keeping your teeth healthy has never been this simple.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between border ${
                plan.popular
                  ? "bg-gradient-to-br from-navy via-navy-dark to-navy text-white border-navy shadow-xl"
                  : "bg-white text-navy border-navy/5 shadow-md hover:border-primary/20 transition-all duration-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[9px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              {!plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-beige text-navy text-[9px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full border border-navy/5">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mt-2 mb-1">
                  {plan.name}
                </h3>
                <p className={`text-[10px] ${plan.popular ? "text-primary-light" : "text-primary"} font-semibold uppercase tracking-wider mb-6`}>
                  {plan.age}
                </p>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-heading text-3xl md:text-4xl font-bold leading-none">
                    {plan.price}
                  </span>
                  <span className={`text-[11px] ${plan.popular ? "text-white/50" : "text-navy/40"} font-medium`}>
                    / {plan.period}
                  </span>
                </div>
                <div className="h-px bg-current opacity-10 my-5" />

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`w-4.5 h-4.5 rounded-full ${
                        plan.popular ? "bg-primary/20 border-primary-light/30" : "bg-primary/10 border-primary/25"
                      } border flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-primary-light" : "text-primary"}`} strokeWidth={3} />
                      </span>
                      <span className={`text-xs ${plan.popular ? "text-white/80" : "text-navy/75"} leading-relaxed font-medium`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className={`block text-center w-full py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-light hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-navy text-white shadow-md hover:bg-primary hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                Choose This Plan
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Extra Discounts Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-center"
        >
          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4 flex items-center justify-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center font-heading text-primary-dark font-bold text-sm">15%</span>
            <span className="text-navy text-xs font-semibold uppercase tracking-wider">OFF All Other Procedures</span>
          </div>
          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4 flex items-center justify-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center font-heading text-primary-dark font-bold text-sm">10%</span>
            <span className="text-navy text-xs font-semibold uppercase tracking-wider">OFF Ortho & Implants</span>
          </div>
        </motion.div>

        {/* Plan Footer Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-6 border-t border-navy/[0.06]"
        >
          <div className="flex items-center gap-2 text-[11px] font-semibold text-navy/50 tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-primary" />
            No Waiting Periods
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold text-navy/50 tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-primary" />
            No Deductibles
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold text-navy/50 tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-primary" />
            No Annual Maximums
          </div>
        </motion.div>
      </div>
    </section>
  );
}
