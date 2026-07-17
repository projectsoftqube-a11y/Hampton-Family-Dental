import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { absoluteUrl, SITE_URL } from "@/lib/site";
import { getServiceArea, serviceAreas, serviceLinks } from "@/lib/areas";
import { practiceInfo } from "@/lib/navigation";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return {};
  }

  const path = `/areas-we-serve/${area.slug}`;

  return {
    title: area.title,
    description: area.description,
    keywords: area.keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: area.title,
      description: area.description,
      url: absoluteUrl(path),
      type: "website",
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  const path = `/areas-we-serve/${area.slug}`;
  const pageUrl = absoluteUrl(path);
  const otherAreas = serviceAreas.filter((item) => item.slug !== area.slug);

  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Hampton Family Dental",
    image: `${SITE_URL}/logo.png`,
    telephone: "+12153572224",
    address: {
      "@type": "PostalAddress",
      streetAddress: "283 Second Street Pike, Suite 140",
      addressLocality: "Southampton",
      addressRegion: "PA",
      postalCode: "18966",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${area.city}, PA` },
    url: pageUrl,
    openingHours: [
      "Mo 08:00-18:00",
      "Tu 08:00-16:00",
      "We 09:00-13:00",
      "Th 08:00-16:00",
    ],
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaAnswer ?? faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: absoluteUrl("/areas-we-serve"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Dentist in ${area.city}, PA`,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      <JsonLd data={dentistSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <Image
          src="/images/clinic_interior_1779858062605.webp"
          alt="Hampton Family Dental treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/92 to-navy-dark/60" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/50 tracking-wider uppercase">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-light"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-white/30" />
                <Link
                  href="/areas-we-serve"
                  className="transition-colors hover:text-primary-light"
                >
                  Areas We Serve
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-white/30" />
                <span className="font-semibold text-primary-light">
                  {area.city}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="max-w-3xl lg:col-span-8">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-primary-light" />
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-primary-light" />
                  <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    {area.driveTime}
                  </span>
                </div>
              </div>

              <h1
                className="font-heading text-white mb-6"
                style={{
                  fontSize: "clamp(2.45rem, 5vw, 4.5rem)",
                  lineHeight: 1.05,
                }}
              >
                Dentist in {area.city}, PA
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
                {area.heroSubline}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/patient-information/scheduling"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Schedule Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={practiceInfo.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  {practiceInfo.phone}
                </a>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-2 text-primary-light">
                  <Clock className="h-4 w-4" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                    Local Visit Details
                  </p>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-white/40">Drive time</p>
                    <p className="font-semibold text-white">{area.driveTime}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Area ZIP</p>
                    <p className="font-semibold text-white">{area.zipCodes}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Office</p>
                    <p className="font-semibold text-white">
                      {practiceInfo.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <p className="text-base leading-relaxed text-navy/70 md:text-lg">
            {area.intro}
          </p>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-beige-light/25">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Services
            </div>
            <h2 className="mb-5 font-heading text-3xl font-bold text-navy md:text-4xl">
              Dental Services for {area.city} Patients
            </h2>
            <p className="text-sm leading-relaxed text-navy/65 md:text-base">
              {area.servicesCopy}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-[122px] flex-col justify-between rounded-2xl border border-navy/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div className="mt-4 flex items-end justify-between gap-3">
                  <span className="font-heading text-lg font-bold leading-tight text-navy">
                    {service.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="mb-5 font-heading text-3xl font-bold text-navy md:text-4xl">
                {area.whyHeading}
              </h2>
              <div className="space-y-5 text-sm leading-relaxed text-navy/68 md:text-base">
                {area.whyCopy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-navy/5 bg-beige-light/35 p-6 md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-navy/70">
                  {area.localNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-navy-dark text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
                {area.directionsHeading}
              </h2>
              <div className="space-y-5 text-sm leading-relaxed text-white/68 md:text-base">
                {area.directionsCopy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <iframe
                  title="Map to Hampton Family Dental"
                  src="https://www.google.com/maps?q=283%20Second%20Street%20Pike%20Suite%20140%20Southampton%20PA%2018966&output=embed"
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-beige-light/25">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Nearby Dental Care
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-navy md:text-4xl">
                Also serving nearby communities
              </h2>
              <p className="text-sm leading-relaxed text-navy/65 md:text-base">
                Hampton Family Dental serves patients throughout Southampton and surrounding Bucks County communities. Explore the other local pages in this care cluster.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {otherAreas.map((item) => (
                <Link
                  key={item.slug}
                  href={`/areas-we-serve/${item.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-navy/5 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <div>
                    <p className="font-heading text-xl font-bold text-navy">
                      {item.city}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                      Dentist {item.city}, PA
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Local FAQ
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              Dentist in {area.city}, PA - FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-navy/5 bg-beige-light/25 p-5 open:bg-white open:shadow-md"
              >
                <summary className="flex list-none items-center justify-between gap-4 font-heading text-lg font-bold text-navy">
                  {faq.question}
                  <ChevronRight className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-navy/68">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-navy-dark text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-light">
                <Sparkles className="h-3.5 w-3.5" />
                New Patients Welcome
              </div>
              <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
                Ready to schedule from {area.city}?
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                {area.membershipLine}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link
                href="/patient-information/scheduling"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Schedule Now
                <Calendar className="h-4 w-4" />
              </Link>
              <a
                href={practiceInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                {practiceInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
