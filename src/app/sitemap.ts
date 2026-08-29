import type { MetadataRoute } from "next";

import { works } from "@/content/works";
import { routing } from "@/i18n/routing";
import { absoluteUrl, localizedPath, type AppPath } from "@/lib/seo";

const staticPaths = [
  "/",
  "/animation",
  "/portfolio",
  "/cv",
] as const satisfies AppPath[];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const workPaths = works.map((work) => `/work/${work.slug}` as const);
  const paths: AppPath[] = [...staticPaths, ...workPaths];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(path, locale)),
      lastModified: now,
      alternates: {
        languages: {
          en: absoluteUrl(localizedPath(path, "en")),
          tr: absoluteUrl(localizedPath(path, "tr")),
        },
      },
    })),
  );
}
