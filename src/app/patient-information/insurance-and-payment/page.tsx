import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import InsuranceAndPaymentClient from "./InsuranceAndPaymentClient";

export const metadata: Metadata = {
  title: "Insurance & Payment Options | Hampton Family Dental",
  description:
    "Hampton Family Dental in Southampton, PA accepts most major dental insurance and offers financing + a membership plan for patients without insurance. (215) 357-2224.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/insurance-and-payment`,
  },
  openGraph: {
    title: "Insurance & Payment Options | Hampton Family Dental",
    description:
      "Hampton Family Dental in Southampton, PA accepts most major dental insurance and offers financing + a membership plan for patients without insurance. (215) 357-2224.",
    url: `${SITE_URL}/patient-information/insurance-and-payment`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance & Payment Options | Hampton Family Dental",
    description:
      "Hampton Family Dental in Southampton, PA accepts most major dental insurance and offers financing + a membership plan for patients without insurance. (215) 357-2224.",
  },
};

export default function InsuranceAndPaymentPage() {
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
        "name": "Insurance & Payment",
        "item": `${SITE_URL}/patient-information/insurance-and-payment`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will you file claims with my dental PPO insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our administrative staff handles all the claims paperwork and submits them directly to your dental PPO carrier. We verify your insurance benefits before any major treatment begins, giving you an estimated breakdown of your coverage and estimated co-payments."
        }
      },
      {
        "@type": "Question",
        "name": "What payment options are available if I do not have dental insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For patients without dental insurance, we offer an in-house Dental Membership Plan covering annual preventive cleanings, exams, and X-rays at a discounted flat rate, plus 15% off other restorative procedures. We also accept CareCredit third-party financing for interest-free payment terms."
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
      <InsuranceAndPaymentClient />
    </>
  );
}
