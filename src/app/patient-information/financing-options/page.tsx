import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FinancingOptionsClient from "./FinancingOptionsClient";

export const metadata: Metadata = {
  title: "Dental Financing Options | Hampton Family Dental",
  description:
    "Flexible dental financing in Southampton, PA — CareCredit, monthly payment plans, and an in-house membership plan. Make treatment affordable. (215) 357-2224.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/financing-options`,
  },
  openGraph: {
    title: "Dental Financing Options | Hampton Family Dental",
    description:
      "Flexible dental financing in Southampton, PA — CareCredit, monthly payment plans, and an in-house membership plan. Make treatment affordable. (215) 357-2224.",
    url: `${SITE_URL}/patient-information/financing-options`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Financing Options | Hampton Family Dental",
    description:
      "Flexible dental financing in Southampton, PA — CareCredit, monthly payment plans, and an in-house membership plan. Make treatment affordable. (215) 357-2224.",
  },
};

export default function FinancingOptionsPage() {
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
        "name": "Patient Information",
        "item": `${SITE_URL}/patient-information`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Financing Options",
        "item": `${SITE_URL}/patient-information/financing-options`
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
      <FinancingOptionsClient />
    </>
  );
}
