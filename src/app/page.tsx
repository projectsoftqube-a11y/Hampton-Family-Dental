import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import TrustStats from "@/components/sections/TrustStats";
import WelcomeIntro from "@/components/sections/WelcomeIntro";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SmileGallery from "@/components/sections/SmileGallery";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Family Dentist in Southampton, PA | Hampton Family Dental",
  description:
    "Hampton Family Dental — formerly Brenner Dental Group — offers gentle family, cosmetic & emergency dentistry in Southampton, PA. New patients welcome. Call (215) 357-2224.",
  keywords: [
    "dentist southampton pa",
    "family dentist southampton",
    "dental implants southampton",
    "emergency dentist southampton",
    "invisalign southampton",
  ],
  openGraph: {
    title: "Family Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Gentle family, cosmetic & emergency dentistry in Southampton, PA. Formerly Brenner Dental Group. Now welcoming new patients.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Gentle family, cosmetic & emergency dentistry in Southampton, PA. Formerly Brenner Dental Group. Now welcoming new patients.",
  },
};

const homepageFaqs = [
  {
    question: "Where is Hampton Family Dental located?",
    answer:
      "Hampton Family Dental is located at 283 Second Street Pike, Suite 140, Southampton, PA 18966 — the same trusted location formerly known as Brenner Dental Group. We welcome patients from Southampton, Richboro, Warminster, Newtown, and the surrounding Bucks County area.",
  },
  {
    question: "Is Hampton Family Dental accepting new patients?",
    answer:
      "Yes! We are currently welcoming new patients of all ages. You can book your first visit online or call us at (215) 357-2224, and our team will guide you through the simple new-patient process.",
  },
  {
    question: "Is Hampton Family Dental the same as Brenner Dental Group?",
    answer:
      "Yes. Hampton Family Dental is the same practice and team, formerly known as Brenner Dental Group, at the same Southampton location. The name has changed, but our commitment to gentle, high-quality care remains the same, now with Dr. Jeffrey Brenner and Dr. Keyur Dudhat.",
  },
  {
    question: "Do you offer dental care if I don't have insurance?",
    answer:
      "Absolutely. Our In-Office Membership Plans are designed for patients without dental insurance, offering preventive care and meaningful discounts with no deductibles, no annual maximums, and no waiting periods. Visit our Specials page to learn more.",
  },
  {
    question: "Do you see dental emergencies the same day?",
    answer:
      "Yes — we keep room in our schedule for urgent care and offer same-day emergency appointments whenever possible. If you're in pain, call us right away at (215) 357-2224.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    name: "Hampton Family Dental",
    alternateName: "Brenner Dental Group",
    telephone: "+12153572224",
    url: SITE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "283 Second Street Pike, Suite 140",
      addressLocality: "Southampton",
      addressRegion: "PA",
      postalCode: "18966",
      addressCountry: "US",
    },
    openingHours: [
      "Mo 08:00-18:00",
      "Tu 08:00-16:00",
      "We 09:00-13:00",
      "Th 08:00-16:00"
    ],
    areaServed: [
      "Southampton",
      "Richboro",
      "Warminster",
      "Newtown",
      "Holland",
      "Feasterville",
      "Huntingdon Valley",
    ],
    sameAs: ["https://www.facebook.com/BrennerDentalGroup"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hampton Family Dental",
    url: SITE_URL,
    alternateName: "Brenner Dental Group",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <TrustBar />
      <WelcomeIntro />
      <Services />
      <About />
      <WhyChooseUs />
      <TrustStats />
      <SmileGallery />
      <Technology />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
    </main>
  );
}
