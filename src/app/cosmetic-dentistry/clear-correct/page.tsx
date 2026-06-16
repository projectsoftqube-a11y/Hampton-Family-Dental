import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function ClearCorrectPage() {
  const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Clear Correct Orthodontic Aligners in Southampton, PA",
    intro: "Achieve a straight, aligned smile with Clear Correct. This advanced clear aligner system offers a comfortable, discreet, and cost-effective alternative to traditional braces and Invisalign.",
    duration: "6–18 months",
    visits: "Every 4–6 weeks",
    image: "/images/about_storytelling_1779858491119.webp",
    whatIs: {
      title: "What is Clear Correct?",
      text: "Clear Correct is an FDA-cleared clear aligner system used to straighten teeth. Made of a proprietary, highly stain-resistant plastic that is thinner and slightly firmer than other brands, Clear Correct aligners fit snugly and comfortably over your teeth. By wearing each custom-molded tray in sequence, your teeth are guided into alignment. They are fully removable for eating, brushing, and flossing.",
    },
    benefits: [
      "Ultra-thin, clear material is virtually invisible",
      "Removable to maintain optimal oral hygiene",
      "Cost-effective alternative for aligner treatment",
      "Highly stain-resistant and durable medical-grade plastic",
    ],
    processSteps: [
      {
        title: "3D Smile Scan & Planning",
        text: "We capture digital impressions and structural measurements of your teeth, planning the exact movements with Clear Correct mapping software.",
      },
      {
        title: "Fitting Your First Aligners",
        text: "We fit your initial Clear Correct aligners, place any necessary tiny attachments on your teeth to guide movement, and provide home instructions.",
      },
      {
        title: "Ongoing Swaps & Checkups",
        text: "You switch to a new set of aligner trays every 1 to 2 weeks, visiting us every 4 to 6 weeks for quick progress checks and new aligner trays.",
      },
      {
        title: "Retention Phase",
        text: "After alignment is complete, we supply custom clear retainers to preserve your straight teeth and prevent shifting.",
      },
    ],
    candidacy: {
      text: "Clear Correct is suitable for treating spacing issues, minor crowding, overbites, or crooked teeth in both teenagers and adults.",
      checks: [
        "Minor to moderate teeth crowding",
        "Spacing issues or gaps between teeth",
        "Discreet, wireless orthodontic option preferred",
        "Looking for a budget-friendly aligner alternative",
      ],
    },
    costInfo: {
      text: "Clear Correct is often more affordable than other aligner options. Many dental insurance plans with orthodontic benefits cover Clear Correct treatment.",
      financingNote: "We offer monthly payment plans and accept CareCredit to make clear aligner therapy accessible.",
    },
    faqs: [
      {
        q: "What is the difference between Clear Correct and Invisalign?",
        a: "Both systems use clear aligners to move teeth. Clear Correct aligners are slightly thinner and firmer, which some patients find more discrete. Clear Correct is also often more cost-effective.",
      },
      {
        q: "Can I drink coffee with my aligners in?",
        a: "No. You should always remove your aligners before drinking hot liquids (which can warp the plastic) or colored beverages (which can stain the aligners or trap sugars against your teeth). Only drink water with aligners in.",
      },
    ],
    relatedServices: [
      { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
      { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
      { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Clear Correct" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
