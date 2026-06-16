// ── Central navigation data ──
// Single source of truth for Header, MobileMenu, and Footer.
// Matches the client's §5 spec exactly.
//
// No "Home" tab — logo links to /.
// Parent labels are also clickable (go to the hub page).

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  {
    label: "Patient Information",
    href: "/patient-information",
    children: [
      { label: "Why Choose Us", href: "/patient-information/why-choose-us" },
      { label: "New Patients", href: "/patient-information/new-patients" },
      { label: "Scheduling", href: "/patient-information/scheduling" },
      {
        label: "Emergency Scheduling",
        href: "/patient-information/emergency-scheduling",
      },
      {
        label: "Insurance & Payment Options",
        href: "/patient-information/insurance-and-payment",
      },
      {
        label: "Financing Options",
        href: "/patient-information/financing-options",
      },
    ],
  },
  {
    label: "General Dentistry",
    href: "/general-dentistry",
    children: [
      { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
      {
        label: "Dental Checkups & X-Rays",
        href: "/general-dentistry/checkups-and-x-rays",
      },
      {
        label: "Emergency Dentistry",
        href: "/general-dentistry/emergency-dentistry",
      },
      {
        label: "Tooth Extraction",
        href: "/general-dentistry/tooth-extraction",
      },
      {
        label: "Oral Cancer Screening",
        href: "/general-dentistry/oral-cancer-screening",
      },
      { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
    ],
  },
  {
    label: "Restorative Dentistry",
    href: "/restorative-dentistry",
    children: [
      {
        label: "Dental Implants",
        href: "/restorative-dentistry/dental-implants",
      },
      {
        label: "Dental Crowns",
        href: "/restorative-dentistry/dental-crowns",
      },
      {
        label: "Dental Bridges",
        href: "/restorative-dentistry/dental-bridges",
      },
      {
        label: "Dental Fillings",
        href: "/restorative-dentistry/dental-fillings",
      },
      {
        label: "Root Canal Treatment",
        href: "/restorative-dentistry/root-canal",
      },
      { label: "Dentures", href: "/restorative-dentistry/dentures" },
    ],
  },
  {
    label: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    children: [
      {
        label: "Porcelain Veneers",
        href: "/cosmetic-dentistry/porcelain-veneers",
      },
      { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
      { label: "Clear Correct", href: "/cosmetic-dentistry/clear-correct" },
      {
        label: "Teeth Whitening",
        href: "/cosmetic-dentistry/teeth-whitening",
      },
      {
        label: "Dental Bonding",
        href: "/cosmetic-dentistry/dental-bonding",
      },
      {
        label: "Smile Makeover",
        href: "/cosmetic-dentistry/smile-makeover",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Dr. Jeffrey Brenner", href: "/about/dr-jeffrey-brenner" },
      { label: "Dr. Keyur Dudhat", href: "/about/dr-keyur-dudhat" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Patient Reviews", href: "/about/patient-reviews" },
    ],
  },
  {
    label: "Specials",
    href: "/specials",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

// ── Practice info (used by Header, Footer, MobileMenu, Contact) ──
export const practiceInfo = {
  name: "Hampton Family Dental",
  formerName: "Brenner Dental Group",
  phone: "(215) 357-2224",
  phoneTel: "tel:+12153572224",
  email: "hello@hamptonfamilydental.com",
  address: {
    street: "283 Second Street Pike",
    suite: "Suite 140",
    city: "Southampton",
    state: "PA",
    zip: "18966",
    full: "283 Second Street Pike, Suite 140, Southampton, PA 18966",
    short: "283 Second Street Pike, Suite 140, Southampton, PA",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=283+Second+Street+Pike,+Suite+140,+Southampton,+PA+18966",
  },
  hours: [
    { day: "Mon", time: "8:00 AM – 6:00 PM", open: true },
    { day: "Tue", time: "8:00 AM – 4:00 PM", open: true },
    { day: "Wed", time: "9:00 AM – 1:00 PM", open: true },
    { day: "Thu", time: "8:00 AM – 4:00 PM", open: true },
    { day: "Fri", time: "Closed", open: false },
    { day: "Sat", time: "Closed", open: false },
    { day: "Sun", time: "Closed", open: false },
  ],
  socials: {
    facebook: "https://www.facebook.com/BrennerDentalGroup",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
  },
} as const;
