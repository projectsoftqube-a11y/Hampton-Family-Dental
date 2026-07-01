"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  History,
  ArrowLeft,
  ShieldCheck,
  Heart,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function OurStoryClient() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about/our-story" },
  ];

  const timeline = [
    {
      year: "1995",
      title: "Foundation of Brenner Dental Group",
      desc: "Dr. Jeffrey Brenner established the practice in Southampton, PA, intending to offer high-quality, family-centered clinical care.",
      icon: History,
    },
    {
      year: "2008",
      title: "Expanded Southampton Facility",
      desc: "Moved into our current modern dental suite at Second Street Pike, increasing spacing to support expanded technology and hygienists.",
      icon: MapPin,
    },
    {
      year: "2018",
      title: "Advanced Cosmetic Integration",
      desc: "Incorporated advanced Invisalign clear aligner certifications and aesthetic therapies, enhancing our smile design offerings.",
      icon: Sparkles,
    },
    {
      year: "2026",
      title: "A New Chapter: Hampton Family Dental",
      desc: "Dr. Keyur Dudhat joins as partner. The practice is rebranded to Hampton Family Dental, introducing 3D CBCT imaging and digital scanners.",
      icon: Heart,
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

          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15 mb-4"
              >
                <History className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/90 text-[9px] tracking-wider uppercase font-semibold">
                  Our History
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              >
                Our Story
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-light font-medium tracking-wide uppercase text-sm"
              >
                Honoring the past, embracing the future of family dentistry
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Story Narrative ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Same Team, Same Location</span>
              </div>

              {/* BRAND BRIDGE INTRO */}
              <div className="space-y-4">
                <p className="text-navy text-lg md:text-xl font-medium leading-relaxed border-l-4 border-primary pl-4">
                  For decades, Southampton families have trusted Brenner Dental Group. Today that same practice continues as Hampton Family Dental — same caring team, same convenient location, with exciting new additions.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  We know that consistency matters profoundly when it comes to your health. When you walk through our doors, you will see the exact same friendly faces at reception, the same highly trained dental hygienists, and the same compassionate clinical assistants who have cared for your family for years. We have simply updated our name and added new diagnostic capabilities to serve you even better. Our commitment to gentle, personalized dentistry remains at the absolute core of everything we do.
                </p>
              </div>

              {/* H2: A Trusted Local History */}
              <div className="space-y-4">
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  A Trusted Local History
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Dr. Jeffrey Brenner founded the practice with a singular vision: to create a dental office where patients felt like extended family rather than a number on a chart. Operating under the name Brenner Dental Group, Dr. Brenner built a reputation on honest advice, conservative care, and patient relationships that spanned multiple generations. He prioritized taking the time to listen to each patient, understanding their unique concerns, and explaining treatments thoroughly without ever applying pressure.
                </p>
              </div>

              {/* H2: A New Chapter */}
              <div className="space-y-4">
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  NEW CHAPTER
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  As our practice looks toward the future of dentistry, we are excited to welcome Dr. Keyur Dudhat to our team. Dr. Dudhat shares Dr. Brenner's patient-first philosophy, emphasizing conservative, compassionate care and building lasting relationships with every patient.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  As Dr. Dudhat joins the practice, we are also introducing our new name, Hampton Family Dental. While our name is changing, everything you know and trust remains the same—including our convenient location at 283 Second Street Pike, Suite 140, and the dedicated clinical team that has cared for generations of local families.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Dr. Dudhat brings advanced training in cosmetic and implant dentistry, along with the latest innovations in modern dental care. Our office now features 3D CBCT scanning technology, allowing for more precise planning of dental implants, root canals, and other complex procedures. We have also expanded our cosmetic services to include advanced clear aligner therapy and minimally invasive porcelain veneers.
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  Most importantly, these enhancements allow us to provide even more comprehensive care under one roof. Patients can now receive advanced treatments, including dental implants and full-mouth restorations, in the familiar office they know and trust—often eliminating the need for referrals to outside specialists. Our commitment to personalized care remains unchanged, while our ability to serve your dental needs continues to grow.
                </p>
              </div>

              {/* H2: Our Ongoing Commitment */}
              <div className="space-y-4">
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Our Unwavering Commitment to You
                </h2>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  The name on our door may say Hampton Family Dental, but our core promise remains the same as it was thirty years ago: gentle, judgment-free, family-first care. We deeply understand that visiting the dentist can bring anxiety, and our entire clinical team is specifically trained to deliver comfortable treatments in a calm, supportive environment. 
                </p>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                  We stand by the principle of conservative dentistry. We never recommend unnecessary procedures. We believe in providing you with all the information you need, explaining your options with absolute clarity, and presenting honest, upfront pricing so you can make empowered decisions about your oral health. Whether you are bringing your toddler in for their very first checkup, or you are seeking a complete cosmetic transformation, we are here to walk alongside you every step of the way.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 shadow-md"
                  >
                    Meet the Doctors
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/patient-information/scheduling"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/10 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy/5 transition-all duration-300"
                  >
                    Book a Visit
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Media/Image Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-navy/5 bg-beige-light/30 lg:sticky lg:top-28 mt-8 lg:mt-0">
              <Image
                src="/doctor-avatar.png"
                alt="Hampton Family Dental team transition"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>



      {/* ─── Contact & Scheduling CTA Block ─── */}
      <section className="py-16 md:py-20 bg-navy-dark text-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
        <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1000px] mx-auto text-center px-5 space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Ready to Schedule Your Next Appointment?
          </h2>
          <p className="text-white/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Welcome to the new era of care in Southampton. Schedule your routine cleaning, consult on a smile makeover, or stop by to see our facility.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
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
