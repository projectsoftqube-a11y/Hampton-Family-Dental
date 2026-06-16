"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, FileText, CheckCircle, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function NewPatientsPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "New Patients" },
  ];

  const firstVisitSteps = [
    {
      title: "1. Digital Intake Forms",
      desc: "Fill out your patient registry and dental history forms securely online before your visit. This saves you 15 minutes in our lounge.",
    },
    {
      title: "2. Welcome Tour & Photos",
      desc: "Our coordinator will show you around, capture digital diagnostic x-rays, and prepare your clinical chart.",
    },
    {
      title: "3. Clean & Checkup",
      desc: "Our hygienist performs a gentle teeth cleaning. Dr. Brenner or Dr. Dudhat then completes a full clinical exam.",
    },
    {
      title: "4. Health Roadmap Consultation",
      desc: "We sit down to review your scans, explain any treatment needs, discuss financing, and provide a clear plan forward.",
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
                  Welcome to Hampton
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
              Your First Visit at{" "}
              <span className="italic font-normal bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent">
                Hampton Dental.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              We are excited to welcome you to our Southampton practice. Find patient forms, what to expect on your first visit, and claim your introductory special.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── First Visit Checklist ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: What to Expect Steps */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Onboarding</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Your First Appointment Checklist
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  We want your first visit to be simple and stress-free. Here is what you can expect during your initial 60-minute comprehensive appointment.
                </p>
              </div>

              <div className="space-y-6">
                {firstVisitSteps.map((step) => (
                  <div key={step.title} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-navy/5 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-1 shadow-md">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-navy text-base">{step.title}</h4>
                      <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Intake Forms & Special Card */}
            <div className="lg:col-span-4 space-y-8">
              {/* Online Forms Download Box */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="font-heading text-navy text-lg font-bold">Patient Intake Forms</h3>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Save time in our office by completing your patient profile and medical intake history forms online before your visit.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => alert("Digital forms link clicked - in production this opens a secure patient portal.")}
                    className="w-full text-center py-3 rounded-full bg-navy text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-primary transition-all duration-300"
                  >
                    Complete Intake Online
                  </button>
                </div>
              </div>

              {/* Special Offer card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl space-y-4 shadow-lg relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/15 blur-2xl" />
                <h4 className="font-heading font-bold text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-light" />
                  New Patient Special
                </h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  No insurance? Claim our $149 Welcome Special. Includes professional cleaning, diagnostic x-rays, and full checkup.
                </p>
                <div className="pt-2">
                  <Link
                    href="/specials"
                    className="inline-flex items-center gap-1 text-xs text-primary-light hover:text-white font-semibold uppercase tracking-wider"
                  >
                    Claim Special Offer
                    <ArrowRight className="w-3.5 h-3.5" />
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
