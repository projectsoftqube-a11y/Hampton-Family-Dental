"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Award, 
  DollarSign, 
  Check, 
  Phone, 
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Info,
  Calendar,
  CreditCard
} from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function InsuranceAndPaymentClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Insurance & Payments" },
  ];

  const placeholderPlans = [
    "Aetna",
    "Delta Dental",
    "MetLife",
    "Cigna",
    "UnitedHealthcare",
    "Guardian",
    "Humana",
    "BlueCross BlueShield",
    "Principal",
    "GEHA",
    "Connection Dental",
    "Ameritas",
    "Careington",
    "Sunlife",
    "United Concordia",
    "Dominion Dental",
    "Teamsters",
    "LEHB",
    "Fidelio"
  ];

  const faqs = [
    {
      question: "Will you file claims with my dental PPO insurance?",
      answer: "Yes, our administrative staff handles all the claims paperwork and submits them directly to your dental PPO carrier. We verify your insurance benefits before any major treatment begins, giving you an estimated breakdown of your coverage and estimated co-payments."
    },
    {
      question: "What payment options are available if I do not have dental insurance?",
      answer: "For patients without dental insurance, we offer an in-house Dental Membership Plan covering annual preventive cleanings, exams, and X-rays at a discounted flat rate, plus 15% off other restorative procedures. We also accept CareCredit third-party financing for interest-free payment terms."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Insurance &amp; Payment Options
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Learn about our participating insurance carriers, billing policies, in-house membership plan, and third-party financing options.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Intro Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Intro & In-Network Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary shrink-0" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Affordable Dentistry</span>
              </div>
              <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
                Quality Care Made Simple and Affordable
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                We want quality dental care to be affordable and stress-free. We accept most major dental insurance plans and offer flexible options for patients without coverage. 
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                If you are looking for an experienced <strong className="text-navy">dentist accepting insurance southampton</strong>, our staff is dedicated to helping you maximize your PPO policy benefits. We perform complimentary insurance verifications before any clinical treatment begins, ensuring you receive a transparent estimate of your out-of-pocket co-payments.
              </p>
            </div>

            {/* Right Column: Payment Cards */}
            <div className="lg:col-span-5 bg-beige-light/20 border border-navy/[0.04] rounded-3xl p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-navy text-xl font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Payment Options
              </h3>
              <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                For co-pays, deductibles, or non-covered treatments, we accept:
              </p>
              <ul className="space-y-3 text-xs md:text-sm font-semibold text-navy/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 font-bold" />
                  Cash &amp; Personal Checks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 font-bold" />
                  Major Credit Cards (Visa, MC, Amex, Discover)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 font-bold" />
                  HSA &amp; FSA (Health Savings Accounts)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Insurance We Accept Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/10 border-y border-navy/[0.03]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Insurance Details */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-heading text-navy text-3xl font-bold">
                Insurance We Accept
              </h2>


              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {placeholderPlans.map((plan, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-navy/5 shadow-sm flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-navy font-semibold text-xs md:text-sm">{plan}</span>
                  </div>
                ))}
              </div>

              <p className="text-navy/55 text-xs italic pt-4">
                *Insurance networks change periodically. If you do not see your PPO provider listed above, call our office at {practiceInfo.phone} to verify coverage.
              </p>
            </div>

            {/* Right: Info Card */}
            <div className="lg:col-span-4 bg-navy-dark text-white rounded-3xl p-6 md:p-8 space-y-4 shadow-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
              <h3 className="font-heading text-lg font-bold">Direct Claims Filing</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                As a courtesy to our patients, we file claims directly with your insurance provider. You only pay your estimated co-payment at check-out. We request pre-authorizations for major therapies (crowns, root canals, implants) so you can plan your expenses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── No Insurance? No Problem Section ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Membership Pricing */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-navy text-3xl font-bold">
                No Insurance? No Problem.
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                To help our self-pay patients manage their oral care costs, we offer a dedicated **In-House Dental Wellness Membership Plan**. It is a direct savings membership that eliminates the deductibles, yearly maximums, pre-approvals, and claim forms of traditional insurance.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Our membership covers all your routine preventive care (cleanings, examinations, and X-rays) for a flat yearly rate, plus gives you a **15% discount** on all clinical dental treatments, including:
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-center">
                <div className="bg-beige-light/20 border border-navy/5 rounded-2xl p-5">
                  <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-1">Child Plan</p>
                  <p className="font-heading text-navy text-2xl font-bold">$312</p>
                  <p className="text-navy/50 text-[10px]">Per Year</p>
                </div>
                <div className="bg-beige-light/20 border border-navy/5 rounded-2xl p-5">
                  <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-1">Adult Plan</p>
                  <p className="font-heading text-navy text-2xl font-bold">$369</p>
                  <p className="text-navy/50 text-[10px]">Per Year</p>
                </div>
                <div className="bg-beige-light/20 border border-navy/5 rounded-2xl p-5">
                  <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-1">Perio Plan</p>
                  <p className="font-heading text-navy text-2xl font-bold">$569</p>
                  <p className="text-navy/50 text-[10px]">Per Year</p>
                </div>
              </div>

              <div className="pt-4 text-xs md:text-sm text-navy/70 leading-relaxed space-y-2">
                <p>✓ <strong>15% Off</strong> restorative checkups, fillings, crowns, and surgical extractions.</p>
                <p>✓ <strong>10% Off</strong> dental implants, Invisalign orthodontic smile therapies, and cosmetic smile designs.</p>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-5 bg-beige-light/35 border border-navy/5 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Award className="w-10 h-10 text-primary" />
                <h3 className="font-heading text-navy text-xl font-bold">Enroll in the Wellness Plan</h3>
                <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                  Start saving on your family&apos;s preventative treatments immediately. Click below to view terms and claim membership specials.
                </p>
              </div>
              <div>
                <Link
                  href="/specials"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary transition-all duration-300 shadow-md"
                >
                  View Membership Specials
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Financing Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/10 border-t border-navy/[0.03]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Image / Visual */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
              <Image
                src="/images/reception_area_1779858343255.webp"
                alt="Hampton Family Dental Reception Area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/60 via-navy-dark/20 to-transparent z-10" />
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary absolute top-6 left-6 z-20 shadow-md">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="absolute bottom-6 left-6 z-20 text-white space-y-1">
                <p className="text-[10px] tracking-wider uppercase font-bold text-primary-light">Third-Party Financing</p>
                <p className="font-heading font-bold text-lg">CareCredit Partner</p>
              </div>
            </div>

            {/* Right: Financing Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-navy text-3xl font-bold">
                Flexible Dental Financing
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                If you have a large treatment plan—such as full dental implants, root canals, or extensive porcelain veneers—you can split your expenses into budget-friendly monthly payments.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Hampton Family Dental partners with **CareCredit**, a leading healthcare credit card. CareCredit offers interest-free payment periods (typically 6, 12, or 18 months) for qualified patients, allowing you to get the care you need today and pay over time.
              </p>
              <div className="pt-4">
                <Link
                  href="/patient-information/financing-options"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Explore Financing Options
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions Section ─── */}
      <section className="py-20 md:py-24 bg-white border-t border-navy/[0.03]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Billing FAQ</span>
            <h2 className="font-heading text-navy text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-navy/5 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-navy font-bold hover:bg-beige-light/5 transition-colors font-heading text-base md:text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-navy/70 text-xs md:text-sm leading-relaxed border-t border-navy/[0.03] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Scheduling CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30 border-t border-navy/[0.04] text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Ready to Schedule Your Checkup?
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about your insurance policy or ready to book your visit? Contact our Southampton staff directly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Request Appointment
            </Link>
            <a
              href={practiceInfo.phoneTel}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/15 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call {practiceInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
