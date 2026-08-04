// ── Blog registry ──
// Single source of truth for the /blog listing and every /blog/[slug] detail page.
// Adding a post = appending one `BlogPost` object here. No new components needed.

export interface BlogLink {
  /** Exact substring of the surrounding copy that becomes the anchor. */
  text: string;
  href: string;
  external?: boolean;
}

export interface BlogRichText {
  text: string;
  links?: BlogLink[];
}

export type BlogSection =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string; links?: BlogLink[] }
  | {
      type: "list";
      variant: "check" | "plus";
      items: BlogRichText[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    }
  /** Semantic <table> — cost data stays machine-extractable for AI surfaces. */
  | {
      type: "table";
      columns: string[];
      rows: string[][];
      caption?: string;
    }
  | { type: "cta"; heading: string; text: string };

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> — kept shorter than the H1 on purpose. */
  metaTitle: string;
  metaDescription: string;
  /** Listing-card summary. */
  excerpt: string;
  category: string;
  /** ISO date — drives <time> and schema datePublished. */
  publishedAt: string;
  readTime: string;
  reviewedBy: string;
  /** Shown beside the reviewer on YMYL posts whose figures can go stale. */
  lastReviewedLabel?: string;
  hero: { src: string; alt: string; width: number; height: number };
  /** 40–70 word answer-first block rendered above the first H2. */
  answerBox: BlogRichText;
  keyTakeaways: BlogRichText[];
  sections: BlogSection[];
  /** Visible FAQ — mirrored verbatim into FAQPage schema. */
  faqs: BlogFAQ[];
  /** Extra JSON-LD emitted alongside BlogPosting / FAQPage / BreadcrumbList. */
  extraSchema?: Record<string, unknown>[];
}

const dentistSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Hampton Family Dental",
  alternateName: "formerly Brenner Dental Group",
  url: "https://www.hamptonfamilydentist.com/",
  telephone: "+1-215-357-2224",
  address: {
    "@type": "PostalAddress",
    streetAddress: "283 Second Street Pike, Suite 140",
    addressLocality: "Southampton",
    addressRegion: "PA",
    postalCode: "18966",
    addressCountry: "US",
  },
  areaServed: [
    "Southampton PA",
    "Holland PA",
    "Richboro PA",
    "Warminster PA",
    "Newtown PA",
    "Feasterville PA",
    "Huntingdon Valley PA",
    "Churchville PA",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.brennerdentalgroup.com/",
    "https://www.facebook.com/BrennerDentalGroup",
  ],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "brenner-dental-group-is-now-hampton-family-dental",
    title:
      "Brenner Dental Group Is Now Hampton Family Dental: What's New (and What's Not)",
    metaTitle: "Brenner Dental Group Is Now Hampton Family Dental",
    metaDescription:
      "Brenner Dental Group is now Hampton Family Dental — same Southampton, PA location, same phone, same team led by Dr. Brenner. Here's what changed (and what didn't).",
    excerpt:
      "Same practice, same Southampton office, same phone number — only the name and website changed. Here's exactly what stays the same for current patients, and what's new.",
    category: "Practice News",
    publishedAt: "2026-07-29",
    readTime: "5 min read",
    reviewedBy: "Dr. Jeffrey Brenner, DMD",
    hero: {
      src: "/images/blog/brenner-dental-group-is-now-hampton-family-dental.png",
      alt: "Hampton Family Dental office exterior in Southampton PA with formerly Brenner Dental Group ribbon",
      width: 1536,
      height: 1024,
    },
    answerBox: {
      text: "Yes — Brenner Dental Group is now Hampton Family Dental. It's the same practice at 283 Second Street Pike in Southampton, PA, with the same phone number, the same team led by Dr. Jeffrey Brenner, and your same dental records. Only the name and website changed. Dr. Keyur Dudhat has joined to expand cosmetic and implant care. Book any time at (215) 357-2224.",
      links: [{ text: "(215) 357-2224", href: "tel:+12153572224" }],
    },
    keyTakeaways: [
      {
        text: "Brenner Dental Group rebranded to Hampton Family Dental — it did not close or change hands.",
      },
      {
        text: "Same location, same phone, same team, and your same records — your care doesn't change.",
      },
      {
        text: "Dr. Jeffrey Brenner is still here; Dr. Keyur Dudhat has joined for cosmetic and implant care.",
      },
      {
        text: "The new website is hamptonfamilydentist.com — update your bookmark.",
      },
      {
        text: "You don't need to do anything. New patients are welcome, and there's a $69 emergency exam offer.",
        links: [{ text: "$69 emergency exam offer", href: "/specials" }],
      },
    ],
    sections: [
      { type: "heading", level: 2, text: "What happened to Brenner Dental Group?" },
      {
        type: "paragraph",
        text: "Brenner Dental Group is now Hampton Family Dental — the same practice in Southampton, PA, under a new name. Nothing closed, and no one new took over. If you've trusted Dr. Brenner with your family's smiles, you're in exactly the same hands.",
      },
      {
        type: "paragraph",
        text: "The only things that changed are the name on the door and the web address. Everything that makes the practice yours — the people, the place, the phone number, your history with us — is untouched.",
      },

      {
        type: "heading",
        level: 2,
        text: "Is it still the same team and the same dentist?",
      },
      {
        type: "paragraph",
        text: "Yes. Dr. Jeffrey Brenner still leads the practice, just as he has since 1995. The front-desk faces you know, the hygienists who remember your kids' names, the same chair by the window — all still here.",
      },
      {
        type: "paragraph",
        text: "Dr. Brenner earned his DMD from Temple University and has cared for Southampton families for nearly three decades. You can read more about Dr. Jeffrey Brenner any time.",
        links: [
          { text: "Dr. Jeffrey Brenner", href: "/about/dr-jeffrey-brenner" },
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Meet Dr. Keyur Dudhat — the newest addition",
      },
      {
        type: "paragraph",
        text: "The one genuinely new face is a welcome one. Dr. Keyur Dudhat has joined the practice with advanced training in cosmetic and implant dentistry, and he plans every implant with 3D imaging for a precise, comfortable result. It means more of the care you might once have been referred out for now happens right here, with the team you already trust.",
        links: [{ text: "Dr. Keyur Dudhat", href: "/about/dr-keyur-dudhat" }],
      },

      { type: "heading", level: 2, text: "What is staying exactly the same?" },
      {
        type: "list",
        variant: "check",
        items: [
          {
            text: "Your location — 283 Second Street Pike, Suite 140, Southampton, PA 18966.",
          },
          { text: "Your phone number — (215) 357-2224." },
          { text: "Your dentist — Dr. Jeffrey Brenner." },
          {
            text: "Your dental records — they stay right here; nothing to transfer.",
          },
          {
            text: "Your insurance and your appointments — no need to re-book or re-register.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/what-stays-the-same-vs-whats-new.png",
        alt: "Chart showing that location, phone, Dr. Brenner, and patient records stay the same at Hampton Family Dental, while the name, website, a second dentist, and expanded services are new.",
        caption: "What stays exactly the same vs. what's new.",
        width: 1065,
        height: 519,
      },

      { type: "heading", level: 2, text: "So what's actually new?" },
      {
        type: "list",
        variant: "plus",
        items: [
          { text: "A new name: Hampton Family Dental." },
          {
            text: "A new website: hamptonfamilydentist.com, easier to use on your phone.",
          },
          {
            text: "A second dentist: Dr. Keyur Dudhat, for cosmetic and implant care.",
          },
          {
            text: "Expanded services: more cosmetic and implant options under one roof.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Think of it as the same practice, with a little more to offer.",
      },

      {
        type: "heading",
        level: 2,
        text: "Do I need to do anything as a current patient?",
      },
      {
        type: "paragraph",
        text: "No — there's nothing you have to do. Your records, your history, and your next visit are all still here. The only small favor: update your bookmark to hamptonfamilydentist.com, and if you have our old details saved, swap in the new name. If you've been meaning to come back, new patients are welcome too.",
        links: [
          {
            text: "new patients are welcome",
            href: "/patient-information/new-patients",
          },
        ],
      },

      { type: "heading", level: 2, text: "Why did the name change?" },
      {
        type: "paragraph",
        text: "After nearly 30 years, the practice grew — a second dentist, more cosmetic and implant care, a more modern experience. “Hampton Family Dental” reflects what the practice is today: a welcoming home for the whole family, not just one dentist's name over the door. You can read the full Hampton Family Dental story any time.",
        links: [
          {
            text: "the full Hampton Family Dental story",
            href: "/about/our-story",
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/the-rebrand-timeline.png",
        alt: "Timeline from Brenner Dental Group founded 1995, to the 2026 rename, to the new Hampton Family Dental website, to the same team with expanded care.",
        caption: "The rebrand timeline.",
        width: 1059,
        height: 375,
      },

      {
        type: "heading",
        level: 2,
        text: "How do I book with Hampton Family Dental?",
      },
      {
        type: "paragraph",
        text: "Call (215) 357-2224 — the same number you've always used — or book your appointment online. Whether it's a routine cleaning or a dental emergency, the same team is ready to help.",
        links: [
          { text: "(215) 357-2224", href: "tel:+12153572224" },
          {
            text: "book your appointment online",
            href: "/patient-information/scheduling",
          },
        ],
      },
      {
        type: "cta",
        heading: "Same team, same number — book today.",
        text: "Call us on the number you've always used, or request a time online and we'll confirm it with you.",
      },
    ],
    faqs: [
      {
        q: "What happened to Brenner Dental Group?",
        a: "Brenner Dental Group changed its name to Hampton Family Dental. It is the same practice, same location, and same phone number in Southampton, PA — only the name and website changed.",
      },
      {
        q: "Is it the same phone number and location?",
        a: "Yes. The office is still at 283 Second Street Pike, Suite 140, Southampton, PA 18966, and the phone number is still (215) 357-2224.",
      },
      {
        q: "Is Dr. Brenner still my dentist?",
        a: "Yes. Dr. Jeffrey Brenner still leads the practice. Dr. Keyur Dudhat has joined to expand cosmetic and implant care.",
      },
      {
        q: "Do I need to transfer my dental records?",
        a: "No. Your records stay with the practice. There is nothing you need to do.",
      },
    ],
    extraSchema: [dentistSchema],
  },

  {
    slug: "how-much-do-dental-implants-cost",
    title:
      "How Much Do Dental Implants Cost in 2026? A Southampton, PA Guide",
    metaTitle: "How Much Do Dental Implants Cost in 2026? | Southampton PA",
    metaDescription:
      "A single dental implant costs $3,000–$6,000 in 2026. See the full breakdown — what's included, add-ons, insurance, and financing — from Hampton Family Dental in Southampton, PA.",
    excerpt:
      "Most local practices won't put a number on it. Here are real 2026 ranges — what's included, what add-ons cost, what insurance covers, and how to make implants affordable in Bucks County.",
    category: "Costs & Financing",
    publishedAt: "2026-08-04",
    readTime: "9 min read",
    reviewedBy: "Dr. Keyur Dudhat, DMD",
    lastReviewedLabel: "Last reviewed August 2026",
    hero: {
      src: "/images/blog/how-much-do-dental-implants-cost.png",
      alt: "Dentist explaining dental implant costs to a patient at Hampton Family Dental in Southampton PA",
      width: 1536,
      height: 1024,
    },
    answerBox: {
      text: "In 2026, a single dental implant typically costs $3,000 to $6,000, including the implant post, abutment, and crown. Full-arch options like All-on-4 run about $15,000 to $38,000 per arch. Your exact cost depends on your exam — bone grafts, sedation, and materials all affect the total. At Hampton Family Dental in Southampton, PA, Dr. Dudhat gives you a clear written estimate before any treatment begins.",
    },
    keyTakeaways: [
      {
        text: "A single implant usually runs $3,000–$6,000 all-in (post + abutment + crown), per 2026 U.S. data.",
      },
      {
        text: "That price bundles three billed parts — which is why an implant costs more than a filling.",
      },
      {
        text: "Add-ons drive the biggest swings: a bone graft adds $500–$3,000; a sinus lift $1,500–$5,000.",
      },
      {
        text: "Over 15–20 years, implants are often the lowest-cost choice because bridges and dentures wear out.",
      },
      {
        text: "Insurance rarely covers the whole implant, but our membership plan and financing can lower what you pay.",
      },
    ],
    sections: [
      {
        type: "heading",
        level: 2,
        text: "How much does a single dental implant cost?",
      },
      {
        type: "paragraph",
        text: "A single dental implant costs $3,000 to $6,000 in 2026, including the post, abutment, and crown. That range comes from independent 2026 cost analyses based on ADA fee data and national studies — not from one clinic's price list. Where you land in that range depends on the tooth, the materials, and whether you need any groundwork first. You can see our full dental implants at Hampton Family Dental for how we plan each case.",
        links: [
          {
            text: "dental implants at Hampton Family Dental",
            href: "/restorative-dentistry/dental-implants",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Prices also vary by region. Pennsylvania sits in the middle of the national range — higher than states like Alabama, lower than New York or Massachusetts.",
      },

      { type: "heading", level: 2, text: "What's included in that price?" },
      {
        type: "paragraph",
        text: "The price covers three separate parts, and it helps to see them broken out:",
      },
      {
        type: "table",
        columns: ["Component", "What it is", "Typical 2026 cost"],
        rows: [
          [
            "Implant post",
            "The titanium screw placed in your jaw",
            "$1,000 – $3,000",
          ],
          [
            "Abutment",
            "The connector that links the post to the crown",
            "$400 – $1,000",
          ],
          [
            "Crown",
            "The custom, natural-looking tooth on top",
            "$800 – $3,000",
          ],
        ],
        caption: "What makes up the price of one dental implant.",
      },
      {
        type: "image",
        src: "/images/blog/what-makes-up-the-price-of-one-dental-implant.png",
        alt: "Bar chart breaking a single dental implant into its three billed parts — implant post $1,000–$3,000, abutment $400–$1,000, and crown $800–$3,000 (2026 U.S. ranges).",
        width: 1063,
        height: 554,
      },
      {
        type: "paragraph",
        text: "So when you see a single price, you're really paying for three lab-made components plus the surgery to place them. You can see our implant options and process for how each step works.",
        links: [
          {
            text: "our implant options and process",
            href: "/restorative-dentistry/dental-implants",
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/the-4-steps-of-a-dental-implant.png",
        alt: "Infographic of the four steps of a dental implant — consultation and 3D scan, implant placement, healing and osseointegration, and custom crown placement — each tagged with the cost it drives.",
        caption: "The 4 steps of a dental implant — and where the cost comes from.",
        width: 1999,
        height: 1084,
      },

      {
        type: "heading",
        level: 2,
        text: "Why are dental implants so expensive?",
      },
      {
        type: "paragraph",
        text: "Implants cost more because you're paying for oral surgery, three custom parts, and months of careful planning — not a single quick procedure. According to the American Dental Association, an implant replaces both the root and the crown of a tooth, which is why it's a bigger investment than a filling or a standard crown.",
        links: [
          {
            text: "American Dental Association",
            href: "https://www.mouthhealthy.org/all-topics-a-z/implants",
            external: true,
          },
        ],
      },
      {
        type: "paragraph",
        text: "You're also paying for 3D imaging that maps your jaw before surgery, and for a material — medical-grade titanium — that fuses with living bone. That precision is what lets a well-placed implant last for decades.",
      },

      {
        type: "heading",
        level: 2,
        text: "What add-ons can change your cost?",
      },
      {
        type: "paragraph",
        text: "Add-ons are the single biggest reason two people get very different quotes. The most common ones:",
      },
      { type: "heading", level: 3, text: "Bone grafting and sinus lifts" },
      {
        type: "paragraph",
        text: "If your jaw has lost bone where the tooth is missing, you may need a graft before an implant can hold — that adds roughly $500 to $3,000 per site. An upper-back implant sometimes needs a sinus lift, adding about $1,500 to $5,000. About half of implant patients need some grafting, per oral surgeons (AAOMS). Sedation, extractions, and a temporary tooth can also add to the total.",
        links: [
          {
            text: "oral surgeons (AAOMS)",
            href: "https://www.aaoms.org/procedures/dental-implant-surgery",
            external: true,
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "How much do full-mouth and All-on-4 implants cost?",
      },
      {
        type: "paragraph",
        text: "If you're replacing a whole arch rather than one tooth, the math changes. All-on-4 — a full set of teeth on four implants — typically runs $15,000 to $38,000 per arch, depending on whether you choose an acrylic or a more durable zirconia arch. Restoring both arches commonly totals $30,000 to $50,000. Per tooth, that's far cheaper than placing individual implants across a whole mouth.",
      },
      {
        type: "table",
        columns: ["Implant type", "Typical 2026 U.S. range"],
        rows: [
          ["Single tooth (post + abutment + crown)", "$3,000 – $6,000"],
          ["Implant bridge (3 teeth)", "$8,000 – $11,000"],
          ["All-on-4 (per arch)", "$15,000 – $38,000"],
          ["Full mouth (both arches)", "$30,000 – $50,000"],
        ],
        caption: "2026 U.S. dental implant cost ranges by type.",
      },
      {
        type: "image",
        src: "/images/blog/2026-dental-implant-cost-ranges-by-type.png",
        alt: "Chart of 2026 U.S. dental implant cost ranges — single tooth $3,000–$6,000, three-tooth implant bridge $8,000–$11,000, All-on-4 $15,000–$38,000 per arch, full mouth $30,000–$50,000.",
        width: 1066,
        height: 585,
      },

      {
        type: "heading",
        level: 2,
        text: "Does dental insurance cover implants?",
      },
      {
        type: "paragraph",
        text: "Most dental plans cover part of the crown but not the surgical implant itself — many classify the implant as a major or elective procedure. Some plans have come to cover more of the abutment and crown in recent years. The honest answer is that it varies a lot by plan, so we verify your insurance benefits before any treatment and tell you your real out-of-pocket cost in writing.",
        links: [
          {
            text: "verify your insurance benefits",
            href: "/patient-information/insurance-and-payment",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Are implants worth it compared to a bridge or dentures?",
      },
      {
        type: "paragraph",
        text: "Over a 15–20 year horizon, implants are often the lowest-cost option because a dental bridge or dentures usually need replacing every 10 to 15 years, while a well-cared-for implant can last decades. An implant also preserves the jawbone, which bridges and dentures don't. The chart below shows how the numbers can cross over time.",
        links: [
          {
            text: "a dental bridge",
            href: "/restorative-dentistry/dental-bridges",
          },
          { text: "dentures", href: "/restorative-dentistry/dentures" },
        ],
      },
      {
        type: "image",
        src: "/images/blog/20-year-cost-implant-vs-bridge-vs-denture.png",
        alt: "Line chart estimating 20-year cumulative cost, showing implants often become the lowest-cost option over time because bridges and dentures need periodic replacement. Illustrative estimate.",
        caption:
          "Estimated 20-year cost: implant vs. bridge vs. denture. Illustrative estimate only.",
        width: 1065,
        height: 554,
      },
      {
        type: "paragraph",
        text: "(This is a general estimate — your real comparison depends on your mouth and is something Dr. Dudhat can map out at a consult.)",
      },

      {
        type: "heading",
        level: 2,
        text: "How can I make implants more affordable in Southampton?",
      },
      {
        type: "paragraph",
        text: "There are three practical ways patients lower the cost with us:",
      },
      {
        type: "list",
        variant: "check",
        items: [
          {
            text: "Our in-office membership plan (from $288/year) includes cleanings, exams, and X-rays plus 15% off other procedures — no deductible, no annual maximum.",
          },
          {
            text: "Financing through CareCredit and similar plans spreads the cost into monthly payments, often with 0% promotional periods.",
          },
          {
            text: "An FSA or HSA lets you pay with pre-tax dollars, effectively discounting the total.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "See our membership plan and current offers for the details.",
        links: [
          { text: "membership plan and current offers", href: "/specials" },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "What affects your final cost at Hampton Family Dental?",
      },
      {
        type: "paragraph",
        text: "Your final number comes down to the exam: how many teeth, the condition of your jawbone, the materials you choose, and any add-ons. Dr. Keyur Dudhat plans every implant with 3D imaging, so the estimate you get is based on your actual anatomy — not a generic price. You'll get it in writing before anything begins.",
        links: [
          { text: "Dr. Keyur Dudhat", href: "/about/dr-keyur-dudhat" },
        ],
      },
      {
        type: "cta",
        heading: "Get a clear, written implant estimate.",
        text: "Call us or book an implant consultation — you'll know your real out-of-pocket cost before any treatment begins.",
      },
    ],
    faqs: [
      {
        q: "How much does a single dental implant cost in 2026?",
        a: "A single dental implant typically costs $3,000 to $6,000 in 2026, including the implant post, abutment, and crown. Your exact cost depends on your exam and whether add-ons like a bone graft are needed.",
      },
      {
        q: "Does dental insurance cover implants?",
        a: "Many plans cover part of the crown or abutment but not the surgical implant itself. We verify your benefits before treatment so you know your out-of-pocket cost in advance.",
      },
      {
        q: "Why are dental implants so expensive?",
        a: "An implant bundles three billed parts — the post, abutment, and crown — plus oral surgery, 3D imaging, and a multi-month treatment plan, which is why it costs more than a simple filling or crown.",
      },
      {
        q: "Are implants cheaper than a bridge over time?",
        a: "Often, yes. Implants cost more upfront, but bridges and dentures usually need replacing every 10 to 15 years, so implants can be the lower-cost option over a 20-year horizon.",
      },
    ],
    extraSchema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "How Much Do Dental Implants Cost in 2026? A Southampton, PA Guide",
        url: "https://www.hamptonfamilydentist.com/blog/how-much-do-dental-implants-cost",
        about: { "@type": "MedicalProcedure", name: "Dental Implant" },
        lastReviewed: "2026-08-04",
        reviewedBy: {
          "@type": "Person",
          name: "Dr. Keyur Dudhat, DMD",
          jobTitle: "Dentist",
          medicalSpecialty: "Dentistry",
          worksFor: "Hampton Family Dental",
        },
        publisher: {
          "@type": "Organization",
          name: "Hampton Family Dental",
        },
      },
      { ...dentistSchema, medicalSpecialty: "Dentistry" },
    ],
  },
];

/** Newest first — the order the listing page renders in. */
export const sortedBlogPosts = [...blogPosts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Heading text → anchor id. Apostrophes vanish; everything else becomes a dash. */
export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Table of contents built from the post's H2/H3 sections, plus the FAQ block. */
export function getTableOfContents(post: BlogPost): TocItem[] {
  const items: TocItem[] = post.sections
    .filter((section) => section.type === "heading")
    .map((section) => ({
      id: slugifyHeading(section.text),
      text: section.text,
      level: section.level,
    }));

  if (post.faqs.length > 0) {
    items.push({ id: "faqs", text: "Frequently asked questions", level: 2 });
  }

  return items;
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
