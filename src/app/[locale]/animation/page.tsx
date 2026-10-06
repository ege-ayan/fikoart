import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { WorkMedia } from "@/components/work-media";
import {
  animationPageBlocks,
  getAnimationPageWorks,
  getGroupedWorkMedia,
} from "@/content/animation-page";
import { getWork, type Locale, type Work } from "@/content/works";
import { Link } from "@/i18n/navigation";
import { absoluteUrl, localizedPath, pageMetadata } from "@/lib/seo";

function AnimationWorkSection({
  work,
  locale,
  priorityFirst = false,
  imageItems,
  imageLayout,
  relatedWorks = [],
}: {
  work: Work;
  locale: Locale;
  priorityFirst?: boolean;
  imageItems?: { src: string; alt: string }[];
  imageLayout?: Work["imageLayout"];
  relatedWorks?: Work[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-8">
      <p className="text-[12px] tracking-[0.16em] uppercase text-muted">
        {work.subtitle[locale]} · {work.year}
      </p>
      <h2 className="mt-2 text-2xl font-medium">
        <Link href={`/work/${work.slug}`} className="hover:text-muted">
          {work.title[locale]}
        </Link>
      </h2>
      {relatedWorks.length > 0 ? (
        <p className="mt-2 mb-6 text-[14px] text-muted">
          {relatedWorks.map((related, index) => (
            <span key={related.slug}>
              {index > 0 ? " · " : null}
              <Link
                href={`/work/${related.slug}`}
                className="underline decoration-line underline-offset-4 hover:text-ink"
              >
                {related.title[locale]}
              </Link>
            </span>
          ))}
        </p>
      ) : (
        <div className="mb-6" aria-hidden />
      )}
      <WorkMedia
        work={work}
        locale={locale}
        priorityFirst={priorityFirst}
        imageItems={imageItems}
        imageLayout={imageLayout}
      />
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("Meta");
  const reel = getWork("reel");

  return pageMetadata({
    locale,
    path: "/animation",
    title: t("animationTitle"),
    description: t("animationDescription"),
    image: reel?.cover,
    imageAlt: reel?.title[locale === "tr" ? "tr" : "en"],
  });
}

export default async function AnimationPage() {
  const t = await getTranslations("Meta");
  const locale = (await getLocale()) === "tr" ? "tr" : "en";
  const reel = getWork("reel");
  const animationWorks = getAnimationPageWorks();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t("animationTitle"),
          description: t("animationDescription"),
          hasPart: animationWorks.map((work) => ({
            "@type": "CreativeWork",
            name: work.title[locale],
            dateCreated: work.year,
            image: absoluteUrl(work.cover),
            url: absoluteUrl(localizedPath(`/work/${work.slug}`, locale)),
          })),
        }}
      />
      <h1 className="sr-only">{t("animationTitle")}</h1>
      {reel ? (
        <section className="border-b border-line bg-surface/40">
          <div className="mx-auto max-w-5xl px-5 pt-10 pb-12">
            <header className="mx-auto mb-8 max-w-2xl text-center">
              <h2 className="text-3xl font-medium tracking-tight">
                {reel.title[locale]}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                {reel.description[locale]}
              </p>
            </header>
            <WorkMedia work={reel} locale={locale} priorityFirst />
          </div>
        </section>
      ) : null}
      {animationPageBlocks.map((block) => {
        if (block.type === "single") {
          const work = getWork(block.slug);
          if (!work) {
            return null;
          }

          return (
            <AnimationWorkSection key={work.slug} work={work} locale={locale} />
          );
        }

        const primary = getWork(block.primarySlug);
        if (!primary) {
          return null;
        }

        const related = block.relatedSlugs
          .map((slug) => getWork(slug))
          .filter((item): item is Work => item !== undefined);

        return (
          <AnimationWorkSection
            key={primary.slug}
            work={primary}
            locale={locale}
            relatedWorks={related}
            imageItems={getGroupedWorkMedia(primary, related, locale)}
            imageLayout="grid-2"
          />
        );
      })}
    </>
  );
}
