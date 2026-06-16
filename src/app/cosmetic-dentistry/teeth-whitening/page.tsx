import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function TeethWhiteningPage() {
  const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Teeth Whitening in Southampton, PA",
    intro: "Brighten your smile up to 8 shades in a single visit. We offer professional, clinical-grade teeth whitening treatments that lift stubborn stains from coffee, tea, wine, and aging, safely and comfortably.",
    duration: "60 minutes",
    visits: "1 visit",
    image: "/images/service_whitening_1779858413749.webp",
    whatIs: {
      title: "Why Choose Professional Teeth Whitening?",
      text: "Over-the-counter whitening strips and toothpastes can take weeks to show results and often cause severe tooth sensitivity. Our professional teeth whitening treatments utilize a concentrated, clinically safe bleaching gel activated by a specialized curing light. This process penetrates deep into enamel to break up stains instantly, while our custom barrier gels protect your gums from irritation.",
    },
    benefits: [
      "Brightens teeth up to 8 shades in just one hour",
      "Safe, clinically monitored gel protects gums",
      "Far more effective than over-the-counter strips",
      "Includes take-home touch-up kits for long-lasting results",
    ],
    processSteps: [
      {
        title: "Shade Analysis & Preparation",
        text: "We record your starting tooth shade and place a protective barrier over your lips and gums to expose only your teeth.",
      },
      {
        title: "Applying the Whitening Gel",
        text: "We apply the clinical-grade hydrogen peroxide whitening gel to the front surfaces of your teeth.",
      },
      {
        title: "Light Activation",
        text: "We position our specialized whitening light over your teeth to activate the gel. This is done in three 15-minute cycles.",
      },
      {
        title: "Rinse & Reveal",
        text: "We rinse away the gel, apply a desensitizing paste, and measure your new, bright shade. Your smile is instantly transformed.",
      },
    ],
    candidacy: {
      text: "Professional teeth whitening is ideal for patients with healthy teeth and gums who want to remove extrinsic stains caused by food, drinks, or aging.",
      checks: [
        "Extrinsic stains from coffee, tea, tobacco, or wine",
        "Dull or yellowed teeth due to aging",
        "Healthy teeth with no active cavities or gum disease",
        "Looking for a fast, dramatic smile upgrade",
      ],
    },
    costInfo: {
      text: "Teeth whitening is a cosmetic procedure and is generally not covered by insurance. It is one of the most affordable and impactful cosmetic dental treatments available.",
      financingNote: "We accept CareCredit monthly financing. Ask about our periodic seasonal whitening specials.",
    },
    faqs: [
      {
        q: "Will whitening make my teeth sensitive?",
        a: "Some patients experience temporary sensitivity to hot or cold for 24 to 48 hours after treatment. We use advanced gels with built-in desensitizing agents and apply a soothing treatment immediately after to minimize discomfort.",
      },
      {
        q: "How long do teeth whitening results last?",
        a: "Results typically last between 1 and 3 years, depending on your lifestyle. You can extend your results by practicing good oral hygiene, avoiding staining foods and drinks, and using our custom take-home touch-up kits.",
      },
      {
        q: "Does whitening work on crowns or veneers?",
        a: "No. Whitening gels only work on natural tooth structure. They will not change the color of porcelain crowns, veneers, bonding, or dentures. We recommend whitening your natural teeth before receiving these restorations.",
      },
    ],
    relatedServices: [
      { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
      { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
      { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Teeth Whitening" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
