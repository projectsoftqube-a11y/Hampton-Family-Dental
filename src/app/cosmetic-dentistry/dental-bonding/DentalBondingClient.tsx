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

export default function DentalBondingClient() {
  const breadcrumbs = [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
  ];

  const faqs = [
    {
      q: "How much does dental bonding cost?",
      a: "Bonding is one of the most affordable cosmetic treatments — usually far less than veneers or crowns, often in one visit. Cost depends on how many teeth. We give you a clear price first and accept CareCredit.",
    },
    {
      q: "How long does dental bonding last?",
      a: "With good care, bonding typically lasts 3 to 10 years before it may need a touch-up or replacement. Avoiding habits like biting nails or ice and keeping up with checkups helps it last.",
    },
    {
      q: "Is bonding or a veneer better?",
      a: "Bonding is faster, cheaper, and reversible — great for small fixes. Veneers cost more and are permanent but offer a more dramatic, longer-lasting result. We'll recommend the right one for your goals.",
    },
    {
      q: "Does dental bonding hurt?",
      a: "Usually not — most bonding requires no drilling and no anesthesia, so there's little to no discomfort. It's one of the gentlest cosmetic treatments we offer.",
    },
    {
      q: "Can bonding fix a chipped tooth?",
      a: "Yes — bonding is a fast, natural-looking way to repair a chipped or cracked tooth, often in a single visit. We color-match the composite so the repair blends in seamlessly.",
    },
    {
      q: "Does bonding stain over time?",
      a: "Composite can pick up stains from coffee, tea, wine, and smoking more than natural enamel. Good oral hygiene and limiting staining habits keep it looking fresh; we can polish or refresh it as needed.",
    },
  ];

  const relatedServices = [
    { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
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
              Dental Bonding in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Correct chipped, cracked, decayed, or gapped teeth in a single visit. Dental bonding uses a tooth-colored composite resin to rebuild and reshape damaged teeth, delivering an immediate, natural-looking improvement.
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

      {/* ─── What is Cosmetic Dental Bonding ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Fast Smile Fixes</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is Cosmetic Dental Bonding?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Dental bonding is a fast, conservative cosmetic procedure. Unlike crowns or veneers, which require significant enamel removal and laboratory fabrication, dental bonding is performed directly in our office. Dr. Brenner or Dr. Dudhat applies a pliable, tooth-colored composite resin to your tooth, shapes it to correct imperfections, and hardens it using a specialized light. The material is then polished to match your natural enamel.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Because there is no lab work involved, teeth bonding is completed in just a single appointment. It is the ideal option for patients looking to correct minor blemishes quickly before a big event, or for anyone seeking a conservative and budget-friendly upgrade to their smile symmetry.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we prioritize saving your natural tooth structure. Composite bonding is reversible and highly conservative, requiring almost no enamel reduction. To see how bonding compares to other options, you can read about our custom <Link href="/cosmetic-dentistry/porcelain-veneers" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">porcelain veneers</Link> or professional <Link href="/cosmetic-dentistry/teeth-whitening" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">teeth whitening</Link> options.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/cosmetic_smile_1779858128482.webp"
                  alt="Dental Bonding Treatment"
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

      {/* ─── What Dental Bonding Fixes ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Smile Solutions</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              What Dental Bonding Can Fix
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Bonding uses tooth-colored composite resin, shaped and polished to blend right in — a fast, conservative way to improve your smile. It's ideal for:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left">
              {[
                { title: "Chipped or Cracked Teeth", text: "Quickly restores chips or minor cracks in the enamel, protecting the tooth from further wear and restoring a smooth edge." },
                { title: "Gaps Between Teeth", text: "Closes small spaces or gaps between teeth, particularly the front teeth, without the need for long-term orthodontic work." },
                { title: "Stained or Discolored Spots", text: "Covers persistent dark spots or discoloration that won't respond to traditional bleaching products." },
                { title: "Misshapen or Short Teeth", text: "Alters the shape or length of a tooth to match its neighbors, creating a more uniform and balanced smile line." },
                { title: "Exposed Tooth Roots", text: "Covers and protects exposed roots caused by receding gums, shielding sensitive root surfaces from temperature changes and decay." },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Target 0{idx + 1}</span>
                  <h4 className="font-heading font-bold text-navy text-base mt-1 mb-2">{item.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Quick, Easy Fixes</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    Most dental bonding appointments take under an hour per tooth and deliver immediate cosmetic corrections so you leave our office smiling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dental Bonding vs Veneers ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Compare Options</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Dental Bonding vs. Veneers
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Both improve your smile, but they suit different goals. Bonding is faster, more affordable, and reversible — perfect for small fixes in one visit. Veneers cost more and are permanent but offer a more dramatic, longer-lasting transformation for a full smile makeover. We'll recommend the best fit for what you want to change and your budget.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              If you have multiple teeth that are heavily stained, crooked, or worn down, porcelain veneers will provide a stronger, highly stain-resistant, and more uniform appearance that lasts up to 15 years. For isolated repairs or minor adjustments on a budget, dental bonding is the ideal starting choice. Let us help you map out your goals with a comprehensive <Link href="/cosmetic-dentistry/smile-makeover" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">smile makeover consultation</Link>.
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
                  Key Patient Benefits
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Dental bonding is a fast, conservative, and affordable cosmetic option that delivers immediate, beautiful smile enhancements.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Completed in a single visit with immediate results",
                    "Requires minimal or no removal of natural tooth enamel",
                    "Highly affordable cosmetic dental procedure",
                    "Blends in invisibly with your natural teeth",
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
                  Are You a Candidate for Bonding?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Bonding is ideal for patients seeking minor cosmetic modifications who have healthy underlying tooth structures.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Chipped, cracked, or worn tooth edges",
                    "Small gaps or spaces between front teeth",
                    "Minor discoloration or spots on enamel",
                    "Healthy teeth with sufficient support structure",
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
              Smile enhancement made simple. Here is what you can expect during your teeth bonding session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Color Matching & Prep",
                text: "We select a shade of composite resin that matches your tooth color. We gently etch the enamel surface to ensure a secure bond.",
              },
              {
                title: "Applying the Resin",
                text: "We apply a liquid bonding agent followed by the putty-like composite resin, molding and shaping it to correct chips or gaps.",
              },
              {
                title: "Light Curing",
                text: "Once the shape is perfected, we use a specialized curing light to harden the composite resin in seconds.",
              },
              {
                title: "Polishing & Refinement",
                text: "We refine the shape to match your bite and polish it to a smooth, natural sheen, making the restoration invisible.",
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
                How Much Does Dental Bonding Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Dental bonding is one of the most affordable cosmetic treatments — it usually costs far less than veneers or crowns and is often done in a single visit. Cost depends on how many teeth and how much work each needs. We give you a clear price first and accept CareCredit. Some bonding for chips or decay may even be partially covered by insurance.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                To help you navigate out-of-pocket costs for elective cosmetic work, our team works closely with leading third-party lenders. We accept flexible monthly payment plans through CareCredit to keep your care affordable. Be sure to check our dedicated <Link href="/patient-information/financing-options" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">financing options page</Link> for detailed payment plan options.
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
                  Dental bonding is one of the most cost-effective cosmetic dental treatments. Some insurance plans cover bonding if it is performed to treat active decay or structural damage.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off treatments. We offer flexible checkout options.
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
        title="Dental Bonding FAQs"
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
