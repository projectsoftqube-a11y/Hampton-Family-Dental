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
