import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hampton Family Dental in Southampton, PA",
  description:
    "Get in touch with Hampton Family Dental. Call (215) 357-2224 to schedule your visit. We're located at 283 Second Street Pike, Suite 140, Southampton, PA.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Hampton Family Dental in Southampton, PA",
    description:
      "Get in touch with Hampton Family Dental. Call (215) 357-2224 to schedule your visit. We're located at 283 Second Street Pike, Suite 140, Southampton, PA.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    "name": "Hampton Family Dental",
    "alternateName": "Brenner Dental Group",
    "telephone": "+12153572224",
    "url": `${SITE_URL}/contact`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "283 Second Street Pike, Suite 140",
      "addressLocality": "Southampton",
      "addressRegion": "PA",
      "postalCode": "18966",
      "addressCountry": "US"
    },
    "openingHours": [
      "Mo 08:00-18:00",
      "Tu 08:00-16:00",
      "We 09:00-13:00",
      "Th 08:00-16:00"
    ],
    "areaServed": [
      "Southampton PA",
      "Richboro PA",
      "Warminster PA",
      "Newtown PA",
      "Holland PA",
      "Feasterville PA",
      "Huntingdon Valley PA"
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
        "name": "Contact Us",
        "item": `${SITE_URL}/contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <ContactClient />
    </>
  );
}
