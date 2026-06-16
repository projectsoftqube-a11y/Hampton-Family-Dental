import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function SmileMakeoverPage() {
  const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Smile Makeovers in Southampton, PA",
    intro: "Rebuild, restore, and transform your entire smile. A smile makeover is a comprehensive, personalized plan combining multiple cosmetic and restorative treatments to achieve the symmetrical, radiant smile you have always wanted.",
    duration: "Varies (1–6 months)",
    visits: "Varies by plan",
    image: "/images/service_veneers_1779858461216.webp",
    whatIs: {
      title: "What is a Smile Makeover?",
      text: "A smile makeover is not a single treatment; it is a customized dental treatment plan designed to address all your cosmetic goals. Dr. Brenner and Dr. Dudhat evaluate your teeth alignment, spacing, color, shape, and gumline symmetry. Your plan may combine teeth whitening, porcelain veneers, dental implants, Invisalign, and bonding. Using advanced digital diagnostics, we plan the timeline and map out your transformation.",
    },
    benefits: [
      "Custom-tailored plan matching your facial structure and goals",
      "Combines multiple treatments for a comprehensive transformation",
      "Restores missing teeth and aligns crooked teeth",
      "Boosts self-confidence and youthfulness significantly",
    ],
    processSteps: [
      {
        title: "Aesthetic Design & 3D Scans",
        text: "We discuss your goals, capture digital x-rays, and use 3D scanners to design your custom smile line and plan your treatment sequence.",
      },
      {
        title: "Health Prep & Alignment",
        text: "We treat any underlying gum issues or cavities first. If alignment is needed, we start clear aligner therapy (Invisalign or Clear Correct).",
      },
      {
        title: "Restorations & Whitening",
        text: "We perform teeth whitening, place porcelain veneers, insert dental implants, or perform cosmetic bonding to complete your smile.",
      },
      {
        title: "Final Reveal & Adjustments",
        text: "We fit all restorations, verify your bite is comfortable, and polish the finished work to ensure a stunning, long-lasting smile.",
      },
    ],
    candidacy: {
      text: "A smile makeover is perfect for patients with multiple cosmetic concerns, such as missing, crooked, stained, chipped, or worn teeth.",
      checks: [
        "Multiple missing, chipped, or worn teeth",
        "Significant alignment, crowding, or spacing issues",
        "Severe, permanent staining resistant to bleaching",
        "Looking for a complete, life-changing smile upgrade",
      ],
    },
    costInfo: {
      text: "The cost depends on the specific treatments in your custom plan. While cosmetic services are usually elective, any restorative treatments (implants, crowns) may be covered by insurance.",
      financingNote: "We partner with CareCredit to offer low-interest monthly payments, making your smile transformation affordable.",
    },
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "The timeline depends on the treatments selected. If you only need veneers and teeth whitening, your makeover can be completed in 2 to 3 weeks. If Invisalign or implants are required, it may take 6 to 12 months.",
      },
      {
        q: "How do I maintain my smile makeover?",
        a: "Maintain excellent home oral hygiene (brushing and flossing twice daily), visit us every 6 months for professional cleanings, and wear a nightguard if you grind your teeth to protect your new porcelain restorations.",
      },
    ],
    relatedServices: [
      { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
      { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
      { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Smile Makeover" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
