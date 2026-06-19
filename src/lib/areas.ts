export interface AreaFaq {
  question: string;
  answer: string;
  schemaAnswer?: string;
}

export interface ServiceArea {
  city: string;
  slug: string;
  zipCodes: string;
  driveTime: string;
  title: string;
  description: string;
  keywords: string[];
  heroSubline: string;
  intro: string;
  servicesCopy: string;
  whyHeading: string;
  whyCopy: string[];
  directionsHeading: string;
  directionsCopy: string[];
  localNote: string;
  membershipLine: string;
  faqs: AreaFaq[];
}

export const serviceLinks = [
  { label: "General Dentistry", href: "/general-dentistry" },
  { label: "Restorative Dentistry", href: "/restorative-dentistry" },
  { label: "Dental Implants", href: "/restorative-dentistry/dental-implants" },
  { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
  { label: "Invisalign", href: "/cosmetic-dentistry/invisalign" },
  {
    label: "Emergency Dentistry",
    href: "/general-dentistry/emergency-dentistry",
  },
  { label: "Specials", href: "/specials" },
];

export const serviceAreas: ServiceArea[] = [
  {
    city: "Southampton",
    slug: "dentist-southampton-pa",
    zipCodes: "18966",
    driveTime: "Right here in Southampton",
    title: "Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Looking for a dentist right here in Southampton? Hampton Family Dental offers family, cosmetic & emergency dentistry minutes away in Southampton. New patients welcome. (215) 357-2224.",
    keywords: [
      "dentist southampton pa",
      "southampton dentist",
      "family dentist southampton",
      "dental office near southampton",
    ],
    heroSubline:
      "Looking for a trusted dentist right here in Southampton? Hampton Family Dental - formerly Brenner Dental Group - welcomes Southampton families for gentle general, cosmetic, restorative, and emergency dentistry. Call (215) 357-2224 to schedule.",
    intro:
      "For Southampton residents, quality dental care is just minutes away. At Hampton Family Dental, Dr. Jeffrey Brenner and Dr. Keyur Dudhat provide comprehensive care for the whole family - from children's first checkups to dental implants and smile makeovers - in a comfortable, modern office serving Southampton, the Tamanend Park area, and the 18966 community.",
    servicesCopy:
      "We offer everything Southampton families need in one place: general and preventive dentistry (cleanings, checkups, emergency care), restorative dentistry (dental implants, crowns, bridges, dentures, root canals), and cosmetic dentistry (veneers, teeth whitening, Invisalign, smile makeovers). New patients without insurance can start with our membership plan.",
    whyHeading: "Why Southampton Families Choose Hampton Family Dental",
    whyCopy: [
      "As the practice that has cared for Southampton families for decades (formerly Brenner Dental Group), we're your neighborhood dental home - same trusted location at 283 Second Street Pike, Suite 140, with the same team you've always known.",
      "That local history matters. Many Southampton patients first visited us as children and now bring their own families for routine cleanings, emergency visits, cosmetic consultations, and long-term restorative care. Our team keeps the experience personal, clear, and calm so you always understand your options before treatment begins.",
    ],
    directionsHeading: "Getting to Our Office from Southampton",
    directionsCopy: [
      "We're located on Second Street Pike (Route 132) with easy parking, close to Tamanend Park and central Southampton. Find us at 283 Second Street Pike, Suite 140, Southampton, PA 18966.",
      "Because we are already in Southampton, visits are simple to fit around school pickups, workdays, and errands along Street Road, Second Street Pike, and nearby neighborhood routes.",
    ],
    localNote:
      "Southampton is our home base, so this page is written for neighbors who want a dental office nearby without sacrificing technology, experience, or a warm relationship with the team.",
    membershipLine:
      "No insurance? No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, with discounts on other treatments. Call (215) 357-2224 or request an appointment online.",
    faqs: [
      {
        question: "Do you accept new patients from Southampton?",
        answer:
          "Yes! We happily welcome new patients from Southampton and the surrounding area. New patients without insurance can take advantage of our membership plan and welcome offers - call (215) 357-2224 to get started.",
        schemaAnswer:
          "Yes! We happily welcome new patients from Southampton and the surrounding area. New patients without insurance can use our membership plan and welcome offers - call (215) 357-2224.",
      },
      {
        question: "How far is Hampton Family Dental from Southampton?",
        answer:
          "We're right here in Southampton. We're located on Second Street Pike (Route 132) with easy parking, close to Tamanend Park and central Southampton. Most Southampton patients reach us in well under 20 minutes.",
      },
      {
        question: "Do you offer emergency dental care?",
        answer:
          "Yes - we reserve same-day appointments for dental emergencies for Southampton patients. If you have severe pain, swelling, or a broken or knocked-out tooth, call (215) 357-2224 right away.",
        schemaAnswer:
          "Yes - we reserve same-day appointments for dental emergencies. If you have severe pain, swelling, or a broken or knocked-out tooth, call (215) 357-2224 right away.",
      },
      {
        question: "What if I don't have dental insurance?",
        answer:
          "No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, plus discounts on other treatments. It's a simple, affordable option for Southampton families without insurance.",
        schemaAnswer:
          "No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, plus discounts. A simple, affordable option for Southampton families.",
      },
    ],
  },
  {
    city: "Richboro",
    slug: "dentist-richboro-pa",
    zipCodes: "18954",
    driveTime: "About 10 minutes from Richboro",
    title: "Dentist in Richboro, PA | Hampton Family Dental",
    description:
      "Looking for a dentist just a short drive from Richboro? Hampton Family Dental offers family, cosmetic & emergency dentistry minutes away in Southampton. New patients welcome. (215) 357-2224.",
    keywords: [
      "dentist richboro pa",
      "richboro dentist",
      "family dentist richboro",
      "dental office near richboro",
    ],
    heroSubline:
      "Looking for a trusted dentist just a short drive from Richboro? Hampton Family Dental - formerly Brenner Dental Group - welcomes Richboro families for gentle general, cosmetic, restorative, and emergency dentistry. Call (215) 357-2224 to schedule.",
    intro:
      "For Richboro residents, quality dental care is just minutes away. At Hampton Family Dental, Dr. Jeffrey Brenner and Dr. Keyur Dudhat provide comprehensive care for the whole family - from children's first checkups to dental implants and smile makeovers - in a comfortable, modern office serving Richboro, Churchville, and the Council Rock community.",
    servicesCopy:
      "We offer everything Richboro families need in one place: general and preventive dentistry (cleanings, checkups, emergency care), restorative dentistry (dental implants, crowns, bridges, dentures, root canals), and cosmetic dentistry (veneers, teeth whitening, Invisalign, smile makeovers). New patients without insurance can start with our membership plan.",
    whyHeading: "Why Richboro Families Choose Hampton Family Dental",
    whyCopy: [
      "Richboro families appreciate that they can get comprehensive family, cosmetic, and emergency care just minutes down the road - without driving into a city or settling for a big corporate chain.",
      "For patients near Richboro, Churchville, and the Council Rock community, that convenience matters. You can schedule routine cleanings, talk through cosmetic options, get help for sudden tooth pain, and plan larger restorative care with one nearby team that knows how to make dental visits feel straightforward.",
    ],
    directionsHeading: "Getting to Our Office from Richboro",
    directionsCopy: [
      "From Richboro, we're a quick drive south on Second Street Pike - about 10 minutes from the center of Richboro. Find us at 283 Second Street Pike, Suite 140, Southampton, PA 18966.",
      "Most Richboro patients can reach us in well under 20 minutes, making Hampton Family Dental a practical choice for appointments before work, after school, or between errands around Richboro and Churchville.",
    ],
    localNote:
      "Richboro patients appreciate having a nearby dental home that can support routine care, unexpected tooth pain, and smile goals without a long trip.",
    membershipLine:
      "No insurance? No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, with discounts on other treatments. Call (215) 357-2224 or request an appointment online.",
    faqs: [
      {
        question: "Do you accept new patients from Richboro?",
        answer:
          "Yes! We happily welcome new patients from Richboro and the surrounding area. New patients without insurance can take advantage of our membership plan and welcome offers - call (215) 357-2224 to get started.",
        schemaAnswer:
          "Yes! We happily welcome new patients from Richboro and the surrounding area. New patients without insurance can use our membership plan and welcome offers - call (215) 357-2224.",
      },
      {
        question: "How far is Hampton Family Dental from Richboro?",
        answer:
          "We're just a short drive from Richboro. From Richboro, we're a quick drive south on Second Street Pike - about 10 minutes from the center of Richboro. Most Richboro patients reach us in well under 20 minutes.",
      },
      {
        question: "Do you offer emergency dental care?",
        answer:
          "Yes - we reserve same-day appointments for dental emergencies for Richboro patients. If you have severe pain, swelling, or a broken or knocked-out tooth, call (215) 357-2224 right away.",
        schemaAnswer:
          "Yes - we reserve same-day appointments for dental emergencies. If you have severe pain, swelling, or a broken or knocked-out tooth, call (215) 357-2224 right away.",
      },
      {
        question: "What if I don't have dental insurance?",
        answer:
          "No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, plus discounts on other treatments. It's a simple, affordable option for Richboro families without insurance.",
        schemaAnswer:
          "No problem - our in-house membership plan covers cleanings, checkups, and X-rays for a low yearly fee, plus discounts. A simple, affordable option for Richboro families.",
      },
    ],
  },
  {
    city: "Warminster",
    slug: "dentist-warminster-pa",
    zipCodes: "18974",
    driveTime: "About 15 minutes from Warminster",
    title: "Dentist in Warminster, PA | Hampton Family Dental",
    description:
      "Warminster patients can visit Hampton Family Dental in Southampton for gentle family, cosmetic, restorative, and emergency dentistry. New patients welcome.",
    keywords: [
      "dentist warminster pa",
      "warminster dentist",
      "family dentist warminster",
      "emergency dentist warminster",
    ],
    heroSubline:
      "Need a dentist near Warminster with practical scheduling and a calm, friendly team? Hampton Family Dental is a short drive away in Southampton for complete dental care.",
    intro:
      "Warminster patients visit Hampton Family Dental for everything from preventive cleanings and digital exams to crowns, dental implants, whitening, Invisalign, dentures, and emergency dental care. Our team helps patients from neighborhoods near Street Road, York Road, and Warminster Community Park feel informed and comfortable at each visit.",
    servicesCopy:
      "Our services for Warminster patients include general dentistry, restorative dentistry, dental implants, cosmetic dentistry, Invisalign, emergency dentistry, and specials for new and returning patients. We help you understand what is urgent, what can wait, and what options best fit your goals.",
    whyHeading: "Why Warminster Patients Choose Hampton Family Dental",
    whyCopy: [
      "Warminster families often juggle full calendars, school schedules, and work commutes, so dental care needs to be organized and easy to act on. We focus on clear treatment plans, helpful appointment guidance, and a comfortable setting that removes as much stress as possible from the visit.",
      "Patients also appreciate that our Southampton practice combines preventive, cosmetic, and restorative services under one roof. If a routine visit reveals a cracked tooth, gum concern, missing tooth, or cosmetic opportunity, our team can explain the next step without sending you on a long search.",
    ],
    directionsHeading: "Getting to Our Office from Warminster",
    directionsCopy: [
      "From Warminster, patients commonly travel south toward Southampton using Street Road, York Road, or nearby connecting routes. Our office is located at 283 Second Street Pike, Suite 140, with convenient parking.",
      "The drive is usually around 15 minutes, making Hampton Family Dental a practical option for Warminster patients who want nearby care without switching between multiple dental offices.",
    ],
    localNote:
      "For Warminster families, our practice offers a close-by dental home with a full range of services and a team that explains care in everyday language.",
    membershipLine:
      "If you do not have dental insurance, our in-house membership plan can help make preventive visits and additional treatment more manageable.",
    faqs: [
      {
        question: "Are you accepting new patients from Warminster?",
        answer:
          "Yes. Hampton Family Dental welcomes new patients from Warminster for cleanings, exams, cosmetic consultations, restorative care, and urgent dental needs.",
      },
      {
        question: "How long does it take to get to your office from Warminster?",
        answer:
          "Most Warminster patients reach our Southampton office in about 15 minutes, depending on traffic and the route they take.",
      },
      {
        question: "Do you provide dental implants near Warminster?",
        answer:
          "Yes. We offer dental implant consultations and restorative options for Warminster patients who are missing one tooth, several teeth, or need a more secure tooth replacement plan.",
      },
      {
        question: "What should Warminster patients do for a dental emergency?",
        answer:
          "Call (215) 357-2224 right away. Our team can help triage tooth pain, swelling, broken teeth, knocked-out teeth, and other urgent dental concerns.",
      },
    ],
  },
  {
    city: "Newtown",
    slug: "dentist-newtown-pa",
    zipCodes: "18940",
    driveTime: "About 20 minutes from Newtown",
    title: "Dentist in Newtown, PA | Hampton Family Dental",
    description:
      "Newtown patients can visit Hampton Family Dental in Southampton for family dentistry, cosmetic care, Invisalign, implants, and emergency dental visits.",
    keywords: [
      "dentist newtown pa",
      "newtown dentist",
      "family dentist newtown",
      "cosmetic dentist newtown",
    ],
    heroSubline:
      "Searching for a dentist near Newtown who blends modern treatment with a personal, relationship-first approach? Hampton Family Dental welcomes Newtown patients to our Southampton office.",
    intro:
      "Newtown patients choose Hampton Family Dental for careful exams, preventive dentistry, cosmetic smile improvements, dental implants, crowns, Invisalign, and emergency care. We are close enough for regular visits and thorough enough for patients who want a long-term dental home beyond a quick cleaning.",
    servicesCopy:
      "For Newtown patients, we provide general dentistry, restorative dentistry, dental implants, cosmetic dentistry, Invisalign, emergency dentistry, and patient specials. Each service is designed around clear recommendations, natural-looking results, and a visit experience that feels calm rather than rushed.",
    whyHeading: "Why Newtown Patients Choose Hampton Family Dental",
    whyCopy: [
      "Newtown patients often come to us because they want care that is both technically strong and easy to understand. We take a careful look at your health, listen to what you want, and then map out options in a way that respects your time, comfort, and budget.",
      "Our office is especially helpful for families with different dental needs under one roof. One family member may need routine cleanings, another may be considering Invisalign, and another may need a crown or implant consultation. We keep those conversations coordinated and personal.",
    ],
    directionsHeading: "Getting to Our Office from Newtown",
    directionsCopy: [
      "From Newtown, patients commonly drive through the Richboro or Holland area toward Second Street Pike in Southampton. Hampton Family Dental is located at 283 Second Street Pike, Suite 140.",
      "The trip is usually about 20 minutes, making our office a convenient option for Newtown patients who want comprehensive care close to Bucks County daily routes.",
    ],
    localNote:
      "For Newtown patients, our practice offers a nearby alternative to large, impersonal dental offices while still providing a broad range of treatment options.",
    membershipLine:
      "Patients without dental insurance can ask about our in-house membership plan for preventive visits and savings on additional care.",
    faqs: [
      {
        question: "Do Newtown patients visit Hampton Family Dental?",
        answer:
          "Yes. We welcome patients from Newtown who want nearby family, cosmetic, restorative, and emergency dental care in Southampton.",
      },
      {
        question: "How far is your office from Newtown, PA?",
        answer:
          "Our Southampton office is generally about 20 minutes from Newtown, depending on your route and traffic conditions.",
      },
      {
        question: "Can Newtown patients get Invisalign at your office?",
        answer:
          "Yes. We offer Invisalign and clear aligner consultations for teens and adults from Newtown who want a straighter smile without traditional braces.",
      },
      {
        question: "Do you offer family dentistry for Newtown households?",
        answer:
          "Yes. We care for children, adults, and seniors, making it easier for Newtown families to coordinate preventive and restorative dental visits.",
      },
    ],
  },
  {
    city: "Holland",
    slug: "dentist-holland-pa",
    zipCodes: "18966",
    driveTime: "About 10 minutes from Holland",
    title: "Dentist in Holland, PA | Hampton Family Dental",
    description:
      "Holland patients can visit Hampton Family Dental in nearby Southampton for preventive, cosmetic, restorative, Invisalign, and emergency dentistry.",
    keywords: [
      "dentist holland pa",
      "holland dentist",
      "family dentist holland",
      "dental office near holland pa",
    ],
    heroSubline:
      "For Holland families looking for a nearby dentist, Hampton Family Dental offers complete care just minutes away in Southampton.",
    intro:
      "Holland patients visit our Southampton office for regular cleanings, checkups, dental emergencies, cosmetic dentistry, Invisalign, crowns, bridges, dentures, and implant consultations. Our location makes it simple to keep up with care without traveling far from the Holland and Northampton Township area.",
    servicesCopy:
      "Our dental services for Holland patients include general dentistry, restorative dentistry, dental implants, cosmetic dentistry, Invisalign, emergency dentistry, and specials. The goal is to help patients protect their oral health, solve dental problems early, and feel confident about their smiles.",
    whyHeading: "Why Holland Families Choose Hampton Family Dental",
    whyCopy: [
      "Holland patients often want care that is close, friendly, and consistent. At Hampton Family Dental, you see a team that values long-term relationships and explains treatment in a way that feels manageable, whether you need a routine exam or a larger restorative plan.",
      "Because our office is nearby, it is easier to stay current with preventive visits and easier to call quickly when something feels wrong. That convenience matters when a filling chips, a child has tooth pain, or you finally decide to talk about whitening or Invisalign.",
    ],
    directionsHeading: "Getting to Our Office from Holland",
    directionsCopy: [
      "From Holland, most patients can reach us in about 10 minutes by heading toward Second Street Pike in Southampton. Our office is at 283 Second Street Pike, Suite 140.",
      "The short drive makes appointments easier to schedule around school, work, and errands throughout Holland, Churchville, and central Southampton.",
    ],
    localNote:
      "Holland patients get the benefit of a close-by dental office with the service range needed for routine care, urgent issues, and smile improvements.",
    membershipLine:
      "No insurance? Our in-house membership plan gives Holland patients a straightforward way to keep up with cleanings, checkups, and X-rays.",
    faqs: [
      {
        question: "Do you accept new patients from Holland, PA?",
        answer:
          "Yes. Hampton Family Dental welcomes new patients from Holland for preventive visits, cosmetic care, restorative dentistry, and dental emergencies.",
      },
      {
        question: "How close is Hampton Family Dental to Holland?",
        answer:
          "Our Southampton office is usually about 10 minutes from Holland, depending on your starting point and traffic.",
      },
      {
        question: "Do you offer emergency dentistry for Holland patients?",
        answer:
          "Yes. Holland patients should call (215) 357-2224 for urgent dental pain, swelling, broken teeth, lost restorations, or knocked-out teeth.",
      },
      {
        question: "Can Holland patients join the membership plan?",
        answer:
          "Yes. Patients without dental insurance can ask about our in-house membership plan, which helps cover preventive care and discounts other treatment.",
      },
    ],
  },
  {
    city: "Feasterville",
    slug: "dentist-feasterville-pa",
    zipCodes: "19053",
    driveTime: "About 15 minutes from Feasterville",
    title: "Dentist in Feasterville, PA | Hampton Family Dental",
    description:
      "Feasterville patients can visit Hampton Family Dental in Southampton for family, cosmetic, restorative, Invisalign, implant, and emergency dentistry.",
    keywords: [
      "dentist feasterville pa",
      "feasterville dentist",
      "family dentist feasterville",
      "emergency dentist feasterville",
    ],
    heroSubline:
      "Looking for a dentist near Feasterville with a welcoming team and a full menu of services? Hampton Family Dental is nearby in Southampton.",
    intro:
      "Patients from Feasterville choose Hampton Family Dental for family checkups, cleanings, tooth-colored fillings, crowns, dental implants, Invisalign, whitening, dentures, and emergency dental care. Our team helps make the visit feel organized from the first phone call through the final follow-up.",
    servicesCopy:
      "Feasterville patients can access general dentistry, restorative dentistry, dental implants, cosmetic dentistry, Invisalign, emergency dentistry, and patient specials at one nearby office. We focus on useful recommendations, comfortable visits, and care that supports long-term health.",
    whyHeading: "Why Feasterville Patients Choose Hampton Family Dental",
    whyCopy: [
      "Feasterville patients often come to us when they want more than a quick appointment. They want a team that remembers them, explains treatment clearly, and offers solutions for both everyday dental care and more complex concerns such as missing teeth, worn restorations, or cosmetic changes.",
      "Our Southampton office gives Feasterville families a practical nearby option with modern technology and a compassionate approach. We help you understand what we see, why it matters, and how to choose the treatment path that best fits your goals.",
    ],
    directionsHeading: "Getting to Our Office from Feasterville",
    directionsCopy: [
      "From Feasterville, patients can usually reach our office in about 15 minutes by heading toward Southampton and Second Street Pike. Find Hampton Family Dental at 283 Second Street Pike, Suite 140.",
      "The location is convenient for patients traveling from Feasterville, Trevose, and Lower Southampton neighborhoods who want a nearby dental home with comprehensive care.",
    ],
    localNote:
      "Feasterville patients can use our office for routine maintenance, urgent concerns, and elective smile upgrades without a long drive.",
    membershipLine:
      "If insurance is a concern, ask about our in-house membership plan and flexible payment options for Feasterville patients.",
    faqs: [
      {
        question: "Are Feasterville patients welcome at Hampton Family Dental?",
        answer:
          "Yes. We welcome new and returning patients from Feasterville for family dental care, cosmetic dentistry, restorative treatment, and emergencies.",
      },
      {
        question: "How far is your office from Feasterville?",
        answer:
          "Most Feasterville patients reach our Southampton office in about 15 minutes, depending on traffic and the route they choose.",
      },
      {
        question: "Do you offer restorative dentistry near Feasterville?",
        answer:
          "Yes. We offer fillings, crowns, bridges, dentures, root canal treatment, and dental implant options for Feasterville patients.",
      },
      {
        question: "What if I have a dental emergency in Feasterville?",
        answer:
          "Call (215) 357-2224 as soon as possible. Our team can help with severe pain, swelling, broken teeth, knocked-out teeth, and other urgent concerns.",
      },
    ],
  },
  {
    city: "Huntingdon Valley",
    slug: "dentist-huntingdon-valley-pa",
    zipCodes: "19006",
    driveTime: "About 20 minutes from Huntingdon Valley",
    title: "Dentist in Huntingdon Valley, PA | Hampton Family Dental",
    description:
      "Huntingdon Valley patients can visit Hampton Family Dental in Southampton for family, cosmetic, restorative, implant, and emergency dentistry.",
    keywords: [
      "dentist huntingdon valley pa",
      "huntingdon valley dentist",
      "family dentist huntingdon valley",
      "cosmetic dentist huntingdon valley",
    ],
    heroSubline:
      "For Huntingdon Valley patients who want a trusted dental office nearby, Hampton Family Dental provides comprehensive care in Southampton.",
    intro:
      "Huntingdon Valley patients visit Hampton Family Dental for preventive dentistry, cosmetic treatment, dental implants, crowns, bridges, dentures, Invisalign, and emergency care. Our team combines modern options with a calm, personal approach that helps patients feel comfortable asking questions.",
    servicesCopy:
      "Our services for Huntingdon Valley patients include general dentistry, restorative dentistry, dental implants, cosmetic dentistry, Invisalign, emergency dentistry, and specials. We can help with routine maintenance, sudden tooth pain, missing teeth, bite concerns, and smile goals.",
    whyHeading: "Why Huntingdon Valley Patients Choose Hampton Family Dental",
    whyCopy: [
      "Huntingdon Valley patients often value a dental office that is thorough without feeling overwhelming. We take time to review your health history, discuss concerns, and explain treatment options so decisions feel informed instead of pressured.",
      "Our Southampton office is a strong fit for patients who want continuity. You can bring your family for cleanings, ask about cosmetic improvements, restore damaged teeth, and get urgent help when dental pain interrupts your week.",
    ],
    directionsHeading: "Getting to Our Office from Huntingdon Valley",
    directionsCopy: [
      "From Huntingdon Valley, patients typically travel north or east toward Southampton using County Line Road, Street Road, or nearby connecting routes. Our office is located at 283 Second Street Pike, Suite 140.",
      "The drive is often about 20 minutes, making Hampton Family Dental a convenient nearby option for patients who want a full-service office outside the busiest corridors.",
    ],
    localNote:
      "Huntingdon Valley patients can rely on our team for preventive care, urgent support, and long-term treatment planning in a nearby Southampton setting.",
    membershipLine:
      "Patients without insurance can ask about our in-house membership plan for cleanings, checkups, X-rays, and savings on additional treatment.",
    faqs: [
      {
        question: "Do you see patients from Huntingdon Valley?",
        answer:
          "Yes. Hampton Family Dental welcomes Huntingdon Valley patients for family, cosmetic, restorative, implant, Invisalign, and emergency dental care.",
      },
      {
        question: "How far is Hampton Family Dental from Huntingdon Valley?",
        answer:
          "Our Southampton office is generally about 20 minutes from Huntingdon Valley, depending on traffic and your exact starting point.",
      },
      {
        question: "Can Huntingdon Valley patients get cosmetic dentistry?",
        answer:
          "Yes. We offer whitening, veneers, bonding, Invisalign, and smile makeover planning for Huntingdon Valley patients.",
      },
      {
        question: "Do you have options for patients without insurance?",
        answer:
          "Yes. Our in-house membership plan helps patients without insurance stay current with preventive care and save on additional treatment.",
      },
    ],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
