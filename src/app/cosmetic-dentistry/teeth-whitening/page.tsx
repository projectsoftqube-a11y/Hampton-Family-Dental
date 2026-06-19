import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import TeethWhiteningClient from "./TeethWhiteningClient";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening in Southampton, PA | Hampton",
  description:
    "Professional teeth whitening in Southampton, PA — brighten your smile several shades safely in one visit or with custom take-home trays. (215) 357-2224.",
  keywords: [
    "teeth whitening southampton pa",
    "professional teeth whitening southampton",
    "zoom whitening southampton",
    "in office whitening southampton",
    "teeth whitening cost 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry/teeth-whitening`,
  },
  openGraph: {
    title: "Professional Teeth Whitening in Southampton, PA | Hampton",
    description:
      "Professional teeth whitening in Southampton, PA — brighten your smile several shades safely in one visit or with custom take-home trays. (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry/teeth-whitening`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Teeth Whitening in Southampton, PA | Hampton",
    description:
      "Professional teeth whitening in Southampton, PA — brighten your smile several shades safely in one visit or with custom take-home trays. (215) 357-2224.",
  },
};

export default function TeethWhiteningPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Professional Teeth Whitening",
    "description": "In-office and custom take-home professional teeth whitening that safely brightens the smile several shades, for patients in Southampton, PA.",
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
        "name": "How much does professional teeth whitening cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on whether you choose in-office or custom take-home trays. We give you a clear price upfront - it's one of our most affordable cosmetic options - and we accept CareCredit."
        }
      },
      {
        "@type": "Question",
        "name": "Is professional whitening better than store-bought?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - professional whitening uses stronger, dentist-supervised gel and custom trays that whiten evenly and protect your gums, giving a brighter smile faster with results that last longer."
        }
      },
      {
        "@type": "Question",
        "name": "Is teeth whitening safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - professional whitening performed or supervised by a dentist is safe and far more effective than store kits. We protect your gums and tailor the strength to minimize sensitivity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does teeth whitening last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results typically last several months to a couple of years, depending on habits. Coffee, tea, red wine, and smoking fade it faster. Touch-ups with take-home trays keep your smile bright."
        }
      },
      {
        "@type": "Question",
        "name": "Does whitening cause sensitivity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some patients feel temporary sensitivity that fades within a day or two. Because we use professional products and custom trays, we can adjust the strength to keep you comfortable."
        }
      },
      {
        "@type": "Question",
        "name": "Will whitening work on crowns or veneers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Whitening only works on natural teeth - crowns, veneers, and fillings won't change color. If you have restorations, we'll plan your whitening so everything matches."
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
        "name": "Teeth Whitening",
        "item": `${SITE_URL}/cosmetic-dentistry/teeth-whitening`
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
      <TeethWhiteningClient />
    </>
  );
}
