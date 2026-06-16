import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function DentalFillingsPage() {
  const data = {
    eyebrow: "Restorative Dentistry",
    title: "Dental Fillings in Southampton, PA",
    intro: "Treat cavities and repair minor tooth decay or chips with our modern, metal-free composite dental fillings. Crafted from composite resin, these fillings match the shade of your teeth to preserve both structure and aesthetics.",
    duration: "30–60 minutes",
    visits: "1 visit",
    image: "/images/cosmetic_smile_1779858128482.webp",
    whatIs: {
      title: "What is a Composite Dental Filling?",
      text: "A dental filling is a restoration used to repair a tooth damaged by decay or wear. After removing the decayed structure, the cavity is cleaned and filled with a biocompatible resin. Unlike older silver amalgam fillings, composite resin bonds directly to your enamel, requiring less tooth structure removal and providing a completely natural appearance.",
    },
    benefits: [
      "Tooth-colored resin blends in invisibly",
      "Bonds directly to enamel, strengthening the tooth",
      "Requires less enamel removal than silver fillings",
      "Completely metal-free and mercury-free",
    ],
    processSteps: [
      {
        title: "Numbing & Prep",
        text: "We apply a localized numbing gel and anesthetic to ensure you do not feel anything. The decayed or soft tooth structure is gently cleaned away.",
      },
      {
        title: "Applying the Resin",
        text: "The composite resin is layered into the cavity. Each layer is cured and hardened instantly using a special dental curing light.",
      },
      {
        title: "Shaping & Polishing",
        text: "Once the cavity is filled, we shape the composite resin to match your natural bite alignment and polish it to a smooth, natural finish.",
      },
    ],
    candidacy: {
      text: "Composite fillings are perfect for treating mild to moderate cavities, replacing old failing fillings, or repairing minor cracks and chips.",
      checks: [
        "Mild to moderate cavities",
        "Sensitivities to cold/sweet due to decay",
        "Chipped or worn tooth edges",
        "Replacing dark, unsightly metal fillings",
      ],
    },
    costInfo: {
      text: "Most dental insurance policies cover between 80% and 100% of dental filling costs because they are considered a basic preventive restoration. Out-of-pocket costs are very low.",
      financingNote: "Hampton Dental Wellness members get 15% off. Flexible checkout payments are accepted.",
    },
    faqs: [
      {
        q: "How long after a filling can I eat?",
        a: "Since we cure the composite resin instantly with a specialized UV light, the filling is fully hardened when you leave. You can eat right away, though we recommend waiting until the numbness wears off to avoid biting your cheek.",
      },
      {
        q: "Should I replace my old metal fillings?",
        a: "If your silver fillings are cracked, leaking, or showing decay underneath, they should be replaced. If they are in good shape, we can discuss replacing them for cosmetic reasons.",
      },
    ],
    relatedServices: [
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
      { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
      { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Dental Fillings" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
