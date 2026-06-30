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
  HelpCircle,
  Sparkle,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function PorcelainVeneersClient() {
  const breadcrumbs = [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
  ];

  const faqs = [
    {
      q: "How much do porcelain veneers cost?",
      a: "Cost depends on how many teeth and the material. We give you a clear quote at your consultation. Veneers are usually a cosmetic investment not covered by insurance, but we offer CareCredit financing.",
    },
    {
      q: "How long do veneers last?",
      a: "With good care, porcelain veneers typically last 10 to 15 years or more. They don't decay, but the tooth underneath still needs healthy habits and regular checkups.",
    },
    {
      q: "Are veneers permanent?",
      a: "Because a thin layer of enamel is reshaped to place them, veneers are considered a permanent, long-term treatment — the teeth will always need some form of covering afterward.",
    },
    {
      q: "What's the difference between veneers and crowns?",
      a: "Veneers cover just the front of the tooth for cosmetic improvement; crowns cap the entire tooth when it's also damaged or weak. We'll recommend the right one for your situation.",
    },
    {
      q: "Do veneers ruin your teeth?",
      a: "No — when placed by an experienced dentist, only a minimal amount of enamel is reshaped. Veneers actually protect the front of the tooth, and the result looks and feels natural.",
    },
    {
      q: "Can I get just one veneer?",
      a: "Yes — a single veneer can fix one chipped or discolored tooth, and we color-match it precisely to blend with your natural teeth. Many patients do a few, or a full smile, depending on their goals.",
    },
  ];

  const relatedServices = [
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
    { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
    { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
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
              Porcelain Veneers in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Correct cracks, gaps, chips, or severe discoloration instantly. Our custom porcelain veneers are handcrafted to bond securely to the front of your teeth, creating a symmetrical, bright, and stunning smile.
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

      {/* ─── What Are Porcelain Veneers? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Porcelain Artistry</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What are Porcelain Veneers?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Porcelain veneers are thin, custom-fabricated shells of dental ceramic designed to cover the front surface of your teeth. Veneers are an excellent option to address minor tooth alignment issues, cover chips or worn enamel, close gaps, and mask severe staining that does not respond to <Link href="/cosmetic-dentistry/teeth-whitening" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">teeth whitening</Link>. They are highly durable, stain-resistant, and mimic the light-reflecting properties of natural enamel.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A gorgeous smile has a massive impact on your self-esteem, social interactions, and professional confidence. Over time, teeth can develop micro-fractures, become dull, or shift slightly, making you feel self-conscious about showing your smile. Porcelain veneers act as a comprehensive, long-term makeover. They give you a perfectly aligned, beautifully proportioned, and naturally white smile that looks completely authentic to your facial features.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we believe in conservative, high-precision dentistry. We design your veneers with extreme attention to detail, matching the translucency and contour of natural teeth. If you are looking to completely redesign your smile, we can combine veneers with other cosmetic options in a comprehensive <Link href="/cosmetic-dentistry/smile-makeover" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">smile makeover</Link> plan tailored just for you.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_veneers_1779858461216.webp"
                  alt="Porcelain Veneers"
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

      {/* ─── What Porcelain Veneers Can Fix ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Aesthetic Solutions</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              What Porcelain Veneers Can Fix
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Veneers are thin, custom shells bonded to the front of your teeth — a versatile way to redesign your smile in just a couple of visits. They can correct:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left">
              {[
                { title: "Discolored Teeth", text: "Stained or discolored teeth that don't respond to traditional whitening procedures, including internal tetracycline staining or deep fluorosis." },
                { title: "Chipped or Worn Teeth", text: "Chipped, cracked, or worn teeth that make the edges of your teeth look jagged or uneven, restoring their youthful shape and length." },
                { title: "Spaces and Gaps", text: "Small gaps or spacing issues between teeth, allowing you to close unsightly gaps without needing braces or aligners." },
                { title: "Minor Misalignments", text: "Slightly crooked, crowded, or uneven teeth. While major alignment issues require orthodontics, veneers can beautifully mask minor crowding." },
                { title: "Misshapen Teeth", text: "Teeth that are naturally too small, pointed, or misshapen, bringing them into perfect proportion with the rest of your smile." },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Solution 0{idx + 1}</span>
                  <h4 className="font-heading font-bold text-navy text-base mt-1 mb-2">{item.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Perfect Customization</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    Every porcelain veneer is custom-designed for the individual. We meticulously shape, size, and shade them to match your skin tone, lip line, and symmetry goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Veneers vs Crowns vs Bonding ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Treatment Comparison</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Veneers vs. Crowns vs. Bonding
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              All three improve how teeth look, but they're different. Veneers cover the front of the tooth for a dramatic, durable smile change. Crowns cap the whole tooth when it's also damaged or weak. Bonding is the quickest, most affordable fix for small chips. We'll recommend the best option for your goals and budget.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-beige-light/10 border border-navy/[0.03] p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-navy text-lg">Porcelain Veneers</h4>
                <ul className="space-y-2 text-xs md:text-sm text-navy/70">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Covers only the front surface of the tooth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Best for cosmetic enhancement of healthy teeth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Highly durable & premium stain resistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-beige-light/10 border border-navy/[0.03] p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-navy text-lg">Dental Crowns</h4>
                <ul className="space-y-2 text-xs md:text-sm text-navy/70">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Caps the entire visible surface of the tooth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Best for weak, decayed, or fractured teeth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Provides exceptional structural reinforcement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-beige-light/10 border border-navy/[0.03] p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-navy text-lg">Dental Bonding</h4>
                <ul className="space-y-2 text-xs md:text-sm text-navy/70">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Applies composite resin directly to the tooth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Best for small chips, gaps, or single repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Fast, single-visit care and very budget-friendly</span>
                  </li>
                </ul>
                <p className="text-xs text-navy/50 pt-2">
                  Learn more about our fast cosmetic repairs on our <Link href="/cosmetic-dentistry/dental-bonding" className="font-semibold text-primary underline decoration-primary/20 hover:text-primary-dark">dental bonding page</Link>.
                </p>
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
                  Porcelain veneers deliver an unmatched combination of beauty, strength, and longevity for patients who want a flawless, natural-looking smile.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Instantly corrects color, spacing, and minor alignment issues",
                    "Stain-resistant porcelain keeps your smile bright for years",
                    "Requires less tooth preparation than a dental crown",
                    "Custom-crafted to match your facial shape & smile line",
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
                  Are You a Candidate for Veneers?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Porcelain veneers are ideal for patients with healthy teeth and gums who want to correct cosmetic imperfections, minor chips, gaps, or severe staining.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Chipped, worn, or cracked tooth edges",
                    "Significant gaps or spacing issues",
                    "Severe staining resistant to teeth whitening",
                    "Healthy support bone structure and gums",
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
              Redesigning your smile is a collaborative, rewarding process. Here is what you can expect during your visits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Tooth Preparation & Scans",
                text: "We gently remove a microscopic layer of enamel to ensure the veneers sit flush. We capture digital scans to design your customized veneers.",
              },
              {
                title: "Temporary Veneers Placement",
                text: "We fit temporary veneers to protect your teeth and let you preview your new smile while our dental laboratory fabricates your final porcelain shells.",
              },
              {
                title: "Bonding Your Veneers",
                text: "At your second visit, we remove the temporaries, test the fit and look of your final veneers, make minor adjustments, and bond them permanently in place.",
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
                How Much Do Porcelain Veneers Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Veneer cost depends on how many teeth you're treating and the material. Because a veneer smile is custom-designed, we give you a clear quote at your consultation. Veneers are typically a cosmetic investment not covered by insurance, but we offer low-interest financing through CareCredit to make your dream smile affordable.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we want to make sure your cosmetic investments deliver maximum, long-lasting value. To help manage the cost of veneers, our patient coordinator can help set up flexible monthly payments. Be sure to check our <Link href="/patient-information/financing-options" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">financing options page</Link> to learn how you can break your treatment down into comfortable payments.
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
                  Since veneers are considered an elective cosmetic procedure, they are generally not covered by dental insurance. We focus on durable materials that deliver long-lasting value.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> We accept low-interest monthly financing through CareCredit, making your dream smile fit comfortably into your budget.
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
        title="Porcelain Veneers FAQs"
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
