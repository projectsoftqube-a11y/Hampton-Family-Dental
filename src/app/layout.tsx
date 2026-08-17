import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Self-hosted, preloaded, and subset to only the weights/styles the design uses
// (was: a render-blocking Google Fonts <link> requesting every weight of both
// families). Eliminates the extra connection + the late font-swap layout shift.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Dentist in Southampton, PA | Hampton Family Dental",
  description:
    "Hampton Family Dental — formerly Brenner Dental Group — offers gentle family, cosmetic & emergency dentistry in Southampton, PA. New patients welcome. Call (215) 357-2224.",
  keywords: [
    "dentist southampton pa",
    "family dentist southampton",
    "dental implants southampton",
    "emergency dentist southampton",
    "invisalign southampton",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  openGraph: {
    title: "Family Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Gentle family, cosmetic & emergency dentistry in Southampton, PA. Formerly Brenner Dental Group. Now welcoming new patients.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Gentle family, cosmetic & emergency dentistry in Southampton, PA. Formerly Brenner Dental Group. Now welcoming new patients.",
  },
};

/** Google Tag Manager container for hamptonfamilydentist.com. */
const GTM_ID = "GTM-WLNN5FJV";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      {/* ── Google Tag Manager ──
          Rendered as a plain inline <script> inside an explicit <head> so the
          snippet sits literally at the top of the head, as GTM's install
          instructions require.

          next/script with strategy="beforeInteractive" was tried first and is
          NOT equivalent: Next serialises inline beforeInteractive scripts into
          its own `self.__next_s` queue and injects them at the top of <body>.
          It still executes early, but the tag is not in <head>, which breaks
          the documented install and anything that checks for it. */}
      <head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga --
            The lint rule suggests @next/third-parties' GoogleTagManager. That
            package is not installed, is flagged experimental in the Next docs,
            and loads the container after hydration rather than from <head>.
            The agency supplied this exact snippet and asked for head
            placement, so it is used verbatim. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* GTM noscript fallback — must be the first thing inside <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
