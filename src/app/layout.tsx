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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
