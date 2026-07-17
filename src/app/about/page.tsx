"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart, Users, Star, ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function AboutHubPage() {
  const cards = [
    {
      icon: Heart,
      title: "Our Story",
      desc: "Learn about our roots in the Southampton community and our transition from Brenner Dental Group.",
      href: "/about/our-story",
      cta: "Read Our Story",
    },
    {
      icon: Star,
      title: "Patient Reviews",
      desc: "Read real stories and experiences from generations of local families who trust our care.",
      href: "/about/patient-reviews",
      cta: "Read Reviews",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-navy-dark text-white">
        {/* Background blobs */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          
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
                  Get to Know Us
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
              A Legacy of Trust,{" "}
              <span className="italic font-normal bg-gradient-to-r from-steel-light via-steel to-steel-light bg-clip-text text-transparent">
                A Future of Care.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Hampton Family Dental proudly continues the legacy of Brenner Dental Group. Same exceptional team, same convenient Southampton location, with an expanded vision for modern family dentistry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Story Summary / Transition ─── */}
      <section className="py-20 md:py-24 bg-beige-light/30 relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-navy/5"
            >
              <Image
                src="/images/reception_area_1779858343255.webp"
                alt="Hampton Family Dental office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">
                  Our Transition
                </span>
              </div>
              <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                Same Dedicated Team, Brand-New Chapter
              </h2>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                When Dr. Jeffrey Brenner founded our practice in Southampton, he envisioned a clinic where patients felt like extended family. Today, as we transition to Hampton Family Dental alongside our new partner Dr. Keyur Dudhat, that core vision remains stronger than ever.
              </p>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                You will find the very same familiar faces at our front desk and in the clinical chairs. We have updated our facilities to offer state-of-the-art diagnostic imaging and modern patient comfort, ensuring our next chapter is our best yet.
              </p>
              <div className="pt-2">
                <Link
                  href="/about/our-story"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                >
                  Learn more about our transition story
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Meet the Doctors Section ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
              Expert Clinical Leadership
            </span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2 mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-navy/60 text-sm">
              Our clinical leaders bring decades of combined experience, academic credentials, and a philosophy centered around compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {/* Dr. Brenner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col items-center text-center bg-beige-light/15 rounded-3xl p-8 border border-navy/[0.04] shadow-md"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <Image
                  src="/images/dentist_portrait_1779858109259.webp"
                  alt="Dr. Jeffrey Brenner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 mb-1 bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                <Award className="w-3 h-3 text-primary" />
                <span className="text-[9px] tracking-wider uppercase text-primary font-bold">Founder</span>
              </div>
              <h3 className="font-heading text-navy text-2xl font-bold mb-1">
                Dr. Jeffrey Brenner
              </h3>
              <p className="text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                DMD · General Dentist & Founder
              </p>
              <p className="text-navy/60 text-xs leading-relaxed mb-6 max-w-xs">
                Southampton&apos;s trusted family dentist since 1995. Dedicated to stress-free dental care for all ages.
              </p>
              <Link
                href="/about/dr-jeffrey-brenner"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-colors duration-300"
              >
                Read Professional Bio
              </Link>
            </motion.div>

            {/* Dr. Dudhat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex flex-col items-center text-center bg-beige-light/15 rounded-3xl p-8 border border-navy/[0.04] shadow-md"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <Image
                  src="/doctor-avatar.png"
                  alt="Dr. Keyur Dudhat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 mb-1 bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[9px] tracking-wider uppercase text-primary font-bold">Partner</span>
              </div>
              <h3 className="font-heading text-navy text-2xl font-bold mb-1">
                Dr. Keyur Dudhat
              </h3>
              <p className="text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                DMD · General & Cosmetic Partner
              </p>
              <p className="text-navy/60 text-xs leading-relaxed mb-6 max-w-xs">
                Bringing modern diagnostic technology and advanced aesthetic treatments to Southampton families.
              </p>
              <Link
                href="/about/dr-keyur-dudhat"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-colors duration-300"
              >
                Read Professional Bio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Grid Cards Section (Story, Team, Reviews) ─── */}
      <section className="py-20 bg-beige-light/30">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col justify-between bg-white rounded-2xl p-8 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-navy text-xl font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-navy/60 text-xs leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    href={card.href}
                    className="group/btn inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-primary-dark transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-navy-dark text-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
        <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto text-center px-5 space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
            Schedule Your Visit Today
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Experience the family-friendly care, custom membership plans, and modern dental treatments at Southampton&apos;s choice dental provider.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/patient-information/scheduling"
              className="px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+12153572224"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
            >
              Call (215) 357-2224
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
