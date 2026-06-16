import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function DentalCrownsPage() {
  const data = {
    eyebrow: "Restorative Dentistry",
    title: "Dental Crowns in Southampton, PA",
    intro: "Protect, strengthen, and restore teeth damaged by severe decay, cracks, or wear. Our custom dental crowns are crafted from premium dental ceramics to blend seamlessly with your smile and restore full biting strength.",
    duration: "1–2 weeks",
    visits: "2 visits",
    image: "/images/service_veneers_1779858461216.webp",
    whatIs: {
      title: "What is a Dental Crown?",
      text: "A dental crown (often called a cap) is a custom-fitted restoration that covers the entire visible portion of a damaged tooth. It reinforces the remaining tooth structure, prevents further fractures, and restores a natural, healthy appearance. Crowns are also used to top dental implants and protect teeth that have undergone root canal treatment.",
    },
    benefits: [
      "Restores structural strength & function",
      "Matches the exact color & contour of your teeth",
      "Protects weakened teeth from fracturing",
      "Stain-resistant and durable porcelain",
    ],
    processSteps: [
      {
        title: "Tooth Preparation & Digital Impressions",
        text: "The tooth is gently reshaped to accommodate the crown. We capture highly accurate digital impressions—no messy molds required.",
      },
      {
        title: "Temporary Crown Fitting",
        text: "A comfortable temporary crown is placed to protect the prepared tooth while our laboratory custom-crafts your permanent restoration.",
      },
      {
        title: "Final Crown Placement",
        text: "At your second visit, we remove the temporary, test the fit and color of your custom ceramic crown, and bond it securely in place.",
      },
    ],
    candidacy: {
      text: "Dental crowns are recommended for patients who have advanced decay, large cracked fillings, broken teeth, or who have recently received root canals.",
      checks: [
        "Severe tooth decay or fractures",
        "Large, failing silver fillings",
        "Post-root canal protection",
        "Aesthetic improvements for misshapen teeth",
      ],
    },
    costInfo: {
      text: "The cost of a crown depends on the materials selected. Most dental insurance policies cover up to 50% to 80% of dental crown treatments when medically necessary.",
      financingNote: "Hampton Dental Wellness members get 15% off. CareCredit financing can cover out-of-pocket costs.",
    },
    faqs: [
      {
        q: "What is the difference between a filling and a crown?",
        a: "A filling is used to repair small cavities by packing material directly into the tooth. A crown is required when the damage is too extensive for a filling, wrapping around the entire tooth to hold it together.",
      },
      {
        q: "How long do dental crowns last?",
        a: "With good oral hygiene (regular brushing and flossing) and professional checkups, a high-quality ceramic crown can last between 10 and 15 years, and often much longer.",
      },
    ],
    relatedServices: [
      { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
      { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
      { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Dental Crowns" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
