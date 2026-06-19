import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import PatientReviewsClient from "./PatientReviewsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Patient Reviews | Hampton Family Dental Southampton, PA"
  },
  description:
    "Read what Southampton patients say about Hampton Family Dental — formerly Brenner Dental Group. Real reviews from real families. Book your visit: (215) 357-2224.",
  alternates: {
    canonical: `${SITE_URL}/about/patient-reviews`,
  },
  openGraph: {
    title: "Patient Reviews | Hampton Family Dental Southampton, PA",
    description:
      "Read what Southampton patients say about Hampton Family Dental — formerly Brenner Dental Group. Real reviews from real families. Book your visit: (215) 357-2224.",
    url: `${SITE_URL}/about/patient-reviews`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Reviews | Hampton Family Dental Southampton, PA",
    description:
      "Read what Southampton patients say about Hampton Family Dental — formerly Brenner Dental Group. Real reviews from real families. Book your visit: (215) 357-2224.",
  },
};

export default function PatientReviewsPage() {
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
        "name": "Patient Reviews",
        "item": `${SITE_URL}/about/patient-reviews`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PatientReviewsClient />
    </>
  );
}
