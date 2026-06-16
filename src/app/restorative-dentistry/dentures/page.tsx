import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function DenturesPage() {
  const data = {
    eyebrow: "Restorative Dentistry",
    title: "Full & Partial Dentures in Southampton, PA",
    intro: "Restore your smile and reclaim your quality of life with our premium, custom-fitted dentures. Our dentures are designed to fit comfortably, support your facial structure, and blend naturally with your appearance.",
    duration: "3–6 weeks",
    visits: "4–5 visits",
    image: "/images/about_storytelling_1779858491119.webp",
    whatIs: {
      title: "What are Modern Dentures?",
      text: "Dentures are removable dental appliances used to replace missing teeth and surrounding tissues. **Full dentures** are used when all teeth in an arch are missing, sitting comfortably on the gum tissue. **Partial dentures** are used when some natural teeth remain, anchoring to existing structures using discrete clasps. Modern materials ensure they are lightweight, comfortable, and look highly realistic.",
    },
    benefits: [
      "Restores your ability to chew and speak normally",
      "Supports lips & cheeks, preventing facial sagging",
      "Custom-shaded to match your natural gums & teeth",
      "Cost-effective solution for multiple missing teeth",
    ],
    processSteps: [
      {
        title: "Initial Consultation & Scans",
        text: "We evaluate your gums and remaining teeth. We capture highly detailed impressions to map your mouth.",
      },
      {
        title: "Bite Registration & Wax Model Mockups",
        text: "We measure your jaw alignment and create wax models of your dentures, allowing you to preview the fit, shape, and tooth color.",
      },
      {
        title: "Fitting & Adjustments",
        text: "Once the lab constructs the final dentures, we place them, check for sore spots, adjust bite alignment, and ensure maximum comfort.",
      },
      {
        title: "Follow-Up Tune-Ups",
        text: "As you get used to chewing and speaking, we schedule brief checks to perform minor adjustments and polish your dentures.",
      },
    ],
    candidacy: {
      text: "Dentures are ideal for patients who have lost many or all of their teeth due to decay, gum disease, or trauma, and are looking for a reliable, non-surgical restoration.",
      checks: [
        "Significant or total tooth loss in an arch",
        "Healthy gum tissues and jawbone ridge support",
        "Looking for a cost-effective, non-surgical option",
        "Replacing worn-out, unstable existing dentures",
      ],
    },
    costInfo: {
      text: "Dentures are a highly affordable restoration for extensive tooth loss. Most insurance policies cover partial and full dentures under major restorative benefits (typically 50%).",
      financingNote: "Hampton Dental Wellness members get 15% off. CareCredit financing can break payments into low monthly installments.",
    },
    faqs: [
      {
        q: "How long does it take to get used to dentures?",
        a: "It usually takes 4 to 8 weeks to feel comfortable eating and speaking. We recommend starting with soft foods cut into small pieces and practicing reading aloud to train your tongue.",
      },
      {
        q: "Can I sleep with my dentures in?",
        a: "We highly recommend removing your dentures at night. This allows your gums and bone tissues to rest and breathe, preventing fungal infections and keeping your mouth healthy.",
      },
      {
        q: "What is an implant-supported denture?",
        a: "We can place 2 to 4 dental implants in your jawbone and snap your denture onto them. This keeps the denture completely locked into place, eliminating slipping and the need for adhesives.",
      },
    ],
    relatedServices: [
      { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
      { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Dentures" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
