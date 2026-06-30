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
  Sparkles as SparklesIcon,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function TeethWhiteningClient() {
  const breadcrumbs = [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
  ];

  const faqs = [
    {
      q: "How much does professional teeth whitening cost?",
      a: "It depends on whether you choose in-office or custom take-home trays. We give you a clear price upfront — it's one of our most affordable cosmetic options — and we accept CareCredit.",
    },
    {
      q: "Is professional whitening better than store-bought?",
      a: "Yes — professional whitening uses stronger, dentist-supervised gel and custom trays that whiten evenly and protect your gums, giving a brighter smile faster with results that last much longer than drugstore strips.",
    },
    {
      q: "Is teeth whitening safe?",
      a: "Yes — professional whitening performed or supervised by a dentist is safe and far more effective than store kits. We protect your gums and tailor the strength to your teeth, minimizing sensitivity.",
    },
    {
      q: "How long does teeth whitening last?",
      a: "Results typically last several months to a couple of years, depending on your habits. Coffee, tea, red wine, and smoking fade it faster. Touch-ups with take-home trays keep your smile bright.",
    },
    {
      q: "Does whitening cause sensitivity?",
      a: "Some patients feel temporary sensitivity that fades within a day or two. Because we use professional products and custom trays, we can adjust the strength to keep you comfortable.",
    },
    {
      q: "Will whitening work on crowns or veneers?",
      a: "Whitening only works on natural teeth — crowns, veneers, and fillings won't change color. If you have restorations, we'll plan your whitening so everything matches, sometimes whitening first then matching new work.",
    },
  ];

  const relatedServices = [
    { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
    { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
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
              Professional Teeth Whitening in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Brighten your smile up to 8 shades in a single visit. We offer professional, clinical-grade teeth whitening treatments that safely and comfortably lift stubborn stains from coffee, tea, wine, and aging.
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

      {/* ─── What Is Professional Whitening ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Smile Brightening</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                Why Choose Professional Teeth Whitening?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Over-the-counter whitening strips and toothpastes can take weeks to show results and often cause severe tooth sensitivity. Our professional teeth whitening treatments utilize a concentrated, clinically safe bleaching gel activated by a specialized curing light. This process penetrates deep into enamel to break up stains instantly, while our custom barrier gels protect your gums from irritation.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                As we age, our teeth naturally darken and pick up stains from our favorite foods and beverages. A dull or discolored smile can make you look older and feel hesitant to smile openly. Professional teeth whitening is one of the fastest, most effective ways to restore your teeth's natural luster and inject a massive dose of confidence back into your daily interactions.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we offer both in-office whitening and custom take-home whitening trays. If you have permanent restorations like <Link href="/cosmetic-dentistry/porcelain-veneers" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">porcelain veneers</Link> or dental crowns, we will customize your treatment plan so that your natural teeth blend seamlessly with your existing dental work.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_whitening_1779858413749.webp"
                  alt="Professional Teeth Whitening"
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

      {/* ─── Professional vs Over-the-Counter Whitening ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkle className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Pro vs OTC</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Professional vs. Store-Bought Whitening
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Drugstore strips and toothpastes use weak, one-size-fits-all formulas that fade fast and can cause uneven results or sensitivity. Professional whitening uses stronger, dentist-supervised gel and custom-fit trays that whiten evenly and protect your gums — so you get a brighter smile in far less time, with results that actually last.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Store-bought kits often touch only the very front teeth and fail to conform to the unique contours of your mouth. This leads to uneven whitening near the gum line, or worse, chemical irritation to delicate gums. Professional systems are carefully measured and applied under professional supervision, ensuring your comfort and safety.
            </p>
          </div>
        </div>
      </section>

      {/* ─── In-Office vs Take-Home Whitening ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <SparklesIcon className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Whitening Options</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              In-Office vs. Take-Home Whitening
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              We offer two professional options. In-office whitening brightens your smile several shades in about an hour — perfect before an event. Custom take-home trays let you whiten gradually at home on your schedule with professional-strength gel. Many patients combine both for the best, longest-lasting result. We'll help you pick based on your timeline and goals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6 text-left">
              <div className="bg-beige-light/10 border border-navy/[0.03] p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-navy text-lg">In-Office (Zoom Whitening)</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Our in-office whitening option uses a clinical-strength hydrogen peroxide gel activated by a special UV light. It can make your smile up to 8 shades lighter in just one visit of about an hour. Ideal for weddings, reunions, job interviews, or anyone who wants immediate results.
                </p>
              </div>
              <div className="bg-beige-light/10 border border-navy/[0.03] p-6 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-navy text-lg">Custom Take-Home Trays</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  We construct custom trays that match the exact shape of your teeth. You take home a kit with professional-strength gel and wear the trays for 30 to 60 minutes a day at home. This allows you to whiten gradually and comfortably over a week or two on your own schedule.
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
                  Enjoy the confidence of a bright, healthy-looking smile with whitening designed and monitored by clinical professionals.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Brightens teeth up to 8 shades in just one hour",
                    "Safe, clinically monitored gel protects gums",
                    "Far more effective than over-the-counter strips",
                    "Includes take-home touch-up kits for long-lasting results",
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
                  Are You a Candidate for Whitening?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Professional whitening delivers the best results for patients with clean, healthy teeth and extrinsic surface staining.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Extrinsic stains from coffee, tea, tobacco, or wine",
                    "Dull or yellowed teeth due to aging",
                    "Healthy teeth with no active cavities or gum disease",
                    "Looking for a fast, dramatic smile upgrade",
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
              Whitening is a simple, relaxing procedure. Here is what happens during your session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Shade Analysis & Prep",
                text: "We record your starting tooth shade and place a protective barrier over your lips and gums to expose only your teeth.",
              },
              {
                title: "Applying the Gel",
                text: "We apply the clinical-grade hydrogen peroxide whitening gel to the front surfaces of your teeth.",
              },
              {
                title: "Light Activation",
                text: "We position our specialized whitening light over your teeth to activate the gel. This is done in three 15-minute cycles.",
              },
              {
                title: "Rinse & Reveal",
                text: "We rinse away the gel, apply a desensitizing paste, and measure your new, bright shade. Your smile is instantly transformed.",
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
                How Much Does Professional Teeth Whitening Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Professional whitening costs more than a drugstore kit but delivers dramatically better, longer-lasting, and safer results. Cost depends on whether you choose in-office or custom take-home trays. We give you a clear price upfront, it's one of our most affordable cosmetic options, and we accept CareCredit.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Because whitening is an elective cosmetic service, it is not covered by insurance. However, we keep our prices competitive and offer periodic seasonal discounts. We also accept monthly financing through CareCredit, making it easy to fit into your budget. Learn more about our cosmetic payment options on our <Link href="/patient-information/financing-options" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">financing page</Link> or visit our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">specials page</Link> for current deals.
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
                  Teeth whitening is a cosmetic procedure and is generally not covered by insurance. It is one of the most affordable and impactful cosmetic dental treatments available.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> We accept CareCredit monthly financing. Ask about our periodic seasonal whitening specials.
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
        title="Teeth Whitening FAQs"
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
