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

  it("includes the homepage animation videos", () => {
    expect(workVideos(getWork("reel")!).map((video) => video.src)).toEqual([
      "/videos/reel/reel.mp4",
    ]);
    expect(workVideos(getWork("bubbles")!).length).toBe(1);
    expect(workVideos(getWork("beesider")!).length).toBe(2);
    expect(workVideos(getWork("strike")!).length).toBe(2);
    expect(workVideos(getWork("obsa")!).length).toBe(1);
    expect(workVideos(getWork("blob")!).length).toBe(1);
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
