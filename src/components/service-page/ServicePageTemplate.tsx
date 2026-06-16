"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Check, ArrowRight, ShieldCheck, DollarSign, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

interface Step {
  title: string;
  text: string;
}

interface CostInfo {
  text: string;
  financingNote: string;
}

interface RelatedService {
  label: string;
  href: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageTemplateProps {
  eyebrow: string;
  title: string;
  intro: string;
  duration: string;
  visits: string;
  image: string;
  whatIs: {
    title: string;
    text: string;
  };
  benefits: string[];
  processSteps: Step[];
  candidacy: {
    text: string;
    checks: string[];
  };
  costInfo: CostInfo;
  faqs: FAQ[];
  relatedServices: RelatedService[];
  breadcrumbs: { label: string; href?: string }[];
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  duration,
  visits,
  image,
  whatIs,
  benefits,
  processSteps,
  candidacy,
  costInfo,
  faqs,
  relatedServices,
  breadcrumbs,
}: ServicePageTemplateProps) {

  // JSON-LD Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": title,
    "description": intro,
    "provider": {
      "@type": "Dentist",
      "name": "Hampton Family Dental",
      "telephone": "+12153572224",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "283 Second Street Pike, Suite 140",
        "addressLocality": "Southampton",
        "addressRegion": "PA",
        "postalCode": "18966",
        "addressCountry": "US"
      }
    }
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
                  {eyebrow}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              {intro}
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Duration</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {duration}
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Visits</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {visits}
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

      {/* ─── Detail Description & Benefits ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Main Column: Definitions, Benefits, Process */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Definition */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">What to Expect</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  {whatIs.title}
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  {whatIs.text}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-beige-light/20 border border-navy/[0.04] p-6 md:p-8 rounded-3xl space-y-6">
                <h3 className="font-heading text-navy text-xl font-bold">Key Patient Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-navy/[0.03] shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-navy/85 text-xs font-semibold leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Numbered Process Steps */}
              <div className="space-y-6">
                <h3 className="font-heading text-navy text-2xl font-bold">Your Treatment Process</h3>
                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <div key={step.title} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-1 shadow-md">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-heading font-bold text-navy text-base">{step.title}</h4>
                        <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Illustration & Financing details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              {/* Main Service Illustration */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              </div>

              {/* Candidacy Block */}
              <div className="bg-beige-light/25 border border-navy/[0.04] p-6 rounded-3xl space-y-4">
                <h4 className="font-heading font-bold text-navy text-base">Is {title} Right for You?</h4>
                <p className="text-navy/60 text-xs leading-relaxed">
                  {candidacy.text}
                </p>
                <ul className="space-y-2 text-xs">
                  {candidacy.checks.map((check) => (
                    <li key={check} className="flex items-center gap-2">
                      <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-2 h-2 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-navy/85 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost & Financing Card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl space-y-4 shadow-lg relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/15 blur-2xl" />
                <h4 className="font-heading font-bold text-base flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-light" />
                  Cost & Insurance Coverage
                </h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  {costInfo.text}
                </p>
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-[11px] text-primary-light leading-snug">
                  <strong>Financing Option:</strong> {costInfo.financingNote}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Doctors Block ─── */}
      <DoctorBlock />

      {/* ─── FAQ Accordion Block ─── */}
      <FAQBlock faqs={faqs} title={`${title} FAQs`} />

      {/* ─── Related Services Navigation ─── */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-beige-light/20 border-t border-navy/5">
          <div className="max-w-[1000px] mx-auto px-5">
            <h4 className="text-navy/45 text-[10px] tracking-widest uppercase font-bold text-center mb-6">
              Explore Related Dental Treatments
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="group inline-flex items-center gap-2 bg-white border border-navy/5 px-5 py-2.5 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
                >
                  {rel.label}
                  <ArrowUpRight className="w-3.5 h-3.5 text-navy/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA Banner Block ─── */}
      <CTABlock />
    </main>
  );
}
