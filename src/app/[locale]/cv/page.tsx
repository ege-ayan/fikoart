import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ImageReadyGate } from "@/components/image-ready-gate";
import { MediaImage } from "@/components/media-image";
import { site } from "@/content/site";
import {
  education,
  exhibitions,
  experience,
  productions,
} from "@/content/resume";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("Meta");

  return pageMetadata({
    locale,
    path: "/cv",
    title: t("cvTitle"),
    description: t("cvDescription"),
  });
}

export default async function CvPage() {
  const t = await getTranslations("Resume");
  const locale = (await getLocale()) === "tr" ? "tr" : "en";
  const imageSrcs = productions.map((item) => item.image);

  return (
    <ImageReadyGate srcs={imageSrcs}>
      <div className="mx-auto max-w-180 px-5 py-14">
        <header className="mb-12">
          <p className="text-[12px] tracking-[0.16em] uppercase text-muted">
            {site.role[locale]}
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight">
            {site.fullName}
          </h1>
          <a
            href={site.cvHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted"
          >
            {t("pdf")} — {t("view")}
          </a>
        </header>

        <section>
          <h2 className="mb-6 text-xl font-medium">{t("productions")}</h2>
          <ul className="space-y-8">
            {productions.map((item) => (
              <li key={item.title} className="flex gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden">
                  <MediaImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="96px"
                  />
                </div>
                <dl className="min-w-0 flex-1 space-y-1 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{item.kind[locale]}</dt>
                    <dd>{item.title}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{t("year")}</dt>
                    <dd>{item.year}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{t("role")}</dt>
                    <dd className="text-right">{item.role[locale]}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{t("company")}</dt>
                    <dd>{item.company[locale]}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-xl font-medium">{t("experience")}</h2>
          <ul className="space-y-8">
            {experience.map((item) => (
              <li key={item.title.en}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-medium">{item.title[locale]}</h3>
                    <p className="text-sm text-muted">
                      {item.location[locale]}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-2 text-[15px] leading-7 text-muted">
                  {item.description[locale]}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-xl font-medium">{t("education")}</h2>
          <ul className="space-y-8">
            {education.map((item) => (
              <li key={item.title.en}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-medium">{item.title[locale]}</h3>
                    <p className="text-sm text-muted">
                      {item.location[locale]}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-2 text-[15px] leading-7 text-muted">
                  {item.description[locale]}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-xl font-medium">{t("exhibitions")}</h2>
          <ul className="space-y-4">
            {exhibitions.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 sm:flex-row sm:justify-between"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted">{item.place}</p>
                </div>
                <p className="text-sm text-muted">{item.year}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ImageReadyGate>
  );
}
