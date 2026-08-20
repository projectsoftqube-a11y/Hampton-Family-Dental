"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, Sparkles, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [featured, ...rest] = posts;

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Blog" }]} />

          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[9px] tracking-[0.25em] uppercase font-semibold">
                  Dental Health Blog
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              News, Guides &amp; Smile Advice
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Practice updates and plain-English answers to the questions our
              Southampton patients ask most — written and reviewed by the
              dentists who treat you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Posts ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          {posts.length === 0 ? (
            <p className="text-navy/60 text-sm">
              New articles are on the way — check back soon.
            </p>
          ) : (
            <>
              {/* Featured (most recent) */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <Link
                  href={`/blog/${featured.slug}`}
                  className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30"
                >
                  <Image
                    src={featured.hero.src}
                    alt={featured.hero.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 720px"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                </Link>

                <div className="lg:col-span-5 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-navy/45 text-[11px] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={featured.publishedAt}>
                        {formatBlogDate(featured.publishedAt)}
                      </time>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-navy/45 text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-navy text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <p className="inline-flex items-center gap-2 text-navy/45 text-[11px] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Medically reviewed by {featured.reviewedBy}
                  </p>

                  <div>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="group/btn inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full
                        bg-gradient-to-r from-primary to-primary-dark text-white font-semibold
                        shadow-[0_10px_40px_rgba(30,96,118,0.35)]
                        hover:shadow-[0_15px_55px_rgba(30,96,118,0.5)]
                        hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <span className="text-sm tracking-wide">Read Article</span>
                      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>

              {/* Remaining posts */}
              {rest.length > 0 && (
                <div className="mt-16 md:mt-20 pt-12 border-t border-navy/[0.06]">
                  <h2 className="font-heading text-navy text-2xl font-bold mb-8">
                    More Articles
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((post, idx) => (
                      <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="group flex flex-col rounded-3xl border border-navy/[0.06] bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="relative aspect-[16/10] bg-beige-light/30 overflow-hidden"
                        >
                          <Image
                            src={post.hero.src}
                            alt={post.hero.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            quality={90}
                          />
                        </Link>

                        <div className="flex flex-col flex-1 p-6 space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-[0.2em]">
                              {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-navy/45 text-[11px] font-semibold">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="font-heading text-navy text-lg font-bold leading-snug">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:text-primary transition-colors duration-300"
                            >
                              {post.title}
                            </Link>
                          </h3>

                          <p className="text-navy/60 text-xs leading-relaxed flex-1">
                            {post.excerpt}
                          </p>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest hover:gap-2.5 transition-all duration-300"
                          >
                            Read More
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTABlock />
    </main>
  );
}
