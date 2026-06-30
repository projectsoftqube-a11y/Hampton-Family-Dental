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

export default function ToothExtractionClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
  ];

  const faqs = [
    {
      q: "How much does a tooth extraction cost?",
      a: "It depends on whether it's a simple or surgical extraction and which tooth is involved — wisdom and impacted teeth cost more than a straightforward extraction. We give you a clear estimate first. Most insurance covers 50–80%, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "Does a tooth extraction hurt?",
      a: "The extraction itself shouldn't hurt — we fully numb the area with local anesthesia, so you'll feel pressure but not pain. Some soreness afterward is normal and is easily managed with the medication and aftercare instructions we provide.",
    },
    {
      q: "What is a dry socket and how do I prevent it?",
      a: "A dry socket occurs when the protective blood clot in the empty socket dislodges prematurely, exposing bone and nerves. You can prevent this by avoiding straws, smoking, spitting, or strenuous exercise for 48 hours after extraction.",
    },
    {
      q: "How long does it take to recover from a tooth extraction?",
      a: "Most people feel much better within a few days, with the socket fully healing over a few weeks. Surgical and wisdom tooth extractions can take a bit longer. Following your aftercare instructions — soft foods, no straws, gentle rinsing — speeds recovery.",
    },
    {
      q: "Do I need my wisdom teeth removed?",
      a: "Not always — but impacted wisdom teeth that cause pain, swelling, crowding, or infection should come out. We'll review your X-rays and recommend removal only if it benefits your long-term oral health, ideally before problems start.",
    },
    {
      q: "What can I eat after a tooth extraction?",
      a: "Stick to soft, cool foods for the first day or two — yogurt, smoothies (no straw), mashed potatoes, soup that isn't too hot, and scrambled eggs. Avoid crunchy, chewy, or spicy foods and gradually return to your normal diet as the area heals.",
    },
    {
      q: "How soon can I replace an extracted tooth?",
      a: "It depends on the replacement option and how the site heals — implants often wait a few weeks to months, while bridges or partial dentures may be placed sooner. We'll plan the timing with you so you're never left with a noticeable gap longer than necessary.",
    },
    {
      q: "Do I need to replace an extracted tooth?",
      a: "Except for wisdom teeth, we highly recommend replacing extracted teeth. Gaps can cause surrounding teeth to drift, resulting in bite misalignment and bone loss. We can replace them with dental implants, bridges, or partial dentures.",
    },
  ];

  const relatedServices = [
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
    { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
    { label: "Dentures", href: "/restorative-dentistry/dentures" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

  const dos = [
    "Bite on gauze, rest, use a cold compress",
    "Eat soft foods; stay hydrated",
    "Take medication exactly as directed",
    "Perform gentle salt-water rinses after day 1",
  ];

  const donts = [
    "Use straws or smoke",
    "Spit forcefully or rinse vigorously",
    "Poke the socket with your tongue",
    "Do strenuous exercise",
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
              Tooth Extractions in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Remove damaged, decayed, or crowded teeth safely and comfortably. Dr. Brenner and Dr. Dudhat perform gentle tooth extractions, including wisdom teeth removals, utilizing advanced local anesthetics and comfortable care practices.
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

      {/* ─── Intro & Definition Section (2-Column) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-beige-light/25 border border-navy/[0.04] p-6 md:p-8">
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  While our primary goal is always to preserve your natural teeth, sometimes extraction is the healthiest option for your overall smile. At Hampton Family Dental — formerly Brenner Dental Group — we prioritize patient comfort, using gentle techniques and modern diagnostics to ensure a painless experience. If you are experiencing sudden, severe discomfort, we also offer <Link href="/general-dentistry/emergency-dentistry" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">emergency extraction care</Link> to provide immediate pain relief.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">What to Expect</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  When is a Tooth Extraction Necessary?
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Extractions are required when a tooth is severely fractured, has advanced decay that cannot be treated with a root canal, suffers from advanced periodontal bone loss, or when wisdom teeth are impacted and crowding other teeth. We prioritize your comfort throughout the process.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/about_storytelling_1779858491119.webp"
                  alt="Tooth Extraction"
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
                  Removing a critically damaged tooth prevents active infections from spreading, preparing your mouth for a restored, healthy smile.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Stops chronic tooth pain and prevents infections from spreading",
                    "Eliminates crowding and prepares jaws for orthodontics",
                    "Prevents damage to adjacent teeth from impacted wisdom teeth",
                    "Performs extractions under local anesthesia for a painless procedure",
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
                  When Is Tooth Extraction Needed?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Tooth extraction is recommended when structural damage is too severe to save, or when wisdom teeth are impacted and causing gum swelling.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Severe tooth decay beyond restoration",
                    "Deep tooth fractures below the gumline",
                    "Impacted or painful wisdom teeth",
                    "Advanced periodontal bone loss",
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
              We prioritize your comfort and safety. Here is what happens during a tooth extraction procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "X-Ray Assessment",
                text: "We capture high-definition digital x-rays to examine the tooth roots, bone density, and plan the extraction route.",
              },
              {
                title: "Local Anesthesia Numbing",
                text: "We administer local anesthesia to completely numb the area, ensuring you feel pressure but no pain during the extraction.",
              },
              {
                title: "Gentle Tooth Removal",
                text: "Using specialized dental instruments, the tooth is carefully freed from the socket and gently removed to protect surrounding bone.",
              },
              {
                title: "Healing & Aftercare Guidance",
                text: "We place sterile gauze to encourage clotting and provide detailed instructions for home care (soft diet, no straws) to ensure a rapid recovery.",
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

      {/* ─── Types of Tooth Extractions We Perform ─── */}
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
                    Extraction Options
                  </span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Types of Tooth Extractions We Perform
                </h2>
                <p className="text-navy-light text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Simple, Surgical & Wisdom Care
                </p>
                <div className="pt-2">
                  <div className="inline-block h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-4 text-navy/70 text-sm md:text-base leading-relaxed">
                <p>
                  Not every extraction is the same, and the approach depends on the tooth. A simple extraction removes a tooth that’s fully visible above the gumline — it’s quick and done with local anesthesia. A surgical extraction is used when a tooth is broken at the gumline, badly decayed, or still under the gum, and may involve a small incision to remove it gently.
                </p>
                <p>
                  Wisdom tooth removal is one of the most common extractions we perform. When wisdom teeth are impacted — stuck under the gum or growing at an angle — they can crowd neighboring teeth, cause pain and swelling, and trap bacteria that lead to infection. Removing them early, often in your late teens or twenties, keeps the rest of your smile healthy and prevents bigger problems down the road. Dr. Brenner and Dr. Dudhat will review your digital X-rays with you and recommend the right type of extraction for your situation.
                </p>
              </div>
            </div>
          </div>

          {/* Simple vs Surgical Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-navy/[0.06] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">Simple Extraction</th>
                    <th className="px-6 py-4">Surgical Extraction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/[0.06]">
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">For</td>
                    <td className="px-6 py-4 text-navy/70">Visible tooth above the gumline</td>
                    <td className="px-6 py-4 text-navy/70">Broken, decayed, or impacted tooth</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Anesthesia</td>
                    <td className="px-6 py-4 text-navy/70">Local numbing</td>
                    <td className="px-6 py-4 text-navy/70">Local numbing (sedation if needed)</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Common Use</td>
                    <td className="px-6 py-4 text-navy/70">Loose or damaged teeth</td>
                    <td className="px-6 py-4 text-navy/70">Wisdom teeth, fractured roots</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Recovery</td>
                    <td className="px-6 py-4 text-navy/70">A few days</td>
                    <td className="px-6 py-4 text-navy/70 font-semibold">Up to a week or so</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tooth Extraction Recovery & Aftercare ─── */}
      <section className="py-16 md:py-24 bg-white relative border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="bg-white border border-navy/[0.06] rounded-[2rem] p-6 md:p-10 shadow-sm max-w-5xl mx-auto mb-16 relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-beige-light/35 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <HeartPulse className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                    Recovery Guidelines
                  </span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Tooth Extraction Recovery & Aftercare
                </h2>
                <p className="text-navy-light text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Protecting the Healing Socket
                </p>
                <div className="pt-2">
                  <div className="inline-block h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-4 text-navy/70 text-sm md:text-base leading-relaxed">
                <p>
                  Most patients heal comfortably within a few days to a week. For the first 24 hours, bite gently on gauze to control bleeding, rest, and apply a cold compress to reduce swelling. Eat soft foods, keep the area clean, and take any medication exactly as directed. After the first day, gentle warm salt-water rinses help keep the socket clean while it heals.
                </p>
                <p>
                  The most important thing in the first 48 hours is protecting the blood clot in the socket. Don’t use straws, don’t smoke, and avoid spitting or vigorous rinsing — all of these can dislodge the clot and cause a painful condition called dry socket, where the bone underneath is left exposed. If you develop throbbing pain a few days after your extraction, a bad taste, or notice the clot is gone, call us — dry socket is easy for us to treat and relief is quick.
                </p>
              </div>
            </div>
          </div>

          {/* Do's & Don'ts Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's List */}
            <div className="bg-emerald-50/20 border border-emerald-500/10 p-6 md:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <h4 className="font-heading text-emerald-900 text-lg font-bold flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" strokeWidth={3} />
                Do (First 48 Hours)
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-emerald-950 font-medium">
                {dos.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts List */}
            <div className="bg-red-50/20 border border-red-500/10 p-6 md:p-8 rounded-[2rem] space-y-4 shadow-sm">
              <h4 className="font-heading text-red-900 text-lg font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Don't (First 48 Hours)
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-red-950 font-medium">
                {donts.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cost & Insurance (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Cost Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                How Much Does a Tooth Extraction Cost?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The cost of a tooth extraction depends on whether it’s a simple or surgical procedure and which tooth is involved — wisdom teeth and impacted teeth take more work than a straightforward extraction. Because every case is different, we give you a clear estimate before we begin, with no surprises.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Most dental insurance plans cover a portion of extractions — typically 50% to 80% — and we’ll check your benefits for you. We accept CareCredit for flexible monthly payments, and <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">Hampton Dental Wellness members</Link> receive 15% off, making treatment affordable even without insurance.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                If you are planning to replace the extracted tooth, we can also discuss timing and plans for restorative treatments like <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">dental implants</Link>, <Link href="/restorative-dentistry/dental-bridges" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">dental bridges</Link>, or <Link href="/restorative-dentistry/dentures" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">dentures</Link>.
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
                  Simple and surgical extractions are covered under basic or major dental insurance benefits, typically covering between 50% and 80% of the cost.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off. Flexible monthly payment options are available through CareCredit.
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
        title="Tooth Extraction FAQs"
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
