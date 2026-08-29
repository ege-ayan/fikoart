import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import { getSecurityHeaderConfig } from "./src/lib/security-headers";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      ...getSecurityHeaderConfig(),
    ];
  },
};

export default withNextIntl(nextConfig);
