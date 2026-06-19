"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  FileText, 
  CheckCircle, 
  Award, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Calendar, 
  Phone, 
  ChevronDown, 
  Info,
  Clock,
  ClipboardList
} from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function NewPatientsClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "New Patients" },
  ];

  const firstVisitSteps = [
    {
      title: "Friendly Personal Welcome",
      desc: "Our patient coordinator welcomes you, checks in your registry info, and gives you a brief tour of our comfortable office."
    },
    {
      title: "Thorough Diagnostic Imaging",
      desc: "We capture high-resolution digital diagnostic X-rays and 3D imaging if needed, using minimal-radiation equipment to map your oral health."
    },
    {
      title: "Oral Cancer Screening",
      desc: "Every new patient examination includes a non-invasive, quick screening for early signs of tissue irregularities to ensure your overall wellness."
    },
    {
      title: "Gentle Teeth Cleaning",
      desc: "If your gums are healthy and you are scheduled for a hygiene visit, our skilled hygienist will perform a thorough, gentle cleaning and polishing."
    },
    {
      title: "Comprehensive Clinical Evaluation",
      desc: "Dr. Jeffrey Brenner or Dr. Keyur Dudhat completes a detailed assessment of your teeth, existing dental work, and gum tissues."
    },
    {
      title: "Personal Treatment Planning Session",
      desc: "We sit down together to review your digital scans, answer your questions, outline therapeutic options, and build a clear path forward."
    }
  ];

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your current dental insurance card (if applicable), and a list of any medications you are taking. If you have had recent dental X-rays taken at another office within the past year, please request to have them forwarded to our email address hello@hamptonfamilydental.com prior to your visit."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept and file claims with most major PPO dental insurance providers. Our administrative staff will perform a complimentary benefit check to verify your coverage and estimate your co-payments before any treatment begins."
    },
    {
      question: "What if I do not have dental insurance?",
      answer: "We welcome patients without dental insurance! We offer a $149 New Patient Special which covers your comprehensive examination and diagnostic digital X-rays. For long-term care, you can enroll in our in-house Dental Membership Plan, which covers your annual preventive cleaning and offers significant discounts on restorative treatments."
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
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  New Patients
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Welcome New Patients
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              We look forward to meeting you. Find onboarding details, new-patient specials, and answers to common questions about your first visit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Sincere Intro Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Sincere Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary shrink-0" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">First Appointment</span>
              </div>
              <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
                An Easy, Comfortable First Visit
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                We&apos;re delighted to welcome you to Hampton Family Dental. Whether it&apos;s been six months or several years since your last visit, our team makes your first appointment easy, comfortable, and judgment-free.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                As a premier option for patients seeking a trusted <strong className="text-navy">new patient dentist southampton</strong>, we dedicate ample one-on-one time during your first appointment to listen to your goals, review your dental history, and understand your needs. You are never rushed, and we make sure all of your clinical questions are thoroughly answered.
              </p>
            </div>

            {/* Right Column: Key Details */}
            <div className="lg:col-span-5 bg-beige-light/20 border border-navy/[0.04] rounded-3xl p-8 space-y-4 shadow-sm">
              <h3 className="font-heading text-navy text-xl font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Appointment Details
              </h3>
              <ul className="space-y-3 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy">Duration:</strong> Approximately 60 minutes.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy">X-Rays:</strong> Required for accurate clinical diagnosis unless recent digital scans are provided.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy">Scheduling:</strong> Please arrive 10 minutes early if completing forms in-office.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── What to Expect Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/10 border-y border-navy/[0.03]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Onboarding Experience</span>
            <h2 className="font-heading text-navy text-3xl font-bold">
              What to Expect at Your First Visit
            </h2>
            <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
              We design our initial checkups to be thorough, educational, and focused entirely on your long-term health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstVisitSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-navy text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Forms & Financial Specials ─── */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Box: New Patient Forms */}
            <div className="bg-beige-light/20 border border-navy/5 rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-navy text-2xl font-bold">
                  New Patient Forms
                </h2>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Completing your patient registration and medical history prior to your arrival allows us to expedite your check-in process and give you more time with your clinician.
                </p>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Click below to access our secure digital intake forms. If you prefer to fill them out by hand, please arrive 15 minutes before your scheduled appointment time to complete them in our reception lounge.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => alert("Digital forms link: In production, this launches your secure HIPAA-compliant Patient Portal.")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary transition-all duration-300 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  Complete Online Forms
                </button>
              </div>
            </div>

            {/* Right Box: New Patients Without Insurance */}
            <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-white rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-white/10">
              <div className="absolute top-[-50%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[90px] pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-primary-light">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-white text-2xl font-bold">
                  New Patients Without Insurance
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  No insurance? No problem. We believe high-quality dental care should be affordable for everyone. At Hampton Family Dental, we offer a dedicated welcome promotion to make your transition easy:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                  <p className="font-heading text-primary-light text-2xl font-bold">
                    $149 Welcome Special
                  </p>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    Includes a comprehensive clinical examination, complete diagnostic digital X-rays, and custom consultation with Dr. Brenner or Dr. Dudhat.
                  </p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  For your ongoing care, we also offer a budget-friendly in-house Membership Plan that covers routine cleanings and gives you significant discounts on all treatments.
                </p>
              </div>
              
              <div className="pt-6 relative z-10">
                <Link
                  href="/specials"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
                >
                  View Special Offers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20 border-t border-navy/[0.03]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Common Questions</span>
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
      <section className="py-16 md:py-20 bg-white text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Schedule Your New Patient Visit Today
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Ready to book with our friendly Southampton team? Secure your slot online or call us directly.
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
