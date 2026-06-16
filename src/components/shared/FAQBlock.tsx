"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQBlockProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQBlock({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Have questions about this dental service? Explore answers to common patient questions.",
}: FAQBlockProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleOpen = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  // Construct FAQPage JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="py-16 md:py-20 bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-[850px] mx-auto px-5">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
            Got Questions?
          </span>
          <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold mt-2">
            {title}
          </h3>
          <p className="text-navy/60 text-xs md:text-sm mt-2">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-navy/5 rounded-2xl bg-beige-light/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleOpen(idx)}
                  className="flex items-center justify-between w-full p-5 text-left text-navy font-heading font-bold text-sm md:text-base hover:text-primary transition-colors duration-200"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-navy/40 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Content Accordion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-navy/70 text-xs md:text-sm leading-relaxed border-t border-navy/[0.03]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
