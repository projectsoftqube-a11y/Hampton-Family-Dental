"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Gentle, judgement-free dentistry for every patient at every visit.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    desc: "Precision treatments powered by the latest dental innovations.",
  },
  {
    icon: Users,
    title: "Family-First Philosophy",
    desc: "Personalized plans for every age — from toddlers to grandparents.",
  },
  {
    icon: ShieldCheck,
    title: "Calming Environment",
    desc: "A spa-like setting designed to make every visit truly relaxing.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-8%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-navy/[0.05] blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* Section eyebrow + headline (top, centered) */}
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary/15 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Our Story
              </span>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Meet Your Southampton{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Dentists
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-navy/60 mt-6 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)" }}
          >
            For over two decades, we&apos;ve been crafting beautiful, healthy
            smiles with a blend of artistry, advanced technology, and genuine
            care that makes you feel right at home.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ──── LEFT — Image Collage ──── */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 self-start">
            {/* Decorative teal frame behind main image */}
            <div className="absolute -inset-3 md:-inset-4 rounded-[2.2rem] border border-primary/20 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl -z-10" />

            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow-lg"
            >
              <Image
                src="/images/about_storytelling_1779858491119.webp"
                alt="Our compassionate dental team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Soft top gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />

              {/* Floating top-left small chip */}
              <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-navy text-[10px] tracking-widest uppercase font-semibold">
                  Now Welcoming
                </span>
              </div>
            </motion.div>

            {/* Overlapping inset image */}
            <motion.div
              style={{ y: image2Y }}
              className="absolute -bottom-10 -right-6 md:-right-10 w-[58%] aspect-[5/4] rounded-2xl overflow-hidden
                ring-[6px] ring-white premium-shadow hidden sm:block"
            >
              <Image
                src="/images/clinic_interior_1779858062605.webp"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
                sizes="280px"
              />
            </motion.div>

            {/* 20+ Years badge — repositioned, with rings */}
            <motion.div
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-6 -left-6 z-10"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-dark premium-shadow" />
                <div className="absolute inset-2 rounded-full border border-white/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="font-heading text-3xl md:text-4xl font-bold leading-none">
                    20+
                  </span>
                  <span className="text-[9px] tracking-[0.25em] uppercase mt-1 text-white/90 font-semibold">
                    Years
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ──── RIGHT — Content ──── */}
          <div className="lg:col-span-7 space-y-10">
            {/* Numbered Values list */}
            <div className="space-y-3">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                  className="group relative pl-4"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-primary/15 group-hover:bg-primary transition-colors duration-500" />

                  <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-navy/[0.04]
                    hover:bg-white hover:border-primary/15 hover:shadow-[0_10px_40px_-10px_rgba(40,47,90,0.15)]
                    hover:translate-x-1 transition-all duration-500">

                    {/* Index number */}
                    <div className="shrink-0 flex flex-col items-center">
                      <span className="font-mono text-primary text-[10px] tabular-nums mb-1">
                        0{i + 1}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15
                        flex items-center justify-center
                        group-hover:bg-primary group-hover:border-primary
                        transition-all duration-500">
                        <value.icon className="w-[18px] h-[18px] text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-navy text-lg md:text-xl font-bold mb-1 group-hover:text-primary-dark transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-navy/60 text-sm md:text-[0.95rem] leading-relaxed">
                        {value.desc}
                      </p>
                    </div>

                    <ArrowUpRight className="shrink-0 w-4 h-4 text-navy/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Meet Our Dentists Block ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative overflow-hidden rounded-[1.75rem] bg-white
                p-7 md:p-9 premium-shadow-lg border border-primary/10"
            >
              {/* Soft decorative orbs */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/6 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Meet Our Dentists
                  </span>
                </div>

                <p className="font-heading text-navy text-lg md:text-xl leading-snug mb-7 max-w-2xl italic"
                   style={{ letterSpacing: "-0.01em" }}>
                  Dr. Jeffrey Brenner and Dr. Keyur Dudhat lead Hampton Family
                  Dental with gentle, modern care for Southampton families.
                </p>

                {/* Two doctor cards side-by-side */}
                <div className="grid sm:grid-cols-2 gap-4 pt-5 border-t border-navy/8">
                  {/* Dr. Jeffrey Brenner */}
                  <Link
                    href="/about/dr-jeffrey-brenner"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/[0.04] transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0">
                      <Image
                        src="/images/dentist_portrait_1779858109259.webp"
                        alt="Dr. Jeffrey Brenner"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-navy text-sm group-hover:text-primary transition-colors">
                        Dr. Jeffrey Brenner
                      </p>
                      <p className="text-navy/50 text-xs">
                        Founding dentist · Formerly Brenner Dental Group
                      </p>
                      <p className="text-primary text-[10px] mt-1 font-semibold tracking-wider uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Meet Dr. Brenner <ArrowUpRight className="w-3 h-3" />
                      </p>
                    </div>
                  </Link>

                  {/* Dr. Keyur Dudhat */}
                  <Link
                    href="/about/dr-keyur-dudhat"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/[0.04] transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0 bg-navy/5 flex items-center justify-center">
                      <Image
                        src="/images/dr_keyur_dudhat_portrait.png"
                        alt="Dr. Keyur Dudhat"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-navy text-sm group-hover:text-primary transition-colors">
                        Dr. Keyur Dudhat
                      </p>
                      <p className="text-navy/50 text-xs">
                        Restorative & Cosmetic Dentist
                      </p>
                      <p className="text-primary text-[10px] mt-1 font-semibold tracking-wider uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Meet Dr. Dudhat <ArrowUpRight className="w-3 h-3" />
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
