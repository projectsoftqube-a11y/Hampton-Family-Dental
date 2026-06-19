import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import PerioProtectClient from "./PerioProtectClient";

export const metadata: Metadata = {
  title: "Gum Disease Treatment in Southampton, PA | Hampton",
  description:
    "Non-surgical gum disease treatment in Southampton, PA — stop bleeding gums & bad breath with Perio Protect tray therapy. Call (215) 357-2224.",
  keywords: [
    "gum disease treatment southampton pa",
    "periodontal treatment southampton",
    "bleeding gums southampton",
    "perio protect southampton",
    "gingivitis treatment",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/perio-protect`,
  },
  openGraph: {
    title: "Gum Disease Treatment in Southampton, PA | Hampton",
    description:
      "Non-surgical gum disease treatment in Southampton, PA — stop bleeding gums & bad breath with Perio Protect tray therapy. Call (215) 357-2224.",
    url: `${SITE_URL}/general-dentistry/perio-protect`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gum Disease Treatment in Southampton, PA | Hampton",
    description:
      "Non-surgical gum disease treatment in Southampton, PA — stop bleeding gums & bad breath with Perio Protect tray therapy. Call (215) 357-2224.",
  },
};

export default function PerioProtectPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Gum Disease Treatment (Perio Protect)",
    "description": "Non-surgical periodontal treatment for gum disease, including deep cleaning and Perio Protect custom-tray therapy, for patients in Southampton, PA.",
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
        "name": "What are the signs of gum disease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common early sign is gums that bleed when you brush or floss. Others include red, swollen, or receding gums, persistent bad breath, loose teeth, or a change in your bite. Early gum disease is often painless, so these signs matter."
        }
      },
      {
        "@type": "Question",
        "name": "Can gum disease be reversed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The earliest stage - gingivitis - can usually be reversed with professional cleaning and good home care. More advanced periodontitis can't be fully reversed, but it can be controlled with deep cleaning and therapies like Perio Protect."
        }
      },
      {
        "@type": "Question",
        "name": "How do you treat gum disease without surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many cases are managed without surgery. We start with a deep cleaning (scaling and root planing) and often add Perio Protect - custom trays that deliver medication beneath the gumline at home. Together these control the infection and help gums heal."
        }
      },
      {
        "@type": "Question",
        "name": "Why do my gums bleed when I brush?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bleeding gums are usually the first sign of gum inflammation (gingivitis) from plaque along the gumline. With a professional cleaning, better home care, and treatment if needed, healthy gums shouldn't bleed."
        }
      },
      {
        "@type": "Question",
        "name": "Is gum disease treatment covered by insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many dental plans cover periodontal treatment such as deep cleanings, and some cover part of Perio Protect trays. We'll review your benefits. Members of our in-house plan receive 15% off, and we accept CareCredit."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Perio Protect gel work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Perio Gel contains 1.7% hydrogen peroxide. When pushed into gum pockets by the custom trays, the peroxide releases oxygen, killing the anaerobic bacteria responsible for gum disease, which cannot survive in oxygen-rich environments."
        }
      },
      {
        "@type": "Question",
        "name": "Will Perio Protect replace scaling and root planing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perio Protect is often used alongside scaling and root planing (deep cleanings) to enhance healing. By keeping bacteria levels low at home, it ensures your gums heal faster and stay healthy."
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
        "name": "Perio Protect",
        "item": `${SITE_URL}/general-dentistry/perio-protect`
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
      <PerioProtectClient />
    </>
  );
}
