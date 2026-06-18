import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";

const data = {
  eyebrow: "Cosmetic Dentistry",
  title: "Invisalign in Southampton, PA",
  intro:
    "Straighten your smile without metal braces. Invisalign’s clear, removable aligners let you transform your smile discreetly — and Dr. Brenner and Dr. Dudhat make the process simple for teens and adults across Southampton, Richboro, Warminster, and Newtown.",
  duration: "6–18 months",
  visits: "Every 4–6 weeks",
  image: "/images/service_invisalign_1779858394769.webp",
  metadata: {
    title: "Invisalign in Southampton, PA | Clear Aligners | Hampton",
    description:
      "Straighten your smile discreetly with Invisalign clear aligners in Southampton, PA. Free consultations & flexible financing. Call Hampton Family Dental: (215) 357-2224.",
    keywords:
      "invisalign southampton pa, clear aligners southampton, invisalign cost, invisalign vs braces, teen invisalign, invisalign dentist southampton",
    canonical: "/cosmetic-dentistry/invisalign",
    openGraphTitle: "Invisalign in Southampton, PA | Hampton Family Dental",
    openGraphDescription:
      "Clear, removable aligners for teens & adults in Southampton, PA. Formerly Brenner Dental Group. Free consultation + financing.",
  },
  introBody: {
    text: "Dreaming of a straighter smile but dreading the look of metal braces? Invisalign in Southampton, PA offers a clear, comfortable alternative. At Hampton Family Dental — formerly Brenner Dental Group — we use Invisalign clear aligners to straighten teeth discreetly, so you can keep smiling with confidence throughout your treatment.",
    links: [
      { text: "Hampton Family Dental", href: "/cosmetic-dentistry" },
    ],
  },
  whatIs: {
    title: "What Is Invisalign?",
    text: "Invisalign is a modern teeth-straightening system that uses a series of clear, custom-made, removable aligners instead of metal brackets and wires. Each set gently shifts your teeth a little closer to their ideal position, and because the aligners are nearly invisible, most people won’t even notice you’re wearing them. Treatment is planned digitally from a 3D scan, so you can preview your final smile before you ever begin.",
    links: [
      { text: "Invisalign", href: "https://www.invisalign.com", external: true },
    ],
  },
  benefitsTitle: "Why Patients Love Invisalign",
  benefits: [
    "Nearly invisible — clear aligners let you straighten your smile discreetly, at work or in photos.",
    "Removable — take them out to eat, brush, and floss, so there are no food restrictions.",
    "More comfortable — smooth plastic instead of metal brackets that irritate your cheeks.",
    "Easier hygiene — brushing and flossing stay simple, supporting healthier gums during treatment.",
    "Fewer office visits — often more convenient than traditional braces.",
    "See your results early — digital planning previews your new smile before you begin.",
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
  comparison: {
    title: "Invisalign vs. Traditional Braces",
    intro: {
      text: "Both straighten teeth effectively — the right choice depends on your smile and lifestyle. Invisalign aligners are clear, removable, and comfortable, making them popular with adults and teens who want a discreet option. Traditional braces may be recommended for more complex cases. At your consultation, we’ll examine your teeth and honestly recommend the best fit for you.",
      links: [
        { text: "Invisalign aligners", href: "https://www.invisalign.com", external: true },
        { text: "Traditional braces", href: "https://aaoinfo.org", external: true },
      ],
    },
    columns: ["Feature", "Invisalign", "Traditional Braces"],
    rows: [
      ["Appearance", "Clear, nearly invisible", "Visible metal brackets & wires"],
      ["Removable", "Yes — for eating & cleaning", "No — fixed for the whole treatment"],
      ["Comfort", "Smooth plastic, no sharp edges", "Brackets can irritate cheeks/lips"],
      ["Food restrictions", "None — remove to eat", "Avoid hard, sticky, chewy foods"],
      ["Cleaning", "Brush & floss normally", "Special tools needed"],
      ["Office visits", "Every 4–6 weeks, brief", "Every 3–4 weeks for adjustments"],
      ["Best for", "Mild–moderate crowding, gaps, bite", "Complex bite & alignment cases"],
      ["Average time", "12–18 months", "18–24 months"],
    ],
  },
  candidacyBody: {
    title: "Who Is Invisalign For?",
    text: "Invisalign treats a wide range of orthodontic issues — crowded teeth, gaps, and many bite problems like overbite, underbite, and crossbite. It’s a popular choice for both adults who want a discreet option and teens with Invisalign Teen aligners. The best way to know if Invisalign is right for you or your child is a quick consultation with our team.",
    links: [
      { text: "Invisalign Teen", href: "https://www.invisalign.com", external: true },
      { text: "quick consultation", href: "/patient-information/scheduling" },
    ],
  },
  candidacy: {
    text: "Invisalign treats a wide range of orthodontic issues — crowded teeth, gaps, and many bite problems like overbite, underbite, and crossbite.",
    checks: [
      "Crowded or overlapping teeth",
      "Uneven gaps or spacing between teeth",
      "Mild to moderate overbites or underbites",
      "Looking for a discreet, wireless orthodontic option",
    ],
  },
  costBody: {
    title: "How Much Does Invisalign Cost in Southampton?",
    text: "The cost of Invisalign depends on how much movement your teeth need and how long your treatment takes. Because every smile is unique, we provide a clear, personalized quote at your consultation — with no guesswork. Many patients are pleasantly surprised by how affordable a straighter smile can be. To make treatment easier on your budget, we offer flexible monthly financing and accept CareCredit, and we’ll review any orthodontic coverage your dental insurance includes — including plans like Delta Dental. Members of our In-Office Membership Plans also receive 10% off orthodontic treatment.",
    links: [
      { text: "In-Office Membership Plans", href: "/specials" },
    ],
  },
  costInfo: {
    text: "The cost of Invisalign depends on how much movement your teeth need and how long your treatment takes.",
    financingNote:
      "To make treatment easier on your budget, we offer flexible monthly financing and accept CareCredit.",
  },
  faqs: [
    {
      q: "How much does Invisalign cost in Southampton, PA?",
      a: "Invisalign cost depends on the complexity and length of your treatment. We provide a personalized quote at your consultation and offer flexible monthly financing and CareCredit, plus 10% off for In-Office Membership Plan members. We’ll also check your insurance for any orthodontic coverage.",
    },
    {
      q: "How long does Invisalign take?",
      a: "Most Invisalign treatments take roughly 12 to 18 months, though simple cases can finish faster and complex ones may take longer. We’ll give you a clear timeline at your consultation based on your specific smile goals.",
    },
    {
      q: "Invisalign vs. braces — which is better?",
      a: "Both straighten teeth well. Invisalign is clear, removable, and comfortable — ideal for mild to moderate cases and patients who want a discreet option. Braces may be better for complex alignment. We’ll recommend the right fit at your consultation.",
    },
    {
      q: "Does insurance cover Invisalign? (Does Delta Dental cover Invisalign?)",
      a: "Many dental insurance plans include orthodontic benefits that help cover Invisalign, and we accept plans like Delta Dental. We’ll review your coverage with you and explain your options, including financing and membership-plan savings if you don’t have orthodontic coverage.",
    },
    {
      q: "Does Invisalign hurt?",
      a: "Invisalign is generally more comfortable than braces. You may feel mild pressure for a day or two when you switch to a new set of aligners — that’s a sign they’re working. There are no sharp brackets or wires to irritate your mouth.",
    },
    {
      q: "Can Invisalign fix an overbite?",
      a: "Yes — Invisalign can correct many bite issues, including overbite, underbite, and crossbite, along with crowding and gaps. We’ll confirm whether Invisalign is right for your case at your consultation.",
    },
    {
      q: "Can you eat with Invisalign?",
      a: "You remove your aligners to eat and drink anything other than water, so there are no food restrictions. Just brush before putting them back in, and rinse or brush your aligners to keep them clear and fresh.",
    },
    {
      q: "Is Invisalign good for teens?",
      a: "Absolutely. Invisalign Teen is designed specifically for younger patients and is a great fit for responsible teens who want a discreet, comfortable alternative to metal braces.",
    },
  ],
  faqTitle: "Invisalign in Southampton, PA — FAQs",
  schemaFaqs: [
    {
      q: "How much does Invisalign cost in Southampton, PA?",
      a: "Invisalign cost depends on the complexity and length of your treatment. We provide a personalized quote at your consultation and offer flexible monthly financing and CareCredit, plus 10% off for In-Office Membership Plan members. We'll also check your insurance for any orthodontic coverage.",
    },
    {
      q: "How long does Invisalign take?",
      a: "Most Invisalign treatments take roughly 12 to 18 months; simple cases finish faster and complex ones may take longer. We'll give you a clear timeline at your consultation.",
    },
    {
      q: "Invisalign vs. braces - which is better?",
      a: "Both straighten teeth well. Invisalign is clear, removable, and comfortable - ideal for mild to moderate cases. Braces may be better for complex alignment. We'll recommend the right fit at your consultation.",
    },
    {
      q: "Does insurance cover Invisalign?",
      a: "Many dental plans include orthodontic benefits that help cover Invisalign, and we accept plans like Delta Dental. We'll review your coverage and explain options, including financing and membership-plan savings.",
    },
    {
      q: "Does Invisalign hurt?",
      a: "Invisalign is generally more comfortable than braces. You may feel mild pressure for a day or two after switching aligners - a sign they're working. No sharp brackets or wires.",
    },
    {
      q: "Can Invisalign fix an overbite?",
      a: "Yes - Invisalign can correct many bite issues including overbite, underbite, and crossbite, along with crowding and gaps. We'll confirm if it's right for your case.",
    },
    {
      q: "Can you eat with Invisalign?",
      a: "You remove your aligners to eat and drink anything other than water, so there are no food restrictions. Brush before putting them back in and rinse your aligners to keep them fresh.",
    },
    {
      q: "Is Invisalign good for teens?",
      a: "Absolutely. Invisalign Teen is designed for younger patients and is a great fit for responsible teens who want a discreet, comfortable alternative to metal braces.",
    },
  ],
  medicalProcedureSchema: {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Invisalign Clear Aligners",
    "description":
      "Clear, removable aligners that straighten teeth and correct bite issues without metal braces, for teens and adults in Southampton, PA.",
    "provider": {
      "@type": "Dentist",
      "name": "Hampton Family Dental",
      "telephone": "+12153572224",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "283 Second Street Pike, Suite 140",
        "addressLocality": "Southampton",
        "addressRegion": "PA",
        "postalCode": "18966",
        "addressCountry": "US",
      },
      "areaServed": [
        "Southampton PA",
        "Richboro PA",
        "Warminster PA",
        "Newtown PA",
        "Holland PA",
        "Feasterville PA",
        "Huntingdon Valley PA",
      ],
    },
  },
  relatedServices: [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Clear Correct", href: "/cosmetic-dentistry/clear-correct" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
    { label: "Specials", href: "/specials" },
  ],
  externalLinks: [
    { label: "https://www.invisalign.com", href: "https://www.invisalign.com" },
    { label: "https://aaoinfo.org", href: "https://aaoinfo.org" },
  ],
  areasServedLine:
    "Providing Invisalign clear aligners for patients in Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA.",
  breadcrumbs: [
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
    { label: "Invisalign" },
  ],
};

export const metadata = buildServicePageMetadata(data);

export default function InvisalignPage() {
  return <ServicePageTemplate {...data} />;
}
