import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function InvisalignPage() {
  const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Invisalign Clear Aligners in Southampton, PA",
    intro: "Straighten crowded teeth, eliminate gaps, and align your bite without brackets or wires. Invisalign clear aligners are virtually invisible, removable for dining, and custom-designed for a comfortable orthodontic experience.",
    duration: "6–18 months",
    visits: "Every 4–6 weeks",
    image: "/images/service_invisalign_1779858394769.webp",
    whatIs: {
      title: "How Does Invisalign Work?",
      text: "Invisalign replaces metal braces with a series of clear, BPA-free plastic aligner trays. Using advanced digital modeling, we map your entire teeth movement plan. Each set of trays is worn for about 1 to 2 weeks, applying gentle pressure to slide your teeth into place. Because they are removable, you can maintain excellent oral hygiene and enjoy your favorite foods without restriction.",
    },
    benefits: [
      "Nearly invisible aligners are highly discrete",
      "Removable for easy cleaning, brushing, and flossing",
      "No food restrictions or painful metal brackets",
      "Fewer office checkups than traditional metal braces",
    ],
    processSteps: [
      {
        title: "Digital Consultation & 3D Scanning",
        text: "We capture a fast, comfortable 3D digital scan of your teeth, showing you a preview of your final straight smile before starting.",
      },
      {
        title: "Custom Aligner Tray Delivery",
        text: "We fit your first sets of aligner trays, check their fit, place any necessary discrete anchors, and outline your daily schedule.",
      },
      {
        title: "Progress Checks & Aligner swaps",
        text: "You wear the aligners 20 to 22 hours a day. Every 4 to 6 weeks, you stop in for a brief checkup and pick up your next aligner sets.",
      },
      {
        title: "Smile Protection (Retainers)",
        text: "Once alignment is complete, we provide custom clear Vivera retainers to wear at night, keeping your teeth locked in place.",
      },
    ],
    candidacy: {
      text: "Invisalign is ideal for teenagers and adults looking to treat crowded teeth, gaps, overbites, underbites, or crossbites.",
      checks: [
        "Crowded or overlapping teeth",
        "Uneven gaps or spacing between teeth",
        "Mild to moderate overbites or underbites",
        "Looking for a discrete, wireless orthodontic option",
      ],
    },
    costInfo: {
      text: "Invisalign costs are comparable to traditional metal braces. Many dental insurance plans with orthodontic coverage cover a significant portion of Invisalign therapy.",
      financingNote: "We offer monthly payment plans and accept CareCredit to make Invisalign fit comfortably into your budget.",
    },
    faqs: [
      {
        q: "How many hours a day do I need to wear aligners?",
        a: "To ensure your teeth move on schedule, you must wear your Invisalign aligners for 20 to 22 hours a day. Only remove them to eat, drink anything other than water, and brush your teeth.",
      },
      {
        q: "Does Invisalign therapy hurt?",
        a: "You will feel pressure and mild soreness for the first day or two after switching to a new set of trays. This is normal and means your teeth are moving. It is much gentler than tightening metal braces.",
      },
    ],
    relatedServices: [
      { label: "Clear Correct", href: "/cosmetic-dentistry/clear-correct" },
      { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
      { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Invisalign" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
