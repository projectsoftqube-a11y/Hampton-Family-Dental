"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Heart, ShieldCheck, Activity, Coffee, Smile, Compass, Clock } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";

export default function WhyChooseUsPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Why Choose Us" },
  ];

  const corePillars = [
    {
      icon: Heart,
      title: "Patient-Centered Comfort",
      desc: "We prioritize your comfort at every step, offering warm dental chairs, a relaxing lounge, and custom desensitizing techniques.",
    },
    {
      icon: ShieldCheck,
      title: "Honest, Transparent Treatment",
      desc: "No double bookings, no hidden fees, and zero upsells. We only recommend procedures that you genuinely need for your health.",
    },
    {
      icon: Activity,
      title: "Advanced 3D Technology",
      desc: "Our clinic is equipped with a Cone Beam CT (CBCT) 3D scanner, digital diagnostic x-rays, and customized Perio gum therapy.",
    },
    {
      icon: Smile,
      title: "Same Familiar Staff",
      desc: "You will always see the same friendly coordinators and hygienists from Brenner Dental Group, providing consistent clinical care.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
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
                  Our Philosophy
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              The Hampton Family{" "}
              <span className="italic font-normal bg-gradient-to-r from-primary-light via-primary to-primary-light bg-clip-text text-transparent">
                Difference.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Discover why hundreds of families in Southampton and surrounding Bucks County choose Hampton Family Dental as their trusted oral care home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Pillars Grid Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Standard of Excellence</span>
            <h2 className="font-heading text-navy text-3xl font-bold mt-2">Our Four Core Commitments</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-navy text-xl font-bold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Patient Experience Strip ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-navy/5 bg-beige-light/30">
              <Image
                src="/images/clinic_interior_1779858062605.webp"
                alt="Comfortable clinical room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Coffee className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Patient Comfort</span>
              </div>
              
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                Designed to Eliminate Dental Anxiety
              </h2>
              
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                We know that visiting the dentist is stressful for many patients. That is why we designed our Southampton suite to feel like a comfortable home, not a sterile clinic. Enjoy complimentary hot beverages in our lounge, listen to your favorite music during treatment, and benefit from our highly gentle clinical techniques.
              </p>
              
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                Whether you are coming in for a simple teeth cleaning or undergo complex surgical implant placements, Dr. Brenner, Dr. Dudhat, and our staff prioritize your peace of mind above all else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABlock />
    </main>
  );
}
