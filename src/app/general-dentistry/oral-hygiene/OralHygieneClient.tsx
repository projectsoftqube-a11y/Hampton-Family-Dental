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
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function OralHygieneClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
  ];

  const faqs = [
    {
      q: "How much does a teeth cleaning cost?",
      a: "Most dental insurance plans cover routine cleanings at 100%, so many patients pay nothing out of pocket. Without insurance, the cost depends on whether you need a regular or deep cleaning — we’ll give you a clear estimate first, and our in-house membership plan includes two cleanings a year with no deductibles.",
    },
    {
      q: "What's the difference between a regular cleaning and a deep cleaning?",
      a: "A regular cleaning removes plaque and tartar above the gumline for patients with healthy gums. A deep cleaning (scaling and root planing) also cleans below the gumline to treat early gum disease. We measure your gum health and recommend the right one for you.",
    },
    {
      q: "Why do I need a cleaning if I brush twice a day?",
      a: "Brushing and flossing are crucial, but they cannot remove tartar once it has hardened onto your teeth. Tartar must be scaled off by a dental professional using specialized instruments.",
    },
    {
      q: "How often should I get my teeth cleaned?",
      a: "For most patients, we recommend a routine cleaning and exam every 6 months. Patients with a history of gum disease or active orthodontic work may benefit from cleanings every 3 to 4 months.",
    },
    {
      q: "Does a teeth cleaning hurt?",
      a: "A routine cleaning is comfortable and painless for most patients — you’ll mainly feel the scaler and a bit of pressure. If your gums are sensitive or you need a deep cleaning, we can numb the area so you stay comfortable throughout.",
    },
    {
      q: "Is a professional cleaning safe during pregnancy?",
      a: "Yes. Professional cleanings are safe and especially important during pregnancy, when hormonal changes raise the risk of gum inflammation (pregnancy gingivitis). Let us know you’re expecting so we can tailor your care.",
    },
  ];

  const relatedServices = [
    {
      label: "Dental Checkups",
      href: "/general-dentistry/checkups-and-x-rays",
    },
    { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
    {
      label: "Oral Cancer Screening",
      href: "/general-dentistry/oral-cancer-screening",
    },
  ];

  const areasServedLine =
    "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

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
              Teeth Cleaning & Oral Hygiene in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Maintain a healthy, vibrant smile with professional cleanings and
              preventative hygiene care. Regular scaling and polishing remove
              stubborn plaque and tartar buildup, preventing gum disease and
              protecting your overall health.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">
                Typical Duration
              </p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                45–60 minutes
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">
                Typical Visits
              </p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Every 6 months
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 col-span-2 md:col-span-2">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">
                Clinical Provider
              </p>
              <p className="text-xs text-white/90 mt-1 font-semibold">
                Southampton, PA Licensed Dentist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro & Definition Section (2-Column, Balanced Heights) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-beige-light/25 border border-navy/[0.04] p-6 md:p-8">
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  A professional teeth cleaning is the single most important
                  appointment for keeping your smile healthy for life. At
                  Hampton Family Dental — formerly Brenner Dental Group — our
                  registered hygienists give patients across Southampton, PA a
                  thorough, comfortable cleaning that removes the plaque and
                  tartar daily brushing can’t reach, protects your gums, and
                  keeps your whole mouth healthy. Most dental insurance plans
                  cover routine cleanings at 100%, so there’s no reason to put
                  your{" "}
                  <Link
                    href="/general-dentistry"
                    className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary"
                  >
                    dental hygiene
                  </Link>{" "}
                  on hold.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
                    What to Expect
                  </span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  What is a Professional Teeth Cleaning?
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Even with diligent brushing and flossing, mineralized plaque
                  (tartar) builds up in hard-to-reach spots beneath the gumline.
                  A professional hygiene cleaning involves scaling away tartar,
                  polishing away surface stains, and evaluating your gum tissue
                  for signs of gingivitis. Our{" "}
                  <Link
                    href="/general-dentistry"
                    className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary"
                  >
                    registered dental hygienists
                  </Link>{" "}
                  also provide tailored home care guidance to protect your
                  enamel.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_general_1779858374972.webp"
                  alt="Teeth Cleaning & Oral Hygiene"
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
                  Maintaining regular teeth cleanings prevents complex dental
                  issues down the road while keeping your smile feeling clean
                  and polished.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Removes stubborn tartar that home brushing can't reach",
                    "Prevents cavities, bone loss, and gum disease",
                    "Lifts surface stains for a brighter, polished smile",
                    "Eliminates chronic bad breath (halitosis)",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 bg-beige-light/10 p-3 rounded-xl border border-navy/[0.03] shadow-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check
                          className="w-3 h-3 text-primary"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-navy/85 text-xs font-semibold leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Candidacy */}
            <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-2">
                  Is a Teeth Cleaning Right for You?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Professional teeth cleanings are recommended for every child
                  and adult at least once every six months to keep gums healthy.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Recommended for all ages (toddlers to seniors)",
                    "Experiencing early bleeding when flossing (gingivitis)",
                    "Having plaque buildup or coffee/tea stains",
                    "Essential during pregnancy to protect gum health",
                  ].map((check) => (
                    <li key={check} className="flex items-center gap-3">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check
                          className="w-2.5 h-2.5 text-primary"
                          strokeWidth={3}
                        />
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
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
              Step-by-Step
            </span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">
              Your Treatment Process
            </h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              We focus on comfort and thoroughness. Here is what happens during
              a standard preventive dental cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Clinical Exam & Gum Mapping",
                text: "Our hygienist carefully inspects your mouth and measures your gum pockets to assess overall periodontal health.",
              },
              {
                title: "Tartar Scaling",
                text: "Using specialized ultrasonic and hand scaling tools, we gently remove plaque and tartar deposits from your teeth.",
              },
              {
                title: "Polishing & Flossing",
                text: "We polish your teeth using a gritty prophylaxis paste to lift stains, followed by a thorough professional flossing.",
              },
              {
                title: "Fluoride Protection (Optional)",
                text: "If recommended, we apply a concentrated fluoride varnish to strengthen your enamel and prevent future cavities.",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="flex gap-4 p-6 rounded-3xl bg-beige-light/10 border border-navy/[0.04] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-navy text-base md:text-lg">
                    {step.title}
                  </h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Regular vs. Deep Cleaning (Custom Premium Cards) ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="font-heading text-navy text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Regular Cleaning vs. Deep Cleaning — What's the Difference?
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed mt-4">
              Not every cleaning is the same. A{" "}
              <Link
                href="/general-dentistry"
                className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary"
              >
                regular cleaning
              </Link>{" "}
              (called a prophylaxis) is the routine cleaning healthy patients
              get every six months — it removes plaque and tartar above the
              gumline and polishes the teeth. A deep cleaning (scaling and root
              planing) goes further, cleaning below the gumline to treat early{" "}
              <Link
                href="/general-dentistry/perio-protect"
                className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary"
              >
                gum disease
              </Link>{" "}
              when tartar has worked its way into the gum pockets.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed mt-3">
              At your visit, we measure the health of your gums and recommend
              the right cleaning for you. If your gums are healthy, a regular
              cleaning keeps them that way. If we find signs of gum disease —
              bleeding, deeper pockets, or tartar below the gumline — a deep
              cleaning stops the problem before it leads to bone loss or tooth
              loss. We’ll always explain why a particular cleaning is
              recommended before we begin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mt-12 relative items-stretch">
            {/* The vertical divider with "VS" badge in the middle (hidden on mobile) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-navy/[0.08] shadow-md items-center justify-center z-10 font-heading italic text-navy font-bold text-xl">
              vs
            </div>

            {/* Card 1: Regular Cleaning */}
            <div className="relative bg-gradient-to-b from-primary/[0.03] to-white rounded-[2.5rem] border border-navy/[0.06] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-primary" />
              <div className="p-6 md:p-10 space-y-6 flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <span className="text-[10px] tracking-wider uppercase font-bold text-primary bg-primary/10 px-3 py-1 rounded-full font-body">
                      Routine Care
                    </span>
                    <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold mt-2">
                      Regular Cleaning
                    </h3>
                    <p className="text-[11px] text-navy/40 font-mono tracking-wider font-semibold">
                      Prophylaxis
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-navy/70 text-sm leading-relaxed pt-2">
                  Focuses on preventive care for patients with healthy gums,
                  cleaning visible surfaces to keep disease at bay.
                </p>

                <div className="space-y-4 pt-6 border-t border-navy/[0.08]">
                  {[
                    { label: "Target Area", value: "Above the gumline only" },
                    {
                      label: "Recommended For",
                      value: "Healthy gums & routine hygiene",
                    },
                    {
                      label: "Main Procedure",
                      value: "Scaling tartar, polishing, & flossing",
                    },
                    { label: "Typical Frequency", value: "Every 6 months" },
                    {
                      label: "Discomfort Level",
                      value: "None (refreshing & painless)",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-1 border-b border-navy/[0.03] last:border-0 pb-2 last:pb-0"
                    >
                      <span className="font-semibold text-navy/60 text-xs sm:text-sm">
                        {item.label}
                      </span>
                      <span className="text-navy font-bold text-xs sm:text-sm sm:text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-beige-light/30 border-t border-navy/[0.05] p-5 text-center">
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-navy-light font-body">
                  Routine Prevention & Protection
                </span>
              </div>
            </div>

            {/* Card 2: Deep Cleaning */}
            <div className="relative bg-gradient-to-b from-navy/[0.03] to-white rounded-[2.5rem] border border-navy/[0.06] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-navy-dark" />
              <div className="p-6 md:p-10 space-y-6 flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <span className="text-[10px] tracking-wider uppercase font-bold text-primary-light bg-navy/10 px-3 py-1 rounded-full font-body">
                      Therapeutic Care
                    </span>
                    <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold mt-2">
                      Deep Cleaning
                    </h3>
                    <p className="text-[11px] text-navy/40 font-mono tracking-wider font-semibold">
                      Scaling & Root Planing
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-navy/10 border border-navy/20 flex items-center justify-center text-navy shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-navy/70 text-sm leading-relaxed pt-2">
                  An active treatment designed to halt and reverse gum disease,
                  removing bacterial buildup below the gumline.
                </p>

                <div className="space-y-4 pt-6 border-t border-navy/[0.08]">
                  {[
                    {
                      label: "Target Area",
                      value: "Above & deep below the gumline",
                    },
                    {
                      label: "Recommended For",
                      value: "Early-moderate gum disease (pockets)",
                    },
                    {
                      label: "Main Procedure",
                      value: "Root surface scaling & planing",
                    },
                    {
                      label: "Typical Frequency",
                      value: "As needed, then periodontal maintenance",
                    },
                    {
                      label: "Discomfort Level",
                      value: "Mild (comfort managed with numbing)",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-1 border-b border-navy/[0.03] last:border-0 pb-2 last:pb-0"
                    >
                      <span className="font-semibold text-navy/60 text-xs sm:text-sm">
                        {item.label}
                      </span>
                      <span className="text-navy font-bold text-xs sm:text-sm sm:text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy-dark text-white p-5 text-center">
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-primary-light font-body">
                  Therapeutic Care & Gum Healing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Cleanings Matter & Cost (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />

        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Why Cleanings Matter */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                Why Regular Teeth Cleanings Matter
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Skipping cleanings lets tartar build up where a toothbrush can’t
                reach, and that’s how gum disease, cavities, and bad breath
                start. Because the same bacteria behind gum disease are linked
                to heart disease, diabetes, and other health conditions, keeping
                your mouth clean is part of keeping your whole body healthy.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Routine cleanings also save you money. Catching a small problem
                at a{" "}
                <Link
                  href="/general-dentistry/checkups-and-x-rays"
                  className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white"
                >
                  six-month checkup
                </Link>{" "}
                is far less expensive than treating it after it becomes a
                cavity, an infection, or gum disease. For patients without
                insurance, our{" "}
                <Link
                  href="/specials"
                  className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white"
                >
                  in-house membership plan
                </Link>{" "}
                includes two cleanings a year with no deductibles, making
                prevention simple and affordable.
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
                  Preventative dental cleanings are covered at 100% by almost
                  all dental insurance plans, with zero out-of-pocket costs for
                  you.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Our in-house membership
                  plans cover 2 professional cleanings per year with no
                  deductibles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctor Block ─── */}
      <DoctorBlock />

      {/* ─── FAQ Block ─── */}
      <FAQBlock faqs={faqs} title="Teeth Cleanings in Southampton, PA FAQs" />

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
