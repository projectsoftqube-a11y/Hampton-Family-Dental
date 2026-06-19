import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import OralHygieneClient from "./OralHygieneClient";

export const metadata: Metadata = {
  title: "Teeth Cleaning in Southampton, PA | Dental Hygiene | Hampton",
  description:
    "Professional teeth cleaning in Southampton, PA — remove plaque & tartar, prevent gum disease, brighten your smile. Most insurance covers 100%. (215) 357-2224.",
  keywords: [
    "teeth cleaning southampton pa",
    "dental cleaning southampton",
    "professional teeth cleaning",
    "deep cleaning teeth",
    "dental hygiene southampton",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/oral-hygiene`,
  },
  openGraph: {
    title: "Teeth Cleaning in Southampton, PA | Dental Hygiene | Hampton",
    description:
      "Professional teeth cleaning in Southampton, PA — remove plaque & tartar, prevent gum disease, brighten your smile. Most insurance covers 100%. (215) 357-2224.",
    url: `${SITE_URL}/general-dentistry/oral-hygiene`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Cleaning in Southampton, PA | Dental Hygiene | Hampton",
    description:
      "Professional teeth cleaning in Southampton, PA — remove plaque & tartar, prevent gum disease, brighten your smile. Most insurance covers 100%. (215) 357-2224.",
  },
};

export default function OralHygienePage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Professional Teeth Cleaning (Dental Prophylaxis)",
    "description": "Professional dental cleaning that removes plaque and tartar, prevents gum disease, and brightens the smile, for patients in Southampton, PA.",
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
        "name": "How much does a teeth cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most dental insurance plans cover routine cleanings at 100%, so many patients pay nothing out of pocket. Without insurance, the cost depends on whether you need a regular or deep cleaning - we'll give you a clear estimate first, and our membership plan includes two cleanings a year with no deductibles."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a regular cleaning and a deep cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A regular cleaning removes plaque and tartar above the gumline for patients with healthy gums. A deep cleaning (scaling and root planing) also cleans below the gumline to treat early gum disease. We measure your gum health and recommend the right one."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need a cleaning if I brush twice a day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brushing and flossing are crucial, but they cannot remove tartar once it has hardened onto your teeth. Tartar must be scaled off by a dental professional using specialized instruments."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get my teeth cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most patients, we recommend a routine cleaning and exam every 6 months. Patients with a history of gum disease or active orthodontic work may benefit from cleanings every 3 to 4 months."
        }
      },
      {
        "@type": "Question",
        "name": "Does a teeth cleaning hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A routine cleaning is comfortable and painless for most patients. If your gums are sensitive or you need a deep cleaning, we can numb the area so you stay comfortable throughout."
        }
      },
      {
        "@type": "Question",
        "name": "Is a professional cleaning safe during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Professional cleanings are safe and especially important during pregnancy, when hormonal changes raise the risk of gum inflammation. Let us know you're expecting so we can tailor your care."
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
        "name": "General Dentistry",
        "item": `${SITE_URL}/general-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Oral Hygiene",
        "item": `${SITE_URL}/general-dentistry/oral-hygiene`
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
      <OralHygieneClient />
    </>
  );
}
