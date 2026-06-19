import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CheckupsAndXRaysClient from "./CheckupsAndXRaysClient";

export const metadata: Metadata = {
  title: "Dental Checkup & X-Rays in Southampton, PA | Hampton",
  description:
    "Dental checkups & digital X-rays in Southampton, PA — catch problems early. New-patient $149 Welcome Special. Formerly Brenner Dental Group. (215) 357-2224.",
  keywords: [
    "dental checkup southampton pa",
    "dental exam southampton",
    "dental x-rays southampton",
    "dentist appointment southampton",
    "family checkup 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/checkups-and-x-rays`,
  },
  openGraph: {
    title: "Dental Checkup & X-Rays in Southampton, PA | Hampton",
    description:
      "Dental checkups & digital X-rays in Southampton, PA — catch problems early. New-patient $149 Welcome Special. Formerly Brenner Dental Group. (215) 357-2224.",
    url: `${SITE_URL}/general-dentistry/checkups-and-x-rays`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Checkup & X-Rays in Southampton, PA | Hampton",
    description:
      "Dental checkups & digital X-rays in Southampton, PA — catch problems early. New-patient $149 Welcome Special. Formerly Brenner Dental Group. (215) 357-2224.",
  },
};

export default function CheckupsAndXRaysPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Checkup and Digital X-Rays",
    "description": "Comprehensive dental exam with low-radiation digital X-rays to detect decay, cracks, gum disease, and bite problems early, for patients in Southampton, PA.",
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
        "name": "How much does a dental checkup cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most dental insurance plans cover routine checkups and X-rays at 100%, so many patients pay nothing. New patients without insurance can use our $149 Welcome Special, which includes a comprehensive exam and X-rays, and our membership plan covers exams and routine X-rays for a low yearly fee."
        }
      },
      {
        "@type": "Question",
        "name": "What happens during a dental checkup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We examine every tooth for decay, cracks, and worn fillings, check your gums and bite, screen for oral cancer, and take digital X-rays to see between teeth and below the gumline. Then we review everything with you and build a personalized care plan."
        }
      },
      {
        "@type": "Question",
        "name": "Are digital dental X-rays safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Digital X-rays expose you to negligible levels of radiation - up to 80% lower than traditional film X-rays - and are completely safe. We also provide protective lead aprons for additional comfort."
        }
      },
      {
        "@type": "Question",
        "name": "How often do I need dental X-rays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For healthy adult patients, we typically capture a basic set of bite-wing X-rays once a year. A full-mouth scan or panoramic X-ray is generally recommended every 3 to 5 years."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get a dental checkup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most patients, a checkup and cleaning every six months is ideal. If you have gum disease, frequent cavities, or other risk factors, we may recommend more frequent visits."
        }
      },
      {
        "@type": "Question",
        "name": "Are dental X-rays safe during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Routine X-rays are usually postponed during pregnancy unless needed to diagnose a problem, and when necessary we use a lead apron and thyroid collar for protection. Always let us know if you're pregnant so we can tailor your care."
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
        "name": "Dental Checkups & X-Rays",
        "item": `${SITE_URL}/general-dentistry/checkups-and-x-rays`
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
      <CheckupsAndXRaysClient />
    </>
  );
}
