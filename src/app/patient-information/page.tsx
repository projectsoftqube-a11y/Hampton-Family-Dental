import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site";
import PatientInformationClient from "./PatientInformationClient";

const title = "Patient Information | Hampton Family Dental Southampton, PA";
const description =
  "New patient forms, scheduling, insurance and payment options, and financing at Hampton Family Dental in Southampton, PA. Everything you need before your first visit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/patient-information"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/patient-information"),
    type: "website",
  },
};

export default function PatientInformationPage() {
  return <PatientInformationClient />;
}
