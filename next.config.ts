import type { NextConfig } from "next";

if (process.env.VERCEL_ENV === "production") {
  const requiredVariables = ["DATABASE_URL", "FORMSPREE_ENDPOINT"];
  const publicDemoDeployment = process.env.PUBLIC_DEMO_DEPLOYMENT === "true";

  if (process.env.RFQ_MODE !== "live" && !publicDemoDeployment) {
    throw new Error(
      "Production deployment requires RFQ_MODE=live unless PUBLIC_DEMO_DEPLOYMENT=true is explicitly set.",
    );
  }

  if (!publicDemoDeployment) {
    for (const variable of requiredVariables) {
      if (!process.env[variable]) {
        throw new Error(`Production deployment requires ${variable}.`);
      }
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
