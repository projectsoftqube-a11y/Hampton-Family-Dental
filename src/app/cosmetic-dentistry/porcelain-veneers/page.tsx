import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "Cosmetic Dentistry",
    title: "Porcelain Veneers in Southampton, PA",
    intro: "Correct cracks, gaps, chips, or severe discoloration instantly. Our custom porcelain veneers are handcrafted to bond securely to the front of your teeth, creating a symmetrical, bright, and stunning smile.",
    duration: "1–2 weeks",
    visits: "2 visits",
    image: "/images/service_veneers_1779858461216.webp",
    whatIs: {
      title: "What are Porcelain Veneers?",
      text: "Porcelain veneers are thin, custom-fabricated shells of dental ceramic designed to cover the front surface of your teeth. Veneers are an excellent option to address minor tooth alignment issues, cover chips or worn enamel, close gaps, and mask severe staining that does not respond to teeth whitening. They are highly durable, stain-resistant, and mimic the light-reflecting properties of natural enamel.",
    },
    benefits: [
      "Instantly corrects color, spacing, and minor alignment issues",
      "Stain-resistant porcelain keeps your smile bright for years",
      "Requires less tooth preparation than a dental crown",
      "Custom-crafted to match your facial shape & smile line",
    ],
    processSteps: [
      {
        title: "Tooth Preparation & Digital Impressions",
        text: "We gently remove a microscopic layer of enamel to ensure the veneers sit flush. We capture digital scans to design your customized veneers.",
      },
      {
        title: "Temporary Veneers Placement",
        text: "We fit temporary veneers to protect your teeth and let you preview your new smile while our dental laboratory fabricates your final porcelain shells.",
      },
      {
        title: "Bonding Your Veneers",
        text: "At your second visit, we remove the temporaries, test the fit and look of your final veneers, make minor adjustments, and bond them permanently in place.",
      },
    ],
    candidacy: {
      text: "Porcelain veneers are ideal for patients with healthy teeth and gums who want to correct cosmetic imperfections, minor chips, gaps, or severe staining.",
      checks: [
        "Chipped, worn, or cracked tooth edges",
        "Significant gaps or spacing issues",
        "Severe staining resistant to teeth whitening",
        "Healthy support bone structure and gums",
      ],
    },
    costInfo: {
      text: "Since veneers are considered an elective cosmetic procedure, they are generally not covered by dental insurance. We focus on durable materials that deliver long-lasting value.",
      financingNote: "We accept low-interest monthly financing through CareCredit, making your dream smile fit comfortably into your budget.",
    },
    faqs: [
      {
        q: "Are porcelain veneers permanent?",
        a: "Yes. Because a very thin layer of enamel must be reshaped to place veneers, the procedure is irreversible. With proper home care, veneers typically last between 10 and 15 years before needing replacement.",
      },
      {
        q: "Do porcelain veneers stain?",
        a: "No! High-quality dental porcelain is non-porous and highly resistant to staining. You can drink coffee, tea, and red wine without worrying about discoloring your new veneers.",
      },
    ],
    relatedServices: [
      { label: "Dental Bonding", href: "/cosmetic-dentistry/dental-bonding" },
      { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
      { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
    ],
    breadcrumbs: [
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Porcelain Veneers" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function PorcelainVeneersPage() {
  return <ServicePageTemplate {...data} />;
}
