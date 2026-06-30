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
  Sparkle,
  Layers,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function SmileMakeoverClient() {
  const breadcrumbs = [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
  ];

  const faqs = [
    {
      q: "How much does a smile makeover cost?",
      a: "It's fully customized, so cost depends on the treatments in your plan — from a whitening-and-bonding refresh to full veneers. We give you a clear, itemized estimate at your consultation and offer CareCredit financing.",
    },
    {
      q: "What's included in a smile makeover?",
      a: "Whatever your smile needs — it can combine whitening, veneers, bonding, clear aligners, and crowns or implants. We design a personalized plan around your goals and budget.",
    },
    {
      q: "How long does a smile makeover take?",
      a: "It depends on the treatments — a whitening-and-bonding refresh can be quick, while a plan involving alignment or implants takes longer. We'll map out a clear timeline at your consultation.",
    },
    {
      q: "Can I see my new smile before treatment?",
      a: "Yes — we often use digital smile design or previews so you can see the expected result before we begin, and adjust the plan together until you love it.",
    },
    {
      q: "Can I do my smile makeover in phases?",
      a: "Absolutely. Many patients phase treatment over time to fit their schedule and budget. We'll prioritize the steps that matter most to you and plan the rest at your pace.",
    },
    {
      q: "Will a smile makeover look natural?",
      a: "Yes — our goal is a result that looks like the best version of your own smile, not 'fake.' We match shape and shade to your face and features so it looks completely natural.",
    },
  ];

  const relatedServices = [
    { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
    { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
    { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

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
                  Cosmetic Dentistry
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Smile Makeover in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Rebuild, restore, and transform your entire smile. A smile makeover is a comprehensive, personalized plan combining multiple cosmetic and restorative treatments to achieve the symmetrical, radiant smile you have always wanted.
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

      {/* ─── What is a Smile Makeover ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Personalized Design</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is a Smile Makeover?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A smile makeover is not a single treatment; it is a customized dental treatment plan designed to address all your cosmetic goals. Dr. Brenner and Dr. Dudhat evaluate your teeth alignment, spacing, color, shape, and gumline symmetry. Your plan may combine teeth whitening, porcelain veneers, dental implants, Invisalign, and bonding. Using advanced digital diagnostics, we plan the timeline and map out your transformation.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                We believe that cosmetic dentistry is a blend of science and art. A smile makeover doesn't just improve how your teeth look — it is structured to support your overall oral health, correct bite misalignments, and prevent future dental wear. We match the proportions of your teeth to your lip line and facial shape, giving you a beautiful, balanced, and premium result.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Whether you want to fix minor chips or undergo a full cosmetic rehabilitation, we design a path forward that matches your goals and budget. We use state-of-the-art materials that mimic natural light reflection, so your new smile looks radiant, healthy, and authentic to you.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_veneers_1779858461216.webp"
                  alt="Smile Makeover Southampton"
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

      {/* ─── What's Included / Treatments We Combine ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Custom Combinations</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              What's Included in a Smile Makeover
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              No two smile makeovers are the same. After listening to your goals, we design a personalized plan that may combine any of these treatments:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-heading font-bold text-navy text-base">
                  <Link href="/cosmetic-dentistry/porcelain-veneers" className="text-primary hover:underline">Porcelain Veneers</Link>
                </h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Mask gaps, stains, cracks, or crooked teeth with ultra-thin, natural-looking porcelain shells custom-fabricated for your smile line.
                </p>
              </div>

              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-heading font-bold text-navy text-base">
                  <Link href="/cosmetic-dentistry/teeth-whitening" className="text-primary hover:underline">Teeth Whitening</Link>
                </h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Safely lift years of surface stains from coffee, wine, or tobacco with our fast, clinical-grade in-office and take-home systems.
                </p>
              </div>

              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-heading font-bold text-navy text-base">
                  <Link href="/cosmetic-dentistry/dental-bonding" className="text-primary hover:underline">Dental Bonding</Link>
                </h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Repair small chips, reshape slightly uneven teeth, or fill tiny gaps in a single, conservative visit using tooth-colored composite resin.
                </p>
              </div>

              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-heading font-bold text-navy text-base">
                  <Link href="/cosmetic-dentistry/invisalign" className="text-primary hover:underline">Invisalign Clear Aligners</Link>
                </h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Straighten crowded teeth or close large gaps discreetly and comfortably with removable, virtually invisible plastic aligner trays.
                </p>
              </div>

              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-heading font-bold text-navy text-base">
                  <Link href="/restorative-dentistry/dental-implants" className="text-primary hover:underline">Dental Implants</Link>
                </h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Replace missing teeth permanently with biocompatible implants that restore full chewing strength and prevent bone loss in the jaw.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Coordinated Care</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    By coordinating multiple treatments under one plan, we save you visits, minimize recovery times, and ensure a harmonious result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Smile Makeover Process ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">The Journey</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Your Smile Makeover Journey
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              It starts with a consultation where we listen to what you want to change and examine your teeth, gums, and bite. We then design your custom plan — often with a digital preview so you can see the result before we begin — and walk you through the timeline and cost. From there, we complete your treatments in a comfortable, coordinated sequence and reveal your new smile.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              We understand that choosing a smile makeover is a big decision. That's why we utilize advanced digital imaging and dental mock-ups to let you preview and participate in your smile design. You can select your preferred shade, test your bite alignment, and coordinate treatment phases around your calendar.
            </p>
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
                  Key Makeover Benefits
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  A smile makeover addresses multiple cosmetic and structural concerns under a unified, convenient plan, yielding a balanced and natural result.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Custom-tailored plan matching your facial structure and goals",
                    "Combines multiple treatments for a comprehensive transformation",
                    "Restores missing teeth and aligns crooked teeth",
                    "Boosts self-confidence and youthfulness significantly",
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
                  Who Is a Candidate?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  A smile makeover is perfect for patients with multiple cosmetic concerns, such as missing, crooked, stained, chipped, or worn teeth.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Multiple missing, chipped, or worn teeth",
                    "Significant alignment, crowding, or spacing issues",
                    "Severe, permanent staining resistant to bleaching",
                    "Looking for a complete, life-changing smile upgrade",
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
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">Your Smile Makeover Journey</h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              We ensure your smile transformation is precise, comfortable, and exactly what you envisioned.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Aesthetic Design & Scans",
                text: "We discuss your goals, capture digital x-rays, and use 3D scanners to design your custom smile line and plan your treatment sequence.",
              },
              {
                title: "Health Prep & Alignment",
                text: "We treat any underlying gum issues or cavities first. If alignment is needed, we start clear aligner therapy (Invisalign or ClearCorrect).",
              },
              {
                title: "Restorations & Whitening",
                text: "We perform teeth whitening, place porcelain veneers, insert dental implants, or perform cosmetic bonding to complete your smile.",
              },
              {
                title: "Final Reveal & Tune-Ups",
                text: "We fit all restorations, verify your bite is comfortable, and polish the finished work to ensure a stunning, long-lasting smile.",
              },
            ].map((step, idx) => (
              <div key={step.title} className="flex flex-col gap-4 p-6 rounded-3xl bg-beige-light/10 border border-navy/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
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

      {/* ─── Cost & Insurance (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden border-t border-navy/[0.04]">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />

        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Cost Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                How Much Does a Smile Makeover Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                A smile makeover is fully customized, so cost depends on which treatments your plan includes — anything from a simple whitening-and-bonding refresh to a full veneer transformation. At your consultation we design your plan and give you a clear, itemized estimate. We offer CareCredit financing and flexible options so you can phase treatment over time if you'd like.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                We believe that financing should never stand between you and your dream smile. To help make your transformation manageable, we accept low-interest payments through leading third-party lenders. For more details on monthly payments, visit our <Link href="/patient-information/financing-options" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">financing options page</Link>.
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
                  The cost depends on the specific treatments in your custom plan. While cosmetic services are usually elective, any restorative treatments (implants, crowns) may be covered by insurance.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> We partner with CareCredit to offer low-interest monthly payments, making your smile transformation affordable.
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
        title="Smile Makeover FAQs"
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
