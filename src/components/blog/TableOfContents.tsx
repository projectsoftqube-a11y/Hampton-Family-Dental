"use client";

import { useEffect, useState } from "react";
import { ChevronDown, List } from "lucide-react";

import type { TocItem } from "@/lib/blog";

/** Shared link list. Anchor clicks are smooth-scrolled by SmoothScrollProvider. */
function TocLinks({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId?: string;
  onNavigate?: () => void;
}) {
  return (
    <ol className="space-y-1">
      {items.map((item, idx) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`group flex items-start gap-3 rounded-xl px-3 py-2 text-[13px] leading-snug transition-all duration-200 ${
                item.level === 3 ? "pl-8" : ""
              } ${
                isActive
                  ? "bg-primary/10 text-primary-dark font-bold"
                  : "text-navy/60 hover:bg-beige-light/60 hover:text-primary"
              }`}
            >
              <span
                className={`shrink-0 tabular-nums text-[10px] font-bold pt-0.5 transition-colors ${
                  isActive ? "text-primary" : "text-navy/25 group-hover:text-primary/60"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{item.text}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** Sticky sidebar version — tracks the heading currently in view. */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      // Activates a heading once it reaches the top third of the viewport,
      // clearing the fixed header.
      { rootMargin: "-88px 0px -68% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block rounded-3xl border border-navy/[0.06] bg-beige-light/30 p-5 shadow-sm
        max-h-[calc(100vh-9rem)] overflow-y-auto"
    >
      <h2 className="flex items-center gap-2 font-heading text-navy text-sm font-bold mb-4 pb-3 border-b border-navy/[0.07]">
        <List className="w-4 h-4 text-primary" />
        Table of Contents
      </h2>
      <TocLinks items={items} activeId={activeId} />
    </nav>
  );
}

/** Collapsible version for narrow screens, placed inline above the article body. */
export function TableOfContentsMobile({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="lg:hidden rounded-3xl border border-navy/[0.06] bg-beige-light/30 overflow-hidden mb-10"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 p-5 text-left"
      >
        <span className="flex items-center gap-2 font-heading text-navy text-sm font-bold">
          <List className="w-4 h-4 text-primary" />
          Table of Contents
        </span>
        <ChevronDown
          className={`w-4 h-4 text-navy/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-2 pb-4 pt-1 border-t border-navy/[0.07]">
          <TocLinks items={items} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
