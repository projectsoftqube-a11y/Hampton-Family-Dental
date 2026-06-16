import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function CheckupsAndXRaysPage() {
  const data = {
    eyebrow: "General Dentistry",
    title: "Dental Checkups & Digital X-Rays in Southampton, PA",
    intro: "Catch decay, fractures, and structural alignment issues early. Our comprehensive examinations and low-radiation digital x-rays provide a clear diagnostic look to protect your oral health and design a personalized care roadmap.",
    duration: "30–60 minutes",
    visits: "Every 6 months",
    image: "/images/service_general_1779858374972.webp",
    whatIs: {
      title: "What Happens During a Comprehensive Dental Exam?",
      text: "A regular dental checkup is your primary line of defense. Dr. Brenner or Dr. Dudhat will evaluate your teeth, check existing restorations for leaks or wear, inspect your gums for signs of disease, and perform a screening of your jaw joint (TMJ). Digital x-rays are captured to inspect bone health, scan beneath your gums, and check for decay hiding between your teeth.",
    },
    benefits: [
      "Catches cavities and tooth cracks before they cause pain",
      "Low-radiation digital scans are safe and instant",
      "Evaluates bite alignment & jaw joint health",
      "Monitors bone levels to prevent tooth loss",
    ],
    processSteps: [
      {
        title: "Digital X-Ray Diagnostic Scan",
        text: "We capture high-definition digital x-rays, exposing you to up to 80% less radiation than traditional film scans.",
      },
      {
        title: "Clinical Tooth Evaluation",
        text: "Dr. Brenner or Dr. Dudhat inspects every tooth, checking for cavities, cracks, or wear, and evaluating existing fillings or crowns.",
      },
      {
        title: "Gum & Bone Inspection",
        text: "We evaluate your gum pocket depths and inspect diagnostic bone levels on the digital x-rays to screen for periodontal disease.",
      },
      {
        title: "Consultation & Treatment Roadmap",
        text: "We sit down to review your diagnostic scans, discuss findings, answer your questions, and map out a personalized treatment plan.",
      },
    ],
    candidacy: {
      text: "Dental checkups and x-rays are essential for all patients, from young children to seniors, to prevent painful and costly dental issues.",
      checks: [
        "Essential for all family members",
        "Every 6 months to maintain oral health",
        "Experiencing cold sensitivity or jaw clicking",
        "First visit recommendation by age 1",
      ],
    },
    costInfo: {
      text: "Diagnostic checkups and x-rays are almost always covered at 100% by dental insurance, with no deductibles or co-pays.",
      financingNote: "Our in-house membership plans cover all exams and routine x-rays. New patients without insurance get our $149 Welcome Special.",
    },
    faqs: [
      {
        q: "Are digital dental X-rays safe?",
        a: "Yes! Digital x-rays expose you to negligible levels of radiation. They are up to 80% lower than traditional film x-rays and are completely safe. We also provide protective lead aprons for additional comfort.",
      },
      {
        q: "How often do I need dental X-rays?",
        a: "For healthy adult patients, we typically capture a basic set of bite-wing x-rays once a year. A full-mouth scan or panoramic x-ray is generally recommended every 3 to 5 years.",
      },
    ],
    relatedServices: [
      { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
      { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening" },
      { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Dental Checkups & X-Rays" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
