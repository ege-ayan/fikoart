import { describe, expect, it } from "vitest";

import { site } from "@/content/site";
import { works } from "@/content/works";
import {
  getPublicImageSize,
  isAnimatedSrc,
  readImageSize,
} from "@/lib/public-image";

describe("public-image", () => {
  it("reads dimensions for every work cover and the portrait", () => {
    for (const src of [site.portraitSrc, ...works.map((work) => work.cover)]) {
      const size = getPublicImageSize(src);
      expect(size.width).toBeGreaterThan(0);
      expect(size.height).toBeGreaterThan(0);
    }
  });

  it("treats gifs as animated", () => {
    expect(isAnimatedSrc("/works/blob.gif")).toBe(true);
    expect(isAnimatedSrc("/works/strike-cover.jpeg")).toBe(false);
  });

  it("rejects unknown formats", () => {
    expect(() => readImageSize(Buffer.from("not-an-image"))).toThrow(
      "Unsupported image format",
    );
  });
});
