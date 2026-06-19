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
  CreditCard, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Phone, 
  Calendar, 
  Info,
  DollarSign,
  HelpCircle,
  Percent
} from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function FinancingOptionsClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Financing Options" },
  ];

  // Calculator State
  const [treatmentCost, setTreatmentCost] = useState<number>(3000);
  
  // FAQs State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Does applying for CareCredit affect my credit score?",
      answer: "CareCredit performs a soft credit check when you check if you pre-qualify, which does not affect your credit score. If you choose to submit a full application, a standard hard inquiry is completed."
    },
    {
      question: "Can I use financing for elective cosmetic dental work?",
      answer: "Yes, absolutely. Third-party financing like CareCredit is widely used for elective cosmetic services such as porcelain veneers, teeth whitening, smile makeovers, and orthodontic treatments like Invisalign."
    },
    {
      question: "Is there a penalty for paying off my balance early?",
      answer: "No, CareCredit does not charge pre-payment penalties. You can pay off your balance as quickly as you like to minimize any potential interest fees."
    }
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
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Dental Financing Options
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Don&apos;t let cost stand between you and a healthy smile. We offer several ways to make treatment affordable, from monthly payment plans to our in-house membership savings.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Main Content / Financing Programs ─── */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Detailed Sections */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* CareCredit */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Low Monthly Payments</span>
                </div>
                <h2 className="font-heading text-navy text-3xl font-bold">
                  CareCredit® Financing
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Hampton Family Dental partners with <strong>CareCredit®</strong> to provide convenient monthly payment options. CareCredit acts as a dedicated healthcare credit card that helps you pay for out-of-pocket dental costs not covered by insurance.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  With CareCredit, you can apply online in minutes and receive an immediate credit decision. Key benefits include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3 items-start bg-beige-light/10 border border-navy/5 p-4 rounded-2xl">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-navy font-bold text-sm">Interest-Free Promotional Terms</h4>
                      <p className="text-navy/60 text-xs leading-relaxed mt-1">
                        Get 6, 12, or 18 months interest-free if you make your minimum monthly payments and pay the full balance by the end of the promo term.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start bg-beige-light/10 border border-navy/5 p-4 rounded-2xl">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-navy font-bold text-sm">No Upfront Cost or Pre-Payment Penalties</h4>
                      <p className="text-navy/60 text-xs leading-relaxed mt-1">
                        Apply for free, use your credit line immediately upon approval, and pay off your balance early at any time without extra fees.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <a
                    href="https://www.carecredit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light transition-all duration-300 shadow-md"
                  >
                    Apply for CareCredit Online
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <hr className="border-navy/5" />

              {/* In-House Wellness Membership Plan */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">No Insurance Needed</span>
                </div>
                <h2 className="font-heading text-navy text-3xl font-bold">
                  In-House Dental Wellness Plan
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  For our Southampton patients without dental insurance, we offer our signature <strong>In-House Membership Plan</strong>. This is not insurance; it is a direct savings membership designed to cover your annual preventive care for a flat yearly rate.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  By joining, you eliminate deductibles, annual maximum caps, pre-authorizations, and standard insurance claim paperwork.
                </p>
                <div className="bg-beige-light/20 border border-navy/5 rounded-3xl p-6 md:p-8 space-y-4">
                  <h4 className="font-heading text-navy font-bold text-base">Plan Inclusions & Benefits:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-navy/90">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      2 Routine Cleanings & Exams / Year
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      All Recommended Digital X-Rays
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      1 Emergency Exam / Year
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      15% Off Fillings & Restorations
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/specials"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:text-primary-light"
                    >
                      View membership plan options
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <hr className="border-navy/5" />

              {/* Cosmetic Financing */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Smile Transformation</span>
                </div>
                <h2 className="font-heading text-navy text-3xl font-bold">
                  Cosmetic &amp; Advanced Dental Financing
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Elective cosmetic dental work—like dental veneers, teeth whitening, and Invisalign orthodontic therapy—is generally not covered by traditional insurance policies. Similarly, advanced restorative care such as modern <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-navy underline decoration-primary/30 hover:text-primary transition-colors">dental implants</Link> can involve higher upfront costs.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  We specialize in helping patients structure payment plans to design their dream smiles. Whether you are looking at <Link href="/cosmetic-dentistry/porcelain-veneers" className="font-semibold text-navy underline decoration-primary/30 hover:text-primary transition-colors">porcelain veneers</Link>, <Link href="/cosmetic-dentistry/clear-correct" className="font-semibold text-navy underline decoration-primary/30 hover:text-primary transition-colors">clear aligners</Link>, or full-mouth smile reconstruction, our financial coordinators will work out a strategy that fits your monthly cash flow.
                </p>
              </div>

            </div>

            {/* Right: Payment Estimator & Cost Checklist */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              {/* Payment Estimator Calculator */}
              <div className="bg-navy-dark text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden border border-white/5">
                <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
                <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2 text-white">
                  <Info className="w-5 h-5 text-primary-light" />
                  Payment Estimator
                </h3>
                <p className="text-white/70 text-[11px] leading-relaxed mb-6">
                  Estimate your potential monthly payment terms with standard third-party financing.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold text-white/80 mb-2">
                      <span>Treatment Cost:</span>
                      <span className="text-primary-light font-heading text-base">${treatmentCost.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="15000"
                      step="500"
                      value={treatmentCost}
                      onChange={(e) => setTreatmentCost(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-light"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 mt-1 font-semibold">
                      <span>$500</span>
                      <span>$15,000</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">6 Months Promo</p>
                        <p className="text-xs text-white/80 font-semibold mt-0.5">0% Interest</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-white">${Math.round(treatmentCost / 6)}/mo</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">12 Months Promo</p>
                        <p className="text-xs text-white/80 font-semibold mt-0.5">0% Interest</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-white">${Math.round(treatmentCost / 12)}/mo</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">24 Months Extended</p>
                        <p className="text-xs text-white/80 font-semibold mt-0.5">Estimated 14.9% APR</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-white">
                        ${Math.round((treatmentCost * 1.15) / 24)}/mo
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] text-white/40 italic text-center pt-2 leading-relaxed">
                    *Estimates only. Subject to credit approval. Interest-free promotions require paying off full balance inside promotional windows.
                  </p>
                </div>
              </div>

              {/* Real Team Guarantee */}
              <div className="bg-beige-light/20 border border-navy/5 rounded-3xl p-6 space-y-4">
                <Heart className="w-8 h-8 text-primary" />
                <h4 className="font-heading text-navy font-bold text-base">Cost Transparency Guarantee</h4>
                <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                  We promise never to begin clinical treatment without presenting a clear, written cost breakdown first. We verify your insurance and explain out-of-pocket costs with zero surprises.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─── Frequently Asked Questions Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/10 border-t border-navy/[0.03]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Financing Q&amp;A</span>
            <h2 className="font-heading text-navy text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-navy/5 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-navy font-bold hover:bg-beige-light/5 transition-colors font-heading text-base md:text-lg"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary shrink-0"
                    >
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </motion.span>
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
      <section className="py-16 md:py-20 bg-navy-dark text-white text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[90px] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6 relative z-10">
          <h2 className="font-heading text-white text-3xl font-bold leading-tight">
            Ask Us About Your Financing Options
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about splitting your dental bills into monthly installments or enrolling in our membership specials? Contact our Southampton office directly.
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-navy transition-all duration-300"
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
