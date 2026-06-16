"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Users, Award, ShieldCheck, Heart, ArrowLeft, MessageSquare } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function OurTeamPage() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Our Team" },
  ];

  const team = [
    {
      category: "Patient Care Coordinators",
      desc: "The friendly faces who welcome you, manage scheduling, and help navigate insurance policies.",
      members: [
        { name: "Lisa", role: "Office Manager", credential: "Since 2012" },
        { name: "Maria", role: "Patient Care Coordinator", credential: "Since 2018" },
      ]
    },
    {
      category: "Registered Dental Hygienists",
      desc: "Our preventative care experts, helping you keep your teeth clean and your gums healthy.",
      members: [
        { name: "Sarah", role: "Lead Dental Hygienist", credential: "RDH · Since 2008" },
        { name: "Emily", role: "Registered Dental Hygienist", credential: "RDH · Since 2016" },
      ]
    },
    {
      category: "Clinical Dental Assistants",
      desc: "Working side-by-side with our doctors to ensure procedures are safe, comfortable, and efficient.",
      members: [
        { name: "Jessica", role: "Lead Clinical Assistant", credential: "EFDA · Since 2014" },
        { name: "David", role: "Dental Assistant", credential: "CDA · Since 2021" },
      ]
    }
  ];

  return (
    <main className="bg-white overflow-hidden font-body">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15 mb-4"
              >
                <Users className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/90 text-[9px] tracking-wider uppercase font-semibold">
                  Meet the Staff
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              >
                Our Dental Team
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-light font-medium tracking-wide uppercase text-sm"
              >
                Same familiar faces, committed to your family&apos;s comfort
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Unwavering Consistency</span>
          </div>
          <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">
            Southampton&apos;s Trusted Care Team
          </h2>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed">
            A dental practice is only as strong as the hands that support it. We are incredibly proud to keep the exact same staff from Brenner Dental Group. Our patient care coordinators, clinical assistants, and registered hygienists have worked together for years. They know our patients by name, understand their histories, and work tirelessly to ensure a stress-free experience.
          </p>
        </div>
      </section>

      {/* ─── Team Categories ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="space-y-16">
            {team.map((cat, catIdx) => (
              <div key={cat.category} className="space-y-8">
                <div className="border-b border-navy/10 pb-4">
                  <h3 className="font-heading text-navy text-2xl font-bold">{cat.category}</h3>
                  <p className="text-navy/55 text-xs mt-1">{cat.desc}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.members.map((member, memberIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: memberIdx * 0.1 }}
                      className="group bg-white rounded-2xl p-6 border border-navy/5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Placeholder Avatar */}
                      <div className="w-16 h-16 rounded-xl bg-beige-light flex items-center justify-center shrink-0 border border-navy/[0.04]">
                        <Users className="w-6 h-6 text-navy/40 group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div>
                        <h4 className="font-heading text-navy text-lg font-bold">{member.name}</h4>
                        <p className="text-primary text-xs font-semibold">{member.role}</p>
                        <p className="text-navy/40 text-[10px] mt-0.5 font-mono">{member.credential}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outro Note ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[700px] mx-auto px-5 text-center bg-beige-light/25 border border-navy/[0.04] p-8 rounded-3xl space-y-4">
          <MessageSquare className="w-6 h-6 text-primary mx-auto" />
          <h4 className="font-heading text-navy text-lg font-bold">More Team Details Coming Soon</h4>
          <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
            We are currently gathering updated bios and professional photos for our staff. Once finalized, this directory will be updated with portraits and full details for every team member.
          </p>
        </div>
      </section>
    </main>
  );
}
