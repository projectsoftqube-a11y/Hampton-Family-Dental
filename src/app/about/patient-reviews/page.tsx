"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Star, Quote, ArrowLeft, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function PatientReviewsPage() {
  const breadcrumbs = [
    { label: "About Us", href: "/about" },
    { label: "Patient Reviews" },
  ];

  const reviews = [
    {
      author: "John M.",
      location: "Southampton, PA",
      rating: 5,
      date: "May 2026",
      text: "Dr. Brenner has been my family dentist for over 20 years. Same convenient location, same wonderful hygienists... I am so glad to see Hampton Family Dental carrying on the tradition! The office looks refreshed and the new digital equipment is impressive.",
      featured: true,
    },
    {
      author: "Linda K.",
      location: "Feasterville, PA",
      rating: 5,
      date: "April 2026",
      text: "Dr. Dudhat explained my dental implant options using their new 3D scanner. It made me feel so comfortable seeing the exact placement before the procedure. Lisa at the front desk was helpful and warm as always.",
      featured: false,
    },
    {
      author: "Robert H.",
      location: "Southampton, PA",
      rating: 5,
      date: "March 2026",
      text: "I have been coming here since I was a teenager when Dr. Brenner first opened the practice. Now I bring my own children. The team is fantastic with kids, making dental hygiene fun and stress-free.",
      featured: false,
    },
    {
      author: "Karen S.",
      location: "Warminster, PA",
      rating: 5,
      date: "February 2026",
      text: "Very professional, clean office, and advanced dental technology. Dr. Dudhat and the hygienists did an amazing job on my veneers. The scheduling was convenient and clear.",
      featured: false,
    },
    {
      author: "Thomas D.",
      location: "Southampton, PA",
      rating: 5,
      date: "January 2026",
      text: "I had a sudden toothache over the weekend and they were able to get me in for an emergency appointment first thing Monday morning. Quick diagnostic x-rays, immediate relief, and very transparent billing.",
      featured: false,
    },
    {
      author: "Michelle P.",
      location: "Holland, PA",
      rating: 5,
      date: "December 2025",
      text: "I recently switched to Hampton Family Dental because of their in-house membership plan. I do not have dental insurance, and their plan saved me hundreds on my cleanings and fillings. The care is top-notch.",
      featured: true,
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
                <Star className="w-3.5 h-3.5 text-primary-light fill-primary-light" />
                <span className="text-white/90 text-[9px] tracking-wider uppercase font-semibold">
                  Testimonials
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              >
                Patient Reviews
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-light font-medium tracking-wide uppercase text-sm"
              >
                Generating happy, healthy smiles in Southampton for over 25 years
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

      {/* ─── reputation Summary Card ─── */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3 gap-8 items-center bg-beige-light/35 border border-navy/[0.04] p-8 md:p-12 rounded-3xl shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Aggregate Reputation</span>
              <h3 className="font-heading text-navy text-2xl font-bold">Southampton&apos;s 5-Star Dentist</h3>
              <p className="text-navy/60 text-xs">Based on patient submissions and verified review platforms.</p>
            </div>

            <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-navy/10 py-6 md:py-0">
              <span className="font-heading text-navy text-5xl font-bold">4.9</span>
              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-navy/55 text-xs font-semibold uppercase tracking-wide">250+ Google Reviews</span>
            </div>

            <div className="text-center md:text-right space-y-4">
              <p className="text-navy/60 text-xs md:text-sm max-w-xs ml-auto">
                We are committed to delivering a comfortable, professional experience to every patient. Share your own experience below.
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold tracking-wider hover:bg-primary transition-all duration-300"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reviews Grid ─── */}
      <section className="py-16 bg-beige-light/30">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <motion.article
                key={rev.author}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300 ${
                  rev.featured ? "md:scale-[1.02] border-primary/20 ring-1 ring-primary/5" : ""
                }`}
              >
                {rev.featured && (
                  <div className="absolute top-0 right-6 translate-y-[-50%] bg-primary text-white text-[8px] tracking-wider uppercase font-bold px-3 py-1 rounded-full">
                    Featured Review
                  </div>
                )}
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-primary/15" />
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>

                  <p className="text-navy/75 text-xs md:text-sm leading-relaxed mb-6 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-navy/5 pt-4 flex justify-between items-center text-[11px]">
                  <div>
                    <h4 className="font-heading text-navy font-bold">{rev.author}</h4>
                    <p className="text-navy/40 font-medium">{rev.location}</p>
                  </div>
                  <span className="text-navy/40 font-semibold">{rev.date}</span>
                </div>
              </motion.article>
            ))}
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
            Join Our Family of Healthy Smiles
          </h2>
          <p className="text-white/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Ready to experience our 5-star standard of care? Schedule a comprehensive clean and checkup with Southampton&apos;s trusted dental staff.
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
