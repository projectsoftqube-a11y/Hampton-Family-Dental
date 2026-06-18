import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

interface ServiceMetadataConfig {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
}

interface ServiceMetadataSource {
  title: string;
  intro: string;
  metadata?: ServiceMetadataConfig;
}

export function buildServicePageMetadata(
  data: ServiceMetadataSource,
): Metadata {
  const pageTitle = data.metadata?.title || `${data.title} | Hampton Family Dental`;
  const description = data.metadata?.description || data.intro;
  const canonical = data.metadata?.canonical
    ? absoluteUrl(data.metadata.canonical)
    : undefined;
  const keywords =
    typeof data.metadata?.keywords === "string"
      ? data.metadata.keywords.split(",").map((keyword) => keyword.trim())
      : data.metadata?.keywords;

  return {
    title: pageTitle,
    description,
    keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: data.metadata?.openGraphTitle || pageTitle,
      description: data.metadata?.openGraphDescription || description,
      type: "website",
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: data.metadata?.openGraphTitle || pageTitle,
      description: data.metadata?.openGraphDescription || description,
    },
  };
}
