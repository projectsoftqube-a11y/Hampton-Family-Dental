import type { Metadata } from "next";

import { absoluteUrl, SITE_URL } from "@/lib/site";
import { getPublishedPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";

/**
 * Re-render every 5 minutes so a scheduled post appears without a deploy.
 * Without this the page is built once and a future-dated post would stay
 * hidden until someone happened to redeploy.
 */
export const revalidate = 300;

const title = "Dental Blog & Practice News | Hampton Family Dental";
const description =
  "Practice updates and plain-English dental guides from Hampton Family Dental in Southampton, PA — written and reviewed by Dr. Jeffrey Brenner and Dr. Keyur Dudhat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Hampton Family Dental Blog",
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: "Hampton Family Dental",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogClient posts={posts} />
    </>
  );
}
