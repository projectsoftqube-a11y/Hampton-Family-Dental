import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { absoluteUrl, SITE_URL } from "@/lib/site";
import { blogPosts, getBlogPost } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: `${post.metaTitle} | Hampton Family Dental`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: absoluteUrl(post.hero.src), alt: post.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [absoluteUrl(post.hero.src)],
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.hero.src),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Hampton Family Dental" },
    reviewedBy: {
      "@type": "Person",
      name: post.reviewedBy,
      jobTitle: "Dentist",
      worksFor: "Hampton Family Dental",
    },
    publisher: { "@type": "Organization", name: "Hampton Family Dental" },
    mainEntityOfPage: url,
    about: [
      "Brenner Dental Group",
      "Hampton Family Dental",
      "dental practice rebrand",
    ],
  };

  // Verbatim mirror of the visible FAQ accordion.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      { "@type": "ListItem", position: 3, name: post.metaTitle, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {post.extraSchema?.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}
      <BlogPostClient post={post} />
    </>
  );
}
