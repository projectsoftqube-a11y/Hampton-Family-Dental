"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Stethoscope,
  Sparkles,
  SmilePlus,
  Sun,
  Layers,
  CircleDot,
  AlertCircle,
  ArrowUpRight,
  Check,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements that restore function and confidence.",
    image: "/images/dentist_portrait_1779858109259.webp",
    tag: "Restorative",
    duration: "3–6 months",
    benefits: ["Permanent solution", "Preserves bone", "Like real teeth"],
  },
  {
    icon: ShieldCheck,
    title: "Crowns",
    desc: "Custom-fitted dental crowns to restore, strengthen, and protect damaged or decayed teeth.",
    image: "/images/service_veneers_1779858461216.webp",
    tag: "Restorative",
    duration: "2 visits",
    benefits: ["Restores tooth strength", "Natural-looking ceramic", "Long-term protection"],
  },
  {
    icon: AlertCircle,
    title: "Dental Emergency",
    desc: "Same-day emergency dental appointments whenever urgent care is needed.",
    image: "/images/reception_area_1779858343255.webp",
    tag: "Urgent",
    duration: "Same day",
    benefits: ["24/7 availability", "Pain relief", "Trauma care"],
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Comprehensive care including cleanings, fillings, and preventive treatments for your entire family.",
    image: "/images/service_general_1779858374972.webp",
    tag: "Preventive",
    duration: "30–60 min",
    benefits: ["Routine cleanings", "Cavity prevention", "Oral exams"],
  },
  {
    icon: Layers,
    title: "Fillings",
    desc: "Composite, tooth-colored fillings to seamlessly treat cavities and repair tooth decay.",
    image: "/images/cosmetic_smile_1779858128482.webp",
    tag: "Restorative",
    duration: "1 visit",
    benefits: ["Tooth-colored composite", "Halts tooth decay", "Quick single-visit treatment"],
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    desc: "Professional-grade whitening for a brighter, more confident smile in just one visit.",
    image: "/images/service_whitening_1779858413749.webp",
    tag: "Aesthetic",
    duration: "60 min",
    benefits: ["Up to 8 shades brighter", "Safe & gentle", "Long-lasting"],
  },
  {
    icon: Sparkles,
    title: "Clear Correct/Perio Protect",
    desc: "Advanced clear orthodontic aligners combined with non-invasive, custom periodontal therapy.",
    image: "/images/about_storytelling_1779858491119.webp",
    tag: "Specialty",
    duration: "Varies",
    benefits: ["Discreet alignment", "Fights gum disease", "Home-use comfort"],
  },
  {
    icon: SmilePlus,
    title: "Invisalign",
    desc: "Straighten teeth discreetly with custom clear aligners. No brackets, no wires — just results.",
    image: "/images/service_invisalign_1779858394769.webp",
    tag: "Orthodontic",
    duration: "6–18 months",
    benefits: ["Nearly invisible", "Removable trays", "Faster than braces"],
  },
];

interface ServiceItem {
  icon: any;
  title: string;
  desc: string;
  image: string;
  tag: string;
  duration: string;
  benefits: string[];
  id: string;
  isCustom: false;
}

interface CustomItem {
  id: string;
  isCustom: true;
}

type SliderItem = ServiceItem | CustomItem;

