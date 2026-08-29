import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function themeColor(name: string) {
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");
  const match = css.match(
    new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{6})`, "i"),
  );

  if (!match?.[1]) {
    throw new Error(`missing --color-${name}`);
  }

  return match[1];
}

function channel(value: number) {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const n = hex.replace("#", "");
  const r = Number.parseInt(n.slice(0, 2), 16);
  const g = Number.parseInt(n.slice(2, 4), 16);
  const b = Number.parseInt(n.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a: string, b: string) {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

describe("theme contrast", () => {
  const canvas = themeColor("canvas");
  const surface = themeColor("surface");
  const muted = themeColor("muted");
  const ink = themeColor("ink");

  it("keeps muted text at WCAG AA on canvas and surface", () => {
    expect(contrast(muted, canvas)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(muted, surface)).toBeGreaterThanOrEqual(4.5);
  });

  it("keeps body ink at WCAG AAA on canvas", () => {
    expect(contrast(ink, canvas)).toBeGreaterThanOrEqual(7);
  });
});
