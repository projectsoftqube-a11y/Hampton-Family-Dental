import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "General Dentistry",
    title: "Perio Protect Gum Therapy in Southampton, PA",
    intro: "Fight gum disease and chronic bad breath at home. Perio Protect uses custom-fitted dental trays to deliver antibiotic gel deep beneath the gumline, targeting bacteria that regular brushing and flossing cannot reach.",
    duration: "Varies (10–15 mins daily)",
    visits: "2 visits to start",
    image: "/images/about_storytelling_1779858491119.webp",
    whatIs: {
      title: "What is Perio Protect?",
      text: "Perio Protect is a non-invasive, doctor-prescribed treatment for gum disease (periodontitis). Conventional cleanings scale tartar from the surface, but bacteria quickly return to deep gum pockets. Perio Protect uses customized trays with a special seal that pushes a low-concentration hydrogen peroxide gel deep into these pockets. The gel kills bacteria, oxygenates the tissue, and helps gums heal naturally.",
    },
    benefits: [
      "Non-invasive treatment that reduces bleeding & inflammation",
      "Delivers antibiotics deep into pockets that scaling can&apos;t reach",
      "Naturally freshens breath and whitens teeth during treatment",
      "Short, convenient daily sessions in the comfort of your home",
    ],
    processSteps: [
      {
        title: "Digital Gum Pocket Measurement",
        text: "We evaluate your gums and measure your pocket depths. We then capture digital impressions to mold your custom trays.",
      },
      {
        title: "Fitting Your Custom Perio Trays",
        text: "Once the lab delivers your trays, we check the seal, demonstrate how to apply the peroxide gel, and define your daily schedule.",
      },
      {
        title: "Daily Home Treatment",
        text: "You wear the comfortable trays for just 10 to 15 minutes a day, letting the oxygenating gel clean and disinfect beneath the gums.",
      },
      {
        title: "Progress Evaluation",
        text: "We schedule follow-up checks to measure your pocket depths, verifying bleeding has resolved and gum tissue is healing.",
      },
    ],
    candidacy: {
      text: "Perio Protect is highly recommended for patients experiencing bleeding gums, early to advanced gum disease, or chronic bad breath.",
      checks: [
        "Bleeding gums when brushing or flossing",
        "Deep periodontal pockets (4mm or deeper)",
        "Chronic bad breath (halitosis) from bacteria",
        "Looking for a non-surgical gum disease treatment",
      ],
    },
    costInfo: {
      text: "The cost includes custom laboratory trays and prescription gel. While some dental insurance plans cover a portion of the trays, the treatment prevents major gum surgery costs.",
      financingNote: "Hampton Dental Wellness members get 15% off. CareCredit monthly payment options are accepted.",
    },
    faqs: [
      {
        q: "How does the gel work?",
        a: "The Perio Gel contains 1.7% hydrogen peroxide. When pushed into gum pockets by the custom trays, the peroxide releases oxygen. This kills the anaerobic bacteria responsible for gum disease, which cannot survive in oxygen-rich environments.",
      },
      {
        q: "Will this replace scaling and root planing?",
        a: "Perio Protect is often used alongside scaling and root planing (deep cleanings) to enhance healing. By keeping bacteria levels low at home, it ensures your gums heal faster and stay healthy.",
      },
    ],
    relatedServices: [
      { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
      { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
      { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Perio Protect" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function PerioProtectPage() {
  return <ServicePageTemplate {...data} />;
}
