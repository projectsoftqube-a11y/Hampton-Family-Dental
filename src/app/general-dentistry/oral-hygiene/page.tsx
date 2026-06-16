import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

export default function OralHygienePage() {
  const data = {
    eyebrow: "General Dentistry",
    title: "Oral Hygiene & Teeth Cleanings in Southampton, PA",
    intro: "Maintain a healthy, vibrant smile with professional cleanings and preventative hygiene care. Regular scaling and polishing remove stubborn plaque and tartar buildup, preventing gum disease and protecting your overall health.",
    duration: "45–60 minutes",
    visits: "Every 6 months",
    image: "/images/service_general_1779858374972.webp",
    whatIs: {
      title: "What is a Professional Teeth Cleaning?",
      text: "Even with diligent brushing and flossing, mineralized plaque (tartar) builds up in hard-to-reach spots beneath the gumline. A professional hygiene cleaning involves scaling away tartar, polishing away surface stains, and evaluating your gum tissue for signs of gingivitis. Our registered dental hygienists also provide tailored home care guidance to protect your enamel.",
    },
    benefits: [
      "Removes stubborn tartar that home brushing can&apos;t reach",
      "Prevents cavities, bone loss, and gum disease",
      "Lifts surface stains for a brighter, polished smile",
      "Eliminates chronic bad breath (halitosis)",
    ],
    processSteps: [
      {
        title: "Clinical Exam & Gum Mapping",
        text: "Our hygienist carefully inspects your mouth and measures your gum pockets to assess overall periodontal health.",
      },
      {
        title: "Tartar Scaling",
        text: "Using specialized ultrasonic and hand scaling tools, we gently remove plaque and tartar deposits from your teeth.",
      },
      {
        title: "Polishing & Flossing",
        text: "We polish your teeth using a gritty prophylaxis paste to lift stains, followed by a thorough professional flossing.",
      },
      {
        title: "Fluoride Protection (Optional)",
        text: "If recommended, we apply a concentrated fluoride varnish to strengthen your enamel and prevent future cavities.",
      },
    ],
    candidacy: {
      text: "Professional teeth cleanings are recommended for every child and adult at least once every six months to keep gums healthy.",
      checks: [
        "Recommended for all ages (toddlers to seniors)",
        "Experiencing early bleeding when flossing (gingivitis)",
        "Having plaque buildup or coffee/tea stains",
        "Essential during pregnancy to protect gum health",
      ],
    },
    costInfo: {
      text: "Preventative dental cleanings are covered at 100% by almost all dental insurance plans, with zero out-of-pocket costs for you.",
      financingNote: "Our in-house membership plans cover 2 professional cleanings per year with no deductibles.",
    },
    faqs: [
      {
        q: "Why do I need a cleaning if I brush twice a day?",
        a: "Brushing and flossing are crucial, but they cannot remove tartar once it has hardened onto your teeth. Tartar must be scaled off by a dental professional using specialized instruments.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "For most patients, we recommend a routine cleaning and exam every 6 months. Patients with history of gum disease or active orthodontic work may benefit from cleanings every 3 to 4 months.",
      },
    ],
    relatedServices: [
      { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
      { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
      { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening" },
    ],
    breadcrumbs: [
      { label: "General Dentistry", href: "/general-dentistry" },
      { label: "Oral Hygiene" },
    ],
  };

  return <ServicePageTemplate {...data} />;
}
