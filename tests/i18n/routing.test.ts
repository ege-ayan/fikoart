import { describe, expect, it } from "vitest";

import { routing } from "@/i18n/routing";

describe("routing", () => {
  it("supports en and tr with English as default", () => {
    expect(routing.locales).toEqual(["en", "tr"]);
    expect(routing.defaultLocale).toBe("en");
  });
});
