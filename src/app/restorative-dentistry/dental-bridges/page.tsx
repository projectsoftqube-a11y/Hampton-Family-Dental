import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "Restorative Dentistry",
    title: "Dental Bridges in Southampton, PA",
    intro: "Bridge the gap left by missing teeth with our custom porcelain dental bridges. A bridge restores your ability to chew and speak properly, prevents surrounding teeth from shifting, and completes your smile seamlessly.",
    duration: "1–2 weeks",
    visits: "2 visits",
    image: "/images/clinic_interior_1779858062605.webp",
    whatIs: {
      title: "What is a Dental Bridge?",
      text: "A dental bridge is a fixed dental restoration used to replace one or more missing teeth. It consists of two custom crowns placed on the anchor teeth (abutment teeth) on either side of the gap, with one or more artificial teeth (pontics) suspended between them. Once bonded into place, the bridge looks and functions like your natural teeth.",
    },
    benefits: [
      "Fills empty spaces naturally",
      "Restores normal chewing and speaking",
      "Prevents surrounding teeth from tilting or shifting",
      "Maintains natural facial contours",
    ],
    processSteps: [
      {
        title: "Preparing the Abutment Teeth",
        text: "The teeth on either side of the space are gently reshaped to act as supports for the bridge crowns. Digital scans are captured to design the bridge.",
      },
      {
        title: "Temporary Bridge Placement",
        text: "We fit a temporary bridge to protect the prepared teeth and gums while our dental lab constructs the final porcelain restoration.",
      },
      {
        title: "Bonding the Custom Bridge",
        text: "At your second visit, we fit the final bridge, check your bite and alignment, make any minor modifications, and cement it securely in place.",
      },
    ],
    candidacy: {
      text: "Bridges are an excellent choice for patients who are missing one or more consecutive teeth and have healthy anchor teeth adjacent to the gap.",
      checks: [
        "One or more missing consecutive teeth",
        "Healthy neighboring anchor teeth",
        "Good support bone structure",
        "Commitment to thorough flossing beneath the bridge",
      ],
    },
    costInfo: {
      text: "Dental bridges are generally covered by dental insurance up to 50% to 80% of the cost. They are a cost-effective alternative to implants when dental implants are not clinically viable.",
      financingNote: "Hampton Dental Wellness members get 15% off. CareCredit financing can cover out-of-pocket costs.",
    },
    faqs: [
      {
        q: "How do I clean under a dental bridge?",
        a: "Since the bridge is one solid piece, you cannot floss regularly between the artificial teeth. You will need to use a threader floss, interdental brushes, or a water flosser to clean beneath the bridge and protect the supporting teeth.",
      },
      {
        q: "What is the difference between a bridge and an implant?",
        a: "A bridge anchors to your existing teeth, requiring them to be reshaped. An implant is placed directly into the jawbone, leaving surrounding teeth untouched. Implants last longer but require a surgical procedure.",
      },
    ],
    relatedServices: [
      { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
      { label: "Dentures", href: "/restorative-dentistry/dentures" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Dental Bridges" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function DentalBridgesPage() {
  return <ServicePageTemplate {...data} />;
}
