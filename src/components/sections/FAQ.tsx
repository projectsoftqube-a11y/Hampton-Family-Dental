"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  HelpCircle,
  CreditCard,
  Stethoscope,
  AlertCircle,
  Users,
  CalendarCheck,
} from "lucide-react";

type Category = "Insurance" | "Treatments" | "Emergency" | "Family" | "Booking";

const categoryMeta: Record<Category, { icon: typeof CreditCard }> = {
  Insurance: { icon: CreditCard },
  Treatments: { icon: Stethoscope },
  Emergency: { icon: AlertCircle },
  Family: { icon: Users },
  Booking: { icon: CalendarCheck },
};

const faqs: { category: Category; q: string; a: string }[] = [
  {
    category: "Booking",
    q: "Where is Hampton Family Dental located?",
    a: "Hampton Family Dental is located at 283 Second Street Pike, Suite 140, Southampton, PA 18966 — the same trusted location formerly known as Brenner Dental Group. We welcome patients from Southampton, Richboro, Warminster, Newtown, and the surrounding Bucks County area.",
  },
  {
    category: "Booking",
    q: "Is Hampton Family Dental accepting new patients?",
    a: "Yes! We are currently welcoming new patients of all ages. You can book your first visit online or call us at (215) 357-2224, and our team will guide you through the simple new-patient process.",
  },
  {
    category: "Family",
    q: "Is Hampton Family Dental the same as Brenner Dental Group?",
    a: "Yes. Hampton Family Dental is the same practice and team, formerly known as Brenner Dental Group, at the same Southampton location. The name has changed, but our commitment to gentle, high-quality care remains the same, now with Dr. Jeffrey Brenner and Dr. Keyur Dudhat.",
  },
  {
    category: "Insurance",
    q: "Do you offer dental care if I don't have insurance?",
    a: "Absolutely. Our In-Office Membership Plans are designed for patients without dental insurance, offering preventive care and meaningful discounts with no deductibles, no annual maximums, and no waiting periods. Visit our Specials page to learn more.",
  },
  {
    category: "Emergency",
    q: "Do you see dental emergencies the same day?",
    a: "Yes — we keep room in our schedule for urgent care and offer same-day emergency appointments whenever possible. If you're in pain, call us right away at (215) 357-2224.",
  },
];

const categories: ("All" | Category)[] = [
  "All",
  "Treatments",
  "Insurance",
  "Emergency",
  "Family",
  "Booking",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const filtered = useMemo(() => {
    const indexed = faqs.map((f, i) => ({ ...f, originalIndex: i }));
    if (activeCategory === "All") return indexed;
    return indexed.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-24 lg:py-28 bg-beige-light overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-6%] w-[450px] h-[450px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] rounded-full bg-navy/[0.05] blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/15 shadow-sm">
              <HelpCircle className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Common Questions
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Frequently{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Asked
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`relative px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "bg-white text-navy/65 border border-navy/8 hover:border-primary/30 hover:text-navy"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFaqCat"
                    className="absolute inset-0 rounded-full bg-navy shadow-[0_8px_25px_-10px_rgba(20,60,80,0.4)]"
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ─── COMPACT ACCORDION LIST ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2.5"
          >
            {filtered.map((faq, i) => {
              const isOpen = openIndex === faq.originalIndex;
              const Icon = categoryMeta[faq.category].icon;
              return (
                <motion.div
                  key={faq.originalIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`relative rounded-2xl overflow-hidden border transition-all duration-500
                    ${
                      isOpen
                        ? "bg-white border-primary/25 shadow-[0_20px_50px_-25px_rgba(30,96,118,0.3)]"
                        : "bg-white/70 border-navy/[0.06] hover:bg-white hover:border-primary/15 hover:shadow-[0_10px_30px_-15px_rgba(20,60,80,0.1)]"
                    }
                  `}
                >
                  {isOpen && (
                    <motion.span
                      layoutId="activeFaqBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-primary-dark"
                    />
                  )}

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : faq.originalIndex)
                    }
                    className="w-full text-left px-4 md:px-5 py-3.5 md:py-4 group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Category icon */}
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500
                          ${
                            isOpen
                              ? "bg-primary border border-primary shadow-[0_4px_15px_rgba(30,96,118,0.35)]"
                              : "bg-beige-light border border-navy/8 group-hover:bg-white group-hover:border-primary/25"
                          }
                        `}
                      >
                        <Icon
                          className={`transition-colors duration-500 ${
                            isOpen ? "text-white" : "text-primary/80"
                          }`}
                          style={{ width: "16px", height: "16px" }}
                          strokeWidth={2.2}
                        />
                      </div>

                      {/* Number + Question */}
                      <div className="flex-1 min-w-0 flex items-baseline gap-2 md:gap-3">
                        <span
                          className={`font-mono text-[10px] tabular-nums shrink-0 transition-colors duration-300 ${
                            isOpen ? "text-primary" : "text-navy/30"
                          }`}
                        >
                          0{faq.originalIndex + 1}
                        </span>
                        <h3
                          className={`font-heading font-bold text-[15px] md:text-base leading-snug transition-colors duration-300 ${
                            isOpen
                              ? "text-navy"
                              : "text-navy/85 group-hover:text-navy"
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>

                      {/* Category tag */}
                      <span
                        className={`hidden sm:inline-flex shrink-0 text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-full border transition-all duration-300
                          ${
                            isOpen
                              ? "border-primary/40 text-primary bg-primary/8"
                              : "border-navy/10 text-navy/45 group-hover:border-primary/25 group-hover:text-primary/80"
                          }
                        `}
                      >
                        {faq.category}
                      </span>

                      {/* Plus / X */}
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                          ${
                            isOpen
                              ? "bg-primary text-white rotate-45"
                              : "bg-navy/5 text-navy/50 group-hover:bg-primary/10 group-hover:text-primary"
                          }
                        `}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[52px] md:pl-[58px] pt-3 pb-1 pr-12">
                            <div className="h-px w-full bg-gradient-to-r from-primary/20 to-transparent mb-3" />
                            <p className="text-navy/65 text-sm leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}

            {filtered.length === 0 && (
              <div className="text-center py-12 rounded-2xl bg-white border border-navy/8">
                <HelpCircle className="w-8 h-8 text-navy/30 mx-auto mb-3" />
                <p className="text-navy/55 text-sm">
                  No questions in this category yet. Reach out and we&apos;ll
                  help directly.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
