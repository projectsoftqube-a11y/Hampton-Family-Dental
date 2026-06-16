import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Hampton Family Dental",
    default: "About Us | Hampton Family Dental",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
