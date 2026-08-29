import { MediaImage } from "./media-image";
import { WorkVideos } from "./work-videos";
import type { Locale, Work } from "@/content/works";
import { workPosterSrcs } from "@/content/works";

export function WorkMedia({
  work,
  locale,
  priorityFirst = false,
}: {
  work: Work;
  locale: Locale;
  priorityFirst?: boolean;
}) {
  return (
    <div className="space-y-2">
      <WorkVideos work={work} locale={locale} priorityFirst={priorityFirst} />
      {work.images.map((src, index) => (
        <MediaImage
          key={src}
          src={src}
          alt={work.title[locale]}
          sizes="(max-width: 896px) 100vw, 896px"
          priority={
            priorityFirst && index === 0 && workPosterSrcs(work).length === 0
          }
        />
      ))}
    </div>
  );
}
