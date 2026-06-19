"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Activity, 
  Smile, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  Coins, 
  Users, 
  Cpu 
} from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function WhyChooseUsClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Why Choose Us" },
  ];

  const reasons = [
    {
      icon: Users,
      title: "Trusted Local Practice with a Long Southampton History",
      desc: "Formerly known as Brenner Dental Group, our practice has been a pillar of the Southampton community for decades. We are proud to serve generation after generation of local families, maintaining the warm relationship-first care we are famous for."
    },
    {
      icon: Heart,
      title: "Two Experienced Dentists Under One Roof",
      desc: "With Dr. Jeffrey Brenner and Dr. Keyur Dudhat practicing together, you benefit from a collaborative clinical environment. Our dentists combine decades of experience with advanced training, working together to develop comprehensive, precise treatment plans."
    },
    {
      icon: Activity,
      title: "Comprehensive Care in One Convenient Office",
      desc: "From routine family cleanings and preventive screenings to complex restorative implants, cosmetic smile makeovers, and urgent emergency procedures, we offer complete dental solutions. There is no need to travel to multiple specialists."
    },
    {
      icon: Cpu,
      title: "Modern Technology for Better Outcomes",
      desc: "We invest in state-of-the-art dental technology, including 3D Cone Beam (CBCT) scanners, digital diagnostic X-rays, and RayFace facial imaging. This advanced diagnostic equipment ensures higher precision, faster healing, and a more comfortable experience."
    },
    {
      icon: Smile,
      title: "Gentle, Judgment-Free, Family-Friendly Approach",
      desc: "Dental anxiety is real, and we treat it with absolute empathy. Our friendly front-office staff, gentle hygienists, and compassionate dentists provide a relaxed, warm atmosphere. We meet you where you are without judgment."
    },
    {
      icon: Coins,
      title: "No-Insurance Membership Plan & Financing",
      desc: "We believe quality dental care should be accessible. If you do not have insurance, we offer a comprehensive in-house dental membership plan to cover your preventive care and offer discounts on treatments. We also partner with CareCredit for flexible financing."
    },
    {
      icon: Clock,
      title: "Same-Day Emergency Appointments",
      desc: "Dental emergencies can happen when you least expect them. If you are experiencing pain, a broken tooth, or swelling, we save dedicated emergency slots every day so we can see you, relieve your pain, and begin treatment immediately."
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
                  Why Choose Us
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Why Choose Hampton Family Dental
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Discover what sets us apart and why we are recognized as the destination for patients seeking the best dentist southampton pa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Sincere Intro Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Sincere Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary shrink-0" />
                <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Our Philosophy</span>
              </div>
              <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
                A Legacy of Trust, Driven by Modern Innovation
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Choosing a dentist is about trust. At Hampton Family Dental — formerly Brenner Dental Group — Southampton families have trusted us for decades, and Dr. Jeffrey Brenner and Dr. Keyur Dudhat continue that tradition with gentle, modern, all-in-one care.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Our mission is to combine the warm, friendly environment you expect from a local family clinic with the diagnostic precision made possible by 21st-century dental technology. By housing two dedicated clinicians with complementary clinical interests under one roof, we provide our community with comprehensive services that range from routine prevention to advanced aesthetic and implant therapies.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed font-semibold text-navy/95">
                We believe in providing honest, individualized treatment plans. We never recommend procedures you do not need, and we always outline costs transparently before any work begins.
              </p>
            </div>

            {/* Right Column: Image and Experience Facts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/clinic_interior_1779858062605.webp"
                  alt="Comfortable Treatment Room at Hampton Family Dental"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              
              <div className="bg-beige-light/20 border border-navy/[0.04] rounded-3xl p-6 space-y-3">
                <h4 className="font-heading text-navy font-bold text-sm">Gentle Clinical Care</h4>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Our suite at 283 Second Street Pike is designed with comfort amenities to help put anxious patients at ease. From state-of-the-art ray-reducing digital imaging to desensitizing options, we make your visit stress-free.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Why Patients Choose Us Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20 border-y border-navy/[0.03]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Why Patients Choose Us</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold">
              7 Reasons to Trust Us with Your Smile
            </h2>
            <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
              We strive to deliver a dental experience that exceeds your expectations, combining compassionate staff, cutting-edge equipment, and flexible options.
            </p>
          </div>

          <div className="space-y-8">
            {/* Feature Card: Spans full width */}
            {reasons.slice(0, 1).map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-white rounded-3xl p-8 lg:p-12 border border-white/10 shadow-md relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
                >
                  <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
                  <div className="relative z-10 space-y-4 max-w-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-primary-light shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm lg:text-base leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 border border-primary/45 text-primary-light text-xs font-semibold uppercase tracking-wider">
                      Over 25 Years of Care
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Grid for the remaining 6 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.slice(1).map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-navy text-lg font-bold leading-snug">
                        {reason.title}
                      </h3>
                      <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scheduling CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-white text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Experience the Hampton Family Dental Difference
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Ready to visit the best dentist southampton pa? Schedule your first appointment or consultation today. Our team is excited to welcome you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Request Appointment
            </Link>
            <a
              href={practiceInfo.phoneTel}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/15 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call {practiceInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
