"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Check,
  ShieldCheck,
  DollarSign,
  Calendar,
  Clock,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function CheckupsAndXRaysClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Dental Checkups & X-Rays", href: "/general-dentistry/checkups-and-x-rays" },
  ];

  const faqs = [
    {
      q: "How much does a dental checkup cost?",
      a: "Most dental insurance plans cover routine checkups and X-rays at 100%, so many patients pay nothing. New patients without insurance can use our $149 Welcome Special, which includes a comprehensive exam and X-rays, and our membership plan covers exams and routine X-rays for a low yearly fee.",
    },
    {
      q: "What happens during a dental checkup?",
      a: "We examine every tooth for decay, cracks, and worn fillings, check your gums and bite, screen for oral cancer, and take digital X-rays to see between teeth and below the gumline. Then we review everything with you and build a personalized care plan.",
    },
    {
      q: "Are digital dental X-rays safe?",
      a: "Yes! Digital X-rays expose you to negligible levels of radiation — up to 80% lower than traditional film X-rays — and are completely safe. We also provide protective lead aprons for additional comfort.",
    },
    {
      q: "How often do I need dental X-rays?",
      a: "For healthy adult patients, we typically capture a basic set of bite-wing X-rays once a year. A full-mouth scan or panoramic X-ray is generally recommended every 3 to 5 years.",
    },
    {
      q: "How often should I get a dental checkup?",
      a: "For most patients, a checkup and cleaning every six months is ideal. If you have gum disease, frequent cavities, or other risk factors, we may recommend more frequent visits to keep your mouth healthy.",
    },
    {
      q: "Are dental X-rays safe during pregnancy?",
      a: "Routine X-rays are usually postponed during pregnancy unless they’re needed to diagnose a problem, and when necessary we use a lead apron and thyroid collar for protection. Always let us know if you’re pregnant so we can tailor your care.",
    },
  ];

  const relatedServices = [
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
    { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening" },
    { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

  const xrays = [
    {
      type: "Bite-wing",
      shows: "Decay between back teeth & bone level",
      frequency: "About once a year",
    },
    {
      type: "Periapical",
      shows: "The whole tooth, root, and surrounding bone",
      frequency: "As needed for a specific tooth",
    },
    {
      type: "Panoramic",
      shows: "All teeth, jaws, sinuses & joints in one image",
      frequency: "Every 3–5 years",
    },
    {
      type: "Full-mouth series",
      shows: "Detailed view of every tooth",
      frequency: "Every 3–5 years / new patients",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[9px] tracking-[0.25em] uppercase font-semibold">
                  General Dentistry
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Dental Checkups & Digital X-Rays in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Catch decay, fractures, and structural alignment issues early. Our comprehensive examinations and low-radiation digital X-rays provide a clear diagnostic look to protect your oral health and design a personalized care roadmap.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Duration</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                30–60 minutes
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Visits</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Every 6 months
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 col-span-2 md:col-span-2">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Clinical Provider</p>
              <p className="text-xs text-white/90 mt-1 font-semibold">
                Southampton, PA Licensed Dentist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro & Definition Section (2-Column) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-beige-light/25 border border-navy/[0.04] p-6 md:p-8">
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  A dental checkup is the appointment that keeps everything else from going wrong. At Hampton Family Dental — formerly Brenner Dental Group — every checkup in our Southampton, PA office pairs a thorough exam with low-radiation digital X-rays, so Dr. Brenner and Dr. Dudhat can catch decay, cracks, gum disease, and bite problems while they’re still small and easy to treat. Most dental plans cover <Link href="/general-dentistry/oral-hygiene" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">routine checkups</Link> and X-rays at 100%, and new patients without insurance can start with our <Link href="/patient-information/new-patients" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">$149 Welcome Special</Link>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">What to Expect</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  What Happens During a Comprehensive Dental Exam?
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  A regular dental checkup is your primary line of defense. Dr. Brenner or Dr. Dudhat will evaluate your teeth, check existing restorations for leaks or wear, inspect your gums for signs of disease, and perform a screening of your jaw joint (TMJ). Digital X-rays are captured to inspect bone health, scan beneath your gums, and check for decay hiding between your teeth.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_general_1779858374972.webp"
                  alt="Dental Checkup & X-Rays"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits & Candidacy (Balanced Horizontal Cards) ─── */}
      <section className="py-16 md:py-20 bg-beige-light/35 border-y border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Benefits */}
            <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Key Patient Benefits
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Routine comprehensive examinations and low-radiation diagnostics prevent painful and expensive issues before they progress.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Catches cavities and tooth cracks before they cause pain",
                    "Low-radiation digital scans are safe and instant",
                    "Evaluates bite alignment & jaw joint health",
                    "Monitors bone levels to prevent tooth loss",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 bg-beige-light/10 p-3 rounded-xl border border-navy/[0.03] shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-navy/85 text-xs font-semibold leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Candidacy */}
            <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-2">
                  Is a Dental Checkup Right for You?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Comprehensive checkups and digital diagnostics are vital for every family member, maintaining lifetime oral health.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Essential for all family members",
                    "Every 6 months to maintain oral health",
                    "Experiencing cold sensitivity or jaw clicking",
                    "First visit recommendation by age 1",
                  ].map((check) => (
                    <li key={check} className="flex items-center gap-3">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-navy/85 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Treatment Process (Full Width, Centered Grid) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Step-by-Step</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">Your Treatment Process</h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              We focus on comfort and absolute precision. Here is what happens during your comprehensive exam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Digital X-Ray Diagnostic Scan",
                text: "We capture high-definition digital X-rays, exposing you to up to 80% less radiation than traditional film scans.",
              },
              {
                title: "Clinical Tooth Evaluation",
                text: "Dr. Brenner or Dr. Dudhat inspects every tooth, checking for cavities, cracks, or wear, and evaluating existing fillings or crowns.",
              },
              {
                title: "Gum & Bone Inspection",
                text: "We evaluate your gum pocket depths and inspect diagnostic bone levels on the digital X-rays to screen for periodontal disease.",
              },
              {
                title: "Consultation & Treatment Roadmap",
                text: "We sit down to review your diagnostic scans, discuss findings, answer your questions, and map out a personalized treatment plan.",
              },
            ].map((step, idx) => (
              <div key={step.title} className="flex gap-4 p-6 rounded-3xl bg-beige-light/10 border border-navy/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-navy text-base md:text-lg">{step.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Types of Digital Dental X-Rays Section ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="bg-white border border-navy/[0.06] rounded-[2rem] p-6 md:p-10 shadow-sm max-w-5xl mx-auto mb-16 relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-beige-light/35 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                    Advanced Diagnostics
                  </span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Types of Digital Dental X-Rays
                </h2>
                <p className="text-navy-light text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Seeing What Visual Exams Miss
                </p>
                <div className="pt-2">
                  <div className="inline-block h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="lg:col-span-7 text-navy/70 text-sm md:text-base leading-relaxed">
                <p>
                  Digital X-rays let us see what a visual exam can’t — between teeth, below the gumline, and inside the bone. They use up to 80% less radiation than old film X-rays and appear on screen instantly, so we can review them with you right away. The type and frequency depend on your age, your dental history, and what we’re checking for.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Responsive Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-navy/[0.06] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">X-Ray Type</th>
                    <th className="px-6 py-4">What It Shows</th>
                    <th className="px-6 py-4">Typical Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/[0.06]">
                  {xrays.map((x, idx) => (
                    <tr key={idx} className="hover:bg-beige-light/10 transition-colors">
                      <td className="px-6 py-4 font-heading font-bold text-navy">{x.type}</td>
                      <td className="px-6 py-4 text-navy/70">{x.shows}</td>
                      <td className="px-6 py-4 text-navy/70 font-semibold">{x.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Regular Checkups Matter & Cost (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Why Checkups Matter */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                Why Regular Checkups Matter
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Most serious dental problems are painless at first. A small cavity, a hairline crack, early gum disease, or a suspicious spot during an <Link href="/general-dentistry/oral-cancer-screening" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">oral cancer screening</Link> rarely hurts — which is exactly why six-month checkups matter. Catching these early means a quick, affordable fix with <Link href="/restorative-dentistry/dental-fillings" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">fillings</Link> instead of a root canal, an extraction, or a crown later on.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Regular exams also track changes over time. By comparing today’s X-rays and gum measurements to your past visits, we spot trends — bone loss, shifting teeth, worn restorations — before they become emergencies. For families, that means healthier smiles for everyone and fewer surprise dental bills. Learn more about our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">in-house membership plans</Link> to simplify scheduling.
              </p>
            </div>

            {/* Right: Cost Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 relative overflow-hidden backdrop-blur-md">
                <h4 className="font-heading font-bold text-white text-lg md:text-xl flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-light" />
                  Cost & Insurance Coverage
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Diagnostic checkups and X-rays are almost always covered at 100% by dental insurance, with no deductibles or co-pays.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> New patients without insurance get our $149 Welcome Special. Our in-house membership plans cover all exams and routine X-rays.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctor Block ─── */}
      <DoctorBlock />

      {/* ─── FAQ Block ─── */}
      <FAQBlock
        faqs={faqs}
        title="Dental Checkups & X-Rays FAQs"
      />

      {/* ─── Related Services ─── */}
      <section className="bg-beige-light/25 border-y border-navy/5">
        <div className="max-w-[1080px] mx-auto px-5 py-9 md:py-10">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-primary-dark text-[16px] tracking-widest uppercase font-bold">
                Areas We Serve
              </h4>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                {areasServedLine}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-navy/45 text-[10px] tracking-widest uppercase font-bold text-center md:text-left">
                Explore Related Dental Treatments
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.href}
                    href={rel.href}
                    className="group inline-flex items-center gap-2 bg-white border border-navy/5 px-4 py-2.5 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    {rel.label}
                    <ArrowUpRight className="w-3.5 h-3.5 text-navy/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Block ─── */}
      <CTABlock />
    </main>
  );
}
