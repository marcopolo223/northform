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
  const [hero, setHero] = useState({ path: pathname === "/" ? "/" : "", inView: true });
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  const heroInView = hero.path === pathname && hero.inView;
  const progressRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = document.querySelector("[data-site-hero]");
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHero({ path: pathname, inView: entry.isIntersecting });
      },
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
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
      const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progressRef.current?.style.setProperty("--progress", String(value));
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color,backdrop-filter] duration-500",
        overHero
          ? "on-dark border-b border-transparent bg-[linear-gradient(to_bottom,rgb(12_19_16/0.78),rgb(12_19_16/0.35)_70%,transparent)]"
          : "on-light border-b border-fg/10 bg-ground/90 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <CrisisBanner />
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="type-mark text-[1.6rem] leading-none text-fg sm:text-[1.8rem]">{site.shortName}</span>
          <span className="type-kicker hidden text-[0.66rem] text-fg/65 transition-colors group-hover:text-fg sm:inline">
            {t.brand.psychiatry}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          <nav className="flex items-center gap-7 xl:gap-9" aria-label="Primary">
            {[...nav, ...navAux].map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "type-ui link-u inline-flex items-center py-1 text-[0.92rem] transition-colors hover:text-fg",
                    active ? "is-ruled text-fg" : "text-fg/75",
                  )}
                >
                  {labelFor(item.href, item.label)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={site.patientPortalUrl || "/patients"}
              {...(site.patientPortalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="type-ui inline-flex min-h-11 items-center gap-2 px-1 text-[0.85rem] text-fg/70 transition-colors hover:text-fg"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="h-[15px] w-[15px] fill-none stroke-current" strokeWidth="1.2">
                <circle cx="8" cy="5.5" r="2.6" />
                <path d="M2.8 14c.6-2.6 2.6-4 5.2-4s4.6 1.4 5.2 4" strokeLinecap="round" />
              </svg>
              {t.nav.login}
            </a>
            <Link
              href="/start"
              className="type-ui btn inline-flex h-11 items-center justify-center bg-fg px-5 text-[0.88rem] leading-none text-ground"
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
            className="type-ui flex min-h-11 min-w-11 items-center justify-center gap-2.5 px-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? t.close : t.menu}</span>
            <span aria-hidden className="relative block h-2.5 w-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300",
                  open && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        ref={progressRef}
        className="chrome-progress pointer-events-none absolute inset-x-0 bottom-0 h-px bg-fg/40"
        aria-hidden
      />

      {open ? (
        <nav
          id="mobile-nav"
          className="on-light fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-y-auto bg-ground px-5 pb-10 pt-8 sm:px-8 lg:hidden"
          style={{ top: "var(--chrome-h)" }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col border-t border-fg/15">
            {mobileNav.map((item, index) => (
              <li
                key={item.href}
                className="border-b border-fg/15 motion-safe:animate-[rise-in_0.6s_var(--ease-out)_both]"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-serif text-[2.1rem] leading-[1.1] tracking-[-0.03em] text-fg"
                  onClick={() => setOpen(false)}
                >
                  {labelFor(item.href, item.label)}
                  <span aria-hidden className="font-sans text-base text-fg/40">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {navAux.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="type-ui text-fg/75" onClick={() => setOpen(false)}>
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/telehealth" className="type-ui text-fg/75" onClick={() => setOpen(false)}>
                {t.nav.telehealth}
              </Link>
            </li>
            <li>
              <a
                href={site.patientPortalUrl || "/patients"}
                {...(site.patientPortalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="type-ui text-fg/75"
                onClick={() => setOpen(false)}
              >
                {t.nav.login}
              </a>
            </li>
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href="/start"
              className="type-ui flex min-h-12 items-center justify-between bg-fg px-5 text-ground"
              onClick={() => setOpen(false)}
            >
              {t.nav.become}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </nav>
      ) : null}

      {showMobileCta ? (
        <div className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-fg/10 bg-ground/95 px-5 py-3 backdrop-blur-md lg:hidden">
          <Link href="/start" className="type-ui flex min-h-11 items-center justify-between bg-fg px-5 text-ground">
            {t.nav.become}
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}
    </header>
  );
}