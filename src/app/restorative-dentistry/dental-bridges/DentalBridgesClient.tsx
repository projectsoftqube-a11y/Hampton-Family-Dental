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

export default function DentalBridgesClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
  ];

  const faqs = [
    {
      q: "How much does a dental bridge cost?",
      a: "It depends on how many teeth are replaced and the material. We give you a clear estimate first. Most insurance covers a portion, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "What are the types of dental bridges?",
      a: "The main types are traditional, cantilever, Maryland, and implant-supported bridges. We recommend the best option based on where the gap is and the health of your surrounding teeth.",
    },
    {
      q: "Is a bridge or an implant better?",
      a: "A bridge is faster and surgery-free but relies on the neighboring teeth and doesn't prevent bone loss. An implant replaces the root and stands alone but costs more upfront. We'll help you choose.",
    },
    {
      q: "How long do dental bridges last?",
      a: "With good oral hygiene and regular checkups, most bridges last 10 to 15 years or more. Keeping the supporting teeth and gums healthy is key to a long-lasting bridge.",
    },
    {
      q: "How do I clean under a dental bridge?",
      a: "Use a floss threader or interdental brush to clean beneath the false tooth daily, along with normal brushing and flossing. We'll show you the technique so your bridge stays healthy.",
    },
    {
      q: "Does getting a bridge hurt?",
      a: "No — the teeth are numbed during preparation, so you'll feel pressure but not pain. Any mild sensitivity afterward is temporary.",
    },
  ];

  const relatedServices = [
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    { label: "Dentures", href: "/restorative-dentistry/dentures" },
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
              Dental Bridges in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Bridge the gap left by missing teeth with our custom porcelain dental bridges. A bridge restores your ability to chew and speak properly, prevents surrounding teeth from shifting, and completes your smile seamlessly.
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

      {/* ─── What Is a Dental Bridge? ─── */}
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
                What is a Dental Bridge?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A dental bridge is a fixed dental restoration used to replace one or more missing teeth. It consists of two <Link href="/restorative-dentistry/dental-crowns" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">custom crowns</Link> placed on the anchor teeth (abutment teeth) on either side of the gap, with one or more artificial teeth (pontics) suspended between them. Once bonded into place, the bridge looks and functions like your natural teeth.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                If you are missing teeth, your remaining teeth can shift into the empty space, causing alignment issues, bite changes, and increasing your susceptibility to gum problems. A fixed bridge provides structural stabilization, stopping teeth from tilting while restoring natural chewing strength.
              </p>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/clinic_interior_1779858062605.webp"
                  alt="Dental Bridges"
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
                  Restoring missing teeth with a bridge helps stabilize your bite, preserves facial structures, and makes eating and speaking feel natural again.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Fills empty spaces naturally",
                    "Restores normal chewing and speaking",
                    "Prevents surrounding teeth from tilting or shifting",
                    "Maintains natural facial contours",
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
                  Are You a Candidate for a Bridge?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Bridges are an excellent choice for patients who are missing one or more consecutive teeth and have healthy anchor teeth adjacent to the gap.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "One or more missing consecutive teeth",
                    "Healthy neighboring anchor teeth",
                    "Good support bone structure",
                    "Commitment to thorough flossing beneath the bridge",
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

      {/* ─── Types of Bridges We Offer ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Bridge Varieties</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Types of Dental Bridges We Offer
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              The right bridge depends on where the gap is and the health of the surrounding teeth. We’ll recommend the best option at your consultation. Depending on your specific anatomy, aesthetic goals, and functional needs, there are several bridge types we can use to restore your smile:
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6 text-left">
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Traditional Fixed Bridges</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  The most common bridge type. It consists of a false tooth (pontic) held in place by crowns cemented onto each of the abutment teeth on either side of the space.
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Cantilever Bridges</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Used when there is an anchor tooth on only one side of the missing tooth gap. The bridge is secured to only one crown. (Typically not used on molars due to heavy biting forces).
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Maryland Bonded Bridges</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Supported by a metal or ceramic framework with wings bonded to the backs of the natural teeth adjacent to the gap, requiring minimal reshaping of the anchor teeth. Best for front teeth.
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl">
                <h4 className="font-heading font-bold text-navy text-base mb-2">Implant-Supported Bridges</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Instead of anchoring to natural teeth, the bridge is supported by dental implants placed in the jawbone. This is ideal for multiple consecutive missing teeth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dental Bridge vs. Implant ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Dental Bridge vs. Implant — Which Is Right for You?
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Both replace missing teeth. A bridge is faster and doesn't require surgery, but relies on grinding down the neighboring teeth and doesn't prevent jawbone loss. An implant replaces the root, protects the bone, and stands alone — but takes longer and costs more upfront. We'll help you weigh speed, budget, and long-term health.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              For patients looking for a non-surgical option that can be completed in a few weeks, a fixed bridge is often preferred. However, if preserving the natural structure of adjacent teeth and preventing bone shrinkage is a priority, a <Link href="/restorative-dentistry/dental-implants" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">dental implant</Link> represents the modern gold standard. If you have extensive tooth loss throughout the arch, you may also consider partial or full <Link href="/restorative-dentistry/dentures" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">dentures</Link> as an alternative.
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
              We prioritize your comfort and safety. Here is what happens during a dental bridge procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Preparing the Abutment Teeth",
                text: "The teeth on either side of the space are gently reshaped to act as supports for the bridge crowns. Digital scans are captured to design the bridge.",
              },
              {
                title: "Temporary Bridge Placement",
                text: "We fit a temporary bridge to protect the prepared teeth and gums while our dental lab constructs the final porcelain restoration.",
              },
              {
                title: "Bonding the Custom Bridge",
                text: "At your second visit, we fit the final bridge, check your bite and alignment, make any minor modifications, and cement it securely in place.",
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
                How Much Does a Dental Bridge Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Bridge cost depends on the number of teeth being replaced and the material used. We provide a clear estimate before treatment.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Most dental plans cover a portion of bridges, we accept CareCredit, and members get 15% off. We work closely with insurance providers to minimize your out-of-pocket costs, and also offer payment flexibility for patients without insurance. Check out our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">specials and in-house plans</Link> for additional savings.
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
                  Dental bridges are generally covered by dental insurance up to 50% to 80% of the cost. They are a cost-effective alternative to implants when dental implants are not clinically viable.
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
        title="Dental Bridge FAQs"
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
