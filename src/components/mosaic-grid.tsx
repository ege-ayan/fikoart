import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Work } from "@/content/works";
import { ImageReadyGate } from "./image-ready-gate";
import { MediaImage } from "./media-image";

const ABOVE_FOLD_COUNT = 3;

export async function MosaicGrid({ works }: { works: Work[] }) {
  const locale = (await getLocale()) === "tr" ? "tr" : "en";
  const srcs = works.map((work) => work.cover);

  return (
    <ImageReadyGate srcs={srcs}>
      <div className="columns-1 gap-1 sm:columns-2 lg:columns-3">
        {works.map((work, index) => (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            className="group relative mb-1 block break-inside-avoid overflow-hidden bg-surface"
          >
            <MediaImage
              src={work.cover}
              alt={work.title[locale]}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < ABOVE_FOLD_COUNT}
              loading="eager"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/0 px-6 text-center text-canvas opacity-0 transition duration-200 group-hover:bg-ink/55 group-hover:opacity-100">
              <p className="text-[11px] tracking-[0.16em] uppercase">
                {work.subtitle[locale]}
              </p>
              <p className="mt-2 text-lg font-medium">{work.title[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
    </ImageReadyGate>
  );
}
