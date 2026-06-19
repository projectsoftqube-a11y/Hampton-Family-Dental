import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import PorcelainVeneersClient from "./PorcelainVeneersClient";

export const metadata: Metadata = {
  title: "Porcelain Veneers in Southampton, PA | Hampton Family Dental",
  description:
    "Custom porcelain veneers in Southampton, PA — transform chipped, stained, or gapped teeth into a natural, flawless smile. Financing available. (215) 357-2224.",
  keywords: [
    "veneers southampton pa",
    "porcelain veneers southampton",
    "veneers cost southampton",
    "dental veneers southampton",
    "smile makeover veneers 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry/porcelain-veneers`,
  },
  openGraph: {
    title: "Porcelain Veneers in Southampton, PA | Hampton Family Dental",
    description:
      "Custom porcelain veneers in Southampton, PA — transform chipped, stained, or gapped teeth into a natural, flawless smile. Financing available. (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry/porcelain-veneers`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Porcelain Veneers in Southampton, PA | Hampton Family Dental",
    description:
      "Custom porcelain veneers in Southampton, PA — transform chipped, stained, or gapped teeth into a natural, flawless smile. Financing available. (215) 357-2224.",
  },
};

export default function PorcelainVeneersPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Porcelain Veneers",
    "description": "Custom porcelain veneers that transform stained, chipped, or gapped teeth into a natural, flawless smile, for patients in Southampton, PA.",
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
        "name": "How much do porcelain veneers cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost depends on how many teeth and the material. We give you a clear quote at your consultation. Veneers are usually a cosmetic investment not covered by insurance, but we offer CareCredit financing."
        }
      },
      {
        "@type": "Question",
        "name": "How long do veneers last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good care, porcelain veneers typically last 10 to 15 years or more. They don't decay, but the tooth underneath still needs healthy habits and regular checkups."
        }
      },
      {
        "@type": "Question",
        "name": "Are veneers permanent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because a thin layer of enamel is reshaped to place them, veneers are considered a permanent, long-term treatment - the teeth will always need some form of covering afterward."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between veneers and crowns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veneers cover just the front of the tooth for cosmetic improvement; crowns cap the entire tooth when it's also damaged or weak. We'll recommend the right one for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "Do veneers ruin your teeth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - when placed by an experienced dentist, only a minimal amount of enamel is reshaped. Veneers actually protect the front of the tooth, and the result looks and feels natural."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get just one veneer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - a single veneer can fix one chipped or discolored tooth, and we color-match it precisely to blend with your natural teeth. Many patients do a few, or a full smile, depending on their goals."
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
        "name": "Porcelain Veneers",
        "item": `${SITE_URL}/cosmetic-dentistry/porcelain-veneers`
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
      <PorcelainVeneersClient />
    </>
  );
}
