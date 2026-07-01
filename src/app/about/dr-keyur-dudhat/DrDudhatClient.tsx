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
                  src="/doctor-avatar.png"
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
                    <p className="text-navy/70">CBCT diagnostic mapping</p>
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
                  Dr. Keyur Dudhat is committed to providing modern, patient-centered dentistry that combines advanced technology with compassionate, personalized care. After completing his undergraduate studies at Penn State University, he earned his Doctor of Dental Medicine (DMD) degree from the Temple University Kornberg School of Dentistry. Since then, he has dedicated himself to continuing education in implant dentistry, cosmetic dentistry, digital treatment planning, and complex restorative care to ensure his patients benefit from the latest advancements in the field.
                </p>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  One of Dr. Dudhat's greatest passions is dental implant treatment. He believes patients deserve the convenience and confidence of receiving comprehensive implant care in one familiar office whenever possible. Whether replacing a single missing tooth, restoring multiple teeth, or rebuilding an entire smile with full-arch implant solutions, Dr. Dudhat develops customized treatment plans designed for long-term function, comfort, and natural aesthetics. By offering advanced implant procedures in-house, Hampton Family Dental is able to provide a more seamless experience while minimizing the need for referrals to outside specialists.
                </p>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  To support this level of care, Dr. Dudhat utilizes state-of-the-art technology, including the 3D Cone Beam Computed Tomography (CBCT). These advanced digital systems allow for highly precise diagnosis and treatment planning by creating detailed three-dimensional images of a patient's teeth, jawbone, facial anatomy, and smile. This technology enhances the accuracy of implant placement, complex restorative procedures, root canal treatment, and cosmetic smile planning while helping reduce treatment time and improve patient comfort.
                </p>

                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  In addition to implant dentistry, Dr. Dudhat has a strong interest in comprehensive restorative and cosmetic dentistry. From porcelain veneers and clear aligner therapy to crowns, bridges, and full-mouth rehabilitation, he believes every treatment should be customized to complement each patient's facial features, oral health, and long-term goals. His philosophy centers on preserving healthy tooth structure whenever possible while delivering beautiful, functional, and lasting results.
                </p>
                
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  At Hampton Family Dental, Dr. Dudhat is proud to help expand the services available to the community, allowing more advanced procedures to be completed under one roof. Patients can enjoy the comfort of receiving everything from routine preventive care to complex implant restorations in the same office, surrounded by a team they know and trust. His goal is simple: combine advanced technology, clinical excellence, and genuine patient relationships to create healthy smiles that last a lifetime.
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
                  &ldquo;My goal is simple: to provide a comfortable, welcoming environment where you feel truly cared for. Dentistry is about more than just teeth—it&apos;s about building lasting relationships and helping our community smile with confidence.&rdquo;
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
                  At Hampton Family Dental, Dr. Dudhat is excited to help continue the practice's long-standing tradition of personalized dentistry while expanding the advanced treatment options available to patients. His focus on implant dentistry, digital technology, and comprehensive restorative care allows more procedures to be completed comfortably under one roof, giving patients access to advanced treatment in the familiar office they know and trust.
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Committed to lifelong learning, Dr. Dudhat regularly pursues advanced continuing education in implant dentistry, cosmetic dentistry, digital workflows, and restorative techniques. He maintains active memberships in professional organizations, including the American Dental Association (ADA) and the Pennsylvania Dental Association (PDA), ensuring he remains at the forefront of modern dental advancements. By combining evidence-based dentistry with today's latest technology, Dr. Dudhat is dedicated to delivering exceptional care that is precise, comfortable, and built to last.
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
