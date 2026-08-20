"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  MessageSquareQuote,
  Phone,
  Plus,
  ShieldCheck,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";
import TableOfContents, {
  TableOfContentsMobile,
} from "@/components/blog/TableOfContents";
import { practiceInfo } from "@/lib/navigation";
import {
  formatBlogDate,
  getTableOfContents,
  slugifyHeading,
  type BlogLink,
  type BlogPost,
} from "@/lib/blog";

/** Renders copy with inline anchors, matching each link's `text` in order. */
function LinkedText({ text, links = [] }: { text: string; links?: BlogLink[] }) {
  if (links.length === 0) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  let remaining = text;

  links.forEach((link) => {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) return;

    const before = remaining.slice(0, idx);
    if (before) parts.push(before);

    const className =
      "font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary transition-colors";
    const isPlainAnchor =
      link.external || /^(tel:|mailto:|https?:)/i.test(link.href);

    parts.push(
      isPlainAnchor ? (
        <a
          key={`${link.href}-${parts.length}`}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={className}
        >
          {link.text}
        </a>
      ) : (
        <Link
          key={`${link.href}-${parts.length}`}
          href={link.href}
          className={className}
        >
          {link.text}
        </Link>
      ),
    );

    remaining = remaining.slice(idx + link.text.length);
  });

  if (remaining) parts.push(remaining);
  return <>{parts}</>;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const toc = getTableOfContents(post);

  return (
    // No `overflow-hidden` here on purpose — it would clip the sticky table of
    // contents to this box and stop it sticking. Each section clips its own blobs.
    <main className="bg-white font-body text-navy">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-10">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
          />

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15 mt-8 mb-5"
            >
              <ShieldCheck className="w-3 h-3 text-primary-light" />
              <span className="text-white/95 text-[9px] tracking-[0.22em] uppercase font-semibold">
                Medically reviewed by {post.reviewedBy}
                {post.lastReviewedLabel && (
                  <span className="text-white/55"> · {post.lastReviewedLabel}</span>
                )}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-white/10"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-[10px] font-bold uppercase tracking-[0.2em]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/55 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-primary-light" />
              <time dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/55 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-primary-light" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Article ─── */}
      <article className="py-14 md:py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Featured image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30 -mt-28 md:-mt-36 mb-12">
            <Image
              src={post.hero.src}
              alt={post.hero.alt}
              width={post.hero.width}
              height={post.hero.height}
              priority
              className="w-full h-auto object-cover"
              sizes="(max-width: 1180px) 100vw, 1120px"
              quality={90}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* ── Table of contents — sticky beside the article on desktop ── */}
            <aside className="lg:col-span-4 lg:order-2 lg:sticky lg:top-28">
              <TableOfContents items={toc} />
            </aside>

            {/* ── Article body ── */}
            <div className="lg:col-span-8 lg:order-1">
              {/* Answer box */}
              <div className="relative rounded-3xl bg-navy-dark text-white p-6 md:p-8 shadow-lg overflow-hidden mb-10">
                <div className="absolute top-[-50%] right-[-10%] w-[260px] h-[260px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <MessageSquareQuote className="w-4 h-4 text-primary-light" />
                  </div>
                  <p className="text-white/85 text-sm md:text-base leading-relaxed [&_a]:text-primary-light [&_a]:decoration-primary-light/40 [&_a:hover]:text-white">
                    <LinkedText
                      text={post.answerBox.text}
                      links={post.answerBox.links}
                    />
                  </p>
                </div>
              </div>

              {/* Key takeaways */}
              <div className="rounded-3xl bg-beige-light/40 border border-navy/[0.05] p-6 md:p-8 mb-10">
                <h2 className="font-heading text-navy text-lg md:text-xl font-bold mb-5">
                  The short version
                </h2>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-navy/80 text-sm md:text-[15px] leading-relaxed">
                        <LinkedText text={item.text} links={item.links} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collapsible table of contents — mobile only */}
              <TableOfContentsMobile items={toc} />

              {/* Body */}
              <div className="space-y-6">
                {post.sections.map((section, idx) => {
                  switch (section.type) {
                    case "heading":
                      return section.level === 2 ? (
                        <h2
                          key={idx}
                          id={slugifyHeading(section.text)}
                          className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight pt-8 first:pt-0 scroll-mt-28"
                        >
                          {section.text}
                        </h2>
                      ) : (
                        <h3
                          key={idx}
                          id={slugifyHeading(section.text)}
                          className="font-heading text-navy text-xl md:text-2xl font-bold leading-snug pt-4 scroll-mt-28"
                        >
                          {section.text}
                        </h3>
                      );

                    case "paragraph":
                      return (
                        <p
                          key={idx}
                          className="text-navy/75 text-sm md:text-base leading-relaxed"
                        >
                          <LinkedText text={section.text} links={section.links} />
                        </p>
                      );

                    case "list":
                      return (
                        <ul
                          key={idx}
                          className="grid gap-3 rounded-3xl bg-beige-light/25 border border-navy/[0.04] p-6 md:p-7"
                        >
                          {section.items.map((item) => (
                            <li key={item.text} className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                  section.variant === "check"
                                    ? "bg-primary/10 border-primary/20"
                                    : "bg-steel/15 border-steel/30"
                                }`}
                              >
                                {section.variant === "check" ? (
                                  <Check
                                    className="w-3 h-3 text-primary"
                                    strokeWidth={3}
                                  />
                                ) : (
                                  <Plus
                                    className="w-3 h-3 text-steel-dark"
                                    strokeWidth={3}
                                  />
                                )}
                              </span>
                              <span className="text-navy/80 text-sm md:text-[15px] leading-relaxed">
                                <LinkedText text={item.text} links={item.links} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      );

                    case "image":
                      return (
                        <figure key={idx} className="pt-4 pb-2">
                          <div className="rounded-3xl overflow-hidden border border-navy/[0.06] bg-white shadow-sm p-4 md:p-6">
                            <Image
                              src={section.src}
                              alt={section.alt}
                              width={section.width}
                              height={section.height}
                              loading="lazy"
                              className="w-full h-auto object-contain"
                              sizes="(max-width: 1024px) 100vw, 700px"
                              quality={90}
                            />
                          </div>
                          {section.caption && (
                            <figcaption className="text-navy/45 text-xs text-center mt-3 italic">
                              {section.caption}
                            </figcaption>
                          )}
                        </figure>
                      );

                    case "table":
                      return (
                        <figure key={idx} className="pt-2">
                          <div className="overflow-hidden rounded-3xl border border-navy/[0.06] shadow-sm">
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[480px] border-collapse bg-white text-sm">
                                <thead className="bg-navy text-white">
                                  <tr>
                                    {section.columns.map((column) => (
                                      <th
                                        key={column}
                                        scope="col"
                                        className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em]"
                                      >
                                        {column}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.rows.map((row) => (
                                    <tr
                                      key={row[0]}
                                      className="border-t border-navy/[0.06] odd:bg-beige-light/20"
                                    >
                                      {row.map((cell, cellIdx) => (
                                        <td
                                          key={`${row[0]}-${cellIdx}`}
                                          className={`px-5 py-4 align-middle leading-relaxed ${
                                            cellIdx === 0
                                              ? "font-heading font-bold text-navy"
                                              : "text-navy/70"
                                          }`}
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {section.caption && (
                            <figcaption className="text-navy/45 text-xs text-center mt-3 italic">
                              {section.caption}
                            </figcaption>
                          )}
                        </figure>
                      );

                    case "callout":
                      return (
                        <aside
                          key={idx}
                          role={section.variant === "danger" ? "alert" : undefined}
                          className={`rounded-3xl border-l-4 p-6 md:p-7 ${
                            section.variant === "danger"
                              ? "bg-red-50 border-red-500"
                              : "bg-amber-50 border-amber-500"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <AlertTriangle
                              className={`w-5 h-5 shrink-0 mt-0.5 ${
                                section.variant === "danger"
                                  ? "text-red-600"
                                  : "text-amber-600"
                              }`}
                            />
                            <div>
                              {section.heading && (
                                <h3
                                  className={`font-heading font-bold text-base mb-1.5 ${
                                    section.variant === "danger"
                                      ? "text-red-900"
                                      : "text-amber-900"
                                  }`}
                                >
                                  {section.heading}
                                </h3>
                              )}
                              <p
                                className={`text-sm md:text-[15px] leading-relaxed ${
                                  section.variant === "danger"
                                    ? "text-red-900/85"
                                    : "text-amber-900/85"
                                }`}
                              >
                                <LinkedText
                                  text={section.text}
                                  links={section.links}
                                />
                              </p>
                            </div>
                          </div>
                        </aside>
                      );

                    case "cta":
                      return (
                        <div
                          key={idx}
                          className="relative rounded-3xl bg-navy-dark text-white p-7 md:p-9 shadow-lg overflow-hidden mt-8"
                        >
                          <div className="absolute bottom-[-60%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
                          <div className="relative space-y-4">
                            <h2 className="font-heading text-xl md:text-2xl font-bold leading-tight">
                              {section.heading}
                            </h2>
                            <p className="text-white/65 text-sm leading-relaxed max-w-xl">
                              {section.text}
                            </p>
                            <div className="flex flex-wrap gap-3 pt-1">
                              <a
                                href={practiceInfo.phoneTel}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold shadow-[0_10px_30px_rgba(30,96,118,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                              >
                                <Phone className="w-4 h-4" />
                                {practiceInfo.phone}
                              </a>
                              <Link
                                href="/patient-information/scheduling"
                                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] border border-white/15 text-white text-sm font-semibold hover:bg-white/[0.12] hover:border-primary/40 transition-all duration-300"
                              >
                                Book Online
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );

                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ─── FAQ (visible text matches FAQPage schema verbatim) ─── */}
      <div id="faqs" className="scroll-mt-28">
        <FAQBlock
          faqs={post.faqs}
          title="Frequently asked questions"
          subtitle="Quick answers to what patients ask us most about the change."
        />
      </div>

      {/* ─── Back to blog ─── */}
      <section className="bg-beige-light/25 border-y border-navy/5">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-primary-dark text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to all articles
          </Link>
          <Link
            href="/about/our-story"
            className="group inline-flex items-center gap-2 bg-white border border-navy/5 px-4 py-2.5 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          >
            Read our full story
            <ArrowUpRight className="w-3.5 h-3.5 text-navy/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </section>

      <CTABlock />
    </main>
  );
}
