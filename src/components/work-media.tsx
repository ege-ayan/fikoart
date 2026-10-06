import { WorkImageGrid, workImageItems } from "./work-image-grid";
import { WorkVideos } from "./work-videos";
import type { Locale, Work } from "@/content/works";
import { workPosterSrcs } from "@/content/works";

export function WorkMedia({
  work,
  locale,
  priorityFirst = false,
  imageItems,
  imageLayout,
}: {
  work: Work;
  locale: Locale;
  priorityFirst?: boolean;
  imageItems?: { src: string; alt: string }[];
  imageLayout?: Work["imageLayout"];
}) {
  const items = imageItems ?? workImageItems(work, locale);
  const layout = imageLayout ?? work.imageLayout ?? "stack";
  const hasVideoPosters = workPosterSrcs(work).length > 0;

  return (
    <div className="space-y-2">
      <WorkVideos work={work} locale={locale} priorityFirst={priorityFirst} />
      <WorkImageGrid
        items={items}
        layout={layout}
        priorityFirst={priorityFirst && !hasVideoPosters}
      />
    </div>
  );
}