export default function Services() {
  // Combine items to construct one single slide set
  const originalItems: SliderItem[] = [
    ...services.map((s, idx) => ({ ...s, id: `svc-${idx}`, isCustom: false as const })),
    { id: "custom", isCustom: true as const },
  ];
  const originalCount = originalItems.length; // 9

  return (
    <section
      id="services"
      className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Inject smooth CSS keyframe marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
      `}} />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent z-10" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-[15%] right-[5%] w-[420px] h-[420px] rounded-full bg-primary/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[380px] h-[380px] rounded-full bg-navy/[0.05] blur-[120px] pointer-events-none" />

      {/* ──── Header ──── */}
      <div className="svc-header relative z-10 max-w-[1400px] w-full mx-auto px-5 md:px-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="svc-eyebrow inline-flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-primary" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-beige-light border border-primary/15">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  What We Offer
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="svc-title font-heading text-navy mb-2"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Premium Dental{" "}
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Services.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="svc-desc text-navy/55 text-sm md:text-base leading-relaxed max-w-xl"
            >
              From routine care to transformative cosmetic treatments — every
              service is delivered with precision and warmth.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ──── Horizontal scrolling track ──── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative overflow-hidden flex items-center pt-2 w-full"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="flex animate-marquee w-max py-4">
          {/* First Copy */}
          <div className="flex gap-5 md:gap-6 pr-5 md:pr-6 shrink-0">
            {originalItems.map((item, i) => {
              if (!item.isCustom) {
                const service = item;
                return (
                  <article
                    key={`copy1-${item.id}`}
                    className="group relative shrink-0 flex flex-col w-[80vw] sm:w-[55vw] md:w-[420px] lg:w-[440px]
                      h-[440px]
                      bg-beige-light rounded-[28px] overflow-hidden
                      border border-navy/[0.06]
                      shadow-[0_20px_60px_-25px_rgba(40,47,90,0.18)]
                      hover:shadow-[0_35px_100px_-25px_rgba(11,179,182,0.25)]
                      hover:-translate-y-1.5
                      transition-all duration-500 ease-out cursor-pointer"
                  >
                    {/* Top hover gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 z-20
                      bg-gradient-to-r from-primary via-primary-light to-primary
                      scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />

                    {/* Image area */}
                    <div className="relative flex-1 min-h-0 overflow-hidden">
                      <Image
                        src={service.image!}
                        alt={service.title!}
                        fill
                        className="object-cover group-hover:scale-[1.08] transition-transform duration-[1.2s] ease-out"
                        sizes="(max-width: 768px) 80vw, 440px"
                      />
                      {/* Subtle teal wash on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0
                        group-hover:from-primary/10 group-hover:to-navy/20 transition-all duration-500" />
                      {/* Bottom shadow gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

                      {/* Big serif number top-left */}
                      <div className="absolute top-4 left-5 flex items-baseline gap-1">
                        <span className="font-heading italic text-white text-4xl font-bold leading-none drop-shadow-lg">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-white/70 text-[10px] tracking-widest">
                          / {String(originalCount - 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Category tag top-right */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                        backdrop-blur-xl bg-white/15 border border-white/30">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* ── Floating icon badge ── */}
                    <div className="relative px-6">
                      <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl
                        bg-white shadow-[0_10px_30px_-10px_rgba(11,179,182,0.4)]
                        border border-primary/15
                        flex items-center justify-center
                        group-hover:bg-primary group-hover:border-primary
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                      </div>
                    </div>

                    {/* ── Content ── */}
                    <div className="px-5 md:px-6 pt-5 pb-5">
                      {/* Tiny eyebrow */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-px w-5 bg-primary" />
                        <span className="text-primary text-[9px] tracking-[0.25em] uppercase font-semibold">
                          Service · 0{i + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-navy text-xl md:text-[1.5rem] font-bold mb-2 leading-[1.1]
                        group-hover:text-primary-dark transition-colors duration-500">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-navy/60 text-[13px] leading-relaxed mb-3 line-clamp-2">
                        {service.desc}
                      </p>

                      {/* Benefits list */}
                      <ul className="space-y-1 mb-4">
                        {service.benefits!.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-primary/15 border border-primary/25
                              flex items-center justify-center">
                              <Check className="w-2 h-2 text-primary" strokeWidth={3} />
                            </span>
                            <span className="text-navy/70 text-[12px]">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer button */}
                      <div className="flex items-center justify-between pt-3 border-t border-navy/8">
                        <a
                          href="#contact"
                          className="text-navy text-[11px] font-semibold tracking-[0.2em] uppercase
                            group-hover:text-primary transition-colors duration-300"
                        >
                          Book Consultation
                        </a>
                        <div className="w-9 h-9 rounded-full bg-navy
                          flex items-center justify-center
                          group-hover:bg-primary group-hover:scale-110
                          transition-all duration-500">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white
                            group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              } else {
                return (
                  <div
                    key={`copy1-${item.id}`}
                    className="shrink-0 w-[80vw] sm:w-[55vw] md:w-[420px] lg:w-[440px]
                      h-[440px] rounded-[28px] overflow-hidden
                      bg-gradient-to-br from-navy via-navy-dark to-navy
                      relative flex flex-col items-center justify-center p-8 text-center group cursor-pointer
                      shadow-[0_15px_50px_-20px_rgba(40,47,90,0.3)]"
                  >
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/15 blur-2xl" />

                    <Sparkles className="w-8 h-8 text-primary-light mb-5 relative" />
                    <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-3 relative">
                      Need something{" "}
                      <span className="italic bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                        custom?
                      </span>
                    </h3>
                    <p className="text-white/60 text-sm mb-7 leading-relaxed relative max-w-xs">
                      Tell us what your smile needs — we&apos;ll craft a personalized
                      plan together.
                    </p>
                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full
                        bg-white text-navy font-semibold text-sm
                        hover:scale-105 transition-transform duration-300 relative"
                    >
                      <span>Book Consultation</span>
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                );
              }
            })}
          </div>

          {/* Second Copy */}
          <div className="flex gap-5 md:gap-6 pr-5 md:pr-6 shrink-0">
            {originalItems.map((item, i) => {
              if (!item.isCustom) {
                const service = item;
                return (
                  <article
                    key={`copy2-${item.id}`}
                    className="group relative shrink-0 flex flex-col w-[80vw] sm:w-[55vw] md:w-[420px] lg:w-[440px]
                      h-[440px]
                      bg-beige-light rounded-[28px] overflow-hidden
                      border border-navy/[0.06]
                      shadow-[0_20px_60px_-25px_rgba(40,47,90,0.18)]
                      hover:shadow-[0_35px_100px_-25px_rgba(11,179,182,0.25)]
                      hover:-translate-y-1.5
                      transition-all duration-500 ease-out cursor-pointer"
                  >
                    {/* Top hover gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 z-20
                      bg-gradient-to-r from-primary via-primary-light to-primary
                      scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />

                    {/* Image area */}
                    <div className="relative flex-1 min-h-0 overflow-hidden">
                      <Image
                        src={service.image!}
                        alt={service.title!}
                        fill
                        className="object-cover group-hover:scale-[1.08] transition-transform duration-[1.2s] ease-out"
                        sizes="(max-width: 768px) 80vw, 440px"
                      />
                      {/* Subtle teal wash on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0
                        group-hover:from-primary/10 group-hover:to-navy/20 transition-all duration-500" />
                      {/* Bottom shadow gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

                      {/* Big serif number top-left */}
                      <div className="absolute top-4 left-5 flex items-baseline gap-1">
                        <span className="font-heading italic text-white text-4xl font-bold leading-none drop-shadow-lg">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-white/70 text-[10px] tracking-widest">
                          / {String(originalCount - 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Category tag top-right */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                        backdrop-blur-xl bg-white/15 border border-white/30">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* ── Floating icon badge ── */}
                    <div className="relative px-6">
                      <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl
                        bg-white shadow-[0_10px_30px_-10px_rgba(11,179,182,0.4)]
                        border border-primary/15
                        flex items-center justify-center
                        group-hover:bg-primary group-hover:border-primary
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                      </div>
                    </div>

                    {/* ── Content ── */}
                    <div className="px-5 md:px-6 pt-5 pb-5">
                      {/* Tiny eyebrow */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-px w-5 bg-primary" />
                        <span className="text-primary text-[9px] tracking-[0.25em] uppercase font-semibold">
                          Service · 0{i + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-navy text-xl md:text-[1.5rem] font-bold mb-2 leading-[1.1]
                        group-hover:text-primary-dark transition-colors duration-500">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-navy/60 text-[13px] leading-relaxed mb-3 line-clamp-2">
                        {service.desc}
                      </p>

                      {/* Benefits list */}
                      <ul className="space-y-1 mb-4">
                        {service.benefits!.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <span className="shrink-0 w-3.5 h-3.5 rounded-full bg-primary/15 border border-primary/25
                              flex items-center justify-center">
                              <Check className="w-2 h-2 text-primary" strokeWidth={3} />
                            </span>
                            <span className="text-navy/70 text-[12px]">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer button */}
                      <div className="flex items-center justify-between pt-3 border-t border-navy/8">
                        <a
                          href="#contact"
                          className="text-navy text-[11px] font-semibold tracking-[0.2em] uppercase
                            group-hover:text-primary transition-colors duration-300"
                        >
                          Book Consultation
                        </a>
                        <div className="w-9 h-9 rounded-full bg-navy
                          flex items-center justify-center
                          group-hover:bg-primary group-hover:scale-110
                          transition-all duration-500">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white
                            group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              } else {
                return (
                  <div
                    key={`copy2-${item.id}`}
                    className="shrink-0 w-[80vw] sm:w-[55vw] md:w-[420px] lg:w-[440px]
                      h-[440px] rounded-[28px] overflow-hidden
                      bg-gradient-to-br from-navy via-navy-dark to-navy
                      relative flex flex-col items-center justify-center p-8 text-center group cursor-pointer
                      shadow-[0_15px_50px_-20px_rgba(40,47,90,0.3)]"
                  >
                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/15 blur-2xl" />

                    <Sparkles className="w-8 h-8 text-primary-light mb-5 relative" />
                    <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-3 relative">
                      Need something{" "}
                      <span className="italic bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                        custom?
                      </span>
                    </h3>
                    <p className="text-white/60 text-sm mb-7 leading-relaxed relative max-w-xs">
                      Tell us what your smile needs — we&apos;ll craft a personalized
                      plan together.
                    </p>
                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full
                        bg-white text-navy font-semibold text-sm
                        hover:scale-105 transition-transform duration-300 relative"
                    >
                      <span>Book Consultation</span>
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
