import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site";
import AboutHubClient from "./AboutHubClient";

const title = "About Us | Hampton Family Dental Southampton, PA";
const description =
  "Meet the team behind Hampton Family Dental — formerly Brenner Dental Group. Dr. Jeffrey Brenner and Dr. Keyur Dudhat have cared for Southampton, PA families since 1995.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutHubPage() {
  return <AboutHubClient />;
}
