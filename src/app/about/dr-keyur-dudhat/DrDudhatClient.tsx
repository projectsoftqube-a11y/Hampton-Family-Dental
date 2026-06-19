"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowLeft,
  GraduationCap,
  Heart,
  BookOpen,
  Calendar,
  Phone,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function DrDudhatClient() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Dr. Keyur Dudhat", href: "/about/dr-keyur-dudhat" },
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
                <Sparkles className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/90 text-[9px] tracking-wider uppercase font-semibold">
                  Partner Dentist
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              >
                Dr. Keyur Dudhat, DMD
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-light font-medium tracking-wide uppercase text-sm"
              >
                Expert in Advanced Cosmetic & Implant Dentistry
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
                  src="/images/dr_keyur_dudhat_portrait.png"
                  alt="Dr. Keyur Dudhat, DMD"
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
                    <p className="text-navy/70">Temple University School of Dentistry</p>
                    <p className="text-navy/50 text-[10px] mt-0.5">Undergraduate: Penn State University</p>
                  </li>
                  <li className="border-b border-navy/5 pb-3">
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Key Focus Areas</p>
                    <p className="text-navy font-semibold">Advanced Cosmetic & Oral Restorations</p>
                    <p className="text-navy/70">Full smile design, Invisalign, Dental implants</p>
                  </li>
                  <li className="border-b border-navy/5 pb-3">
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Specialized Technology</p>
                    <p className="text-navy font-semibold">3D Cone Beam & Facial Imaging</p>
                    <p className="text-navy/70">RayFace scanners, CBCT diagnostic mapping</p>
                  </li>
                  <li>
                    <p className="text-navy/40 font-bold uppercase tracking-wider text-[9px] mb-0.5">Community Engagement</p>
                    <p className="text-navy font-semibold">Missions of Mercy Volunteer</p>
                    <p className="text-navy/70">Providing free dental support for underserved PA populations</p>
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
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Biography</span>
                </div>
                <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
                  Combining Advanced Modern Science with Compassionate Care
                </h2>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Dr. Keyur Dudhat is dedicated to delivering next-generation dental care that is gentle, accurate, and customized. Having completed his undergraduate studies at Penn State University, Dr. Dudhat went on to earn his Doctor of Dental Medicine (DMD) degree from the Temple University School of Dentistry. Since graduation, he has continually pursued advanced training and clinical education in some of the most rapidly evolving fields of oral health, ensuring his patients receive the highest standard of modern care.
                </p>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  As the partnering clinician at Hampton Family Dental, Dr. Dudhat leads our advanced technology integration, ensuring the practice stays at the forefront of modern dentistry. His practice focuses heavily on state-of-the-art diagnostics, incorporating 3D Cone Beam Computed Tomography (CBCT) and RayFace facial scanning. The RayFace scanner is a breakthrough in digital dentistry, capturing high-resolution 3D records of a patient’s unique facial dimensions in a single click. These advanced tools allow him to plan complex dental implant restorations and comprehensive smile makeovers with sub-millimeter precision. Rather than relying on traditional physical molds and subjective visual planning, Dr. Dudhat uses these digital records to simulate surgical outcomes before treatment ever begins, significantly reducing chair time, improving restoration fit, and accelerating recovery.
                </p>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  His clinical focus centers on advanced restorative procedures, with a particular expertise in planning and executing comprehensive [dental implants](/restorative-dentistry/dental-implants) to replace missing teeth, restore oral structure, and prevent long-term bone loss. In addition to implantology, Dr. Dudhat is highly regarded for his personalized approach to [cosmetic dentistry](/cosmetic-dentistry). Whether designing porcelain veneers, planning clear aligners (such as Invisalign and ClearCorrect), or performing conservative dental bonding, he works closely with patients to create harmonious, natural-looking smile plans that complement their facial features. For patients looking for a modern cosmetic dentist, searching for dr keyur dudhat southampton will connect them to a practice where digital scanning, facial aesthetics, and dental craftsmanship are combined to deliver beautiful, predictable outcomes.
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
                  Advanced Technology, Better Patient Experiences
                </h3>

                <blockquote className="italic text-white/90 text-sm md:text-base leading-relaxed mb-4">
                  &ldquo;A visual and diagnostic standard shouldn&apos;t just be about high-resolution imaging; it should be about minimal discomfort, rapid recovery, and predictable cosmetic results. In using advanced digital guides, we are able to take the guesswork out of complex restorations, making dentistry safer and far more comfortable for our patients.&rdquo;
                </blockquote>

                <cite className="block text-primary-light text-xs font-semibold tracking-wider uppercase font-body">
                  — Dr. Keyur Dudhat, DMD
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
                  Community-Oriented Dental Care
                </h3>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Dr. Dudhat believes that dental care is a fundamental component of general health that should be accessible to all. He is a passionate advocate of community outreach, frequently participating as a volunteer dentist in the **Missions of Mercy in Pennsylvania** (MOM-n-PA). Through this program, he joins hundreds of healthcare professionals in setting up mobile clinics to offer free dental checkups, fillings, extractions, and cleanings to local underserved populations. For Dr. Dudhat, volunteering is not just a civic duty but a core clinical value, helping to restore confidence and alleviate dental pain for those who need it most.
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  His partnership with Dr. Jeffrey Brenner at Hampton Family Dental combines Dr. Brenner&apos;s 25-year history of local patient trust with Dr. Dudhat&apos;s passion for clinical technology and cosmetic therapies, offering a perfect marriage of legacy and modern vision. You can read more about how their shared values shaped the practice in [our story](/about/our-story).
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  To remain at the forefront of his field, Dr. Dudhat regularly participates in advanced continuing education. He maintains active memberships in several professional organizations, including the American Dental Association (ADA) and the Pennsylvania Dental Association (PDA), collaborating with peers to integrate the safest, most effective dental techniques into his daily practice.
                </p>
              </motion.div>

              {/* Outside the Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="border-t border-navy/10 pt-6 space-y-3"
              >
                <h4 className="font-heading text-navy font-bold text-lg">Personal Interests</h4>
                <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                  Outside his clinical operations, Dr. Dudhat is an avid traveler and outdoor enthusiast. He enjoys hiking throughout Pennsylvania&apos;s state parks (including local favorites like Tyler State Park), reading up on the latest bio-engineering and digital dentistry trends, and spending quality time with family and friends.
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
            Schedule an Aesthetic Consultation with Dr. Dudhat
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Interested in Invisalign, clear aligners, dental implants, or a custom cosmetic smile evaluation? Schedule a one-on-one session to explore what modern technology can do for your smile.
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
