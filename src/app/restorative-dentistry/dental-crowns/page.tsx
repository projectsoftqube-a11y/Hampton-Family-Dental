import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DentalCrownsClient from "./DentalCrownsClient";

export const metadata: Metadata = {
  title: "Dental Crowns in Southampton, PA | Same-Day Options | Hampton",
  description:
    "Custom porcelain dental crowns in Southampton, PA — restore cracked, decayed, or weak teeth. Natural-looking, durable. (215) 357-2224.",
  keywords: [
    "dental crowns southampton pa",
    "dental crown cost southampton",
    "same day crowns southampton",
    "porcelain crown southampton",
    "tooth crown 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/dental-crowns`,
  },
  openGraph: {
    title: "Dental Crowns in Southampton, PA | Same-Day Options | Hampton",
    description:
      "Custom porcelain dental crowns in Southampton, PA — restore cracked, decayed, or weak teeth. Natural-looking, durable. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/dental-crowns`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Crowns in Southampton, PA | Same-Day Options | Hampton",
    description:
      "Custom porcelain dental crowns in Southampton, PA — restore cracked, decayed, or weak teeth. Natural-looking, durable. (215) 357-2224.",
  },
};

export default function DentalCrownsPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Crown",
    "description": "Custom porcelain and zirconia dental crowns that restore cracked, decayed, or weakened teeth, for patients in Southampton, PA.",
    "procedureType": "https://schema.org/TherapeuticProcedure",
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
        "name": "How much does a dental crown cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the material and the tooth. We give you a clear estimate first. Most insurance covers a portion, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a crown in one day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, yes - same-day crowns are designed and milled in our office so you can finish in a single visit, with no temporary crown and no second appointment."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a crown and a filling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A filling repairs a small cavity; a crown caps the entire tooth when it's cracked, heavily decayed, root-canal-treated, or too weak for a filling."
        }
      },
      {
        "@type": "Question",
        "name": "How long do dental crowns last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good care, crowns typically last 10 to 15 years or longer. Brushing, flossing, and regular checkups help them last."
        }
      },
      {
        "@type": "Question",
        "name": "Does getting a crown hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - the tooth is fully numbed during preparation, so you'll feel pressure but not pain. Mild sensitivity afterward is normal and short-lived."
        }
      },
      {
        "@type": "Question",
        "name": "Will insurance cover my crown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many dental plans cover part of a crown, especially when medically necessary. We'll check your benefits and explain your options, including financing and membership savings."
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
        "name": "Restorative Dentistry",
        "item": `${SITE_URL}/restorative-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dental Crowns",
        "item": `${SITE_URL}/restorative-dentistry/dental-crowns`
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
      <DentalCrownsClient />
    </>
  );
}
