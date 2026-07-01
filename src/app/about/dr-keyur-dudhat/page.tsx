import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DrDudhatClient from "./DrDudhatClient";

export const metadata: Metadata = {
  title: "Dr. Keyur Dudhat, DMD",
  description:
    "Meet Dr. Keyur Dudhat, DMD — partner at Hampton Family Dental in Southampton, PA, specializing in cosmetic dentistry, digital imaging, and dental implants.",
  alternates: {
    canonical: `${SITE_URL}/about/dr-keyur-dudhat`,
  },
  openGraph: {
    title: "Dr. Keyur Dudhat, DMD | Hampton Family Dental",
    description:
      "Meet Dr. Keyur Dudhat, DMD — partner at Hampton Family Dental in Southampton, PA, specializing in cosmetic dentistry, digital imaging, and dental implants.",
    url: `${SITE_URL}/about/dr-keyur-dudhat`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Keyur Dudhat, DMD | Hampton Family Dental",
    description:
      "Meet Dr. Keyur Dudhat, DMD — partner at Hampton Family Dental in Southampton, PA, specializing in cosmetic dentistry, digital imaging, and dental implants.",
  },
};

export default function DrDudhatBioPage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Keyur Dudhat, DMD",
    "jobTitle": "Dentist",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Hampton Family Dental",
      "alternateName": "Brenner Dental Group"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Penn State University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Temple University School of Dentistry"
      }
    ],
    "knowsAbout": [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Invisalign",
      "Clear Correct",
      "Advanced Imaging"
    ],
    "image": `${SITE_URL}/doctor-avatar.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "283 Second Street Pike, Suite 140",
      "addressLocality": "Southampton",
      "addressRegion": "PA",
      "postalCode": "18966",
      "addressCountry": "US"
    },
    "telephone": "+12153572224"
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
        "name": "About Us",
        "item": `${SITE_URL}/about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dr. Keyur Dudhat",
        "item": `${SITE_URL}/about/dr-keyur-dudhat`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <DrDudhatClient />
    </>
  );
}
