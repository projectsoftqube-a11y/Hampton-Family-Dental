import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import EmergencySchedulingClient from "./EmergencySchedulingClient";

export const metadata: Metadata = {
  title: "Same-Day Emergency Dental Appointments | Southampton, PA",
  description:
    "Need a same-day dentist in Southampton, PA? Hampton Family Dental reserves time daily for dental emergencies. Call (215) 357-2224 now for fast relief.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/emergency-scheduling`,
  },
  openGraph: {
    title: "Same-Day Emergency Dental Appointments | Southampton, PA",
    description:
      "Need a same-day dentist in Southampton, PA? Hampton Family Dental reserves time daily for dental emergencies. Call (215) 357-2224 now for fast relief.",
    url: `${SITE_URL}/patient-information/emergency-scheduling`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day Emergency Dental Appointments | Southampton, PA",
    description:
      "Need a same-day dentist in Southampton, PA? Hampton Family Dental reserves time daily for dental emergencies. Call (215) 357-2224 now for fast relief.",
  },
};

export default function EmergencySchedulingPage() {
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
        "name": "Emergency Scheduling",
        "item": `${SITE_URL}/patient-information/emergency-scheduling`
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
      <EmergencySchedulingClient />
    </>
  );
}
