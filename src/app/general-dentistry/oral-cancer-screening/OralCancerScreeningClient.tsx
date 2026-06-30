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
  HeartPulse,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function OralCancerScreeningClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening" },
  ];

  const faqs = [
    {
      q: "What are the early signs of oral cancer?",
      a: "Watch for a sore that won't heal, a red or white patch, a lump or rough spot, persistent pain or numbness, or trouble swallowing — especially if it lasts more than two weeks. Most are harmless, but it's always worth a quick check.",
    },
    {
      q: "What happens during an oral cancer screening?",
      a: "It's a quick, painless exam — usually about five minutes during your checkup. We visually inspect your lips, tongue, cheeks, throat, and the floor and roof of your mouth, then gently feel your neck and jaw for any unusual lumps or tender areas.",
    },
    {
      q: "How often should I have an oral cancer screening?",
      a: "We screen at every routine checkup — typically every six months — so it's built into the care you already receive. Patients with higher risk factors, such as tobacco use, may benefit from more frequent monitoring.",
    },
    {
      q: "Does an oral cancer screening cost extra?",
      a: "No. We include oral cancer screening as a standard part of your comprehensive exam, so it's fully covered by dental insurance with no extra fee. Our in-house membership plan also covers it as part of your routine diagnostic visits.",
    },
    {
      q: "What does an abnormal screening result mean?",
      a: "An abnormal result does not automatically mean cancer. Most tissue changes are caused by minor mouth trauma, biting your cheek, or temporary sores. We simply monitor the area or test it to be absolutely sure.",
    },
    {
      q: "How can I lower my risk of oral cancer?",
      a: "You can lower your risk by avoiding tobacco products, consuming alcohol in moderation, applying UV-protective lip balm outdoors, and visiting us every 6 months for professional screenings.",
    },
  ];

  const relatedServices = [
    { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
    { label: "General Dentistry", href: "/general-dentistry" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

  const symptoms = [
    "A sore or ulcer in the mouth or on the lip that won’t heal",
    "A red or white patch on the gums, tongue, or lining of the mouth",
    "A lump, thickening, or rough spot inside the mouth or on the neck",
    "Persistent mouth pain, numbness, or tenderness",
    "Difficulty chewing, swallowing, or moving the tongue or jaw",
    "A feeling that something is caught in your throat, or a lasting sore throat",
    "Loose teeth or dentures that no longer fit, with no clear cause",
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
              Oral Cancer Screenings in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Protect your long-term health with routine, non-invasive oral cancer screenings. Performed during your regular checkup, this simple exam identifies tissue changes early when treatment is most successful.
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
                  Regular preventative care is about more than just teeth. An oral cancer screening at Hampton Family Dental — formerly Brenner Dental Group — is a fast, routine part of your <Link href="/general-dentistry/checkups-and-x-rays" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">bi-annual checkup</Link>. Because early detection plays a pivotal role in treatment success, our clinical team performs a comprehensive visual and physical tissue review at every exam. This ensures any anomalies are identified and tracked immediately.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">What to Expect</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  What is an Oral Cancer Screening?
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  An oral cancer screening is a short, visual, and physical examination to identify early signs of precancerous or cancerous conditions in your mouth. Dr. Brenner or Dr. Dudhat checks your lips, tongue, inner cheeks, roof of the mouth, throat, and feels the lymph nodes in your neck. Identifying tissue abnormalities early is critical for successful clinical treatment.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/service_general_1779858374972.webp"
                  alt="Oral Cancer Screening"
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
                  Routine screenings provide essential safety margins, detecting tissue anomalies long before they trigger pain.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Finds tissue changes early before they are visible to you",
                    "Completely non-invasive, quick, and pain-free",
                    "Provides peace of mind during your routine checkup",
                    "Improves treatment success rates significantly",
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
                  Who Should Be Screened?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  While screening is performed for all adult patients, individuals with specific lifestyle risk factors require consistent monitoring.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Adults of all ages, especially over 40",
                    "Patients who use cigarettes, cigars, or chewing tobacco",
                    "Patients with heavy alcohol consumption habits",
                    "Individuals with significant lip exposure to sunlight",
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
              We focus on thoroughness and patient comfort. Here is what happens during a standard screening.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Visual Tissue Inspection",
                text: "Using a dental light and mirror, we inspect the lining of your mouth, gums, tongue, throat, and tonsils for red or white patches, ulcers, or swelling.",
              },
              {
                title: "Physical Palpation",
                text: "We gently feel your jaw, neck, lymph nodes, and underneath your tongue to check for abnormal lumps, nodules, or tender areas.",
              },
              {
                title: "Diagnostic Follow-Up (If Needed)",
                text: "If we locate an unusual patch of tissue, we may capture a small swab biopsy or schedule a follow-up check in two weeks to see if the area heals.",
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

      {/* ─── Signs & Symptoms to Watch For ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="bg-white border border-navy/[0.06] rounded-[2rem] p-6 md:p-10 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-beige-light/35 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <HeartPulse className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                      Patient Awareness
                    </span>
                  </div>
                  <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight pt-2">
                    Signs & Symptoms of Oral Cancer
                  </h2>
                </div>
              </div>

              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Oral cancer is highly treatable when it’s caught early — which is exactly why a few minutes of screening at every checkup matters so much. Between visits, it helps to know what to look for. Most mouth sores and changes are harmless and heal on their own, but if any of the following lasts longer than two weeks, see us so we can take a look.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {symptoms.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-beige-light/10 p-3 rounded-xl border border-navy/[0.03] shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-navy/85 text-xs font-semibold leading-snug">{s}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-beige-light/20 border border-navy/[0.03] text-xs md:text-sm text-navy/85 font-medium leading-relaxed mt-4">
                Noticing one of these doesn’t mean you have cancer — most have ordinary causes — but it’s always worth a quick, painless check.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Risk Factors & Prevention (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Risk Factors & Prevention */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                Oral Cancer Risk Factors & How to Lower Your Risk
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Some people are at higher risk for oral cancer than others. The biggest risk factors are tobacco use of any kind, heavy alcohol use, significant sun exposure to the lips, and infection with HPV (human papillomavirus). Age plays a role too — risk rises after 40 — though oral cancer can affect younger adults, especially with HPV-related cases on the rise.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The good news is that much of your risk is within your control. Avoiding tobacco, drinking only in moderation, using a UV-protective lip balm outdoors, eating a balanced diet, and keeping up with regular dental checkups all lower your risk and improve the odds of catching anything early. A professional screening every six months is one of the simplest, most effective steps you can take.
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
                  We include oral cancer screenings as a standard part of our comprehensive exams, ensuring they are fully covered by dental insurance with no extra fees.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> Our in-house membership plans cover these screening exams as part of your bi-annual diagnostic visits.
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
        title="Oral Cancer Screening FAQs"
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
