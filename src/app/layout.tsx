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

/** Google Analytics 4 measurement ID (gtag.js global site tag). */
const GA_ID = "G-1KLWZ2499J";

/** Google Ads conversion ID, configured on the same gtag instance. */
const GOOGLE_ADS_ID = "AW-18372303940";

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

        {/* ── Google tag (gtag.js) ──
            Global site tag for GA4 + Google Ads. Both `config` commands run on
            the same gtag instance, exactly as Google's install instructions
            describe: the GA4 measurement ID first, then this Ads account's
            conversion ID directly beneath it.

            Kept separate from the GTM container above on purpose — the Ads
            conversion is fired directly via gtag() from the shared form helper
            (src/lib/sendEnquiry.ts) rather than through a GTM trigger, because
            the site has no post-submit "thank you" page to hang a pageview
            trigger on: every form resolves in place. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');gtag('config', '${GOOGLE_ADS_ID}');`,
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
