import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import { getSecurityHeaderConfig } from "./src/lib/security-headers";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async headers() {
    return getSecurityHeaderConfig();
  },
};

export default withNextIntl(nextConfig);
