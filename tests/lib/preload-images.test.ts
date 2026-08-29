import { describe, expect, it } from "vitest";

import { uniqueImageSrcs } from "@/lib/preload-images";

describe("uniqueImageSrcs", () => {
  it("drops blanks and duplicates while keeping order", () => {
    expect(
      uniqueImageSrcs(["/works/a.jpg", "", "/works/a.jpg", "/works/b.gif"]),
    ).toEqual(["/works/a.jpg", "/works/b.gif"]);
  });
});
