import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import NewPatientsClient from "./NewPatientsClient";

export const metadata: Metadata = {
  title: "New Patients | Hampton Family Dental in Southampton, PA",
  description:
    "New patients welcome at Hampton Family Dental in Southampton, PA. Easy first visit, new-patient offers, most insurance accepted. Book today: (215) 357-2224.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/new-patients`,
  },
  openGraph: {
    title: "New Patients | Hampton Family Dental in Southampton, PA",
    description:
      "New patients welcome at Hampton Family Dental in Southampton, PA. Easy first visit, new-patient offers, most insurance accepted. Book today: (215) 357-2224.",
    url: `${SITE_URL}/patient-information/new-patients`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Patients | Hampton Family Dental in Southampton, PA",
    description:
      "New patients welcome at Hampton Family Dental in Southampton, PA. Easy first visit, new-patient offers, most insurance accepted. Book today: (215) 357-2224.",
  },
};

export default function NewPatientsPage() {
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
        "name": "New Patients",
        "item": `${SITE_URL}/patient-information/new-patients`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I bring to my first appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please bring a valid photo ID, your current dental insurance card (if applicable), and a list of any medications you are taking. If you have had recent dental X-rays taken at another office within the past year, please request to have them forwarded to our email address hello@hamptonfamilydental.com prior to your visit."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accept dental insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we accept and file claims with most major PPO dental insurance providers. Our administrative staff will perform a complimentary benefit check to verify your coverage and estimate your co-payments before any treatment begins."
        }
      },
      {
        "@type": "Question",
        "name": "What if I do not have dental insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We welcome patients without dental insurance! We offer a $149 New Patient Special which covers your comprehensive examination and diagnostic digital X-rays. For long-term care, you can enroll in our in-house Dental Membership Plan, which covers your annual preventive cleaning and offers significant discounts on restorative treatments."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <NewPatientsClient />
    </>
  );
}
