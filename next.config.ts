import type { NextConfig } from "next";

if (process.env.VERCEL_ENV === "production") {
  const publicDemoDeployment = process.env.PUBLIC_DEMO_DEPLOYMENT === "true";

  if (process.env.RFQ_MODE !== "live" && !publicDemoDeployment) {
    throw new Error(
      "Production deployment requires RFQ_MODE=live unless PUBLIC_DEMO_DEPLOYMENT=true is explicitly set.",
    );
  }

  if (!publicDemoDeployment && !process.env.FORMSPREE_ENDPOINT) {
    throw new Error("Production deployment requires FORMSPREE_ENDPOINT.");
  }
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
