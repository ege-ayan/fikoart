import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getSecurityHeaderConfig,
  httpsOnlySecurityHeaders,
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

  it("does not pin HTTPS on every host", () => {
    expect(header("Strict-Transport-Security")).toBeUndefined();
    expect(header("Content-Security-Policy")).toBeUndefined();
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
});

describe("httpsOnlySecurityHeaders", () => {
  it("enforces HTTPS only when the request is already TLS", () => {
    expect(httpsOnlySecurityHeaders).toEqual([
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
      },
      {
        key: "Content-Security-Policy",
        value: "upgrade-insecure-requests",
      },
    ]);
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

  it("applies HTTPS headers only behind a TLS terminator", () => {
    vi.stubEnv("NODE_ENV", "production");

    expect(getSecurityHeaderConfig()).toEqual([
      {
        source: "/(.*)",
        headers: productionSecurityHeaders,
      },
      {
        source: "/(.*)",
        has: [{ type: "header", key: "x-forwarded-proto", value: "https" }],
        headers: httpsOnlySecurityHeaders,
      },
    ]);
  });
});
