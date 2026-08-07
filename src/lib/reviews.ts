// ── Real Google reviews ──
// Transcribed verbatim from Hampton Family Dental's Google Business Profile.
//
// RULES FOR EDITING THIS FILE
//  1. Never reword, tidy, shorten or "improve" a review. Displaying a real
//     review is fine; editing one turns it back into a fabrication.
//  2. Only add reviews whose full text is available. Google truncates long
//     reviews with "…More" in the listing — open the review itself and copy
//     the whole thing, or leave it out.
//  3. Do NOT emit Review or aggregateRating JSON-LD from this data. Marking up
//     reviews collected on a third-party platform as your own structured data
//     breaches Google's guidelines and risks a manual action.
//
// Reviews previously shown here were invented — one even quoted a
// "Dr. Hampton", who has never worked at this practice.

export interface GoogleReview {
  id: string;
  /** Reviewer's display name, exactly as it appears on Google. */
  author: string;
  /** Fallback avatar — a reviewer's own Google photo is not ours to reuse. */
  initials: string;
  /** Google's own relative wording, kept as published. */
  relativeDate: string;
  rating: number;
  /** Verbatim. Never edited. */
  text: string;
  localGuide?: boolean;
}

/** Headline figures, verified against the live profile. */
export const googleProfile = {
  rating: "5.0",
  reviewCount: 119,
  lastChecked: "August 2026",
  url: "https://www.google.com/maps/search/?api=1&query=Hampton+Family+Dental%2C+283+Second+Street+Pike%2C+Southampton%2C+PA+18966",
} as const;

export const googleReviews: GoogleReview[] = [
  {
    id: "susan-donohue",
    author: "Susan Donohue",
    initials: "SD",
    relativeDate: "3 months ago",
    rating: 5,
    text: "Dr. Brenner is an amazing dentist. He really explains everything you need to know. The staff is awesome and very friendly.",
  },
  {
    id: "fred-kamm",
    author: "Fred Kamm",
    initials: "FK",
    relativeDate: "4 months ago",
    rating: 5,
    text: "Very impressed with Dr.Brenner and his team. Highly recommend.",
  },
  {
    id: "colleen-mckeown",
    author: "Colleen McKeown",
    initials: "CM",
    relativeDate: "6 months ago",
    rating: 5,
    text: "Dr. Brenner and his office staff are extremely kind and helpful. I have been going for years and they are very honest, accommodating and helpful. Grateful 💜☀️",
  },
  {
    id: "arlene-santonastasi",
    author: "Arlene Santonastasi",
    initials: "AS",
    relativeDate: "6 months ago",
    rating: 5,
    text: "Dr. Brenner stepped into the waiting area and introduced himself to me. Everyone was cheerful and made me feel very comfortable!",
  },
  {
    id: "anne-houser",
    author: "Anne Houser",
    initials: "AH",
    relativeDate: "7 months ago",
    rating: 5,
    localGuide: true,
    text: "Great dental care, professional, friendly and caring staff. Dr. Brenner is respectful of patient's ability to make informed decisions regarding optional treatment. He has a great relationship with his patients and a good sense of humor. Highly recommend.",
  },
  {
    id: "colleen-carroll",
    author: "Colleen Carroll",
    initials: "CC",
    relativeDate: "a year ago",
    rating: 5,
    text: "Best cleaning I have ever had. I’m 63 so I’ve had a lot of cleanings in my life!\nDr Brenner went above and beyond any Dentist I have ever encountered.\nHe truly cares about his patients!",
  },
  {
    id: "mitch",
    author: "Mitch",
    initials: "M",
    relativeDate: "a year ago",
    rating: 5,
    localGuide: true,
    text: "The entire office functions as a well oiled machine of highly skilled & knowledgeable folks. Dr Brenner is excellent & very easy to talk to regarding sometime complicated issues. Straight forward & honest, not trying to do things that are not important/ necessary. To top it, all very nice, friendly & caring people. Highly recommend.",
  },
  {
    id: "cynthia-perez",
    author: "Cynthia Perez",
    initials: "CP",
    relativeDate: "a year ago",
    rating: 5,
    text: "My family has been going to Dr Brenners office for a few years. Highly recommend! It’s like family there the staff is great. Dr. Is always looking out for the best on your dental health. He’s proactive and great Dr and person. Love this place ❤️",
  },
  {
    id: "gary-balasa",
    author: "Gary Balasa",
    initials: "GB",
    relativeDate: "a year ago",
    rating: 5,
    text: "Dr. Brenner and his staff provide a pleasant atmosphere with excellent quality dental care. I have been going to this office for 6 years for surgery and maintenance and have been very happy with my experiences.",
  },
  {
    id: "cindy-veneziano",
    author: "Cindy Veneziano",
    initials: "CV",
    relativeDate: "a year ago",
    rating: 5,
    text: "Dr. Brenner takes the time to sit with you and explain whatever needs to be done. He is very personable and approachable. He cares about what he does and is very skilled as a dentist. His support staff are also very friendly and professional.",
  },
  {
    id: "scott-st-pierre",
    author: "Scott St. Pierre",
    initials: "SS",
    relativeDate: "2 years ago",
    rating: 5,
    localGuide: true,
    text: "Dr Brenner purchased the practice from a dentist I went to since I was a kid. It was an easy and smooth transition and my family has been with him since. He and the entire staff are friendly, professional and do an excellent job on our teeth. Could not be happier with their service.",
  },
  {
    id: "mary-v-forlano",
    author: "Mary V Forlano",
    initials: "MF",
    relativeDate: "2 years ago",
    rating: 5,
    text: "Dr Brenner is one of the best dentists I have ever had. He is thorough and extremely knowledgeable and cares about his patients. He also takes the time to discuss with them their dental needs. The staff are fantastic and caring. I highly recommend Brenner Dental Group.",
  },
  {
    id: "mary-forlano",
    author: "Mary Forlano",
    initials: "MF",
    relativeDate: "4 years ago",
    rating: 5,
    text: "I had a very positive experience during my first visit. Staff were friendly and very professional. Dr Brenner was fantastic and thorough as he discussed treatment options with me. I would highly recommend the Brenner Dental Group for your dental needs.",
  },
  {
    id: "mary-hannahs-mom",
    author: "Mary Hannah's Mom",
    initials: "MH",
    relativeDate: "5 years ago",
    rating: 5,
    localGuide: true,
    text: "Dr. Brenner and his team are amazingly patient and reliable. I've had a few emergent and I was fit in each time either same day or first thing the next day. They work with you if you don't have dental insurance at reasonable rates and will offer payment plans if needed. I'm so glad I chose this office and would recommend it to anyone!",
  },
  {
    id: "david-lloyd",
    author: "David Lloyd",
    initials: "DL",
    relativeDate: "5 years ago",
    rating: 5,
    localGuide: true,
    text: "Jeff Brenner and his staff are very friendly and nice. I would highly recommend his practice to anyone who is looking for a dentist. My wife and children also see Dr Brenner. He is honest, fair and tells it as it is.",
  },
];

/** The subset shown on the homepage — newest first. */
export const featuredReviews = googleReviews.slice(0, 6);
