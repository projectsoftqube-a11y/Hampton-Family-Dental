import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Route, Sparkles } from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";
import { serviceAreas } from "@/lib/areas";
import { practiceInfo } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Areas We Serve | Hampton Family Dental",
  description:
    "Hampton Family Dental serves patients from Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA.",
};

export default function AreasWeServePage() {
  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      <section className="relative min-h-[620px] pt-36 pb-16 md:pt-44 md:pb-20 bg-navy-dark text-white">
        <Image
          src="/images/reception_area_1779858343255.webp"
          alt="Hampton Family Dental reception area"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/90 to-navy-dark/55" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Areas We Serve" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Nearby Dental Care
                </span>
              </div>
            </div>

            <h1
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
              }}
            >
              Areas We Serve
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              Hampton Family Dental welcomes patients from Southampton and nearby Bucks County communities for gentle family, cosmetic, restorative, and emergency dentistry.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/patient-information/scheduling"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Book Your Visit
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
        </div>
      </section>

      <section className="py-20 md:py-24 bg-beige-light/25">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-serve/${area.slug}`}
                className="group flex min-h-[260px] flex-col justify-between rounded-3xl border border-navy/5 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="mb-3 font-heading text-2xl font-bold text-navy">
                    Dentist in {area.city}, PA
                  </h2>
                  <p className="text-sm leading-relaxed text-navy/60">
                    {area.localNote}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-navy/8 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy/45">
                    <Route className="h-3.5 w-3.5 text-primary" />
                    {area.driveTime}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </main>
  );
}
