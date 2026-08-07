"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";

import { featuredReviews, googleProfile } from "@/lib/reviews";

/*
  Real Google reviews, verbatim from the practice's profile — see
  src/lib/reviews.ts for the rules on editing them.

  Reviewer avatars are initials, not photographs. The previous version used
  AI-generated portraits presented as patients; a real reviewer's own Google
  photo is not ours to reuse either.

  No Review / aggregateRating JSON-LD is emitted from this section on purpose.
*/

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[5%] right-[-8%] w-[480px] h-[480px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-navy/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-12 lg:mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-light border border-primary/15">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Patient Reviews
              </span>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            What Our Patients{" "}
            <span className="text-primary italic font-normal">Actually Say</span>
          </motion.h2>

          {/* Verifiable rating summary — links to the profile it comes from. */}
          <motion.a
            href={googleProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-navy/[0.08] shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
          >
            <span className="font-heading text-navy text-xl font-bold leading-none tabular-nums">
              {googleProfile.rating}
            </span>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
              ))}
            </span>
            <span className="w-px h-4 bg-navy/10" />
            <span className="text-navy/70 text-xs font-semibold">
              {googleProfile.reviewCount} Google reviews
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-navy/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.a>
        </div>

        {/* ─── Review grid ─── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredReviews.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              className="group relative flex flex-col rounded-[24px] bg-white p-6 lg:p-7
                border border-navy/[0.06]
                shadow-[0_15px_50px_-25px_rgba(20,60,80,0.12)]
                hover:shadow-[0_25px_60px_-25px_rgba(30,96,118,0.22)]
                hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-primary fill-primary"
                  />
                ))}
              </div>

              <p className="text-navy/75 text-sm leading-relaxed whitespace-pre-line flex-1">
                {review.text}
              </p>

              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-navy/[0.06]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-heading text-primary text-xs font-bold tracking-wide">
                    {review.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-navy text-sm font-bold truncate">
                    {review.author}
                  </h3>
                  <p className="text-navy/45 text-[11px] font-medium">
                    {review.relativeDate}
                    {review.localGuide && " · Local Guide"}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ─── Attribution + read-all link ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="inline-flex items-center gap-1.5 text-navy/45 text-[11px]">
            <BadgeCheck className="w-3.5 h-3.5 text-primary shrink-0" />
            Published on Google, shown unedited · last checked{" "}
            {googleProfile.lastChecked}
          </p>
          <a
            href={googleProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full
              bg-navy text-white text-xs font-semibold tracking-[0.16em] uppercase
              hover:bg-primary hover:scale-105 active:scale-95
              transition-all duration-300"
          >
            <span>Read all {googleProfile.reviewCount}</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
