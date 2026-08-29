"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";

const links = [
  { href: "/portfolio", key: "portfolio" as const },
  { href: "/animation", key: "animation" as const },
  { href: "/cv", key: "cv" as const },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const subtitle = site.subtitle[locale === "tr" ? "tr" : "en"];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <div className="text-[15px] font-semibold tracking-[0.06em]">
            {site.mark}
          </div>
          <div className="hidden text-[11px] tracking-[0.12em] text-muted sm:block">
            {subtitle}
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] tracking-[0.16em] uppercase transition-colors ${
                isActive(pathname, link.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-[11px] tracking-[0.12em]">
            <Link
              href={pathname}
              locale="en"
              className={
                locale === "en" ? "text-ink" : "text-muted hover:text-ink"
              }
            >
              EN
            </Link>
            <span className="text-muted">/</span>
            <Link
              href={pathname}
              locale="tr"
              className={
                locale === "tr" ? "text-ink" : "text-muted hover:text-ink"
              }
            >
              TR
            </Link>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`block h-px w-5 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.16em] uppercase"
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
