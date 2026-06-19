import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import OurTeamClient from "./OurTeamClient";

export const metadata: Metadata = {
  title: {
    absolute: "Meet Our Team | Hampton Family Dental Southampton, PA"
  },
  description:
    "Meet the friendly team at Hampton Family Dental in Southampton, PA — experienced hygienists and a caring front-office team dedicated to your comfort.",
  alternates: {
    canonical: `${SITE_URL}/about/our-team`,
  },
  openGraph: {
    title: "Meet Our Team | Hampton Family Dental Southampton, PA",
    description:
      "Meet the friendly team at Hampton Family Dental in Southampton, PA — experienced hygienists and a caring front-office team dedicated to your comfort.",
    url: `${SITE_URL}/about/our-team`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Hampton Family Dental Southampton, PA",
    description:
      "Meet the friendly team at Hampton Family Dental in Southampton, PA — experienced hygienists and a caring front-office team dedicated to your comfort.",
  },
};

export default function OurTeamPage() {
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
        "name": "Our Team",
        "item": `${SITE_URL}/about/our-team`
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
      <OurTeamClient />
    </>
  );
}
