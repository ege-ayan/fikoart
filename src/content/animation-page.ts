import { getWork, type Locale, type Work } from "./works";

export type AnimationPageBlock =
  | { type: "single"; slug: string }
  | {
      type: "group";
      primarySlug: string;
      relatedSlugs: string[];
    };

/** Animation listing order and groupings (reel is rendered separately as the hero). */
export const animationPageBlocks: AnimationPageBlock[] = [
  { type: "single", slug: "bubbles" },
  { type: "single", slug: "beesider" },
  { type: "group", primarySlug: "strike", relatedSlugs: ["bally"] },
  { type: "single", slug: "obsa" },
  { type: "single", slug: "blob" },
];

export function getAnimationPageWorks(): Work[] {
  const reel = getWork("reel");
  const blocks = animationPageBlocks.flatMap((block) => {
    if (block.type === "single") {
      const work = getWork(block.slug);
      return work ? [work] : [];
    }

    const primary = getWork(block.primarySlug);
    const related = block.relatedSlugs
      .map((slug) => getWork(slug))
      .filter((work): work is Work => work !== undefined);

    return primary ? [primary, ...related] : related;
  });

  return reel ? [reel, ...blocks] : blocks;
}

export function getGroupedWorkMedia(
  primary: Work,
  related: Work[],
  locale: Locale,
): { src: string; alt: string }[] {
  return [
    ...primary.images.map((src) => ({
      src,
      alt: primary.title[locale],
    })),
    ...related.flatMap((work) =>
      work.images.map((src) => ({
        src,
        alt: work.title[locale],
      })),
    ),
  ];
}
