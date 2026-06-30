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

export default function DentalFillingsClient() {
  const breadcrumbs = [
    { label: "Restorative Dentistry", href: "/restorative-dentistry" },
    { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
  ];

  const faqs = [
    {
      q: "How much does a dental filling cost?",
      a: "It depends on the size and location of the cavity and the material. We give you a clear estimate first. Most plans cover fillings well, often 80-100%, and we accept CareCredit.",
    },
    {
      q: "Are tooth-colored fillings better than metal?",
      a: "For most patients, yes — composite bonds to the tooth, matches your natural color, removes less healthy tooth, and contains no metal. We use tooth-colored fillings as our standard.",
    },
    {
      q: "How do I know if I have a cavity?",
      a: "Cavities often start painlessly. Watch for a toothache, sensitivity to hot/cold/sweet, a visible hole or dark spot, or food catching in one spot. Regular checkups catch them early.",
    },
    {
      q: "Does getting a filling hurt?",
      a: "No — we numb the tooth first, so you'll feel pressure but not pain. The whole visit is usually quick, and mild sensitivity afterward fades within a day or two.",
    },
    {
      q: "How long do fillings last?",
      a: "Tooth-colored fillings typically last 7 to 10 years or more with good care. We check your fillings at each visit and replace them if they wear or chip.",
    },
    {
      q: "What happens if I leave a cavity untreated?",
      a: "Decay keeps spreading — a small cavity can grow into a larger one needing a crown, or reach the nerve and require a root canal. Treating it early with a simple filling is faster and less expensive.",
    },
  ];

  const relatedServices = [
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    { label: "Dental Checkups & X-Rays", href: "/general-dentistry/checkups-and-x-rays" },
    { label: "Root Canal Therapy", href: "/restorative-dentistry/root-canal" },
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
              Dental Fillings in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Treat cavities and repair minor tooth decay or chips with our modern, metal-free composite dental fillings. Crafted from composite resin, these fillings match the shade of your teeth to preserve both structure and aesthetics.
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

      {/* ─── What Is a Composite Dental Filling? ─── */}
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
                What is a Composite Dental Filling?
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                A dental filling is a restoration used to repair a tooth damaged by decay or wear. After removing the decayed structure, the cavity is cleaned and filled with a biocompatible resin. Unlike older silver amalgam fillings, composite resin bonds directly to your enamel, requiring less tooth structure removal and providing a completely natural appearance.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                When bacteria in the mouth feed on sugars, they produce acid that slowly demineralizes the hard enamel surface of your teeth, forming a microscopic hole (a cavity). If left untreated, this decay spreads deeper into the dentin, causing sensitivity, and eventually into the pulp chamber, which can lead to infection. Receiving a composite filling seals this hole, stops the spread of decay, and restores the structural integrity of your tooth.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                At Hampton Family Dental, we prioritize conservative dentistry. By choosing composite material, we can preserve more of your natural tooth structure during the preparation process. This helps keep the tooth strong for decades to come.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/cosmetic_smile_1779858128482.webp"
                  alt="Tooth-Colored Dental Fillings"
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

      {/* ─── Tooth-Colored vs Metal Fillings ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Tooth-Colored Fillings vs. Metal Fillings
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              We use tooth-colored composite fillings that bond directly to your tooth and match your natural shade, so repairs are virtually invisible. Composite also requires removing less healthy tooth than old silver (amalgam) fillings, and contains no metal. For most patients, tooth-colored is the clear choice for both appearance and conservative care.
            </p>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Traditional silver amalgam fillings are made from a mixture of metals, including silver, copper, tin, and mercury. While durable, they have several clinical drawbacks compared to modern composite materials:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-4 text-left">
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-sm mb-2">Micro-Mechanical Bonding</h4>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Composite resin chemically bonds directly to your enamel and dentin. This adhesive bond supports and strengthens the remaining tooth structure, helping prevent fractures. Amalgam fillings do not bond; they require the dentist to carve physical undercuts to wedge the metal in place.
                </p>
              </div>
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-sm mb-2">Thermal Stability</h4>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Metal conducts temperature rapidly and expands and contracts when exposed to hot and cold liquids. Over time, this constant movement can stress the tooth shell and cause cracks or micro-leakage. Composite resin behaves much more like natural tooth structure.
                </p>
              </div>
              <div className="bg-white border border-navy/[0.04] p-5 rounded-2xl shadow-sm">
                <h4 className="font-heading font-bold text-navy text-sm mb-2">Preserving Enamel</h4>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Because composite bonds chemically, we only need to remove the active decay. We can leave healthy tooth structure untouched. Amalgam placements often require removing healthy enamel just to create a stable shape to hold the metal block.
                </p>
              </div>
            </div>
            
            <p className="text-navy/70 text-sm md:text-base leading-relaxed pt-2">
              For larger areas of decay where a standard filling might not provide sufficient support, we may recommend a porcelain <Link href="/restorative-dentistry/dental-crowns" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary-dark">dental crown</Link> to fully encase and protect the tooth.
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
                  Tooth-colored fillings offer both structural and cosmetic advantages, sealing out future decay while matching the natural beauty of your smile.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Tooth-colored resin blends in invisibly",
                    "Bonds directly to enamel, strengthening the tooth",
                    "Requires less enamel removal than silver fillings",
                    "Completely metal-free and mercury-free",
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
                  Are You a Candidate for a Filling?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Composite fillings are perfect for treating mild to moderate cavities, replacing old failing fillings, or repairing minor cracks and chips.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Mild to moderate cavities",
                    "Sensitivities to cold/sweet due to decay",
                    "Chipped or worn tooth edges",
                    "Replacing dark, unsightly metal fillings",
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

      {/* ─── Signs You Might Need a Filling ─── */}
      <section className="py-16 md:py-24 bg-white relative border-b border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
              Signs You Might Need a Filling
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed">
              Cavities often start painlessly, which is why checkups catch them early. See us if you notice any of these:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left">
              {[
                { title: "Bite Pain / Toothache", text: "Sharp or lingering discomfort when you bite down or chew food, indicating that the protective outer enamel has worn away and decay is affecting the underlying tooth tissue." },
                { title: "Temperature Sensitivity", text: "Mild to severe sensitivity when eating or drinking items that are hot, cold, or highly sweet. If the sensation lingers, it may suggest active decay exposing internal dentin tubules." },
                { title: "Visible Pits or Spots", text: "A dark spot, visible hole, or noticeable pit on the chewing surfaces or between your teeth. Staining that appears dark brown or black can also indicate active decay." },
                { title: "Food Trap Areas", text: "Food repeatedly getting stuck or floss tearing in one specific spot between your teeth, which can happen when a cavity breaks open the smooth enamel contour." },
                { title: "Rough or Chipped Edges", text: "A rough or jagged edge you can feel with your tongue, showing where the enamel has weakened and chipped due to decay beneath the surface." }
              ].map((item, idx) => (
                <div key={item.title} className="bg-beige-light/10 border border-navy/[0.04] p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Warning Sign 0{idx + 1}</span>
                    <h4 className="font-heading font-bold text-navy text-base mt-1 mb-2">{item.title}</h4>
                    <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-primary-dark text-base">Catch Decay Early</h4>
                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed">
                    By scheduling regular <Link href="/general-dentistry/checkups-and-x-rays" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">dental checkups and digital x-rays</Link>, we can detect cavities before they ever cause pain, protecting your oral health and saving you money.
                  </p>
                </div>
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
              We prioritize your comfort and safety. Here is what happens during a dental filling procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Numbing & Prep",
                text: "We apply a localized numbing gel and anesthetic to ensure you do not feel anything. The decayed or soft tooth structure is gently cleaned away.",
              },
              {
                title: "Applying the Resin",
                text: "The composite resin is layered into the cavity. Each layer is cured and hardened instantly using a special dental curing light.",
              },
              {
                title: "Shaping & Polishing",
                text: "Once the cavity is filled, we shape the composite resin to match your natural bite alignment and polish it to a smooth, natural finish.",
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

          <div className="max-w-4xl mx-auto mt-12 p-5 bg-beige-light/20 border border-navy/[0.04] rounded-2xl text-center text-xs md:text-sm text-navy/70 leading-relaxed">
            If decay has reached deep into the nerve chamber of the tooth, a standard composite filling might not be enough to resolve the problem. In these situations, <Link href="/restorative-dentistry/root-canal" className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:text-primary-dark">root canal therapy</Link> is required to remove the infected tissue and save the tooth from extraction.
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
                How Much Does a Dental Filling Cost in Southampton?
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Filling cost depends on the size and location of the cavity and the material. Tooth-colored composite fillings are our standard. We give you a clear estimate first; most plans cover fillings well (often 80–100%), we accept CareCredit, and members get 15% off other procedures. (No fixed price — route to /specials.)
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Because dental fillings are basic restorative procedures, they are heavily covered by dental insurance networks. If you are uninsured, we offer affordable payment options and an in-house wellness membership program that cuts treatment costs. You can learn more about our ongoing offers and savings programs by checking out our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">special promotions and coupons</Link>.
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
                  Most dental insurance policies cover between 80% and 100% of dental filling costs because they are considered a basic preventive restoration. Out-of-pocket costs are very low.
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
        title="Dental Fillings FAQs"
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
