import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Dental Bonding in Southampton, PA",
    intro: "Correct chipped, cracked, decayed, or gapped teeth in a single visit. Dental bonding uses a tooth-colored composite resin to rebuild and reshape damaged teeth, delivering an immediate, natural-looking improvement.",
    duration: "30–60 minutes per tooth",
    visits: "1 visit",
    image: "/images/cosmetic_smile_1779858128482.webp",
    whatIs: {
      title: "What is Cosmetic Dental Bonding?",
      text: "Dental bonding is a fast, conservative cosmetic procedure. Unlike crowns or veneers, which require significant enamel removal and laboratory fabrication, dental bonding is performed directly in our office. Dr. Brenner or Dr. Dudhat applies a pliable, tooth-colored composite resin to your tooth, shapes it to correct imperfections, and hardens it using a specialized light. The material is then polished to match your natural enamel.",
    },
    benefits: [
      "Completed in a single visit with immediate results",
      "Requires minimal or no removal of natural tooth enamel",
      "Highly affordable cosmetic dental procedure",
      "Blends in invisibly with your natural teeth",
    ],
    processSteps: [
      {
        title: "Color Matching & Preparation",
        text: "We select a shade of composite resin that matches your tooth color. We gently etch the enamel surface to ensure a secure bond.",
      },
      {
        title: "Applying the Resin",
        text: "We apply a liquid bonding agent followed by the putty-like composite resin, molding and shaping it to correct chips or gaps.",
      },
      {
        title: "Light Curing",
        text: "Once the shape is perfected, we use a specialized curing light to harden the composite resin in seconds.",
      },
      {
        title: "Polishing & Refinement",
        text: "We refine the shape to match your bite and polish it to a smooth, natural sheen, making the restoration invisible.",
      },
    ],
    candidacy: {
      text: "Dental bonding is an excellent choice for patients with minor chips, small gaps, or slight tooth discoloration who want a quick, non-invasive fix.",
      checks: [
        "Chipped, cracked, or worn tooth edges",
        "Small gaps or spaces between front teeth",
        "Minor discoloration or spots on enamel",
        "Healthy teeth with sufficient support structure",
      ],
    },
    costInfo: {
      text: "Dental bonding is one of the most cost-effective cosmetic dental treatments. Some insurance plans cover bonding if it is performed to treat active decay or structural damage.",
      financingNote: "Hampton Dental Wellness members get 15% off treatments. We offer flexible checkout options.",
    },
    faqs: [
      {
        q: "How long does dental bonding last?",
        a: "Composite bonding is durable but not as strong as porcelain veneers or crowns. With good home care and regular cleanings, bonding typically lasts between 3 and 10 years before needing touch-ups or replacement.",
      },
      {
        q: "Does bonded resin stain?",
        a: "Yes. While resistant, composite resin is more porous than dental porcelain and can absorb stains over time. We recommend limiting coffee, tea, and tobacco, and maintaining regular cleanings to keep it bright.",
      },
    ],
    relatedServices: [
      { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
      { label: "Porcelain Veneers", href: "/cosmetic-dentistry/porcelain-veneers" },
      { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Dental Bonding" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function DentalBondingPage() {
  return <ServicePageTemplate {...data} />;
}
