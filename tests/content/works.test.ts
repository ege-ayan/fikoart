import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  getWork,
  getWorksByCategory,
  workVideos,
  works,
} from "@/content/works";

const publicDir = path.resolve(process.cwd(), "public");

describe("works", () => {
  it("has unique slugs", () => {
    const slugs = works.map((work) => work.slug);
    expect(slugs).toEqual([...new Set(slugs)]);
  });

  it("keeps local artwork and video files in public/", () => {
    for (const work of works) {
      for (const src of [work.cover, ...work.images]) {
        expect(existsSync(path.join(publicDir, src.replace(/^\//, "")))).toBe(
          true,
        );
      }

      for (const video of workVideos(work)) {
        expect(
          existsSync(path.join(publicDir, video.src.replace(/^\//, ""))),
        ).toBe(true);
        expect(
          existsSync(path.join(publicDir, video.poster.replace(/^\//, ""))),
        ).toBe(true);
        expect(video.width).toBeGreaterThan(0);
        expect(video.height).toBeGreaterThan(0);
      }
    }
  });

  it("keeps only the animation reel as video", () => {
    expect(workVideos(getWork("reel")!).map((video) => video.src)).toEqual([
      "/videos/reel/reel.mp4",
    ]);
    expect(workVideos(getWork("bubbles")!)).toEqual([]);
    expect(workVideos(getWork("beesider")!)).toEqual([]);
    expect(workVideos(getWork("strike")!)).toEqual([]);
    expect(workVideos(getWork("obsa")!)).toEqual([]);
    expect(workVideos(getWork("blob")!)).toEqual([]);
  });

  it("splits animation and illustration catalogs", () => {
    expect(
      getWorksByCategory("animation").every(
        (work) => work.category === "animation",
      ),
    ).toBe(true);
    expect(
      getWorksByCategory("illustration").every(
        (work) => work.category === "illustration",
      ),
    ).toBe(true);
    expect(getWork("bubbles")?.title.en).toContain("Bubbles");
    expect(getWork("missing")).toBeUndefined();
  });
});
