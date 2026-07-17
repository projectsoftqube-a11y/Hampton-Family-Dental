"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  Smile,
  SmilePlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";
import FAQBlock from "@/components/shared/FAQBlock";

interface FAQItem {
  q: string;
  a: string;
}

interface GeneralDentistryHubContentProps {
  faqs: FAQItem[];
  schemaFaqs: FAQItem[];
}

const textLinkClass =
  "font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary";

export default function GeneralDentistryHubContent({
  faqs,
  schemaFaqs,
}: GeneralDentistryHubContentProps) {
  const services = [
    {
      icon: Smile,
      title: "Oral Hygiene",
      desc: "Professional teeth cleanings, plaque removal, and patient education to keep your gums healthy.",
      href: "/general-dentistry/oral-hygiene",
    },
    {
      icon: Stethoscope,
      title: "Dental Checkups & X-Rays",
      desc: "Comprehensive exams combined with digital x-rays to catch and treat oral health issues early.",
      href: "/general-dentistry/checkups-and-x-rays",
    },
    {
      icon: ShieldAlert,
      title: "Emergency Dentistry",
      desc: "Same-day urgent dental appointments for acute toothaches, chipped teeth, and trauma.",
      href: "/general-dentistry/emergency-dentistry",
    },
    {
      icon: SmilePlus,
      title: "Tooth Extraction",
      desc: "Safe, pain-free tooth removals, including wisdom teeth extractions, done under local anesthetic.",
      href: "/general-dentistry/tooth-extraction",
    },
    {
      icon: HelpCircle,
      title: "Oral Cancer Screening",
      desc: "Routine, non-invasive digital screening exams to check for early clinical signs of oral tissue changes.",
      href: "/general-dentistry/oral-cancer-screening",
    },
    {
      icon: Activity,
      title: "Perio Protect",
      desc: "Modern, non-invasive custom tray therapy to treat early to advanced gum disease at home.",
      href: "/general-dentistry/perio-protect",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs
            items={[{ label: "General Dentistry", href: "/general-dentistry" }]}
          />

          <div className="max-w-3xl mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Preventive Care
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.45rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              General & Preventive Dentistry in{" "}
              <span className="italic font-normal bg-gradient-to-r from-steel-light via-steel to-steel-light bg-clip-text text-transparent">
                Southampton, PA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Protect your family&apos;s oral health with our comprehensive general and preventive services. From routine cleanings to same-day emergency support, we keep Southampton smiling.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Intro Copy ─── */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="space-y-5 text-navy/70 text-sm md:text-base leading-relaxed">
            <p>
              At Hampton Family Dental — formerly Brenner Dental Group — general dentistry is the foundation of every healthy smile. Our preventive and general services keep your teeth and gums healthy at every age, from your child’s first checkup to lifelong adult care, all in one welcoming Southampton, PA office.
            </p>
            <p>
              Routine cleanings, comprehensive exams, and digital X-rays catch small problems before they become painful or expensive — and when something urgent comes up, our{" "}
              <Link
                href="/general-dentistry/emergency-dentistry"
                className={textLinkClass}
              >
                same-day emergency care
              </Link>{" "}
              is here for you. Explore our general services below, and call us at (215) 357-2224 to schedule your next visit.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services Grid Section ─── */}
      <section className="py-16 md:py-20 bg-beige-light/20">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col justify-between bg-white rounded-3xl p-8 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-350">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-navy text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-navy/60 text-xs md:text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                  >
                    Explore Service
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Preventive Care Body Block ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1080px] mx-auto px-5 md:px-10">
          <div className="bg-navy-dark text-white rounded-3xl p-7 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-[-40%] right-[-8%] w-[300px] h-[300px] rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-primary-light text-[10px] tracking-[0.22em] uppercase font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Preventive Dentistry
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                  Why Preventive Dentistry Matters
                </h2>
              </div>
              <div className="space-y-5 text-white/75 text-sm md:text-base leading-relaxed">
                <p>
                  Preventive dentistry is the simplest way to avoid bigger dental problems down the road. Seeing your dentist regularly lets us remove the plaque and tartar that brushing can’t reach, spot early signs of decay or gum disease, and screen for oral cancer — all before they cause pain or need costly treatment.
                </p>
                <p>
                  For most patients, a checkup and cleaning every six months is the right rhythm, though some people benefit from more frequent visits. Each visit includes a thorough exam,{" "}
                  <Link
                    href="/general-dentistry/oral-hygiene"
                    className="font-semibold text-primary-light underline decoration-primary-light/40 underline-offset-4 hover:text-white"
                  >
                    professional cleaning
                  </Link>
                  ,{" "}
                  <Link
                    href="/general-dentistry/checkups-and-x-rays"
                    className="font-semibold text-primary-light underline decoration-primary-light/40 underline-offset-4 hover:text-white"
                  >
                    digital X-rays
                  </Link>{" "}
                  when needed, and a personalized plan to keep your smile healthy between appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── In-House Plan Promo Box ─── */}
      <section className="py-16 bg-beige-light/20 border-y border-navy/5">
        <div className="max-w-[1000px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">
              Affordable Care
            </span>
          </div>
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">
            No Insurance? Save on General Services
          </h2>
          <p className="text-navy/70 text-sm leading-relaxed max-w-xl mx-auto">
            Our custom in-house dental membership plans include all routine checkups, cleanings, and diagnostic X-rays for a low yearly fee, plus 15% off all restorative treatments.
          </p>
          <div className="pt-2">
            <Link
              href="/specials"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-all duration-300"
            >
              View Membership Details
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ Block ─── */}
      <FAQBlock
        faqs={faqs}
        schemaFaqs={schemaFaqs}
        title="General Dentistry in Southampton — FAQs"
        subtitle=""
      />

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
