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
  HeartPulse,
  AlertTriangle,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function PerioProtectClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
  ];

  const faqs = [
    {
      q: "What are the signs of gum disease?",
      a: "The most common early sign is gums that bleed when you brush or floss. Others include red, swollen, or receding gums, persistent bad breath, loose teeth, or a change in your bite. Early gum disease is often painless, so these signs matter.",
    },
    {
      q: "Can gum disease be reversed?",
      a: "The earliest stage — gingivitis — can usually be reversed with professional cleaning and good home care. More advanced gum disease (periodontitis) can't be fully reversed, but it can be controlled and stabilized with deep cleaning and therapies like Perio Protect so it doesn't get worse.",
    },
    {
      q: "How do you treat gum disease without surgery?",
      a: "Many cases are managed without surgery. We start with a deep cleaning (scaling and root planing) and often add Perio Protect — custom trays that deliver medication beneath the gumline at home. Together these control the infection and help gums heal, frequently avoiding the need for gum surgery.",
    },
    {
      q: "Why do my gums bleed when I brush?",
      a: "Bleeding gums are usually the first sign of gum inflammation (gingivitis) from plaque along the gumline. It's not something to brush past — with a professional cleaning and better home care, and treatment if needed, healthy gums shouldn't bleed.",
    },
    {
      q: "Is gum disease treatment covered by insurance?",
      a: "Many dental plans cover periodontal treatment such as deep cleanings, and some cover part of Perio Protect trays. We'll review your benefits with you. Members of our in-house plan receive 15% off, and we accept CareCredit for flexible payments.",
    },
    {
      q: "How does the Perio Protect gel work?",
      a: "The Perio Gel contains 1.7% hydrogen peroxide. When pushed into gum pockets by the custom trays, the peroxide releases oxygen. This kills the anaerobic bacteria responsible for gum disease, which cannot survive in oxygen-rich environments.",
    },
    {
      q: "Will Perio Protect replace scaling and root planing?",
      a: "Perio Protect is often used alongside scaling and root planing (deep cleanings) to enhance healing. By keeping bacteria levels low at home, it ensures your gums heal faster and stay healthy.",
    },
  ];

  const relatedServices = [
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
    { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
    { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

  const symptoms = [
    "Gums that bleed when you brush or floss",
    "Red, swollen, or tender gums",
    "Gums that are pulling away or receding from your teeth",
    "Persistent bad breath or a bad taste in your mouth",
    "Loose or shifting teeth, or a change in your bite",
    "Sensitivity, or teeth that look longer as gums recede",
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
              Gum Disease Treatment in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Non-surgical gum disease treatment to stop bleeding gums and restore oral health. Hampton Family Dental features comfortable, non-surgical gum disease treatments, including Perio Protect custom-fitted tray therapy alongside deep cleanings, to stop infection and restore your gums.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="flex flex-wrap gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 min-w-[200px]">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Clinical Provider</p>
              <p className="text-xs text-white/90 mt-1 font-semibold">
                Southampton, PA Licensed Dentist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Is Gum Disease? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Understanding Periodontal Health</span>
              </div>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                What Is Gum Disease?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Gum disease (periodontal disease) is an infection of the tissues that hold your teeth in place, caused by plaque bacteria building up along and beneath the gumline. It’s extremely common and often painless in the early stages — which is why so many people have it without realizing. Left untreated, it’s a leading cause of tooth loss in adults, and it’s been linked to heart disease, diabetes, and other health conditions.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                The good news: caught early, gum disease is very treatable, and at Hampton Family Dental we offer comfortable, non-surgical options — including Perio Protect tray therapy — to stop it and help your gums heal.
              </p>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/about_storytelling_1779858491119.webp"
                  alt="Gum Disease Treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Stages Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-navy/[0.06] bg-white shadow-sm">
            <h3 className="bg-beige-light/35 px-6 py-4 font-heading font-bold text-navy text-lg border-b border-navy/[0.06]">
              Stages of Periodontal Disease
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4 w-1/4">Stage</th>
                    <th className="px-6 py-4 w-5/12">What's happening</th>
                    <th className="px-6 py-4 w-1/3">Signs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/[0.06]">
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Gingivitis</td>
                    <td className="px-6 py-4 text-navy/70">Earliest, reversible stage — gum inflammation</td>
                    <td className="px-6 py-4 text-navy/70 font-semibold text-primary">Red, swollen, bleeding gums</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Early Periodontitis</td>
                    <td className="px-6 py-4 text-navy/70">Infection starts to affect supporting bone</td>
                    <td className="px-6 py-4 text-navy/70">Gums pulling away, deeper pockets</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Advanced Periodontitis</td>
                    <td className="px-6 py-4 text-navy/70">Significant bone & tissue loss</td>
                    <td className="px-6 py-4 text-navy/70 font-semibold">Loose teeth, receding gums, bad breath</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Signs & Symptoms ─── */}
      <section className="py-16 md:py-20 bg-beige-light/35 border-y border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Bullet List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                Signs & Symptoms of Gum Disease
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Because gum disease can progress quietly, it helps to know the warning signs. If you notice any of these, schedule an evaluation — the earlier we catch it, the simpler the treatment:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {symptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-navy/[0.04] shadow-sm">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-navy/85 text-xs font-semibold leading-snug">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: High-Contrast Callout Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-primary/20 p-6 md:p-8 rounded-[2rem] shadow-md relative overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-heading text-navy text-lg font-bold">Important warning</h4>
                  <p className="text-navy/75 text-sm leading-relaxed">
                    Bleeding gums are the most common early sign — and they’re not normal. If yours bleed regularly, let us take a look.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/patient-information/scheduling"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors"
                  >
                    Schedule an evaluation
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How We Treat Gum Disease ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              How We Treat Gum Disease in Southampton
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Treatment depends on how far the disease has progressed. For early gingivitis, an improved <Link href="/general-dentistry/oral-hygiene" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">hygiene routine and a professional cleaning</Link> may be enough to reverse it. For periodontitis, we typically start with a deep cleaning (scaling and root planing) to remove bacteria and tartar from below the gumline.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Where we stand out is what comes next. <strong>Perio Protect</strong> is a non-surgical, doctor-prescribed therapy that uses custom trays to deliver medication deep into gum pockets that brushing, flossing, and even scaling can’t fully reach — at home, in just 10–15 minutes a day. Used alongside deep cleaning, it helps your gums heal faster and stay healthy, and for many patients it means avoiding gum surgery altogether. (See the full Perio Protect details below.)
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              To detect gum issues early, we recommend maintaining regular <Link href="/general-dentistry/checkups-and-x-rays" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">dental checkups and digital X-rays</Link> at our office, which allows us to customize your treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What Is Perio Protect? (Signature Section) ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04] relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            {/* Left: What Is Perio Protect */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Signature Non-Surgical Care</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is Perio Protect?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Perio Protect is a non-invasive, doctor-prescribed treatment for gum disease (periodontitis). Conventional cleanings scale tartar from the surface, but bacteria quickly return to deep gum pockets. Perio Protect uses customized trays with a special seal that pushes a low-concentration hydrogen peroxide gel deep into these pockets. The gel kills bacteria, oxygenates the tissue, and helps gums heal naturally.
              </p>

              {/* Benefits Card */}
              <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-6 shadow-sm">
                <h3 className="font-heading text-navy text-xl font-bold">Key Patient Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Non-invasive treatment that reduces bleeding & inflammation",
                    "Delivers antibiotics deep into pockets that scaling can’t reach",
                    "Naturally freshens breath and whitens teeth during treatment",
                    "Short, convenient daily sessions in the comfort of your home",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 bg-beige-light/10 p-3 rounded-xl border border-navy/[0.03]">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-navy/85 text-xs font-semibold leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-navy text-2xl font-bold">Your Treatment Process</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Digital Gum Pocket Measurement",
                    text: "We evaluate your gums and measure your pocket depths. We then capture digital impressions to mold your custom trays.",
                  },
                  {
                    title: "Fitting Your Custom Perio Trays",
                    text: "Once the lab delivers your trays, we check the seal, demonstrate how to apply the peroxide gel, and define your daily schedule.",
                  },
                  {
                    title: "Daily Home Treatment",
                    text: "You wear the comfortable trays for just 10 to 15 minutes a day, letting the oxygenating gel clean and disinfect beneath the gums.",
                  },
                  {
                    title: "Progress Evaluation",
                    text: "We schedule follow-up checks to measure your pocket depths, verifying bleeding has resolved and gum tissue is healing.",
                  },
                ].map((step, idx) => (
                  <div key={step.title} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-navy/[0.04] shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-1 shadow-md">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-navy text-sm md:text-base">{step.title}</h4>
                      <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Candidacy & Cost Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Candidacy */}
            <div className="bg-beige-light/10 border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-2">
                  Is Perio Protect Right for You?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Perio Protect is highly recommended for patients experiencing bleeding gums, early to advanced gum disease, or chronic bad breath.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Bleeding gums when brushing or flossing",
                    "Deep periodontal pockets (4mm or deeper)",
                    "Chronic bad breath (halitosis) from bacteria",
                    "Looking for a non-surgical gum disease treatment",
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

            {/* Right: Cost Info */}
            <div className="bg-navy-dark text-white p-6 md:p-8 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/15 blur-2xl" />
              <div className="space-y-4 relative z-10">
                <h4 className="font-heading font-bold text-base flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-light" />
                  Cost & Insurance Coverage
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  The cost includes custom laboratory trays and prescription gel. While some dental insurance plans cover a portion of the trays, the treatment prevents major gum surgery costs.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off. CareCredit monthly payment options are accepted. Explore our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">membership plans and specials</Link> to save.
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
        title="Gum Disease & Perio Protect FAQs"
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
