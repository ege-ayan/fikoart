import { describe, expect, it } from "vitest";

import { works } from "@/content/works";
import sitemap from "@/app/sitemap";
import {
  absoluteUrl,
  languageAlternates,
  localizedPath,
  pageMetadata,
} from "@/lib/seo";

describe("seo", () => {
  it("prefixes only non-default locales", () => {
    expect(localizedPath("/", "en")).toBe("/");
    expect(localizedPath("/", "tr")).toBe("/tr");
    expect(localizedPath("/portfolio", "en")).toBe("/portfolio");
    expect(localizedPath("/portfolio", "tr")).toBe("/tr/portfolio");
    expect(localizedPath("/work/bubbles", "tr")).toBe("/tr/work/bubbles");
  });

  it("builds canonical and hreflang maps", () => {
    const languages = languageAlternates("/cv");
    expect(languages.en).toBe("https://fikoart.com/cv");
    expect(languages.tr).toBe("https://fikoart.com/tr/cv");
    expect(languages["x-default"]).toBe("https://fikoart.com/cv");
    expect(absoluteUrl("/tr/cv")).toBe("https://fikoart.com/tr/cv");
  });

  it("uses production URLs for canonical and hreflang", () => {
    const metadata = pageMetadata({
      locale: "tr",
      path: "/",
      title: "Fikoart",
      description: "Portfolyo",
    });

    expect(metadata.alternates?.canonical).toBe("https://fikoart.com/tr");
    expect(metadata.alternates?.languages).toEqual({
      en: "https://fikoart.com",
      tr: "https://fikoart.com/tr",
      "x-default": "https://fikoart.com",
    });
    expect(metadata.openGraph?.url).toBe("https://fikoart.com/tr");
    expect(metadata.openGraph?.locale).toBe("tr_TR");
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("lists every localized page in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://fikoart.com");
    expect(urls).toContain("https://fikoart.com/tr");
    expect(urls).toContain("https://fikoart.com/portfolio");
    expect(urls).toContain("https://fikoart.com/tr/cv");
    expect(urls).toContain(`https://fikoart.com/work/${works[0]!.slug}`);
    expect(urls).toContain(`https://fikoart.com/tr/work/${works[0]!.slug}`);
  });
});
