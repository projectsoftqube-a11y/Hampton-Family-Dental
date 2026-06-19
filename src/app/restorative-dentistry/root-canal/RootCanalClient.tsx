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
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function RootCanalClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Root Canal Treatment", href: "/restorative-dentistry/root-canal" },
  ];

  const faqs = [
    {
      q: "How much does a root canal cost?",
      a: "It depends on the tooth — molars have more canals than front teeth, so they cost more. We give you a clear estimate first. Most plans cover a good portion, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "Does a root canal hurt?",
      a: "No — the procedure relieves pain, it doesn't cause it. We fully numb the tooth, so it feels about like getting a filling. Mild soreness afterward is normal and easily managed.",
    },
    {
      q: "What are the signs I need a root canal?",
      a: "Severe or lingering tooth pain, prolonged hot/cold sensitivity, a pimple or swelling on the gum, a darkening tooth, or tender gums. See us promptly if you notice these.",
    },
    {
      q: "How long does a root canal take?",
      a: "Most root canals are completed in one or two visits of about 60 to 90 minutes each, depending on the tooth. We'll give you a clear timeline at your appointment.",
    },
    {
      q: "Do I need a crown after a root canal?",
      a: "Usually yes, especially for back teeth — a root-canal-treated tooth becomes more brittle, and a crown restores its strength and protects it for the long term.",
    },
    {
      q: "Is it better to get a root canal or pull the tooth?",
      a: "Saving your natural tooth with a root canal is almost always the better choice — it's less expensive than extracting and replacing it, and nothing functions quite like your own tooth. We'll explain your options.",
    },
  ];

  const relatedServices = [
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    { label: "Emergency Dentistry", href: "/general-dentistry/emergency-dentistry" },
    { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
    { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
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
              Root Canal Treatment in Southampton, PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Save an infected, painful, or deeply decayed tooth from extraction. Modern root canal therapy is a highly routine, comfortable procedure that clears away dental infections, eliminates toothaches, and preserves your natural smile.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Duration</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                60–90 minutes
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Visits</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                1–2 visits
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

      {/* ─── What Is Root Canal Therapy? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Endodontic Care</span>
              </div>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                What is Root Canal Therapy?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Inside every tooth is a chamber containing pulp, which holds nerves and blood vessels. When decay or trauma reaches this area, the pulp becomes infected, causing intense pain. Root canal therapy involves opening the tooth, removing the infected pulp, cleaning and sterilizing the canals, and sealing them to prevent reinfection. The tooth is then typically protected with a <Link href="/restorative-dentistry/dental-crowns" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">dental crown</Link>.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Without treatment, a tooth infection can spread to surrounding bone and gum tissue, creating a dental abscess. This is not only extremely painful but can become a medical emergency. A root canal removes the source of infection, stops the pain, and allows you to keep your natural tooth rather than having it extracted and replaced with an implant or bridge.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we use modern rotary instrumentation and digital imaging to perform root canals with precision and comfort. Most patients are pleasantly surprised that the procedure feels no worse than getting a routine filling. If you are experiencing a dental emergency, our <Link href="/general-dentistry/emergency-dentistry" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">emergency dentistry team</Link> can see you the same day.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/reception_area_1779858343255.webp"
                  alt="Root Canal Treatment"
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

      {/* ─── Signs You May Need a Root Canal ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/50">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
              <span className="text-red-600 text-[10px] tracking-wider uppercase font-bold">Warning Signs</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Signs You May Need a Root Canal
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              A root canal treats infection or damage deep inside the tooth. See us promptly if you notice:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left">
              {[
                { title: "Severe Tooth Pain", text: "Intense or lingering tooth pain, especially when chewing or applying pressure. The pain may radiate to the jaw, ear, or temple." },
                { title: "Prolonged Sensitivity", text: "Prolonged sensitivity to hot or cold that lingers well after the stimulus is removed. A brief twinge is normal; lingering pain is not." },
                { title: "Gum Swelling or Pimple", text: "A pimple-like bump (fistula) or swelling on the gum near a tooth. This often indicates a pocket of infection draining from the root tip." },
                { title: "Tooth Discoloration", text: "A single tooth that has darkened or turned gray compared to its neighbors. This can signal that the internal pulp tissue has died." },
                { title: "Tender or Swollen Gums", text: "Tenderness, redness, or swelling in the gums immediately surrounding a specific tooth, indicating inflammation from an underlying infection." },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider">Symptom 0{idx + 1}</span>
                  <h4 className="font-heading font-bold text-navy text-base mt-1 mb-2">{item.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Don't Wait — Act Early</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    The sooner you treat a tooth infection, the simpler and less expensive the solution. A small infection caught early may only need a root canal, but left untreated it can lead to an abscess requiring <Link href="/general-dentistry/tooth-extraction" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">tooth extraction</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Does a Root Canal Hurt? ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <HeartPulse className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Patient Comfort</span>
            </div>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Does a Root Canal Hurt? What to Expect
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Modern root canals have a bad reputation they no longer deserve. The procedure relieves the pain of an infected tooth — it doesn't cause it. We fully numb the tooth, so the treatment feels about like getting a filling. Afterward you may have mild soreness for a day or two, easily managed with over-the-counter pain relievers. Most teeth are then protected with a crown to restore full strength.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Our team uses advanced rotary instruments and electronic apex locators to clean and shape the canals with extreme precision, reducing treatment time and post-operative discomfort. If you experience dental anxiety, we offer a calm, supportive environment and will explain every step before we begin.
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
                  Root canal therapy eliminates infection, stops pain, and saves your natural tooth — avoiding the cost and complexity of extraction and replacement.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Instantly stops severe tooth pain & sensitivity",
                    "Saves your natural tooth from extraction",
                    "Prevents the spread of bone & gum infections",
                    "Virtually pain-free, similar to a regular filling",
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
                  When Is a Root Canal Needed?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Root canals are required when decay or cracks have reached the inner nerve, causing persistent throbbing pain, swelling, or extreme sensitivity to hot/cold.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Severe, persistent toothaches",
                    "Extreme sensitivity to hot and cold",
                    "Swelling or tenderness in surrounding gums",
                    "Dark discoloration of a single tooth",
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
              We prioritize your comfort and safety. Here is what happens during a root canal procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Infection Diagnostics & Numbing",
                text: "We capture high-definition digital x-rays to locate the infection. We then apply local anesthesia to ensure you are completely comfortable and feel no pain.",
              },
              {
                title: "Cleaning the Canals",
                text: "A small entry is created in the crown to access the pulp. We clean out the infected tissue, reshape the canal walls, and sterilize the area.",
              },
              {
                title: "Sealing the Canals",
                text: "The sterile canal space is filled with a biocompatible rubber-like material (gutta-percha) and sealed with a temporary dental filling.",
              },
              {
                title: "Final Crown Restoration",
                text: "Because removing the pulp makes the tooth brittle, we recommend returning in a week or two to have a custom dental crown bonded for full protection and strength.",
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
                How Much Does a Root Canal Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Root canal cost depends on which tooth is involved — front teeth have one canal, molars have several, so they take more work. We give you a clear estimate first. Most dental plans cover a good portion of root canal treatment, we accept CareCredit, and members get 15% off.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Saving your natural tooth with a root canal is almost always less expensive than extracting and replacing it with an implant or bridge. We work closely with insurance providers to minimize your out-of-pocket costs, and also offer payment flexibility for patients without insurance. Check out our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">specials and in-house plans</Link> for additional savings.
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
                  Saves a tooth, avoiding the higher costs associated with extraction and replacing it with an implant. Most dental insurances cover root canals under basic or major procedures.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members save 15%. Flexible monthly payments are available through CareCredit.
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
        title="Root Canal Treatment FAQs"
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
