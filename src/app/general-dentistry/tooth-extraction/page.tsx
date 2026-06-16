import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function ToothExtractionPage() {
  const data = {
    eyebrow: "General Dentistry",
    title: "Tooth Extractions in Southampton, PA",
    intro: "Remove damaged, decayed, or crowded teeth safely and comfortably. Dr. Brenner and Dr. Dudhat perform gentle tooth extractions, including wisdom teeth removals, utilizing advanced local anesthetics and comfortable care practices.",
    duration: "45–90 minutes",
    visits: "1 visit",
    image: "/images/about_storytelling_1779858491119.webp",
    whatIs: {
      title: "When is a Tooth Extraction Necessary?",
      text: "While our primary goal is always to preserve your natural teeth, sometimes extraction is the healthiest option for your overall smile. Extractions are required when a tooth is severely fractured, has advanced decay that cannot be treated with a root canal, suffers from advanced periodontal bone loss, or when wisdom teeth are impacted and crowding other teeth. We prioritize your comfort throughout the process.",
    },
    benefits: [
      "Stops chronic tooth pain and prevents infections from spreading",
      "Eliminates crowding and prepares jaws for orthodontics",
      "Prevents damage to adjacent teeth from impacted wisdom teeth",
      "Performs extractions under local anesthesia for a painless procedure",
    ],
    processSteps: [
      {
        title: "X-Ray Assessment",
        text: "We capture high-definition digital x-rays to examine the tooth roots, bone density, and plan the extraction route.",
      },
      {
        title: "Local Anesthesia Numbing",
        text: "We administer local anesthesia to completely numb the area, ensuring you feel pressure but no pain during the extraction.",
      },
      {
        title: "Gentle Tooth Removal",
        text: "Using specialized dental instruments, the tooth is carefully freed from the socket and gently removed to protect surrounding bone.",
      },
      {
        title: "Healing & Aftercare Guidance",
        text: "We place sterile gauze to encourage clotting and provide detailed instructions for home care (soft diet, no straws) to ensure a rapid recovery.",
      },
    ],
    candidacy: {
      text: "Tooth extraction is recommended when structural damage is too severe to save, or when wisdom teeth are impacted and causing gum swelling.",
      checks: [
        "Severe tooth decay beyond restoration",
        "Deep tooth fractures below the gumline",
        "Impacted or painful wisdom teeth",
        "Advanced periodontal bone loss",
      ],
    },
    costInfo: {
      text: "Simple and surgical extractions are covered under basic or major dental insurance benefits, typically covering between 50% and 80% of the cost.",
      financingNote: "Hampton Dental Wellness members get 15% off. Flexible monthly payment options are available through CareCredit.",
    },
    faqs: [
      {
        q: "What is a dry socket and how do I prevent it?",
        a: "A dry socket occurs when the protective blood clot in the empty socket dislodges prematurely, exposing bone and nerves. You can prevent this by avoiding straws, smoking, spitting, or strenuous exercise for 48 hours after extraction.",
      },
      {
        q: "Do I need to replace an extracted tooth?",
        a: "Except for wisdom teeth, we highly recommend replacing extracted teeth. Gaps can cause surrounding teeth to drift, resulting in bite misalignment and bone loss. We can replace them with dental implants, bridges, or partial dentures.",
      },
    ],
    relatedServices: [
      { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
      { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
      { label: "Dentures", href: "/restorative-dentistry/dentures" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Tooth Extraction" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
