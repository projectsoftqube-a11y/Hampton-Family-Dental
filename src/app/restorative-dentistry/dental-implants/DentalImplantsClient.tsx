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

export default function DentalImplantsClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
  ];

  const faqs = [
    {
      q: "How much do dental implants cost?",
      a: "It depends on how many teeth you’re replacing and the type of restoration — a single implant differs greatly from full-mouth or All-on-4. We give you a clear written estimate first. Many plans cover part of the crown or surgery, we accept CareCredit, and members get 15% off.",
    },
    {
      q: "What is All-on-4?",
      a: "All-on-4 replaces a full arch of teeth using just four implants as anchors for a fixed, non-removable set of teeth. It’s a popular, efficient alternative to dentures for patients missing most or all of their teeth in an arch.",
    },
    {
      q: "How long does the dental implant process take?",
      a: "Most cases take about 3 to 6 months from placement to final crown, because the implant needs time to fuse with the bone (osseointegration). We’ll give you a personalized timeline — some cases qualify for faster options.",
    },
    {
      q: "Is the dental implant procedure painful?",
      a: "Most patients experience very little discomfort. The surgery is performed under local anesthesia, meaning the area is completely numb. Over-the-counter pain relievers are usually sufficient for any post-procedure soreness.",
    },
    {
      q: "How long do dental implants last?",
      a: "With proper home care and regular professional checkups, the titanium implant post can last a lifetime. The custom crown on top may need replacement after 10 to 15 years due to normal wear.",
    },
    {
      q: "Are dental implants better than a bridge or dentures?",
      a: "Implants are the only option that replaces the tooth root, so they protect your jawbone and don’t rely on or damage neighboring teeth. Bridges and dentures are good options too — we’ll help you choose based on your needs and budget.",
    },
    {
      q: "Does insurance cover dental implants?",
      a: "Coverage varies — many plans cover a portion of the crown or surgery rather than the full cost. We’ll review your benefits with you and explain your options, including financing through CareCredit and our membership-plan savings.",
    },
    {
      q: "Am I too old for dental implants?",
      a: "No! As long as you are in good health and have sufficient bone density, age is not a factor. Many elderly patients choose implants to replace unstable dentures.",
    },
  ];

  const relatedServices = [
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
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
              Dental Implants in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Restore the complete look, strength, and functionality of missing teeth. Dental implants are biocompatible titanium posts that act as permanent anchors for premium crown restorations, protecting your jawbone and adjacent teeth.
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

      {/* ─── What Is a Dental Implant? ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Gold Standard Tooth Replacement</span>
              </div>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                What is a Dental Implant?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A dental implant is a titanium post surgically positioned into the jawbone beneath the gumline. Once integrated with the bone (a process called osseointegration), it serves as a stable mount for a custom-crafted replacement crown. This permanent solution prevents bone loss and looks, feels, and functions exactly like a natural tooth.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Traditional replacement methods, like dental bridges or partial dentures, only address the visible portion of the tooth. Implants go a step further by replacing the root itself. This stops bone deterioration and provides the strongest support system available in modern restorative dentistry.
              </p>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/cosmetic_smile_1779858128482.webp"
                  alt="Dental Implants"
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
                  Replacing missing teeth with implants restores structural balance to your jaw, safeguards healthy teeth, and returns 100% of your natural chewing ability.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Prevents bone loss & facial shifting",
                    "Lasts a lifetime with proper care",
                    "Restores full chewing power & clear speech",
                    "Requires no grinding of adjacent teeth",
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
                  Are You a Candidate for Implants?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Dental implants are ideal for patients with one or more missing teeth who have adequate bone density to support the posts and healthy gums.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Adequate jawbone density",
                    "Healthy gum tissues",
                    "Commitment to good oral hygiene",
                    "Non-smoker or willing to pause",
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

      {/* ─── Why Replacing a Missing Tooth Matters ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Why Replacing a Missing Tooth Matters
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              A missing tooth is more than a cosmetic concern. When a tooth is gone, the jawbone beneath it begins to shrink, neighboring teeth drift into the gap, your bite changes, and chewing and speech can suffer — and over time, that bone loss can change the shape of your face.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Dental implants are the only replacement that stops this chain reaction at the source, because the titanium post replaces the tooth root and keeps the bone stimulated and healthy. The sooner a missing tooth is replaced, the easier and more predictable treatment tends to be.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              When teeth shift, they create hard-to-reach pockets where plaque and tartar accumulate, heightening the risk for decay and periodontal infections. By filling the gap permanently, implants restore the natural alignment and make oral maintenance straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Implant Options We Offer ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">Implant Restorations</span>
            </div>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold">
              Dental Implant Options We Offer
            </h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              Whether you’re missing one tooth or many, there’s an implant solution designed for you. At your consultation, Dr. Dudhat uses 3D CBCT imaging to recommend the right approach for your bone, your goals, and your budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Single Tooth Implant",
                description:
                  "A single titanium post topped with a custom porcelain crown. This replaces the root and crown of a single missing tooth, leaving adjacent teeth completely untouched and preserved.",
              },
              {
                title: "Multiple Tooth Replacement",
                description:
                  "If you are missing several teeth in a row, we can place implant posts to support a custom implant-supported bridge, avoiding the need to grind down surrounding teeth.",
              },
              {
                title: "All-on-4® Dental Implants",
                description:
                  "This option replaces a full arch of teeth using just four strategically placed implants as anchors for a fixed, non-removable bridge. It's a highly efficient, popular alternative to traditional dentures.",
              },
              {
                title: "Full-Mouth Reconstruction",
                description:
                  "For extensive tooth loss, a custom combination of implants can anchor a full set of replacement teeth, restoring complete function and aesthetics to your entire smile.",
              },
              {
                title: "Implant-Supported Dentures",
                description:
                  "Also known as snap-on dentures, these attach securely to implant posts to eliminate slipping, clicking, or sliding, providing greater confidence and chewing stability.",
              },
            ].map((option, idx) => (
              <div
                key={option.title}
                className="bg-white border border-navy/[0.05] p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-bold text-navy text-lg">{option.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Treatment Process (Full Width, Centered Grid) ─── */}
      <section className="py-16 md:py-24 bg-white relative border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Step-by-Step</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">Your Treatment Process</h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              Understanding the dental implant journey from the initial scan to your final restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Initial Consultation & 3D CBCT Mapping",
                text: "Dr. Dudhat utilizes our Cone Beam CT scanner to capture a high-resolution 3D map of your jawbone and plan the precise placement guide.",
              },
              {
                title: "Implant Post Placement",
                text: "The titanium post is carefully inserted into the bone under local anesthesia, ensuring a completely comfortable procedure.",
              },
              {
                title: "Osseointegration (Healing)",
                text: "Over the next 3 to 6 months, the bone heals and fuses around the post, establishing a rock-solid foundation.",
              },
              {
                title: "Abutment & Custom Crown Placement",
                text: "An abutment is attached to the post, and a custom-colored porcelain crown is placed, completing your beautiful, natural smile.",
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

      {/* ─── Implants vs. Bridges vs. Dentures ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-4">
              Implants vs. Bridges vs. Dentures
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              All three replace missing teeth, but they’re very different. Implants are the only option that replaces the tooth root, which is what protects your jawbone and keeps the rest of your smile stable. Here’s how they compare:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-navy/[0.06] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">Dental Implants</th>
                    <th className="px-6 py-4">Bridge</th>
                    <th className="px-6 py-4">Denture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/[0.06]">
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Replaces the root</td>
                    <td className="px-6 py-4 text-emerald-600 font-semibold">Yes</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Protects jawbone</td>
                    <td className="px-6 py-4 text-emerald-600 font-semibold">Yes</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Affects nearby teeth</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                    <td className="px-6 py-4 text-navy/70 font-semibold">Yes (must be ground down)</td>
                    <td className="px-6 py-4 text-navy/70">No</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Lifespan</td>
                    <td className="px-6 py-4 text-navy/70 font-semibold">Often lifetime</td>
                    <td className="px-6 py-4 text-navy/70">~10–15 years</td>
                    <td className="px-6 py-4 text-navy/70">~5–8 years</td>
                  </tr>
                  <tr className="hover:bg-beige-light/5 transition-colors">
                    <td className="px-6 py-4 font-heading font-bold text-navy">Feels like natural teeth</td>
                    <td className="px-6 py-4 text-navy/70">Most</td>
                    <td className="px-6 py-4 text-navy/70">Fixed but limited</td>
                    <td className="px-6 py-4 text-navy/70">Removable</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                How Much Do Dental Implants Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Dental implant cost depends on how many teeth you’re replacing and the type of restoration — a single implant is very different from a full-mouth or All-on-4 reconstruction. Because every case is unique, we provide a clear, written estimate at your consultation, with no guesswork and no pressure.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                While implants have a higher upfront cost than a bridge or denture, they’re often the most cost-effective choice long-term: they don’t need replacing every several years, they protect your jawbone, and they don’t damage neighboring teeth.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Many dental plans cover part of the crown or surgery, we accept CareCredit for low monthly payments, and <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">Hampton Dental Wellness members</Link> receive 15% off — so a permanent solution can fit your budget.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                If you have undergone a <Link href="/general-dentistry/tooth-extraction" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">tooth extraction</Link> recently, replacing the tooth promptly with a dental implant keeps the bone density intact and prevents further tooth loss.
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
                  Implants are a long-term investment. While they have a higher initial cost than bridges or dentures, their durability makes them highly cost-effective over time. Some dental insurance plans cover a portion of the crown or surgery.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Hampton Dental Wellness members get 15% off. Monthly payment options are available through CareCredit. We recommend booking a consultation to get a customized written plan.
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
        title="Dental Implant FAQs"
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
