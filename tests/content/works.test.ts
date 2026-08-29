import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { getWork, getWorksByCategory, works } from "@/content/works";

const publicDir = path.resolve(process.cwd(), "public");

describe("works", () => {
  it("has unique slugs", () => {
    const slugs = works.map((work) => work.slug);
    expect(slugs).toEqual([...new Set(slugs)]);
  });

  it("keeps local artwork files in public/", () => {
    for (const work of works) {
      for (const src of [work.cover, ...work.images]) {
        expect(existsSync(path.join(publicDir, src.replace(/^\//, "")))).toBe(
          true,
        );
      }
    }
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
