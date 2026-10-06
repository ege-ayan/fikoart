import { describe, expect, it } from "vitest";

import {
  animationPageBlocks,
  getAnimationPageWorks,
} from "@/content/animation-page";

describe("animation page", () => {
  it("keeps blob at the bottom and groups strike with bally", () => {
    const slugs = animationPageBlocks.map((block) =>
      block.type === "single" ? block.slug : block.primarySlug,
    );

    expect(slugs.at(-1)).toBe("blob");
    expect(slugs).toEqual(["bubbles", "beesider", "strike", "obsa", "blob"]);

    const group = animationPageBlocks.find((block) => block.type === "group");
    expect(group).toMatchObject({
      type: "group",
      primarySlug: "strike",
      relatedSlugs: ["bally"],
    });
  });

  it("lists reel first in structured animation works", () => {
    expect(getAnimationPageWorks().map((work) => work.slug)[0]).toBe("reel");
  });
});
