import Link from "next/link";
import Image from "next/image";
import { Award, Sparkles } from "lucide-react";

export default function DoctorBlock() {
  return (
    <div className="bg-beige-light/20 py-16 border-y border-navy/5">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">
            Clinical Excellence
          </span>
          <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold mt-2">
            Meet Your Care Providers
          </h3>
          <p className="text-navy/60 text-xs md:text-sm mt-2">
            Our doctors combine clinical expertise with a gentle, patient-first philosophy to restore your health and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dr. Brenner */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-6 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-beige shadow-md">
              <Image
                src="/images/dentist_portrait_1779858109259.webp"
                alt="Dr. Jeffrey Brenner, DMD"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1 mb-1.5 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
              <Award className="w-3 h-3 text-primary" />
              <span className="text-[8px] tracking-wider uppercase text-primary font-bold">Founder</span>
            </div>
            <h4 className="font-heading text-navy text-lg font-bold">Dr. Jeffrey Brenner</h4>
            <p className="text-primary font-semibold text-[11px] uppercase tracking-wider mb-2">
              DMD · Temple University (1992)
            </p>
            <p className="text-navy/60 text-xs leading-relaxed max-w-xs mb-4">
              Providing Southampton families with caring, comprehensive, and relationship-driven dentistry since 1995.
            </p>
            <Link
              href="/about/dr-jeffrey-brenner"
              className="text-xs text-primary font-semibold tracking-wider hover:text-primary-dark hover:underline transition-colors"
            >
              Read Bio &rarr;
            </Link>
          </div>

          {/* Dr. Dudhat */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-6 border border-navy/5 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-beige shadow-md">
              <Image
                src="/doctor-avatar.png"
                alt="Dr. Keyur Dudhat, DMD"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1 mb-1.5 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[8px] tracking-wider uppercase text-primary font-bold">Partner</span>
            </div>
            <h4 className="font-heading text-navy text-lg font-bold">Dr. Keyur Dudhat</h4>
            <p className="text-primary font-semibold text-[11px] uppercase tracking-wider mb-2">
              DMD · Temple University
            </p>
            <p className="text-navy/60 text-xs leading-relaxed max-w-xs mb-4">
              Pioneering advanced digital imaging diagnostics, cosmetic smile plans, and comprehensive implant surgery.
            </p>
            <Link
              href="/about/dr-keyur-dudhat"
              className="text-xs text-primary font-semibold tracking-wider hover:text-primary-dark hover:underline transition-colors"
            >
              Read Bio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
