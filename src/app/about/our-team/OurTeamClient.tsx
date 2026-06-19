"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, ShieldCheck, Heart, ArrowLeft, Calendar, Phone } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function OurTeamClient() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/our-team" },
  ];

  const categories = [
    {
      category: "Patient Care Coordinators",
      desc: "The friendly faces who welcome you, manage scheduling, and help navigate insurance policies.",
      members: [
        {
          name: "Lisa",
          role: "Office Manager",
          credential: "Since 2012",
          bio: "Lisa has managed dental offices in Bucks County for over a decade. She coordinates the daily operations of our practice, ensuring that patients receive timely care. Lisa specializes in helping patients understand their insurance coverage, helping families maximize their benefits, and setting up flexible payment plans so that high-quality dental care remains affordable for everyone."
        },
        {
          name: "Maria",
          role: "Patient Care Coordinator",
          credential: "Since 2018",
          bio: "Maria is the first friendly face you see when you visit us. With a background in customer relations, she manages our scheduling desk, helping patients secure appointments that fit their busy lives. She enjoys greeting every long-time patient by name and welcoming new families to our growing dental community."
        },
      ]
    },
    {
      category: "Registered Dental Hygienists",
      desc: "Our preventative care experts, helping you keep your teeth clean and your gums healthy.",
      members: [
        {
          name: "Sarah",
          role: "Lead Dental Hygienist",
          credential: "RDH · Since 2008",
          bio: "Sarah holds an associate degree in dental hygiene and has dedicated her career to preventative care. She is passionate about educating patients on the link between oral health and systemic wellness. Sarah is known for her meticulous yet gentle cleanings and her expertise in advanced periodontal therapy to treat and prevent gum disease."
        },
        {
          name: "Emily",
          role: "Registered Dental Hygienist",
          credential: "RDH · Since 2016",
          bio: "Emily brings a warm, compassionate approach to our hygiene department. She is particularly skilled at calming patients who experience dental anxiety, making their cleanings a positive, stress-free experience. Emily loves working with patients of all ages, teaching children how to establish healthy habits that last a lifetime."
        },
      ]
    },
    {
      category: "Clinical Dental Assistants",
      desc: "Working side-by-side with our doctors to ensure procedures are safe, comfortable, and efficient.",
      members: [
        {
          name: "Jessica",
          role: "Lead Clinical Assistant",
          credential: "EFDA · Since 2014",
          bio: "As an Expanded Function Dental Assistant, Jessica works side-by-side with our dentists during complex restorative and cosmetic procedures. She is highly trained in dental technology and certified in placing dental fillings, taking digital impressions, and helping guide patients through their treatment plans with comfort and ease."
        },
        {
          name: "David",
          role: "Dental Assistant",
          credential: "CDA · Since 2021",
          bio: "David supports our clinical team by preparing treatment rooms, managing sterilization protocols, and ensuring that all clinical processes run smoothly. Patients appreciate his calm demeanor and attentiveness, as he makes sure every patient has everything they need for a comfortable visit."
        },
      ]
    }
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
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
                Meet Our Team
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
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[900px] mx-auto px-5 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Unwavering Consistency</span>
          </div>
          <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold">
            Southampton&apos;s Trusted Care Team
          </h2>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Behind every great visit is a great team. Our hygienists and front-office staff are the friendly faces who make your care comfortable, from your warm welcome to your gentle cleaning. If you are looking for a caring, experienced dental team southampton pa families trust, the staff at Hampton Family Dental is ready to welcome you.
          </p>
          <p className="text-navy/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            A dental practice is only as strong as the hands that support it. We are proud to retain the exact same experienced staff that served you under Brenner Dental Group. Our coordinators, assistants, and registered hygienists have worked together for years. They know our patients by name, understand their histories, and work tirelessly to ensure a stress-free experience.
          </p>
        </div>
      </section>

      {/* ─── Team Categories ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-y border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="space-y-20">
            {categories.map((cat, catIdx) => (
              <div key={cat.category} className="space-y-8">
                <div className="border-b border-navy/10 pb-4">
                  <h3 className="font-heading text-navy text-2xl font-bold">{cat.category}</h3>
                  <p className="text-navy/55 text-xs md:text-sm mt-1">{cat.desc}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {cat.members.map((member, memberIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: memberIdx * 0.1 }}
                      className="group bg-white rounded-3xl p-8 border border-navy/5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-beige-light flex items-center justify-center shrink-0 border border-navy/[0.04]">
                            <Users className="w-6 h-6 text-navy/40 group-hover:text-primary transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-heading text-navy text-xl font-bold">{member.name}</h4>
                            <p className="text-primary text-xs font-semibold">{member.role}</p>
                            <p className="text-navy/40 text-[9px] mt-0.5 font-mono uppercase tracking-wider">{member.credential}</p>
                          </div>
                        </div>
                        <p className="text-navy/70 text-xs md:text-sm leading-relaxed pt-2">
                          {member.bio}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact & Scheduling CTA Block ─── */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Schedule Today</span>
          </div>
          <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
            Come Meet Us in Person
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Ready to experience patient-first care from our friendly staff? Book your appointment or consultation today and let us help you achieve your healthiest smile.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <a
              href="tel:+12153572224"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/15 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call (215) 357-2224
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
