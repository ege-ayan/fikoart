import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ImageReadyGate } from "@/components/image-ready-gate";
import { MediaImage } from "@/components/media-image";
import { WorkVideos } from "@/components/work-videos";
import { getWork, workPosterSrcs, works } from "@/content/works";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  const locale = (await getLocale()) === "tr" ? "tr" : "en";

  if (!work) {
    return {};
  }

  return pageMetadata({
    locale,
    path: `/work/${work.slug}`,
    title: work.title[locale],
    description: work.description[locale],
    image: work.cover,
    imageAlt: work.title[locale],
  });
}

export default async function WorkPage({
  params,
}: PageProps<"/[locale]/work/[slug]">) {
  const { slug } = await params;
  const work = getWork(slug);
  const locale = (await getLocale()) === "tr" ? "tr" : "en";
  const t = await getTranslations("Work");

  if (!work) {
    notFound();
  }

  return (
    <ImageReadyGate srcs={[...workPosterSrcs(work), ...work.images]}>
      <article className="mx-auto max-w-4xl px-5 py-10">
        <Link
          href={work.category === "animation" ? "/animation" : "/portfolio"}
          className="text-[12px] tracking-[0.14em] uppercase text-muted hover:text-ink"
        >
          ← {t("back")}
        </Link>
        <header className="mt-8 mb-10">
          <p className="text-[12px] tracking-[0.16em] uppercase text-muted">
            {work.subtitle[locale]} · {work.year}
          </p>
          <h1 className="mt-2 text-3xl font-medium">{work.title[locale]}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            {work.description[locale]}
          </p>
        </header>
        <div className="space-y-2">
          <WorkVideos work={work} locale={locale} priorityFirst />
          {work.images.map((src, index) => (
            <MediaImage
              key={src}
              src={src}
              alt={work.title[locale]}
              sizes="(max-width: 896px) 100vw, 896px"
              priority={index === 0 && workPosterSrcs(work).length === 0}
            />
          ))}
        </div>
      </article>
    </ImageReadyGate>
  );
}
