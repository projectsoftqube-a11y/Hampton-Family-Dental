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
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function DenturesClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Dentures", href: "/restorative-dentistry/dentures" },
  ];

  const faqs = [
    {
      q: "How much do dentures cost?",
      a: "It depends on the type — full vs partial, standard vs premium, and whether they're implant-supported. We give you a clear estimate first. Many plans cover a portion, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "What's the difference between full and partial dentures?",
      a: "Full dentures replace all the teeth in an arch when no natural teeth remain; partial dentures fill in several missing teeth while your remaining natural teeth stay in place.",
    },
    {
      q: "What are permanent or implant-supported dentures?",
      a: "Implant-supported dentures snap securely onto dental implants instead of resting on the gums — no slipping or adhesives, much more stable, and they help preserve jawbone. They're often called 'permanent dentures.'",
    },
    {
      q: "Do you repair or reline dentures?",
      a: "Yes. If your dentures feel loose, crack, or no longer fit, we repair and reline them rather than having you live with discomfort. Bring them in and we'll get them comfortable again.",
    },
    {
      q: "How long does it take to get used to dentures?",
      a: "Most people adjust within a few weeks — speaking and eating get easier as your mouth adapts. We'll guide you through the transition and make any adjustments needed for comfort.",
    },
    {
      q: "Can I get dentures the same day my teeth are removed?",
      a: "Yes — immediate dentures are placed the same day your teeth are extracted, so you're never without a smile. They're relined or replaced after your gums heal for the best long-term fit.",
    },
  ];

  const relatedServices = [
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
    { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
    { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
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
              Dentures in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Restore your smile and reclaim your quality of life with our premium, custom-fitted dentures. Our dentures are designed to fit comfortably, support your facial structure, and blend naturally with your appearance.
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

      {/* ─── What Are Modern Dentures? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Tooth Replacement</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What Are Modern Dentures?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Dentures are removable dental appliances used to replace missing teeth and surrounding tissues. <strong>Full dentures</strong> are used when all teeth in an arch are missing, sitting comfortably on the gum tissue. <strong>Partial dentures</strong> are used when some natural teeth remain, anchoring to existing structures using discrete clasps. Modern materials ensure they are lightweight, comfortable, and look highly realistic.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Losing teeth affects far more than your smile — it changes how you eat, speak, and even how your face looks over time. Without teeth to support your lips and cheeks, facial muscles sag and the jawbone gradually shrinks. Dentures restore all of this: natural chewing function, clear speech, a full smile, and the facial support that keeps you looking like yourself.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we craft each set of dentures from premium acrylic and porcelain materials, custom-shaded to match your natural gum color and tooth tones. Whether you need a full set, a partial, or are interested in the stability of <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">implant-supported dentures</Link>, we'll design a solution that fits your lifestyle and budget.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/about_storytelling_1779858491119.webp"
                  alt="Custom Dentures"
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

      {/* ─── Types of Dentures We Offer ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Denture Options</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Types of Dentures We Offer
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Whether you're missing a few teeth or a full arch, we'll fit you with dentures designed to look natural and feel comfortable.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6 text-left">
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Full (Complete) Dentures</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Replace all teeth in the upper arch, lower arch, or both. They rest on the gum ridge and are held in place by suction, natural anatomy, and (optionally) a small amount of adhesive. Custom-crafted from premium acrylic for a natural, comfortable fit.
                </p>
              </div>
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Partial Dentures</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Fill in gaps when several teeth are missing but healthy natural teeth remain. A metal or flexible framework clasps onto your existing teeth for stability, while pontics fill the spaces. A good alternative when a <Link href="/restorative-dentistry/dental-bridges" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">dental bridge</Link> isn't feasible.
                </p>
              </div>
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Implant-Supported Dentures</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Snap securely onto 2 to 4 <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">dental implants</Link> placed in the jawbone — no slipping, no adhesives, much more stable, and they help preserve jawbone density. Often called "permanent dentures."
                </p>
              </div>
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Immediate Dentures</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Placed the same day your teeth are <Link href="/general-dentistry/tooth-extraction" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">extracted</Link>, so you're never without teeth. They serve as a temporary solution while your gums heal, then are relined or replaced with a permanent set for the best long-term fit.
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
                  Whether you choose full, partial, or implant-supported dentures, the result is the same — a natural-looking smile, restored chewing strength, and renewed confidence.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Restores your ability to chew and speak normally",
                    "Supports lips & cheeks, preventing facial sagging",
                    "Custom-shaded to match your natural gums & teeth",
                    "Cost-effective solution for multiple missing teeth",
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
                  Are You a Candidate for Dentures?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Dentures are ideal for patients who have lost many or all of their teeth due to decay, gum disease, or trauma, and are looking for a reliable, non-surgical restoration.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Significant or total tooth loss in an arch",
                    "Healthy gum tissues and jawbone ridge support",
                    "Looking for a cost-effective, non-surgical option",
                    "Replacing worn-out, unstable existing dentures",
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

      {/* ─── Caring for Your Dentures ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <HeartPulse className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Aftercare</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Caring for Your Dentures
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              New dentures take a short adjustment period — speaking and eating get easier within a few weeks as your mouth adapts. Clean them daily, remove them at night to let your gums rest, and see us for periodic relines as your mouth changes over time. We also repair and reline dentures, so if yours feel loose or cracked, bring them in rather than living with the discomfort.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Brush your dentures with a soft-bristled brush and a non-abrasive cleanser — never regular toothpaste, which is too gritty. Soak them overnight in water or a denture solution. Keep your gums healthy by gently brushing your gum ridges and tongue each morning before inserting your dentures. Regular checkups ensure the fit stays comfortable as your jawbone naturally remodels over time.
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
              We prioritize your comfort and satisfaction. Here is what happens when you get dentures at Hampton Family Dental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Initial Consultation & Scans",
                text: "We evaluate your gums and remaining teeth. We capture highly detailed impressions to map your mouth.",
              },
              {
                title: "Bite Registration & Wax Model Mockups",
                text: "We measure your jaw alignment and create wax models of your dentures, allowing you to preview the fit, shape, and tooth color.",
              },
              {
                title: "Fitting & Adjustments",
                text: "Once the lab constructs the final dentures, we place them, check for sore spots, adjust bite alignment, and ensure maximum comfort.",
              },
              {
                title: "Follow-Up Tune-Ups",
                text: "As you get used to chewing and speaking, we schedule brief checks to perform minor adjustments and polish your dentures.",
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
                How Much Do Dentures Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Denture cost depends on the type — full vs partial, standard vs premium materials, and whether they're implant-supported. We give you a clear estimate first. Many dental plans cover a portion of dentures, we accept CareCredit, and Hampton Dental Wellness members get 15% off.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Dentures are one of the most cost-effective ways to replace multiple missing teeth. Compared to individual implants for every tooth, a well-fitting denture restores your entire arch at a fraction of the cost. We work closely with insurance providers to maximize your benefits, and offer flexible payment plans for patients without coverage. Visit our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">specials and in-house plans</Link> for current savings.
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
                  Dentures are a highly affordable restoration for extensive tooth loss. Most insurance policies cover partial and full dentures under major restorative benefits (typically 50%).
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off. CareCredit financing can break payments into low monthly installments.
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
        title="Dentures FAQs"
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
