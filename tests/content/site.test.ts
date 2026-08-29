import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { education, experience, productions } from "@/content/resume";
import { site } from "@/content/site";

describe("site", () => {
  it("exposes public contact and socials", () => {
    expect(site.email).toBe("fikret.insell@gmail.com");
    expect(site.socials.instagram).toBe("https://www.instagram.com/fikoa.rt/");
    expect(site.socials.linkedin).toBe(
      "https://www.linkedin.com/in/fiko-insel-b1483926b/",
    );
    expect(site.socials.website).toBe("https://fikoart.com");
    expect(site.mark).toBe("fikoa.rt");
  });

  it("ships the portrait and CV", () => {
    expect(
      existsSync(
        path.join(process.cwd(), "public", site.portraitSrc.replace(/^\//, "")),
      ),
    ).toBe(true);
    expect(
      existsSync(
        path.join(process.cwd(), "public", site.cvHref.replace(/^\//, "")),
      ),
    ).toBe(true);
  });

  it("keeps resume entries bilingual", () => {
    expect(experience.length).toBeGreaterThan(5);
    expect(education.length).toBe(3);
    expect(productions.every((item) => item.title && item.year)).toBe(true);
  });
});
