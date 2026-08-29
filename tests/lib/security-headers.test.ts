import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getSecurityHeaderConfig,
  productionSecurityHeaders,
} from "@/lib/security-headers";

function header(key: string) {
  return productionSecurityHeaders.find((item) => item.key === key);
}

describe("productionSecurityHeaders", () => {
  it("defines unique header names", () => {
    const keys = productionSecurityHeaders.map((item) => item.key);

    expect(keys).toEqual([...new Set(keys)]);
  });

  it("enforces HTTPS with HSTS preload", () => {
    expect(header("Strict-Transport-Security")).toEqual({
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
    });
  });

  it("blocks XSS filtering fallback and clickjacking", () => {
    expect(header("X-XSS-Protection")).toEqual({
      key: "X-XSS-Protection",
      value: "1; mode=block",
    });
    expect(header("X-Frame-Options")).toEqual({
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    });
  });

  it("disables MIME sniffing", () => {
    expect(header("X-Content-Type-Options")).toEqual({
      key: "X-Content-Type-Options",
      value: "nosniff",
    });
  });

  it("sets referrer and permissions policies", () => {
    expect(header("Referrer-Policy")).toEqual({
      key: "Referrer-Policy",
      value: "no-referrer-when-downgrade",
    });
    expect(header("Permissions-Policy")?.value).toBe(
      "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()",
    );
  });

  it("upgrades insecure requests via CSP", () => {
    expect(header("Content-Security-Policy")).toEqual({
      key: "Content-Security-Policy",
      value: "upgrade-insecure-requests",
    });
  });
});

describe("getSecurityHeaderConfig", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns no headers outside production", () => {
    vi.stubEnv("NODE_ENV", "development");

    expect(getSecurityHeaderConfig()).toEqual([]);
  });

  it("applies security headers to every route in production", () => {
    vi.stubEnv("NODE_ENV", "production");

    expect(getSecurityHeaderConfig()).toEqual([
      {
        source: "/(.*)",
        headers: productionSecurityHeaders,
      },
    ]);
  });
});
