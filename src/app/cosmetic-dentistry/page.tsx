import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CosmeticDentistryClient from "./CosmeticDentistryClient";

export const metadata: Metadata = {
  title: "Cosmetic Dentist in Southampton, PA | Veneers & Whitening",
  description:
    "Cosmetic dentistry in Southampton, PA — veneers, teeth whitening, bonding & smile makeovers. Formerly Brenner Dental Group. Call (215) 357-2224.",
  keywords: [
    "cosmetic dentist southampton pa",
    "porcelain veneers southampton",
    "teeth whitening southampton",
    "smile makeover southampton",
    "dental bonding southampton",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry`,
  },
  openGraph: {
    title: "Cosmetic Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Cosmetic dentistry in Southampton, PA — veneers, teeth whitening, bonding & smile makeovers. Formerly Brenner Dental Group. Call (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry`,
    type: "website",
  },
};

export default function CosmeticDentistryPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cosmetic Dentistry Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Porcelain Veneers",
        "url": `${SITE_URL}/cosmetic-dentistry/porcelain-veneers`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Invisalign",
        "url": `${SITE_URL}/cosmetic-dentistry/invisalign`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Clear Correct",
        "url": `${SITE_URL}/cosmetic-dentistry/clear-correct`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Teeth Whitening",
        "url": `${SITE_URL}/cosmetic-dentistry/teeth-whitening`,
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Dental Bonding",
        "url": `${SITE_URL}/cosmetic-dentistry/dental-bonding`,
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Smile Makeover",
        "url": `${SITE_URL}/cosmetic-dentistry/smile-makeover`,
      },
    ],
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do veneers and teeth whitening cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost depends on the treatment and how many teeth you’re improving, so we provide a personalized quote at your consultation. Professional whitening is one of our most affordable options, while veneers are a longer-term investment. We offer low-interest monthly financing to fit cosmetic care into your budget.",
        },
      },
      {
        "@type": "Question",
        "name": "How long do veneers last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good care, porcelain veneers typically last 10 to 15 years or more. They don’t decay, but the natural tooth underneath still needs healthy habits and regular checkups. Because a thin layer of enamel is reshaped to place them, veneers are considered a permanent, long-term treatment.",
        },
      },
      {
        "@type": "Question",
        "name": "What is cosmetic dentistry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cosmetic dentistry covers treatments that improve the appearance of your smile — whitening, porcelain veneers, bonding, clear aligners, and full smile makeovers. Many cosmetic treatments also strengthen and protect your teeth, so they look great and stay healthy.",
        },
      },
      {
        "@type": "Question",
        "name": "Is professional teeth whitening safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Professional whitening performed or supervised by a dentist is safe and far more effective than store-bought kits. We protect your gums and tailor the strength to your teeth, minimizing sensitivity while giving you a noticeably brighter smile.",
        },
      },
      {
        "@type": "Question",
        "name": "Veneers or bonding — which is right for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonding is quick, affordable, and ideal for small chips or gaps, while veneers offer a longer-lasting, more dramatic transformation for multiple teeth. We’ll look at your goals and budget and recommend the option that gives you the best result.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cosmetic Dentistry",
        "item": `${SITE_URL}/cosmetic-dentistry`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CosmeticDentistryClient />
    </>
  );
}
