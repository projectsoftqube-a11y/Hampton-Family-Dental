import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ClearCorrectClient from "./ClearCorrectClient";

export const metadata: Metadata = {
  title: "Clear Aligners (ClearCorrect) in Southampton, PA | Hampton",
  description:
    "ClearCorrect clear aligners in Southampton, PA — straighten teeth discreetly, a comfortable alternative to braces. Free consultation + financing. (215) 357-2224.",
  keywords: [
    "clear aligners southampton pa",
    "clearcorrect southampton",
    "invisible braces southampton",
    "teeth straightening southampton",
    "clear aligners cost 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry/clear-correct`,
  },
  openGraph: {
    title: "Clear Aligners (ClearCorrect) in Southampton, PA | Hampton",
    description:
      "ClearCorrect clear aligners in Southampton, PA — straighten teeth discreetly, a comfortable alternative to braces. Free consultation + financing. (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry/clear-correct`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Aligners (ClearCorrect) in Southampton, PA | Hampton",
    description:
      "ClearCorrect clear aligners in Southampton, PA — straighten teeth discreetly, a comfortable alternative to braces. Free consultation + financing. (215) 357-2224.",
  },
};

export default function ClearCorrectPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "ClearCorrect Clear Aligners",
    "description": "ClearCorrect clear aligners that straighten teeth discreetly, a comfortable removable alternative to braces, for patients in Southampton, PA.",
    "provider": {
      "@type": "Dentist",
      "name": "Hampton Family Dental",
      "telephone": "+12153572224",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "283 Second Street Pike, Suite 140",
        "addressLocality": "Southampton",
        "addressRegion": "PA",
        "postalCode": "18966",
        "addressCountry": "US"
      },
      "areaServed": [
        "Southampton PA",
        "Richboro PA",
        "Warminster PA",
        "Newtown PA",
        "Holland PA",
        "Feasterville PA",
        "Huntingdon Valley PA"
      ]
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do clear aligners cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on how much movement is needed and the treatment length. ClearCorrect is often cost-effective. We give you a clear quote, check orthodontic insurance, and offer CareCredit financing."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between ClearCorrect and Invisalign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both use clear, removable aligners to straighten teeth discreetly. ClearCorrect is often more budget-friendly; Invisalign has a longer track record. We'll recommend the best fit."
        }
      },
      {
        "@type": "Question",
        "name": "How long does clear aligner treatment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most treatments take about 6 to 18 months depending on your case. We'll give you a personalized timeline after scanning your teeth."
        }
      },
      {
        "@type": "Question",
        "name": "Are clear aligners as effective as braces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For mild to moderate cases, yes - clear aligners straighten teeth effectively while being removable and nearly invisible. Complex cases may do better with braces."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours a day do I wear them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For best results, wear your aligners 20 to 22 hours a day, removing them only to eat, drink anything but water, and brush your teeth."
        }
      },
      {
        "@type": "Question",
        "name": "Do clear aligners hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You may feel mild pressure for a day or two when switching trays - a sign they're working. It's much gentler than tightening metal braces, with no sharp brackets or wires."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cosmetic Dentistry",
        "item": `${SITE_URL}/cosmetic-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Clear Correct",
        "item": `${SITE_URL}/cosmetic-dentistry/clear-correct`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema).replace(/</g, "\\u003c"),
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
      <ClearCorrectClient />
    </>
  );
}
