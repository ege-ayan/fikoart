import { describe, expect, it } from "vitest";

import { site } from "@/content/site";
import { works } from "@/content/works";
import { llmsTxt } from "@/lib/llms-txt";
import { absoluteUrl } from "@/lib/seo";

describe("llmsTxt", () => {
  it("describes the site and lists every work", () => {
    const text = llmsTxt();

    expect(text).toContain(`# ${site.name}`);
    expect(text).toContain(site.fullName);
    expect(text).toContain(site.email);
    expect(text).toContain(absoluteUrl("/portfolio"));
    expect(text).toContain(absoluteUrl("/tr/cv"));

    for (const work of works) {
      expect(text).toContain(absoluteUrl(`/work/${work.slug}`));
    }
  });
});
