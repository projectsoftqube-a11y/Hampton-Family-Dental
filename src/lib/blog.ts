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
  /** Boxed safety notice. "danger" is for escalate-to-911 content. */
  | {
      type: "callout";
      variant: "danger" | "warning";
      heading?: string;
      text: string;
      links?: BlogLink[];
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
  /**
   * When the post goes live. Accepts either a plain date ("2026-07-29",
   * treated as midnight UTC) or a full ISO timestamp with an offset
   * ("2026-08-11T08:00:00+05:30") to schedule a precise moment.
   *
   * A post whose publishedAt is in the future is hidden from the listing,
   * the sitemap and search, and its URL 404s until the time passes.
   */
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
        height: 790,
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

  {
    slug: "dental-emergency-what-to-do",
    title: "Dental Emergency? What to Do Before You Reach the Dentist",
    metaTitle: "Dental Emergency? What to Do Now | Southampton PA",
    metaDescription:
      "Tooth pain or a dental emergency in Southampton, PA? Call (215) 357-2224 for same-day care. Safe first-aid steps for pain, knocked-out teeth, and when to call 911.",
    excerpt:
      "In pain right now? Safe first-aid you can start in the next two minutes — plus how to tell a toothache that can wait from one that can't, and when to skip the dentist and call 911.",
    category: "Emergency Care",
    // Scheduled: 11 Aug 2026, 08:00 IST (= 02:30 UTC).
    publishedAt: "2026-08-11T08:00:00+05:30",
    readTime: "4 min read",
    reviewedBy: "Dr. Jeffrey Brenner, DMD",
    lastReviewedLabel: "Last reviewed August 2026",
    hero: {
      src: "/images/blog/dental-emergency-what-to-do.png",
      alt: "Person with tooth pain calling Hampton Family Dental for same-day emergency care in Southampton PA",
      width: 1536,
      height: 1024,
    },
    answerBox: {
      text: "If you have a dental emergency in Southampton, PA, call Hampton Family Dental now at (215) 357-2224 — we reserve time every day for same-day emergencies. While you wait: rinse with warm salt water, hold a cold compress to your cheek, and take ibuprofen or acetaminophen as directed. If you have trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the emergency room.",
      links: [{ text: "(215) 357-2224", href: "tel:+12153572224" }],
    },
    keyTakeaways: [
      {
        text: "Call your dentist first for most dental emergencies — that's faster than the ER.",
      },
      {
        text: "Knocked-out tooth? Keep it moist in milk and call within the hour — time matters.",
      },
      {
        text: "A warm salt-water rinse, a cold compress, and OTC pain relief can safely hold you over.",
      },
      {
        text: "Never put aspirin directly on the gum or tooth — it can burn the tissue.",
      },
      {
        text: "Call 911 for trouble breathing or swallowing, spreading swelling, or uncontrolled bleeding.",
      },
    ],
    sections: [
      { type: "heading", level: 2, text: "First: is this a dental emergency?" },
      {
        type: "paragraph",
        text: "A mild ache can usually wait for a regular appointment, but severe or worsening pain, swelling, fever, or a knocked-out tooth should be seen right away. According to the American Dental Association, a good rule of thumb is simple: if it hurts badly, bleeds, or moves when it shouldn't, call a dentist. The guide below can help you decide fast.",
        links: [
          {
            text: "American Dental Association",
            href: "https://www.mouthhealthy.org/all-topics-a-z/dental-emergencies",
            external: true,
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/is-your-dental-problem-an-emergency.png",
        alt: "Dental emergency triage guide — call 911 for trouble breathing or swallowing, spreading swelling, or uncontrolled bleeding; call (215) 357-2224 for a knocked-out tooth, severe pain, swelling or fever; while waiting, use a warm salt-water rinse, cold compress, and OTC pain relief, and never put aspirin on the gum.",
        caption: "Is your dental problem an emergency?",
        width: 1065,
        height: 674,
      },

      {
        type: "heading",
        level: 2,
        text: "How to relieve tooth pain right now",
      },
      {
        type: "paragraph",
        text: "To ease tooth pain fast while you arrange a visit, the Cleveland Clinic recommends a few safe steps:",
        links: [
          {
            text: "Cleveland Clinic",
            href: "https://my.clevelandclinic.org/health/symptoms/10957-toothache",
            external: true,
          },
        ],
      },
      {
        type: "list",
        variant: "check",
        items: [
          {
            text: "Rinse gently with warm salt water to clean the area and calm the tissue.",
          },
          {
            text: "Hold a cold compress to the outside of your cheek to bring down swelling.",
          },
          {
            text: "Take an over-the-counter pain reliever — ibuprofen or acetaminophen — as directed on the label.",
          },
          {
            text: "Floss gently once to remove any food trapped between teeth.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        heading: "One important safety note",
        text: "Never place aspirin or another painkiller directly against your gum or tooth — it can burn the tissue. Always take pain relievers by mouth.",
      },
      {
        type: "paragraph",
        text: "These steps ease the pain; they don't fix the cause. A toothache that lasts more than a day or two usually means something a dentist needs to treat.",
      },

      {
        type: "heading",
        level: 2,
        text: "What to do for a knocked-out or broken tooth",
      },
      {
        type: "paragraph",
        text: "For a knocked-out tooth, act within the hour: pick it up by the crown (never the root), rinse it gently if it's dirty without scrubbing, and keep it moist in a cup of milk or tucked inside your cheek until you can be seen. Then call us. For a broken tooth, save any pieces, rinse with warm water, and use gauze if there's bleeding. Sometimes a badly damaged tooth can't be saved, but calling quickly gives the best chance of keeping it.",
        links: [
          {
            text: "a badly damaged tooth can't be saved",
            href: "/general-dentistry/tooth-extraction",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "When to skip the dentist and call 911",
      },
      {
        type: "callout",
        variant: "danger",
        heading: "Call 911 or go straight to the emergency room",
        text: "If you have swelling that affects your breathing or swallowing, swelling spreading to your eye or neck, or bleeding that won't stop. These can be signs of a serious infection or injury that needs a hospital, not a dental office.",
      },

      { type: "heading", level: 2, text: "Get seen today in Southampton" },
      {
        type: "paragraph",
        text: "You don't have to wait in pain. Emergency dental care at Hampton Family Dental means same-day appointments with Dr. Brenner, who has handled Southampton dental emergencies for more than 20 years — same team, same trusted care. New patients can start with our $69 emergency exam offer (a focused exam plus any necessary X-rays). Just call and tell us what's happening.",
        links: [
          {
            text: "Emergency dental care at Hampton Family Dental",
            href: "/general-dentistry/emergency-dentistry",
          },
          { text: "$69 emergency exam offer", href: "/specials" },
        ],
      },
      {
        type: "paragraph",
        text: "In pain right now? Call (215) 357-2224 to book a same-day emergency visit, or request an appointment online and tell us what's happening.",
        links: [
          { text: "(215) 357-2224", href: "tel:+12153572224" },
          {
            text: "book a same-day emergency visit",
            href: "/general-dentistry/emergency-dentistry",
          },
          {
            text: "request an appointment",
            href: "/patient-information/scheduling",
          },
        ],
      },
      {
        type: "cta",
        heading: "In pain now? We keep time open every day.",
        text: "Call and tell us what's happening — we reserve room in the schedule for same-day emergencies.",
      },
    ],
    faqs: [
      {
        q: "How do I stop tooth pain fast?",
        a: "Rinse with warm salt water, hold a cold compress to your cheek, and take an over-the-counter pain reliever like ibuprofen or acetaminophen as directed. These ease pain temporarily — call a dentist to treat the cause.",
      },
      {
        q: "Is a toothache a dental emergency?",
        a: "A mild ache may not be, but severe or worsening pain, swelling, fever, or a toothache that keeps you up at night should be seen by a dentist as soon as possible.",
      },
      {
        q: "What do I do if my tooth gets knocked out?",
        a: "Pick it up by the crown, not the root, keep it moist in milk or inside your cheek, and call a dentist within the hour. Fast action gives the best chance of saving it.",
      },
      {
        q: "Can I put aspirin on my tooth?",
        a: "No. Placing aspirin directly on the gum or tooth can burn the tissue. Take pain relievers by mouth as directed on the label instead.",
      },
    ],
    extraSchema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Dental Emergency? What to Do Before You Reach the Dentist",
        url: "https://www.hamptonfamilydentist.com/blog/dental-emergency-what-to-do",
        about: {
          "@type": "MedicalCondition",
          name: "Dental emergency / toothache",
        },
        lastReviewed: "2026-08-10",
        reviewedBy: {
          "@type": "Person",
          name: "Dr. Jeffrey Brenner, DMD",
          jobTitle: "Dentist",
          medicalSpecialty: "Dentistry",
          worksFor: "Hampton Family Dental",
        },
        publisher: { "@type": "Organization", name: "Hampton Family Dental" },
      },
      {
        ...dentistSchema,
        medicalSpecialty: "Dentistry",
        availableService: {
          "@type": "MedicalProcedure",
          name: "Emergency dental care",
        },
      },
    ],
  },

  {
    slug: "invisalign-vs-braces",
    title: "Invisalign vs. Braces: Which Is Right for You?",
    metaTitle: "Invisalign vs. Braces: Which Is Right for You? | Southampton PA",
    metaDescription:
      "Invisalign vs. braces in 2026: braces cost $3,000–$7,000, Invisalign $3,500–$8,000. Compare cost, timeline, comfort, and which fits you — from Hampton Family Dental, Southampton PA.",
    excerpt:
      "The 2026 cost gap is about $175, so price is rarely the decider. Here's an honest comparison of cost, timeline and comfort — and the cases where braces are genuinely the better call.",
    category: "Cosmetic Dentistry",
    publishedAt: "2026-08-14",
    readTime: "8 min read",
    reviewedBy: "Dr. Keyur Dudhat, DMD",
    lastReviewedLabel: "Last reviewed August 2026",
    hero: {
      src: "/images/blog/invisalign-vs-braces.png",
      alt: "Clear Invisalign aligner beside a model with traditional metal braces outside Hampton Family Dental in Southampton, PA",
      width: 1536,
      height: 1024,
    },
    answerBox: {
      text: "Both straighten teeth well. Invisalign uses clear, removable aligners and is nearly invisible, usually taking 8–12 months and costing $3,500–$8,000. Traditional braces are fixed, handle complex cases best, take 18–24 months, and cost $3,000–$7,000. Invisalign suits appearance-conscious adults with mild-to-moderate cases; braces suit complex bites. At Hampton Family Dental in Southampton, PA, Dr. Dudhat helps you choose what fits your smile.",
    },
    keyTakeaways: [
      {
        text: "Cost is close: braces $3,000–$7,000, Invisalign $3,500–$8,000 — the 2026 gap is about $175.",
      },
      {
        text: "Invisalign is usually faster (8–12 months) than braces (18–24 months) for similar cases.",
      },
      {
        text: "Invisalign is nearly invisible and removable; braces are fixed and better for complex bites.",
      },
      {
        text: "Insurance usually treats both the same — around 50% up to a lifetime orthodontic maximum.",
      },
      {
        text: "The right choice depends on your case, not the ads — a quick exam tells you which fits.",
      },
    ],
    sections: [
      { type: "heading", level: 2, text: "Invisalign vs. braces at a glance" },
      {
        type: "paragraph",
        text: "Both are proven ways to straighten teeth — the American Dental Association recognizes clear aligners and braces as effective orthodontic options. Here's how they compare:",
        links: [
          {
            text: "American Dental Association",
            href: "https://www.mouthhealthy.org/all-topics-a-z/braces",
            external: true,
          },
        ],
      },
      {
        type: "table",
        columns: ["", "Invisalign", "Traditional braces"],
        rows: [
          ["Typical cost (2026)", "$3,500 – $8,000", "$3,000 – $7,000"],
          ["Treatment time", "8 – 12 months", "18 – 24 months"],
          ["Appearance", "Clear, nearly invisible", "Visible metal or ceramic"],
          ["Removable?", "Yes — for meals & brushing", "No — fixed in place"],
          ["Comfort", "No wires; mild pressure", "Wires can irritate"],
          ["Best for", "Mild-to-moderate cases", "Complex bite problems"],
          ["Discipline needed", "High — wear 20–22 hrs/day", "Low — always working"],
        ],
        caption: "Invisalign vs. traditional braces, side by side.",
      },

      {
        type: "heading",
        level: 2,
        text: "How much do Invisalign and braces cost?",
      },
      {
        type: "paragraph",
        text: "Braces are usually a little cheaper — about $3,000 to $7,000, versus $3,500 to $8,000 for Invisalign at Hampton Family Dental. Here's the surprise: in 2026 that gap has narrowed to roughly $175 nationally, so cost is rarely the deciding factor anymore. Your final price depends on how complex your case is and how long treatment takes — not just which system you pick.",
        links: [
          {
            text: "Invisalign at Hampton Family Dental",
            href: "/cosmetic-dentistry/invisalign",
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/invisalign-vs-braces-cost-2026.png",
        alt: "Bar chart comparing typical 2026 U.S. costs before insurance — Invisalign $3,500–$8,000 and traditional braces $3,000–$7,000.",
        width: 1065,
        height: 495,
      },

      {
        type: "heading",
        level: 2,
        text: "How long does each treatment take?",
      },
      {
        type: "paragraph",
        text: "Invisalign is often faster. For comparable cases it usually takes 8 to 12 months, while braces typically run 18 to 24 months. That said, complex bite issues can extend either one. You can see how our Invisalign treatment works for a sense of the timeline, from the first scan to your final aligner.",
        links: [
          {
            text: "see how our Invisalign treatment works",
            href: "/cosmetic-dentistry/invisalign",
          },
        ],
      },
      {
        type: "image",
        src: "/images/blog/invisalign-vs-braces-treatment-time.png",
        alt: "Bar chart comparing typical treatment time — Invisalign about 8–12 months and traditional braces about 18–24 months, varying by case.",
        width: 1065,
        height: 435,
      },

      {
        type: "heading",
        level: 2,
        text: "Which is more comfortable — and does Invisalign hurt?",
      },
      {
        type: "paragraph",
        text: "Most people feel mild pressure for a day or two after switching to a new aligner, then it fades — that pressure means it's working. Because Invisalign has no wires or brackets, it usually causes less irritation to your cheeks and lips than braces do. Braces aren't painful either, but the wires can occasionally rub. Neither should ever be truly painful; if something hurts sharply, that's a quick office visit, not normal.",
      },

      {
        type: "heading",
        level: 2,
        text: "Which works better for your case?",
      },
      {
        type: "paragraph",
        text: "For mild to moderate crowding, spacing, or a slightly off bite, Invisalign works just as well as braces and often finishes sooner. It's a great fit for appearance-conscious adults and responsible teens who'll keep the aligners in. If straightening isn't your only goal, it's worth looking at other ways to improve your smile at the same visit.",
        links: [
          {
            text: "other ways to improve your smile",
            href: "/cosmetic-dentistry",
          },
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "When braces are the better choice",
      },
      {
        type: "paragraph",
        text: "We'll be honest — braces are sometimes the smarter pick. For complex bite problems, significant rotation, or moving teeth long distances, fixed braces give the dentist more precise control, and the American Association of Orthodontists notes that some cases simply respond better to brackets. Braces are also the safer bet for a younger child who might lose removable trays. A quick exam tells you which camp you're in — guessing from a chart won't.",
        links: [
          {
            text: "American Association of Orthodontists",
            href: "https://aaoinfo.org/treatment/",
            external: true,
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Does insurance cover Invisalign or braces?",
      },
      {
        type: "paragraph",
        text: "Good news: most dental plans treat the two about the same, usually covering around 50% up to a lifetime orthodontic maximum. Both also qualify for FSA and HSA pre-tax dollars. Coverage varies by plan, so we check your insurance benefits up front, and our membership plan and current offers can help with what's left.",
        links: [
          {
            text: "check your insurance benefits",
            href: "/patient-information/insurance-and-payment",
          },
          { text: "membership plan and current offers", href: "/specials" },
        ],
      },

      { type: "heading", level: 2, text: "So which should you choose?" },
      {
        type: "paragraph",
        text: "Choose Invisalign if you want a discreet, removable option, have a mild-to-moderate case, and you're disciplined about wearing it 20–22 hours a day. Lean toward braces if your case is complex, you'd rather set it and forget it, or it's for a younger child. For most appearance-motivated adults in Bucks County, Invisalign checks the boxes — but the only way to know for sure is a look at your actual teeth.",
      },
      {
        type: "image",
        src: "/images/blog/invisalign-vs-braces-which-fits-your-life.png",
        alt: "Decision infographic — choose Invisalign for a mild-to-moderate case, a discreet look, 20–22 hours a day of wear and removable treatment; braces may be better for a complex bite, fixed set-and-forget treatment, more controlled tooth movement, or a child who may lose aligners.",
        caption: "Invisalign vs. braces: which fits your life?",
        width: 1672,
        height: 941,
      },

      {
        type: "heading",
        level: 2,
        text: "Straightening your smile in Southampton",
      },
      {
        type: "paragraph",
        text: "One nice advantage of choosing us: you can straighten your smile with Dr. Keyur Dudhat right here as part of your regular dental care — no separate referral to a third-party orthodontist. Dr. Dudhat maps your treatment with a digital scan so you can preview your new smile before you start. Curious which option fits you? Book an Invisalign consultation and we'll give you a straight answer.",
        links: [
          { text: "Dr. Keyur Dudhat", href: "/about/dr-keyur-dudhat" },
          {
            text: "Book an Invisalign consultation",
            href: "/cosmetic-dentistry/invisalign",
          },
        ],
      },
      {
        type: "cta",
        heading: "See which option fits your smile.",
        text: "Call us or book a consultation — a quick exam and digital scan tell you which option suits your teeth, not a chart.",
      },
    ],
    faqs: [
      {
        q: "Are braces or Invisalign cheaper?",
        a: "Braces are usually slightly cheaper, running $3,000 to $7,000 versus $3,500 to $8,000 for Invisalign. In 2026 the average gap has narrowed to about $175, so cost is rarely the deciding factor.",
      },
      {
        q: "Does Invisalign work as well as braces?",
        a: "For mild to moderate cases, Invisalign works just as well and is often faster. For complex bite problems, traditional braces give the dentist more precise control.",
      },
      {
        q: "Does Invisalign hurt?",
        a: "Most people feel mild pressure for a day or two after switching to a new aligner, then it fades. Invisalign has no wires or brackets, so it usually causes less mouth irritation than braces.",
      },
      {
        q: "How long does Invisalign take compared to braces?",
        a: "Invisalign typically takes 8 to 12 months for comparable cases, while braces usually take 18 to 24 months. Complex cases can extend either treatment.",
      },
    ],
    extraSchema: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Invisalign vs. Braces: Which Is Right for You?",
        url: "https://www.hamptonfamilydentist.com/blog/invisalign-vs-braces",
        about: {
          "@type": "MedicalProcedure",
          name: "Orthodontic treatment (Invisalign and braces)",
        },
        lastReviewed: "2026-08-14",
        reviewedBy: {
          "@type": "Person",
          name: "Dr. Keyur Dudhat, DMD",
          jobTitle: "Dentist",
          medicalSpecialty: "Dentistry",
          worksFor: "Hampton Family Dental",
        },
        publisher: { "@type": "Organization", name: "Hampton Family Dental" },
      },
      { ...dentistSchema, medicalSpecialty: "Dentistry" },
    ],
  },
];

/** Parses either a plain date or a full ISO timestamp with offset. */
export function publishDate(post: BlogPost): Date {
  return new Date(
    post.publishedAt.includes("T")
      ? post.publishedAt
      : `${post.publishedAt}T00:00:00Z`,
  );
}

export function isPublished(post: BlogPost, now: Date = new Date()): boolean {
  return publishDate(post).getTime() <= now.getTime();
}

/**
 * Live posts, newest first.
 *
 * Deliberately a function, not a module-level constant: a constant would be
 * evaluated once when the module is first loaded and a scheduled post would
 * stay hidden until the next deploy. Called per render, it goes live on its
 * own — see the `revalidate` exports on the blog routes.
 */
export function getPublishedPosts(now: Date = new Date()): BlogPost[] {
  return blogPosts
    .filter((post) => isPublished(post, now))
    .sort((a, b) => publishDate(b).getTime() - publishDate(a).getTime());
}

/** Includes scheduled posts — callers must check isPublished() themselves. */
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
  const d = new Date(iso.includes("T") ? iso : `${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
