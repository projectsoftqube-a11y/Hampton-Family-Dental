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
  Scale,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function ClearCorrectClient() {
  const breadcrumbs = [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Clear Correct", href: "/cosmetic-dentistry/clear-correct" },
  ];

  const faqs = [
    {
      q: "How much do clear aligners cost?",
      a: "It depends on how much movement is needed and the treatment length. ClearCorrect is often cost-effective. We give you a clear quote, check orthodontic insurance, and offer CareCredit financing.",
    },
    {
      q: "What's the difference between ClearCorrect and Invisalign?",
      a: "Both use clear, removable aligners to straighten teeth discreetly. ClearCorrect is often more budget-friendly; Invisalign has a longer track record. We'll recommend the best fit.",
    },
    {
      q: "How long does clear aligner treatment take?",
      a: "Most treatments take about 6 to 18 months depending on your case. We'll give you a personalized timeline after scanning your teeth.",
    },
    {
      q: "Are clear aligners as effective as braces?",
      a: "For mild to moderate cases, yes - clear aligners straighten teeth effectively while being removable and nearly invisible. Complex cases may do better with braces.",
    },
    {
      q: "How many hours a day do I wear them?",
      a: "For best results, wear your aligners 20 to 22 hours a day, removing them only to eat, drink anything but water, and brush your teeth.",
    },
    {
      q: "Do clear aligners hurt?",
      a: "You may feel mild pressure for a day or two when switching trays - a sign they're working. It's much gentler than tightening metal braces, with no sharp brackets or wires.",
    },
  ];

  const relatedServices = [
    { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
    { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
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
              Clear Aligners in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Achieve a straight, aligned smile with ClearCorrect clear aligners. This advanced orthodontic system offers a comfortable, discreet, and cost-effective alternative to traditional metal braces.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Duration</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                6–18 months
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Visits</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Every 4–6 weeks
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

      {/* ─── What is ClearCorrect? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Discreet Orthodontics</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is ClearCorrect?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                ClearCorrect is an FDA-cleared clear aligner system used to straighten teeth. Made of a proprietary, highly stain-resistant plastic that is thinner and slightly firmer than other brands, ClearCorrect aligners fit snugly and comfortably over your teeth. By wearing each custom-molded tray in sequence, your teeth are guided into alignment. They are fully removable for eating, brushing, and flossing.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                This modern system is perfect for anyone seeking a straight, healthy smile without the look or hassle of metal braces. It belongs in our full range of <Link href="/cosmetic-dentistry" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark font-body">cosmetic dentistry options</Link>, designed to transform and refresh your smile. Clear aligner therapy makes it easier than ever to achieve your orthodontic goals comfortably.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we begin by taking a precise 3D digital scan of your mouth — no messy impressions needed. We map out your complete tooth-straightening journey using ClearCorrect software, giving you a preview of how your straight smile will look before we even fabricate your first aligner tray.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/about_storytelling_1779858491119.webp"
                  alt="Clear Aligners Treatment"
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

      {/* ─── What Clear Aligners Can Correct ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Clinical Applications</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              What Clear Aligners Can Correct
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Clear aligners gently move teeth into place over a series of custom trays. They're a great fit for crowded or overlapping teeth, gaps and spacing, and mild to moderate bite issues like overbite, underbite, and crossbite — for teens and adults who want a discreet, removable option.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left">
              {[
                { title: "Crowded Teeth", text: "When there isn't enough room in your jaw for all your teeth to fit normally, causing overlapping, twisting, or displacement." },
                { title: "Gaps & Spacing Issues", text: "Extra spaces or gaps between two or more teeth, which can trap food particles and affect the symmetry of your smile." },
                { title: "Mild Overbites", text: "When your upper front teeth overlap significantly with your lower front teeth, causing wear on your lower dentition." },
                { title: "Underbites & Crossbites", text: "When your lower teeth overlap or bite outside of your upper teeth, leading to uneven wear and jaw strain." },
                { title: "Crooked or Rotated Teeth", text: "Teeth that have rotated or tilted out of alignment, creating an uneven smile line and harder-to-clean spaces." },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Target 0{idx + 1}</span>
                  <h4 className="font-heading font-bold text-navy text-base mt-1 mb-2">{item.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Treatment Benefits</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    By straightening crowded or gapped teeth, clear aligners make your teeth easier to brush and floss, lowering your risk for tooth decay and gum disease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ClearCorrect vs Invisalign ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Scale className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Compare Options</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              ClearCorrect vs. Invisalign
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Both ClearCorrect and Invisalign use clear, removable aligners to straighten teeth discreetly — they're more alike than different. ClearCorrect is frequently more budget-friendly, while Invisalign has a longer track record and some advanced features for complex cases. At your consultation we'll look at your smile and recommend the option that gives you the best result for your goals and budget.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              ClearCorrect uses a high-performance polyurethane material that offers excellent stain resistance and clarity, often remaining clearer than other aligner brands. If you are specifically interested in Invisalign, you can read more about it on our dedicated <Link href="/cosmetic-dentistry/invisalign" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">Invisalign aligners page</Link>.
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
                  Key Aligner Benefits
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Clear aligners allow you to achieve a beautiful, straight smile without metal brackets, food restrictions, or dental wax.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Ultra-thin, clear material is virtually invisible",
                    "Removable to maintain optimal oral hygiene",
                    "Cost-effective alternative for aligner treatment",
                    "Highly stain-resistant and durable medical-grade plastic",
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
                  When Are Clear Aligners Recommended?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Clear aligners are suitable for treating spacing issues, minor crowding, overbites, or crooked teeth in both teenagers and adults.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Minor to moderate teeth crowding",
                    "Spacing issues or gaps between teeth",
                    "Discreet, wireless orthodontic option preferred",
                    "Looking for a budget-friendly aligner alternative",
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
              We ensure your orthodontic journey is precise, comfortable, and predictable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "3D Smile Scan",
                text: "We capture digital impressions and measurements of your teeth, planning the exact movements with ClearCorrect mapping software.",
              },
              {
                title: "Fitting First Aligners",
                text: "We fit your initial aligners, place any necessary tiny attachments on your teeth to guide movement, and provide home instructions.",
              },
              {
                title: "Swaps & Checkups",
                text: "You switch to a new set of aligner trays every 1 to 2 weeks, visiting us every 4 to 6 weeks for quick progress checks.",
              },
              {
                title: "Retention Phase",
                text: "After alignment is complete, we supply custom clear retainers to preserve your straight teeth and prevent shifting.",
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
                How Much Do Clear Aligners Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Clear aligner cost depends on how much movement your teeth need and how long treatment takes. ClearCorrect is often a cost-effective alternative to other aligner brands. We give you a clear quote at your consultation, check any orthodontic insurance benefits, and offer monthly financing through CareCredit.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Straightening your teeth is an investment in both your appearance and your long-term oral health. To make treatment more affordable, we participate with major orthodontic insurance plans and offer flexible, low-interest payment options. Check out our <Link href="/patient-information/financing-options" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">financing options page</Link> to learn how to break the cost of aligners into low monthly payments.
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
                  ClearCorrect is often more affordable than other aligner options. Many dental insurance plans with orthodontic benefits cover ClearCorrect treatment.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> We offer monthly payment plans and accept CareCredit to make clear aligner therapy accessible.
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
        title="Clear Aligners FAQs"
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
