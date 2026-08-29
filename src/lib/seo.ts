import type { Metadata } from "next";

import { site } from "@/content/site";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/content/works";

export const siteOrigin = site.socials.website;

export type AppPath = "/" | "/portfolio" | "/cv" | `/work/${string}`;

export function localizedPath(path: AppPath, locale: string) {
  if (locale === routing.defaultLocale) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function absoluteUrl(path: string) {
  const normalized = path === "/" ? "" : path;
  return `${siteOrigin}${normalized}`;
}

export function languageAlternates(path: AppPath) {
  return {
    en: absoluteUrl(localizedPath(path, "en")),
    tr: absoluteUrl(localizedPath(path, "tr")),
    "x-default": absoluteUrl(localizedPath(path, routing.defaultLocale)),
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = site.portraitSrc,
  imageAlt,
}: {
  locale: string;
  path: AppPath;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const canonical = absoluteUrl(localizedPath(path, locale));
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
      siteName: site.name,
      title,
      description,
      url: canonical,
      images: [
        {
          url: image,
          alt: imageAlt ?? site.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: ["Fiko", site.name],
    url: siteOrigin,
    image: absoluteUrl(site.portraitSrc),
    email: site.email,
    jobTitle: site.role[locale],
    nationality: "TR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
    sameAs: [site.socials.instagram, site.socials.linkedin],
  };
}
