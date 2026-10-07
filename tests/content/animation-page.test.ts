import { describe, expect, it } from "vitest";

import {
  animationPageBlocks,
  getAnimationPageWorks,
} from "@/content/animation-page";
import { getWork } from "@/content/works";

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

  it("keeps bally and strike clips together and leaves blob as the rotoscope", () => {
    expect(getWork("beesider")?.images).not.toContain(
      "/works/beesider-intro.gif",
    );
    expect(getWork("beesider")?.images).not.toContain(
      "/works/beesider-starnose.gif",
    );
    expect(getWork("bubbles")?.images).not.toContain("/works/bubble-merge.gif");
    expect(getWork("obsa")?.images).toEqual(["/works/obsa.gif"]);
    expect(getWork("blob")?.images).toEqual([
      "/works/blob-loop.gif",
      "/works/bubble-merge.gif",
    ]);
    expect(getWork("bally")?.images).toEqual(
      expect.arrayContaining([
        "/works/beesider-intro.gif",
        "/works/beesider-starnose.gif",
        "/works/blob-rotoscope.gif",
        "/works/blob.gif",
      ]),
    );
  });
});
