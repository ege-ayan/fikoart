export const productionSecurityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "Permissions-Policy",
    value:
      "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()",
  },
];

export const httpsOnlySecurityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: "upgrade-insecure-requests",
  },
];

export function getSecurityHeaderConfig() {
  if (process.env.NODE_ENV !== "production") {
    return [];
  }

  return [
    {
      source: "/(.*)",
      headers: productionSecurityHeaders,
    },
    {
      source: "/(.*)",
      has: [
        { type: "header" as const, key: "x-forwarded-proto", value: "https" },
      ],
      headers: httpsOnlySecurityHeaders,
    },
  ];
}
