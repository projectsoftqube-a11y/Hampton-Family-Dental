import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";


const data = {
    eyebrow: "General Dentistry",
    title: "Emergency Dentist in Southampton, PA",
    intro: "Get relief from throbbing tooth pain, broken crowns, or dental trauma. We offer same-day emergency appointments during office hours and 24/7 phone support, ensuring you get help when you need it most.",
    duration: "30–60 minutes",
    visits: "Same-day visit",
    image: "/images/reception_area_1779858343255.webp",
    whatIs: {
      title: "What is Considered a Dental Emergency?",
      text: "A dental emergency is any condition that causes severe pain, uncontrolled bleeding, or threatens the permanent viability of a tooth. Common emergencies include knocked-out teeth, loose or fractured teeth, advanced dental abscesses (infections), lost fillings or crowns, and soft tissue trauma. Our team is fully equipped to diagnose the issue and provide immediate relief.",
    },
    benefits: [
      "Same-day pain relief and immediate stabilization",
      "Prevents the spread of serious dental infections",
      "Saves damaged or knocked-out teeth",
      "24/7 phone access for urgent care instructions",
    ],
    processSteps: [
      {
        title: "Call Our Emergency Line",
        text: "Contact us immediately at (215) 357-2224. Our coordinators will guide you through first-aid and schedule a same-day urgent visit.",
      },
      {
        title: "Rapid Diagnostic Exam",
        text: "When you arrive, we capture high-definition digital x-rays to locate the root cause of the pain or infection.",
      },
      {
        title: "Immediate Treatment & Pain Relief",
        text: "Dr. Brenner or Dr. Dudhat performs the necessary procedure—such as a temporary filling, root canal access, or extraction—to stop the pain.",
      },
      {
        title: "Long-Term Restoration Planning",
        text: "Once the acute pain is resolved, we discuss any follow-up treatments, like permanent crowns or implant placements, to restore your smile.",
      },
    ],
    candidacy: {
      text: "If you are experiencing swelling, throbbing pain, bleeding, or have had a tooth knocked loose, you need to see our emergency team immediately.",
      checks: [
        "Severe, throbbing tooth pain",
        "Swollen gums, face, or jaw",
        "Knocked-out, loose, or cracked tooth",
        "Lost fillings, crowns, or broken dentures",
      ],
    },
    costInfo: {
      text: "Emergency diagnostic exams are often covered by dental insurance. Our focus is to relieve pain and stabilize your tooth, keeping diagnostic costs clear and transparent.",
      financingNote: "We accept CareCredit for emergency costs and offer payment options to ensure pain relief is never delayed.",
    },
    faqs: [
      {
        q: "What should I do if a tooth is knocked out?",
        a: "Find the tooth, handle it only by the crown (chewing surface), and gently rinse it. Try to place it back in the socket. If that is not possible, keep it moist by storing it in a cup of milk or saliva, and get to our office within 1 hour.",
      },
      {
        q: "How do I handle a tooth abscess?",
        a: "An abscess is a serious bacterial infection that can cause swelling, fever, and severe pain. Do not squeeze or pop it. Rinse with warm salt water and call our office immediately for antibiotics or emergency root canal treatment.",
      },
    ],
    relatedServices: [
      { label: "Root Canal Treatment", href: "/restorative-dentistry/root-canal" },
      { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
      { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Emergency Dentistry" },
    ],
};

export const metadata = buildServicePageMetadata(data);

export default function EmergencyDentistryPage() {
  return <ServicePageTemplate {...data} />;
}
