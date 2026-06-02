import type { NextConfig } from "next";

if (process.env.VERCEL_ENV === "production") {
  const requiredVariables = ["DATABASE_URL", "FORMSPREE_ENDPOINT"];

  if (process.env.RFQ_MODE !== "live") {
    throw new Error("Production deployment requires RFQ_MODE=live.");
  }

  for (const variable of requiredVariables) {
    if (!process.env[variable]) {
      throw new Error(`Production deployment requires ${variable}.`);
    }
  }
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
