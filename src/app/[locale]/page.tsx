import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ImageReadyGate } from "@/components/image-ready-gate";
import { MediaImage } from "@/components/media-image";
import { SocialLinks } from "@/components/social-icons";
import { SoftwareStack } from "@/components/software-stack";
import { skills } from "@/content/resume";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("Meta");

  return {
    ...pageMetadata({
      locale,
      path: "/",
      title: t("homeTitle"),
      description: t("description"),
    }),
    title: {
      absolute: t("homeTitle"),
    },
  };
}

export default async function Home() {
  const t = await getTranslations("Resume");
  const locale = (await getLocale()) === "tr" ? "tr" : "en";

  return (
    <ImageReadyGate srcs={[site.portraitSrc]}>
      <div className="mx-auto max-w-180 px-5 py-14">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-60 w-60 overflow-hidden rounded-full">
            <MediaImage
              src={site.portraitSrc}
              alt={site.fullName}
              fill
              sizes="240px"
              priority
            />
          </div>
          <h1 className="mt-6 text-3xl font-medium tracking-tight">
            {site.fullName}
          </h1>
          <p className="mt-2 text-sm text-muted">{site.role[locale]}</p>
          <p className="mt-3 text-sm text-muted">{site.location[locale]}</p>
          <a href={`mailto:${site.email}`} className="mt-2 text-sm">
            {site.email}
          </a>
          <SocialLinks className="mt-5 justify-center" />
        </div>

        <section className="mt-16">
          <h2 className="mb-4 text-xl font-medium">{t("about")}</h2>
          <div className="space-y-4 text-[15px] leading-7 text-muted">
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
            <p>{t("aboutP3")}</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-medium">{t("skills")}</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.en}
                className="border border-line bg-surface px-3 py-1.5 text-[13px]"
              >
                {skill[locale]}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-medium">{t("software")}</h2>
          <SoftwareStack />
        </section>
      </div>
    </ImageReadyGate>
  );
}
