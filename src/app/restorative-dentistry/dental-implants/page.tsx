import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function DentalImplantsPage() {
  const data = {
    eyebrow: "Restorative Dentistry",
    title: "Dental Implants in Southampton, PA",
    intro: "Restore the complete look, strength, and functionality of missing teeth. Dental implants are biocompatible titanium posts that act as permanent anchors for premium crown restorations, protecting your jawbone and adjacent teeth.",
    duration: "3–6 months",
    visits: "3–4 visits",
    image: "/images/dentist_portrait_1779858109259.webp",
    whatIs: {
      title: "What is a Dental Implant?",
      text: "A dental implant is a titanium post surgically positioned into the jawbone beneath the gumline. Once integrated with the bone (a process called osseointegration), it serves as a stable mount for a custom-crafted replacement crown. This permanent solution prevents bone loss and looks, feels, and functions exactly like a natural tooth.",
    },
    benefits: [
      "Prevents bone loss & facial shifting",
      "Lasts a lifetime with proper care",
      "Restores full chewing power & clear speech",
      "Requires no grinding of adjacent teeth",
    ],
    processSteps: [
      {
        title: "Initial Consultation & 3D CBCT Mapping",
        text: "Dr. Dudhat utilizes our Cone Beam CT scanner to capture a high-resolution 3D map of your jawbone and plan the precise placement guide.",
      },
      {
        title: "Implant Post Placement",
        text: "The titanium post is carefully inserted into the bone under local anesthesia, ensuring a completely comfortable procedure.",
      },
      {
        title: "Osseointegration (Healing)",
        text: "Over the next 3 to 6 months, the bone heals and fuses around the post, establishing a rock-solid foundation.",
      },
      {
        title: "Abutment & Custom Crown placement",
        text: "An abutment is attached to the post, and a custom-colored porcelain crown is placed, completing your beautiful, natural smile.",
      },
    ],
    candidacy: {
      text: "Dental implants are ideal for patients with one or more missing teeth who have adequate bone density to support the posts and healthy gums.",
      checks: [
        "Adequate jawbone density",
        "Healthy gum tissues",
        "Commitment to good oral hygiene",
        "Non-smoker or willing to pause",
      ],
    },
    costInfo: {
      text: "Implants are a long-term investment. While they have a higher initial cost than bridges or dentures, their durability makes them highly cost-effective over time. Some dental insurance plans cover a portion of the crown or surgery.",
      financingNote: "Hampton Dental Wellness members get 15% off. Monthly payment options are available through CareCredit.",
    },
    faqs: [
      {
        q: "Is the dental implant procedure painful?",
        a: "Most patients experience very little discomfort. The surgery is performed under local anesthesia, meaning the area is completely numb. Over-the-counter pain relievers are usually sufficient for any post-procedure soreness.",
      },
      {
        q: "How long do dental implants last?",
        a: "With proper home care and regular professional checkups, the titanium implant post can last a lifetime. The custom crown on top may need replacement after 10 to 15 years due to normal wear.",
      },
      {
        q: "Am I too old for dental implants?",
        a: "No! As long as you are in good health and have sufficient bone density, age is not a factor. Many elderly patients choose implants to replace unstable dentures.",
      },
    ],
    relatedServices: [
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
      { label: "Dental Bridges", href: "/restorative-dentistry/dental-bridges" },
      { label: "Dentures", href: "/restorative-dentistry/dentures" },
    ],
    breadcrumbs: [
      { label: "Restorative Dentistry", href: "/restorative-dentistry" },
      { label: "Dental Implants" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
