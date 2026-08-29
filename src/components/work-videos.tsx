import { MediaVideo } from "./media-video";
import type { Locale, Work } from "@/content/works";
import { workVideos } from "@/content/works";

export function WorkVideos({
  work,
  locale,
  priorityFirst = false,
}: {
  work: Work;
  locale: Locale;
  priorityFirst?: boolean;
}) {
  const videos = workVideos(work);

  if (videos.length === 0) {
    return null;
  }

  return (
    <>
      {videos.map((video, index) => {
        const label = video.label?.[locale] ?? work.title[locale];

        return (
          <figure key={video.src} className="space-y-2">
            {video.label ? (
              <figcaption className="text-[12px] tracking-[0.16em] uppercase text-muted">
                {video.label[locale]}
              </figcaption>
            ) : null}
            <MediaVideo
              src={video.src}
              poster={video.poster}
              width={video.width}
              height={video.height}
              label={label}
              loop={video.loop}
              muted={video.muted}
              priority={priorityFirst && index === 0}
            />
          </figure>
        );
      })}
    </>
  );
}
