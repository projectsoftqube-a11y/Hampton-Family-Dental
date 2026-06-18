"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, Phone, Award, BookOpen, Heart, GraduationCap, ArrowLeft, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { absoluteUrl } from "@/lib/site";

export default function DrBrennerBioPage() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Dr. Jeffrey Brenner" },
  ];

  // Injected Person schema for local SEO
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Jeffrey Brenner, DMD",
    "jobTitle": "Dentist",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Hampton Family Dental",
      "alternateName": "Brenner Dental Group"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Temple University School of Dentistry"
    },
    "knowsAbout": [
      "Family Dentistry",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Dental Crowns",
      "Preventive Dentistry"
    ],
    "image": absoluteUrl("/images/dentist_portrait_1779858109259.webp"),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "283 Second Street Pike, Suite 140",
      "addressLocality": "Southampton",
      "addressRegion": "PA",
      "postalCode": "18966",
      "addressCountry": "US"
    },
    "telephone": "+12153572224"
  };

  return (
    <main className="bg-white overflow-hidden font-body">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

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
                <Award className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/90 text-[9px] tracking-wider uppercase font-semibold">
                  Founding Dentist
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              >
                Dr. Jeffrey Brenner, DMD
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-light font-medium tracking-wide uppercase text-sm"
              >
                Southampton&apos;s Dentist Since 1995 · Founder of Brenner Dental Group
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

      {/* ─── Profile Content ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Photo & Quick Facts */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-square md:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-navy/5 bg-beige-light/30"
              >
                <Image
                  src="/images/dentist_portrait_1779858109259.webp"
                  alt="Dr. Jeffrey Brenner, DMD"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </motion.div>

              {/* Quick Facts Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-beige-light/25 border border-navy/[0.04] rounded-3xl p-6 shadow-md"
              >
                <h3 className="font-heading text-navy text-lg font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Quick Credentials
                </h3>
                
                <ul className="space-y-4 text-xs">
                  <li className="border-b border-navy/5 pb-3">
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Education</p>
                    <p className="text-navy font-semibold">Doctor of Dental Medicine (DMD)</p>
                    <p className="text-navy/70">Temple University School of Dentistry (1992)</p>
                  </li>
                  <li className="border-b border-navy/5 pb-3">
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Years in Practice</p>
                    <p className="text-navy font-semibold">30+ Years of Experience</p>
                    <p className="text-navy/70">Southampton Resident Dentist since 1995</p>
                  </li>
                  <li className="border-b border-navy/5 pb-3">
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Specialties</p>
                    <p className="text-navy font-semibold">Family, Cosmetic & Implant Care</p>
                    <p className="text-navy/70">Restorative procedures, Crown works, Preventive hygiene</p>
                  </li>
                  <li>
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Professional Memberships</p>
                    <p className="text-navy font-semibold">ADA & PDA Member</p>
                    <p className="text-navy/70">American Dental Association, Pennsylvania Dental Association</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column: Bio & Philosophy */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Biography</span>
                </div>
                <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Over Three Decades of Beautiful, Healthy Smiles
                </h2>
                
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  For over 30 years, Dr. Jeffrey Brenner has dedicated himself to the art and science of dentistry. After graduating from Temple University School of Dentistry in 1992, Dr. Brenner opened his clinical doors with a clear focus: to provide premium, long-term, and comprehensive dental health services in a setting that feels warm and supportive.
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  In 1995, he established Brenner Dental Group in Southampton, PA. Since then, he has served multiple generations of local families, performing thousands of treatments spanning preventive care, teeth restorations, dental implant placements, and customized cosmetic smile improvements. 
                </p>
              </motion.div>

              {/* Philosophy & Vision Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-navy-dark text-white rounded-3xl p-8 relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px]" />
                
                <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-primary-light" />
                  My Philosophy of Care
                </h3>
                
                <blockquote className="italic text-white/90 text-sm md:text-base leading-relaxed mb-4">
                  &ldquo;Dentistry is not just about clinical precision; it is about building deep, lasting relationships. I want our patients to know they are in safe hands, that their comfort is our primary priority, and that we will never recommend a procedure they do not truly need. It is this trust that has sustained our practice for over 25 years.&rdquo;
                </blockquote>
                
                <cite className="block text-primary-light text-xs font-semibold tracking-wider uppercase font-body">
                  — Dr. Jeffrey Brenner, DMD
                </cite>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="font-heading text-navy text-2xl font-bold">
                  The Transition to Hampton Family Dental
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  As our practice grew, I recognized the opportunity to expand our services and incorporate the latest modern diagnostic tools without losing the personal touch that defines us. Transitioning our name to Hampton Family Dental alongside my partner Dr. Keyur Dudhat is a reflection of this commitment. 
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Rest assured, the same dedicated hygienists and front desk coordinators are right here to welcome you. Under the new banner, we are excited to deliver even more advanced dental implant solutions, cosmetic smile designs, and expanded scheduling options to our community.
                </p>
              </motion.div>

              {/* Personal Life */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="border-t border-navy/10 pt-6 space-y-3"
              >
                <h4 className="font-heading text-navy font-bold text-lg">Outside the Office</h4>
                <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                  Dr. Brenner is a devoted husband and father of two sons. When he is not caring for patients in Southampton, he enjoys spending time outdoors, supporting local high school athletics, and volunteering with community wellness programs.
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ─── Contact & Scheduling CTA Block ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30 relative">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center space-y-6">
          <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
            Schedule a Consultation with Dr. Brenner
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Whether you need a routine checkup, cosmetic advice, or are exploring dental implant options, Dr. Brenner is ready to sit down and build a customized oral health roadmap with you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
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
