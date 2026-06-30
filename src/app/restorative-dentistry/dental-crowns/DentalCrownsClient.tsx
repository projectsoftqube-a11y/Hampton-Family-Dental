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

export default function DentalCrownsClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
  ];

  const faqs = [
    {
      q: "How much does a dental crown cost?",
      a: "It depends on the material and the tooth. We give you a clear estimate first. Most insurance covers a portion, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "Can I get a crown in one day?",
      a: "In many cases, yes — same-day crowns are designed and milled in our office so you can finish in a single visit, with no temporary crown and no second appointment.",
    },
    {
      q: "What's the difference between a crown and a filling?",
      a: "A filling repairs a small cavity; a crown caps the entire tooth when it's cracked, heavily decayed, root-canal-treated, or too weak for a filling. We recommend the most conservative option that protects your tooth.",
    },
    {
      q: "How long do dental crowns last?",
      a: "With good care, crowns typically last 10 to 15 years or longer. Brushing, flossing, and regular checkups help them last — and we'll monitor yours at each visit.",
    },
    {
      q: "Does getting a crown hurt?",
      a: "No — the tooth is fully numbed during preparation, so you'll feel pressure but not pain. Mild sensitivity afterward is normal and short-lived.",
    },
    {
      q: "Will insurance cover my crown?",
      a: "Many dental plans cover part of a crown, especially when it's medically necessary. We'll check your benefits and explain your options, including financing and membership savings.",
    },
  ];

  const relatedServices = [
    { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
    { label: "Root Canal", href: "/restorative-dentistry/root-canal" },
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
                  Restorative Dentistry
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Dental Crowns in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Protect, strengthen, and restore teeth damaged by severe decay, cracks, or wear. Our custom dental crowns are crafted from premium dental ceramics to blend seamlessly with your smile and restore full biting strength.
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

      {/* ─── What Is a Dental Crown? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Standard Restorative Care</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is a Dental Crown?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A dental crown (often called a cap) is a custom-fitted restoration that covers the entire visible portion of a damaged tooth. It reinforces the remaining tooth structure, prevents further fractures, and restores a natural, healthy appearance. Crowns are also used to top dental implants and protect teeth that have undergone root canal treatment.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                When a tooth has a massive cavity, a deep crack, or has become brittle following root canal therapy, a standard filling is no longer enough to support it. Placing a dental crown acts as a protective shield, locking the tooth structure together so it can withstand normal biting forces without breaking.
              </p>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_veneers_1779858461216.webp"
                  alt="Dental Crowns"
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
                  Custom crowns restore full chewing function and blend seamlessly with your smile, preventing teeth from splitting or breaking.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Restores structural strength & function",
                    "Matches the exact color & contour of your teeth",
                    "Protects weakened teeth from fracturing",
                    "Stain-resistant and durable porcelain",
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
                  When is a Dental Crown Recommended?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Dental crowns are recommended for patients who have advanced decay, large cracked fillings, broken teeth, or who have recently received root canals.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Severe tooth decay or fractures",
                    "Large, failing silver fillings",
                    "Post-root canal protection",
                    "Aesthetic improvements for misshapen teeth",
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

      {/* ─── Types of Crowns / Same-Day Options ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Material Options</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Types of Dental Crowns We Offer
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              We match the crown material to the tooth and your goals. Front teeth usually get all-porcelain or zirconia crowns for a natural look; back teeth may use stronger zirconia or porcelain-fused-to-metal for chewing strength. Ask us about same-day crown options that let you walk out with your permanent crown in a single visit, skipping the temporary.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Porcelain & Ceramic</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Best for highly visible front teeth, offering unmatched aesthetic matching and natural light translucency.
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Solid Zirconia</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  An incredibly strong, metal-free material that handles high-pressure chewing on molars without fracturing.
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Porcelain-Fused-to-Metal</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  A metal inner core with porcelain outer layer, combining reliable strength with aesthetic restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Crown vs Filling vs Onlay ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Crown, Filling, or Onlay — Which Do You Need?
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              The right restoration depends on how much of the tooth is damaged. A filling repairs a small cavity; an onlay covers a larger area; a crown caps the entire tooth when it’s cracked, heavily decayed, root-canal-treated, or too weak for a filling. At your exam we recommend the most conservative option that fully protects your tooth.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              If you have a minor cavity, a direct <Link href="/restorative-dentistry/dental-fillings" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">dental filling</Link> is quick and preserves maximum tooth structure. For larger decay that compromises a portion of the chewing surface, an onlay (or partial crown) offers a durable middle ground. But if a tooth has structural fractures, has undergone a <Link href="/restorative-dentistry/root-canal" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">root canal</Link>, or needs replacement via a <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">dental implant</Link>, a full crown is essential to provide structural stability.
            </p>
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
              We prioritize your comfort and safety. Here is what happens during a dental crown procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Tooth Preparation & Digital Impressions",
                text: "The tooth is gently reshaped to accommodate the crown. We capture highly accurate digital impressions—no messy molds required.",
              },
              {
                title: "Temporary Crown Fitting",
                text: "A comfortable temporary crown is placed to protect the prepared tooth while our laboratory custom-crafts your permanent restoration.",
              },
              {
                title: "Final Crown Placement",
                text: "At your second visit, we remove the temporary, test the fit and color of your custom ceramic crown, and bond it securely in place.",
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

      {/* ─── Cost & Insurance (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden border-t border-navy/[0.04]">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Cost Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                How Much Does a Dental Crown Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The cost of a dental crown depends on the material (porcelain, zirconia, or porcelain-fused-to-metal) and the tooth being restored. We give you a clear estimate before treatment, explaining your options with transparency.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Most dental insurance plans cover a portion of crowns when medically necessary. We work directly with your provider to maximize your coverage. Additionally, we accept CareCredit for flexible financing, and <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">Hampton Dental Wellness members</Link> get 15% off, ensuring that restoring your smile fits comfortably into your budget.
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
                  The cost of a crown depends on the materials selected. Most dental insurance policies cover up to 50% to 80% of dental crown treatments when medically necessary.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off. CareCredit financing can cover out-of-pocket costs.
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
        title="Dental Crown FAQs"
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
