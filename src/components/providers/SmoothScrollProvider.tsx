"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ─── Intercept hash-anchor clicks ───
    // Routes through Lenis when smooth scroll is active, else falls back to a
    // native jump (the CSS `scroll-padding-top` keeps the target clear of the
    // fixed header in that path).
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Skip clicks inside overlays that manage their own navigation
      // (e.g. the mobile menu unlocks the body scroll first, then scrolls).
      if (target.closest("[data-skip-smooth-scroll]")) return;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Allow modifier-clicks / middle-clicks to behave normally
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const lenis = lenisRef.current;

      // "#" alone → scroll to top
      if (href === "#") {
        e.preventDefault();
        if (lenis) lenis.scrollTo(0, { offset: 0 });
        else window.scrollTo({ top: 0 });
        return;
      }

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(el, { offset: -72, duration: 1.4 });
      } else {
        el.scrollIntoView({ block: "start" });
      }

      // Update URL hash without jump
      if (window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Honor the user's reduced-motion preference: skip the JS smooth-scroll
    // rAF loop entirely (anchors still work via the native fallback above).
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /*
      ─── Skip Lenis on Apple devices ───
      Lenis replaces native scrolling with a JS rAF loop that eases each
      gesture over ~1.2s. On a mouse wheel that smooths out notchy jumps and
      feels good. On Apple hardware it is a downgrade: macOS and iOS already
      do inertial scrolling in the compositor — off the main thread, at up to
      120Hz on ProMotion. Re-driving that from JS adds easing lag on top of
      the trackpad's own momentum, so the page keeps drifting after the
      fingers lift and any main-thread work shows up as scroll stutter. That
      is the "heavy / slow" feel Mac users report.

      Detection prefers userAgentData.platform (navigator.platform is
      deprecated) and falls back to the UA string. Matching "Macintosh" covers
      both real Macs and iPadOS 13+, which impersonates one with a desktop UA.

      Falls through to the same native-scroll path as prefers-reduced-motion,
      so hash anchors keep working via scrollIntoView + the CSS
      scroll-padding-top offset.
    */
    const uaPlatform =
      (navigator as Navigator & { userAgentData?: { platform?: string } })
        .userAgentData?.platform ?? "";
    const isApple =
      /mac|ios/i.test(uaPlatform) ||
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      /Macintosh/.test(navigator.userAgent);

    if (prefersReduced || isApple) {
      // Hand anchor scrolling to the browser's own smooth scroll. Only for the
      // Apple path — reduced-motion users asked for less movement, so they
      // keep the instant jump.
      if (isApple && !prefersReduced) {
        document.documentElement.classList.add("native-smooth-scroll");
      }
      return () => {
        document.removeEventListener("click", handleAnchorClick);
        document.documentElement.classList.remove("native-smooth-scroll");
      };
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    // Expose Lenis globally so overlays (mobile menu, modals) can pause/resume scroll
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Track the rAF id so the loop is actually cancelled on unmount — the
    // previous version left it running against a destroyed Lenis instance.
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
