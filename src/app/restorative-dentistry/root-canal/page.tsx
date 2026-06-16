import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function RootCanalPage() {
  const data = {
    eyebrow: "Restorative Dentistry",
    title: "Root Canal Treatment in Southampton, PA",
    intro: "Save an infected, painful, or deeply decayed tooth from extraction. Modern root canal therapy is a highly routine, comfortable procedure that clears away dental infections, eliminates toothaches, and preserves your natural smile.",
    duration: "60–90 minutes",
    visits: "1–2 visits",
    image: "/images/reception_area_1779858343255.webp",
    whatIs: {
      title: "What is Root Canal Therapy?",
      text: "Inside every tooth is a chamber containing pulp, which holds nerves and blood vessels. When decay or trauma reaches this area, the pulp becomes infected, causing intense pain. Root canal therapy involves opening the tooth, removing the infected pulp, cleaning and sterilizing the canals, and sealing them to prevent reinfection. The tooth is then typically protected with a crown.",
    },
    benefits: [
      "Instantly stops severe tooth pain & sensitivity",
      "Saves your natural tooth from extraction",
      "Prevents the spread of bone & gum infections",
      "Virtually pain-free, similar to a regular filling",
    ],
    processSteps: [
      {
        title: "Infection Diagnostics & Numbing",
        text: "We capture high-definition digital x-rays to locate the infection. We then apply local anesthesia to ensure you are completely comfortable and feel no pain.",
      },
      {
        title: "Cleaning the Canals",
        text: "A small entry is created in the crown to access the pulp. We clean out the infected tissue, reshape the canal walls, and sterilize the area.",
      },
      {
        title: "Sealing the canals",
        text: "The sterile canal space is filled with a biocompatible rubber-like material (gutta-percha) and sealed with a temporary dental filling.",
      },
      {
        title: "Final Crown Restoration",
        text: "Because removing the pulp makes the tooth brittle, we recommend returning in a week or two to have a custom dental crown bonded for protection.",
      },
    ],
    candidacy: {
      text: "Root canals are required when decay or cracks have reached the inner nerve, causing persistent throbbing pain, swelling, or extreme sensitivity to hot/cold.",
      checks: [
        "Severe, persistent toothaches",
        "Extreme sensitivity to hot and cold",
        "Swelling or tenderness in surrounding gums",
        "Dark discoloration of a single tooth",
      ],
    },
    costInfo: {
      text: "Saves a tooth, avoiding the higher costs associated with extraction and replacing it with an implant. Most dental insurances cover root canals under basic or major procedures.",
      financingNote: "Hampton Dental Wellness members save 15%. Flexible monthly payments are available through CareCredit.",
    },
    faqs: [
      {
        q: "Does a root canal hurt?",
        a: "No! Root canals do not cause pain—they relieve it. With modern anesthetics, you will feel no more discomfort than you would during a routine cavity filling. Most patients report instant relief once the procedure is complete.",
      },
      {
        q: "How long does it take a root canal to heal?",
        a: "You may experience mild sensitivity in the jaw or surrounding gums for a few days after the procedure. Over-the-counter anti-inflammatories are usually enough to manage this.",
      },
    ],
    relatedServices: [
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
      { label: "Emergency Dentistry", href: "/general-dentistry/emergency-dentistry" },
      { label: "Dental Fillings", href: "/restorative-dentistry/dental-fillings" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Root Canal Treatment" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
