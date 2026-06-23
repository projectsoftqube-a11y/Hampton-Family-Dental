import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import SpecialsClient from "./SpecialsClient";

export const metadata: Metadata = {
  title: "New Patient Specials & Memberships | Hampton Family Dental",
  description:
    "No insurance? No problem! Explore our $149 new patient special, our affordable in-house membership plans, and flexible CareCredit financing at Hampton Family Dental.",
  alternates: {
    canonical: `${SITE_URL}/specials`,
  },
  openGraph: {
    title: "New Patient Specials & Memberships | Hampton Family Dental",
    description:
      "No insurance? No problem! Explore our $149 new patient special, our affordable in-house membership plans, and flexible CareCredit financing at Hampton Family Dental.",
    url: `${SITE_URL}/specials`,
    type: "website",
  },
};

export default function SpecialsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the In-House Dental Membership plan work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our In-House Dental Membership is a direct agreement between you and Hampton Family Dental. You pay a simple annual fee that completely covers your routine preventive care for the year—cleanings, exams, and x-rays—while providing significant discounts (up to 15%) on other restorative and cosmetic procedures. There are no deductibles, no waiting periods, and no annual maximums to worry about."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use CareCredit along with these specials or membership plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We proudly accept CareCredit, which offers flexible, interest-free financing options for your dental treatments. Whether you are using our $149 New Patient Special or getting 15% off a crown through our membership plan, you can finance the remaining balance with CareCredit to make your care easily affordable."
        }
      },
      {
        "@type": "Question",
        "name": "When can I start using my membership discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediately! There are absolutely no waiting periods with our In-House Membership plans. The moment you sign up, your preventive benefits are active, and you can immediately apply the 15% discount to any additional treatments you need on the same day."
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
        "name": "Specials",
        "item": `${SITE_URL}/specials`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SpecialsClient />
    </>
  );
}
