import { MediaImage } from "./media-image";
import type { Locale, WorkImageLayout } from "@/content/works";

export function WorkImageGrid({
  items,
  layout = "stack",
  sizes = "(max-width: 896px) 100vw, 896px",
  priorityFirst = false,
}: {
  items: { src: string; alt: string }[];
  layout?: WorkImageLayout;
  sizes?: string;
  priorityFirst?: boolean;
}) {
  if (items.length === 0) {
    return null;
  }

  const gridClass =
    layout === "grid-2" ? "grid grid-cols-1 gap-2 sm:grid-cols-2" : "space-y-2";

  return (
    <div className={gridClass}>
      {items.map(({ src, alt }, index) => (
        <MediaImage
          key={src}
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priorityFirst && index === 0}
        />
      ))}
    </div>
  );
}

export function workImageItems(
  work: { images: string[]; title: Record<Locale, string> },
  locale: Locale,
) {
  return work.images.map((src) => ({
    src,
    alt: work.title[locale],
  }));
}
