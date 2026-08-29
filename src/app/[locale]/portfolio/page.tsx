import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { MosaicGrid } from "@/components/mosaic-grid";
import { works } from "@/content/works";
import { absoluteUrl, localizedPath, pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("Meta");

  return pageMetadata({
    locale,
    path: "/portfolio",
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
    image: works[0]?.cover,
    imageAlt: works[0]?.title[locale === "tr" ? "tr" : "en"],
  });
}

export default async function PortfolioPage() {
  const t = await getTranslations("Meta");
  const locale = (await getLocale()) === "tr" ? "tr" : "en";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t("portfolioTitle"),
          description: t("portfolioDescription"),
          hasPart: works.map((work) => ({
            "@type": "CreativeWork",
            name: work.title[locale],
            dateCreated: work.year,
            image: absoluteUrl(work.cover),
            url: absoluteUrl(localizedPath(`/work/${work.slug}`, locale)),
          })),
        }}
      />
      <h1 className="sr-only">{t("portfolioTitle")}</h1>
      <MosaicGrid works={works} />
    </>
  );
}
