"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CrisisBanner } from "@/components/CrisisBanner";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { navKeyByHref } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { mobileNav, nav, navAux, site } from "@/site.config";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.querySelector("[data-site-hero]");
    if (!hero) {
      setHeroInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const apply = () => {
      document.documentElement.style.setProperty("--chrome-h", `${node.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => observer.disconnect();
  }, [open, pathname]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = document.getElementById("mobile-nav");
      const toggle = toggleRef.current;
      if (!panel || !toggle) return;

      const links = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
      const focusable: HTMLElement[] = [toggle, ...links];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const overHero = heroInView && !open;
  const showMobileCta = pathname !== "/start" && !open;

  const labelFor = (href: string, fallback: string) => {
    const key = navKeyByHref[href];
    return key ? t.nav[key] : fallback;
  };

  return (
    <header
      ref={headerRef}
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color,backdrop-filter] duration-500",
        overHero
          ? "border-b border-transparent bg-transparent text-parchment"
          : "border-b border-parchment/10 bg-pine-deep/92 text-parchment backdrop-blur-md",
      )}
    >
      <CrisisBanner />
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="type-mark text-[1.55rem] leading-none text-parchment sm:text-[1.85rem]">
            {site.shortName}
          </span>
          <span
            className={cn(
              "type-kicker hidden text-[0.72rem] sm:inline",
              overHero ? "text-parchment/80" : "text-parchment/70",
            )}
          >
            {t.brand.psychiatry}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          <nav className="flex items-center gap-6 xl:gap-8" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "type-ui relative inline-flex h-11 items-center text-[0.95rem] text-parchment/80 transition-colors hover:text-parchment",
                    active &&
                      "text-parchment after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-parchment/70 after:content-['']",
                  )}
                >
                  {labelFor(item.href, item.label)}
                </Link>
              );
            })}
            {navAux.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "type-ui inline-flex h-11 items-center text-[0.95rem] text-parchment/70 transition-colors hover:text-parchment",
                  pathname.startsWith(item.href) && "text-parchment",
                )}
              >
                {labelFor(item.href, item.label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5 border-l border-parchment/20 pl-6">
            <a
              href={site.patientPortalUrl || "/patients"}
              {...(site.patientPortalUrl
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="type-ui inline-flex h-11 items-center text-[0.88rem] text-parchment/70 transition-colors hover:text-parchment"
            >
              {t.nav.login}
            </a>
            <LanguageSwitcher />
            <Link
              href="/start"
              className="type-ui btn-sheen inline-flex h-11 items-center justify-center bg-parchment px-5 leading-none text-pine transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-parchment-deep"
            >
              {t.nav.become}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <button
            ref={toggleRef}
            type="button"
            id="menu-toggle"
            className="type-ui flex min-h-11 min-w-11 items-center justify-center px-3"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-parchment/45"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-pine-deep px-5 py-10 text-parchment lg:hidden"
          style={{ top: "var(--chrome-h)" }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {mobileNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-serif text-[2.4rem] leading-[1.1] tracking-[-0.03em] text-parchment"
                  onClick={() => setOpen(false)}
                >
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
            {navAux.map((item) => (
              <li key={item.href} className="pt-2">
                <Link
                  href={item.href}
                  className="type-ui text-parchment/80"
                  onClick={() => setOpen(false)}
                >
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/telehealth"
                className="type-ui text-parchment/80"
                onClick={() => setOpen(false)}
              >
                {t.nav.telehealth}
              </Link>
            </li>
            <li className="pt-8">
              <a
                href={site.patientPortalUrl || "/patients"}
                {...(site.patientPortalUrl
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="type-ui text-parchment/80"
                onClick={() => setOpen(false)}
              >
                {t.nav.login}
              </a>
            </li>
            <li className="pt-4">
              <Link
                href="/start"
                className="type-ui inline-flex min-h-11 items-center bg-parchment px-5 py-3 text-pine"
                onClick={() => setOpen(false)}
              >
                {t.nav.become}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}

      {showMobileCta ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-parchment/15 bg-pine-deep/95 px-5 py-3 backdrop-blur-md lg:hidden">
          <Link
            href="/start"
            className="type-ui flex min-h-11 items-center justify-center bg-parchment text-pine"
          >
            {t.nav.become}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
