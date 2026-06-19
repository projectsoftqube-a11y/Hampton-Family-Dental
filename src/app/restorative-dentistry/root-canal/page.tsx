import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import RootCanalClient from "./RootCanalClient";

export const metadata: Metadata = {
  title: "Root Canal in Southampton, PA | Gentle, Painless | Hampton",
  description:
    "Gentle root canal treatment in Southampton, PA — relieve tooth pain and save your natural tooth. Modern, comfortable care. (215) 357-2224.",
  keywords: [
    "root canal southampton pa",
    "root canal cost southampton",
    "painless root canal southampton",
    "root canal symptoms",
    "endodontics 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/root-canal`,
  },
  openGraph: {
    title: "Root Canal in Southampton, PA | Gentle, Painless | Hampton",
    description:
      "Gentle root canal treatment in Southampton, PA — relieve tooth pain and save your natural tooth. Modern, comfortable care. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/root-canal`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Root Canal in Southampton, PA | Gentle, Painless | Hampton",
    description:
      "Gentle root canal treatment in Southampton, PA — relieve tooth pain and save your natural tooth. Modern, comfortable care. (215) 357-2224.",
  },
};

export default function RootCanalPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Root Canal Treatment",
    "description": "Gentle root canal (endodontic) treatment that relieves tooth pain and saves an infected natural tooth, for patients in Southampton, PA.",
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
        "name": "How much does a root canal cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the tooth - molars have more canals than front teeth, so they cost more. We give you a clear estimate first. Most plans cover a good portion, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "Does a root canal hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - the procedure relieves pain, it doesn't cause it. We fully numb the tooth, so it feels about like getting a filling. Mild soreness afterward is normal and easily managed."
        }
      },
      {
        "@type": "Question",
        "name": "What are the signs I need a root canal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Severe or lingering tooth pain, prolonged hot/cold sensitivity, a pimple or swelling on the gum, a darkening tooth, or tender gums. See us promptly if you notice these."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a root canal take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most root canals are completed in one or two visits of about 60 to 90 minutes each, depending on the tooth. We'll give you a clear timeline at your appointment."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a crown after a root canal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually yes, especially for back teeth - a root-canal-treated tooth becomes more brittle, and a crown restores its strength and protects it long term."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to get a root canal or pull the tooth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saving your natural tooth with a root canal is almost always better - it's less expensive than extracting and replacing it, and nothing functions quite like your own tooth."
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
        "name": "Root Canal Treatment",
        "item": `${SITE_URL}/restorative-dentistry/root-canal`
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
      <RootCanalClient />
    </>
  );
}
