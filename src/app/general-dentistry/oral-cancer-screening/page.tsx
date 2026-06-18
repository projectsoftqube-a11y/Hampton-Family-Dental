import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "General Dentistry",
    title: "Oral Cancer Screenings in Southampton, PA",
    intro: "Protect your long-term health with routine, non-invasive oral cancer screenings. Performed during your regular checkup, this simple exam identifies tissue changes early when treatment is most successful.",
    duration: "5 minutes",
    visits: "Every 6 months (during checkup)",
    image: "/images/service_general_1779858374972.webp",
    whatIs: {
      title: "What is an Oral Cancer Screening?",
      text: "An oral cancer screening is a short, visual, and physical examination to identify early signs of precancerous or cancerous conditions in your mouth. Dr. Brenner or Dr. Dudhat checks your lips, tongue, inner cheeks, roof of the mouth, throat, and feels the lymph nodes in your neck. Identifying tissue abnormalities early is critical for successful clinical treatment.",
    },
    benefits: [
      "Finds tissue changes early before they are visible to you",
      "Completely non-invasive, quick, and pain-free",
      "Provides peace of mind during your routine checkup",
      "Improves treatment success rates significantly",
    ],
    processSteps: [
      {
        title: "Visual Tissue Inspection",
        text: "Using a dental light and mirror, we inspect the lining of your mouth, gums, tongue, throat, and tonsils for red or white patches, ulcers, or swelling.",
      },
      {
        title: "Physical Palpation",
        text: "We gently feel your jaw, neck, lymph nodes, and underneath your tongue to check for abnormal lumps, nodules, or tender areas.",
      },
      {
        title: "Diagnostic Follow-Up (If Needed)",
        text: "If we locate an unusual patch of tissue, we may capture a small swab biopsy or schedule a follow-up check in two weeks to see if the area heals.",
      },
    ],
    candidacy: {
      text: "Oral cancer screenings are recommended for all adults, particularly those with risk factors like tobacco use, heavy alcohol consumption, or history of sun exposure.",
      checks: [
        "Adults of all ages, especially over 40",
        "Patients who use cigarettes, cigars, or chewing tobacco",
        "Patients with heavy alcohol consumption habits",
        "Individuals with significant lip exposure to sunlight",
      ],
    },
    costInfo: {
      text: "We include oral cancer screenings as a standard part of our comprehensive exams, ensuring they are fully covered by dental insurance with no extra fees.",
      financingNote: "Our in-house membership plans cover these screening exams as part of your bi-annual diagnostic visits.",
    },
    faqs: [
      {
        q: "What does an abnormal screening result mean?",
        a: "An abnormal result does not automatically mean cancer. Most tissue changes are caused by minor mouth trauma, biting your cheek, or temporary sores. We simply monitor the area or test it to be absolutely sure.",
      },
      {
        q: "How can I lower my risk of oral cancer?",
        a: "You can lower your risk by avoiding tobacco products, consuming alcohol in moderation, applying UV-protective lip balm outdoors, and visiting us every 6 months for professional screenings.",
      },
    ],
    relatedServices: [
      { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
      { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
      { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Oral Cancer Screening" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function OralCancerScreeningPage() {
  return <ServicePageTemplate {...data} />;
}
