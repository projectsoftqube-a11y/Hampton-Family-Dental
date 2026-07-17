"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/lib/navigation";

interface DesktopDropdownProps {
  item: NavItem;
  isScrolled: boolean;
  pathname: string;
}

export default function DesktopDropdown({
  item,
  isScrolled,
  pathname,
}: DesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive =
    pathname === item.href ||
    item.children?.some((c) => pathname === c.href) ||
    false;

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  // ── Simple link (no children) — Specials, Contact Us ──
  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={`relative px-2 xl:px-1.5 2xl:px-3 py-2 text-[10px] xl:text-[9.5px] 2xl:text-[11px] font-semibold tracking-[0.05em] 2xl:tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 ${
          pathname === item.href
            ? isScrolled
              ? "text-primary"
              : "text-primary-light"
            : isScrolled
              ? "text-navy/65 hover:text-primary"
              : "text-white/75 hover:text-white"
        }`}
      >
        {item.label}
        {pathname === item.href && (
          <motion.span
            layoutId="navActive"
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full ${
              isScrolled ? "bg-primary" : "bg-primary-light"
            }`}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  }

  // ── Dropdown item ──
  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <Link
        href={item.href}
        className={`group relative flex items-center gap-0.5 px-2 xl:px-1.5 2xl:px-3 py-2 text-[10px] xl:text-[9.5px] 2xl:text-[11px] font-semibold tracking-[0.05em] 2xl:tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 ${
          isActive
            ? isScrolled
              ? "text-primary"
              : "text-primary-light"
            : isScrolled
              ? "text-navy/65 hover:text-primary"
              : "text-white/75 hover:text-white"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-3 h-3 opacity-50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <motion.span
            layoutId="navActive"
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full ${
              isScrolled ? "bg-primary" : "bg-primary-light"
            }`}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          >
            {/* Invisible bridge so the mouse can travel from trigger to panel */}
            <div className="absolute -top-3 left-0 right-0 h-3" />

            <div
              className="min-w-[250px] rounded-2xl overflow-hidden
              bg-white border border-navy/[0.06]
              shadow-[0_25px_60px_-15px_rgba(20,60,80,0.2),0_10px_25px_-10px_rgba(20,60,80,0.08)]"
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-primary via-primary-light to-primary" />

              <div className="py-1.5">
                {item.children.map((child) => {
                  const isChildActive = pathname === child.href;
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={`group/item flex items-center gap-3 px-5 py-2.5 text-[13px] transition-all duration-200 ${
                        isChildActive
                          ? "text-primary font-semibold bg-primary/[0.05]"
                          : "text-navy/65 font-medium hover:text-primary hover:bg-primary/[0.03] hover:pl-6"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 transition-all duration-200 ${
                          isChildActive
                            ? "bg-primary scale-150"
                            : "bg-navy/20 group-hover/item:bg-primary group-hover/item:scale-125"
                        }`}
                      />
                      <span>{child.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Subtle bottom fade */}
              <div className="h-px bg-gradient-to-r from-transparent via-navy/5 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
