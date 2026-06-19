import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Calendar, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Hampton Family Dental",
  description:
    "Read the Terms of Service for Hampton Family Dental. Understand the rules, disclaimers, and policies governing the use of our website.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Hampton Family Dental",
    description:
      "Read the Terms of Service for Hampton Family Dental. Understand the rules, disclaimers, and policies governing the use of our website.",
    url: `${SITE_URL}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Hampton Family Dental",
    description:
      "Read the Terms of Service for Hampton Family Dental. Understand the rules, disclaimers, and policies governing the use of our website.",
  },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Service" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": `${SITE_URL}/terms`
      }
    ]
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Terms of Service
              </h1>
              <p className="text-primary-light font-medium tracking-wide uppercase text-sm">
                Effective Date: June 19, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="space-y-10 prose prose-navy max-w-none text-navy/80 text-sm md:text-base leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">1. Acceptance of Terms</h2>
              <p>
                Welcome to the website of Hampton Family Dental (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our website located at {SITE_URL} (the &ldquo;Site&rdquo;), you agree to comply with and be bound by these Terms of Service (the &ldquo;Terms&rdquo;). Please read these Terms carefully. If you do not agree to all of these Terms, do not access or use our Site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">2. Use of Website</h2>
              <p>
                You agree to use the Site only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information you submit through the Site (such as contact forms, email messages, or scheduling requests) is accurate, complete, and does not violate any third-party rights or applicable laws.
              </p>
            </div>

            {/* Medical / Dental Disclaimer Callout */}
            <div className="bg-beige-light/25 border border-navy/5 rounded-3xl p-6 md:p-8 space-y-4">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary shrink-0" />
                3. Medical &amp; Dental Disclaimer
              </h2>
              <p className="font-semibold text-navy/95">
                The content on this Site is for educational and informational purposes only.
              </p>
              <p className="text-navy/70">
                Nothing published on this Site constitutes professional medical or dental advice, diagnosis, or clinical treatment plans. Always seek the advice of your dentist, physician, or other qualified healthcare provider with any questions you may have regarding a dental or medical condition.
              </p>
              <p className="text-navy/70">
                <strong>No Dentist-Patient Relationship:</strong> Accessing, reading, or interacting with the Site, including submitting contact forms or scheduling requests, does not create a dentist-patient relationship between you and any clinician at Hampton Family Dental. A dentist-patient relationship is only established once you have had a clinical consultation and are accepted as a patient of record in our physical practice office.
              </p>
            </div>

            {/* Appointment Request Callout */}
            <div className="bg-beige-light/25 border border-navy/5 rounded-3xl p-6 md:p-8 space-y-4">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary shrink-0" />
                4. Appointment Requests &amp; Confirmations
              </h2>
              <p className="font-semibold text-navy/95">
                Submitting an online scheduling form does not guarantee or secure a dental appointment.
              </p>
              <p className="text-navy/70">
                Any appointment times requested or chosen via online scheduling widgets or forms on this Site are <strong>pending requests only</strong>. Your appointment is not finalized or confirmed until a member of our administrative front-office staff contacts you directly via phone or email to verify your details, insurance eligibility, and finalize the schedule. We are not responsible for any scheduling conflicts arising from pending online requests.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">5. Intellectual Property</h2>
              <p>
                All materials, content, logos, icons, graphics, and text on this Site are the property of Hampton Family Dental or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may view and print portions of the Site for personal, non-commercial use only. Any other use, including copying, reproduction, distribution, or modifications, is strictly prohibited without our prior written consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">6. Third-Party Links</h2>
              <p>
                Our Site may contain links to external third-party websites for your convenience, such as patient financing (CareCredit) or directional maps. We do not endorse, control, or monitor these websites, and we assume no responsibility or liability for their content, policies, or practices. Your use of third-party websites is at your own risk.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Hampton Family Dental, its partners, officers, employees, and developers shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of, or the inability to use, this Site or the materials contained on it.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be posted directly on this page with an updated effective date. Your continued use of the Site after any changes are posted constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">9. Governing Law</h2>
              <p>
                These Terms and any dispute arising from your use of this Site shall be governed by and construed in accordance with the laws of the **Commonwealth of Pennsylvania**, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the state and federal courts located in Bucks County, Pennsylvania.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-navy/10">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">10. Contact Us</h2>
              <p>
                If you have any questions, comments, or concerns regarding these Terms of Service, please reach out to our team:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-2 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Hampton Family Dental</p>
                    <p className="text-navy/60">{practiceInfo.address.street}</p>
                    <p className="text-navy/60">{practiceInfo.address.suite}</p>
                    <p className="text-navy/60">{practiceInfo.address.city}, {practiceInfo.address.state} {practiceInfo.address.zip}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone Number</p>
                    <a href={practiceInfo.phoneTel} className="text-primary hover:underline font-medium">
                      {practiceInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email Address</p>
                    <a href={`mailto:${practiceInfo.email}`} className="text-primary hover:underline font-medium break-all">
                      {practiceInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Scheduling CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30 border-t border-navy/[0.04] text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Ready to Schedule?
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Submit a pending appointment request online or call us directly to confirm your schedule with our office team.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Request Appointment
            </Link>
            <a
              href={practiceInfo.phoneTel}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/15 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call {practiceInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
