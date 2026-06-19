import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import WhyChooseUsClient from "./WhyChooseUsClient";

export const metadata: Metadata = {
  title: "Why Choose Hampton Family Dental in Southampton, PA",
  description:
    "Discover why Southampton families choose Hampton Family Dental — formerly Brenner Dental Group. Gentle, modern, all-in-one care. New patients welcome. (215) 357-2224.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/why-choose-us`,
  },
  openGraph: {
    title: "Why Choose Hampton Family Dental in Southampton, PA",
    description:
      "Discover why Southampton families choose Hampton Family Dental — formerly Brenner Dental Group. Gentle, modern, all-in-one care. New patients welcome. (215) 357-2224.",
    url: `${SITE_URL}/patient-information/why-choose-us`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Hampton Family Dental in Southampton, PA",
    description:
      "Discover why Southampton families choose Hampton Family Dental — formerly Brenner Dental Group. Gentle, modern, all-in-one care. New patients welcome. (215) 357-2224.",
  },
};

export default function WhyChooseUsPage() {
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
        "name": "Why Choose Us",
        "item": `${SITE_URL}/patient-information/why-choose-us`
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
      <WhyChooseUsClient />
    </>
  );
}
