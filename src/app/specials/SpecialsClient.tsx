"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Check,
  Phone,
  ShieldCheck,
  Award,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import FAQBlock from "@/components/shared/FAQBlock";

export default function SpecialsClient() {
  const specials = [
    {
      code: "SPECIAL-001",
      title: "$69 Emergency Visit",
      subtitle: "Relief when you need it",
      desc: "Don't let dental pain wait. Our emergency promotion includes a focused exam and necessary X-rays to diagnose the issue quickly.",
      value: "$150",
      price: "$69",
      features: [
        "Limited Emergency Exam",
        "Diagnostic X-Rays",
        "Immediate Care Plan",
      ],
      badge: "Limited Time",
    },
  ];

  const plans = [
    {
      name: "Child Complete",
      price: "$288 /yr",
      yearly: "For children age 13 and younger",
      target: "Preventive Care Package",
      features: [
        "2 Professional Cleanings per year",
        "2 Regular Exams per year",
        "1 Fluoride Treatment per year",
        "Routine X-Rays included",
        "1 Emergency Exam per year",
        "15% OFF All Other Procedures",
        "10% OFF Ortho & Implants",
      ],
      cta: "Sign Up for Child Plan",
      popular: false,
    },
    {
      name: "Adult Complete",
      price: "$312 /yr",
      yearly: "For adults age 14 and older",
      target: "Most Popular Package",
      features: [
        "2 Professional Cleanings per year",
        "2 Regular Exams per year",
        "Routine X-Rays included",
        "1 Emergency Exam per year",
        "15% OFF All Other Procedures",
        "10% OFF Ortho & Implants",
      ],
      cta: "Sign Up for Adult Plan",
      popular: true,
    },
    {
      name: "Perio Maintenance",
      price: "$552 /yr",
      yearly: "For periodontal care support",
      target: "Specialized Maintenance",
      features: [
        "3 Perio Maintenance Cleanings",
        "2 Regular Exams per year",
        "2 Oral Screenings per year",
        "Routine X-Rays included",
        "1 Emergency Exam per year",
        "15% OFF All Other Procedures",
        "10% OFF Ortho & Implants",
      ],
      cta: "Sign Up for Perio Plan",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How does the In-House Dental Membership plan work?",
      a: "Our In-House Dental Membership is a direct agreement between you and Hampton Family Dental. You pay a simple annual fee that completely covers your routine preventive care for the year—cleanings, exams, and x-rays—while providing significant discounts (up to 15%) on other restorative and cosmetic procedures. There are no deductibles, no waiting periods, and no annual maximums to worry about."
    },
    {
      q: "Can I use CareCredit along with these specials or membership plans?",
      a: "Yes! We proudly accept CareCredit and Cherry, which offer flexible financing options for your dental treatments. Whether you are getting 15% off a crown through our membership plan or need extended payments for an implant, you can finance the remaining balance to make your care easily affordable."
    },
    {
      q: "When can I start using my membership discounts?",
      a: "Immediately! There are absolutely no waiting periods with our In-House Membership plans. The moment you sign up, your preventive benefits are active, and you can immediately apply the 15% discount to any additional treatments you need on the same day."
    }
  ];

  return (
    <main className="bg-white overflow-hidden text-navy font-body">
        {/* ───────── Hero Section ───────── */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-navy-dark text-white">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('/images/noise.webp')" }}
          />

          <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-light hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </motion.div>

            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-3 mb-5"
              >
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-light" />
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                  <Sparkles className="w-3 h-3 text-primary-light" />
                  <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    In-House Benefits
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-white mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                No Insurance?{" "}
                <span className="italic font-normal bg-gradient-to-r from-steel-light via-steel to-steel-light bg-clip-text text-transparent">
                  No Problem.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                We believe that premium, stress-free dental care should be accessible to everyone in Southampton. Our custom-designed in-house membership plans and special introductory packages ensure your family stays healthy without the hassle, waiting periods, or limits of traditional insurance. Whether you're looking for a simple new-patient cleaning or comprehensive family coverage, we have an affordable solution.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ───────── Expanding Context (Content Fill) ───────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-5 md:px-10 space-y-6 text-navy/80 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-navy font-bold">Taking the Stress Out of Dental Costs</h2>
            <p>
              At Hampton Family Dental, we understand that navigating the world of dental insurance can be confusing, restrictive, and frustrating. Many patients put off essential care simply because they lack coverage or are worried about hidden fees. That is exactly why we created our transparent, patient-first approach to pricing. We want you to feel confident and fully informed every time you sit in our chair.
            </p>
            <p>
              By cutting out the insurance middleman, we are able to pass significant savings directly to you. There are no surprise bills, no claim denials, and absolutely no waiting periods. If you need a procedure, you get it at a clear, discounted rate immediately. Our goal is to forge a long-lasting relationship based on trust, quality care, and absolute financial transparency. We empower you to make the best decisions for your oral health without the red tape.
            </p>
            <p>
              In addition to our special offers and membership plans, we also provide flexible financing through CareCredit and Cherry. These options act as healthcare credit, allowing you to break up the cost of your treatments into manageable monthly payments. This means you can sign up for a membership plan or complete a full smile makeover on a timeline that perfectly fits your budget.
            </p>
          </div>
        </section>

        {/* ───────── Special Offers ───────── */}
        <section className="py-20 md:py-24 bg-beige-light/40 relative">
          <div className="max-w-[1300px] mx-auto px-5 md:px-10">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
                Introductory Specials
              </span>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2 mb-4">
                Special New Patient Packages
              </h2>
              <p className="text-navy/70 text-sm">
                Cleanings, exams, and full diagnostic suites. Welcoming you to our practice with exclusive introductory rates designed to get you on track with your oral health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {specials.map((spec, idx) => (
                <motion.div
                  key={spec.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group bg-white rounded-3xl overflow-hidden border border-navy/5 shadow-lg"
                >
                  <div className="absolute top-[96px] -left-3 w-6 h-6 rounded-full bg-beige-light z-10 border-r border-navy/5" />
                  <div className="absolute top-[96px] -right-3 w-6 h-6 rounded-full bg-beige-light z-10 border-l border-navy/5" />

                  <div className="bg-gradient-to-br from-navy via-navy-dark to-navy px-8 py-6 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:16px_16px]" />
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />

                    <div className="flex justify-between items-center relative z-10">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary-light" />
                        <span className="text-primary-light text-[9px] tracking-[0.25em] uppercase font-bold">
                          {spec.badge}
                        </span>
                      </div>
                      <span className="font-mono text-white/45 text-[9px] tracking-widest">
                        {spec.code}
                      </span>
                    </div>
                  </div>

                  <div className="pt-8 pb-8 px-8 relative">
                    <h3 className="font-heading text-navy text-2xl font-bold leading-tight mb-1">
                      {spec.title}
                    </h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                      {spec.subtitle}
                    </p>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6">
                      {spec.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6 bg-beige-light/40 rounded-2xl p-4 border border-navy/5">
                      <div>
                        <p className="text-navy/50 text-[9px] tracking-widest uppercase font-semibold">
                          Regular Value
                        </p>
                        <p className="font-heading text-navy/60 text-lg font-bold line-through mt-0.5">
                          {spec.value}
                        </p>
                      </div>
                      <div>
                        <p className="text-primary text-[9px] tracking-widest uppercase font-semibold">
                          Special Offer
                        </p>
                        <p className="font-heading text-primary-dark text-xl font-bold mt-0.5">
                          {spec.price}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-8">
                      {spec.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                          </span>
                          <span className="text-navy/80 text-xs font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="block text-center w-full py-3.5 rounded-full bg-navy text-white text-xs font-semibold tracking-widest uppercase shadow-md hover:bg-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Claim This Offer
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── In-House Plans ───────── */}
        <section className="py-20 md:py-24 bg-white relative">
          <div className="max-w-[1300px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
                Dental Wellness Plans
              </span>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2 mb-4">
                In-House Dental Membership
              </h2>
              <p className="text-navy/70 text-sm leading-relaxed">
                By becoming a member of Hampton Family Dental, you receive world-class preventive care without the headache of insurance companies. We've structured three robust plans tailored to exactly what our patients need most: Child Complete, Adult Complete, and Perio Maintenance. Every plan includes routine cleanings, comprehensive exams, x-rays, and significant discounts on all other procedures we provide. It's affordable peace of mind for your whole family's dental health.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between border ${
                    plan.popular
                      ? "bg-gradient-to-br from-navy via-navy-dark to-navy text-white border-navy shadow-xl"
                      : "bg-beige-light/40 text-navy border-navy/5 shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[9px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full shadow-md">
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-1">
                      {plan.name}
                    </h3>
                    <p className={`text-xs ${plan.popular ? "text-primary-light" : "text-primary"} font-semibold uppercase tracking-wider mb-6`}>
                      {plan.target}
                    </p>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-heading text-3xl md:text-4xl font-bold leading-none">
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-xs ${plan.popular ? "text-white/70" : "text-navy/60"} font-medium mb-8`}>
                      {plan.yearly}
                    </p>

                    <p className={`text-xs ${plan.popular ? "text-white/80" : "text-navy/80"} font-semibold uppercase tracking-wider mb-4`}>
                      Included Benefits:
                    </p>

                    <ul className="space-y-3.5 mb-10">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className={`w-5 h-5 rounded-full ${
                            plan.popular ? "bg-primary/20 border-primary-light/30" : "bg-primary/10 border-primary/25"
                          } border flex items-center justify-center shrink-0 mt-0.5`}>
                            <Check className={`w-3 h-3 ${plan.popular ? "text-primary-light" : "text-primary"}`} strokeWidth={3} />
                          </span>
                          <span className={`text-xs ${plan.popular ? "text-white/90" : "text-navy/80"} leading-relaxed font-medium`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center w-full py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-light hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-navy text-white shadow-md hover:bg-primary hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── CareCredit & Financing ───────── */}
        <section className="py-16 bg-beige-light/30 relative border-t border-navy/5">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">Flexible Financing with CareCredit</h2>
            <p className="text-navy/70 leading-relaxed mb-6 max-w-2xl mx-auto">
              We want nothing to stand between you and a healthy, confident smile. That's why we partner with CareCredit to offer flexible financing options. CareCredit allows you to pay for your dental care over time, often with 0% interest for up to 12 months. It's easy to apply, and you'll get an immediate decision so you can start treatment without delay.
            </p>
            <div className="flex justify-center">
              <a href="https://www.carecredit.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors">
                <CreditCard className="w-4 h-4" />
                Apply for CareCredit
              </a>
            </div>
          </div>
        </section>

        {/* ───────── FAQ Section ───────── */}
        <FAQBlock faqs={faqs} title="Frequently Asked Questions About Specials & Plans" />

      </main>
  );
}
