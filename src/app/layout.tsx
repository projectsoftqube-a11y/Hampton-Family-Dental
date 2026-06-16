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
    "Trusted family & cosmetic dentistry in Southampton, PA. Formerly Brenner Dental Group — same team, same location. Dental implants, Invisalign, emergency care & more. Call (215) 357-2224.",
  keywords: [
    "dentist southampton pa",
    "family dentist southampton",
    "cosmetic dentistry southampton pa",
    "emergency dentist southampton",
    "dental implants southampton pa",
    "invisalign southampton pa",
    "teeth whitening southampton pa",
    "family dentistry",
    "cosmetic dentistry",
    "Invisalign",
    "teeth whitening",
    "dental implants",
    "veneers",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  openGraph: {
    title: "Family Dentist in Southampton, PA | Hampton Family Dental",
    description:
      "Trusted family & cosmetic dentistry in Southampton, PA. Formerly Brenner Dental Group — same team, same location. Dental implants, Invisalign, emergency care & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
