export type RfqMode = "demo" | "live";

export function getRfqMode(): RfqMode {
  return process.env.RFQ_MODE === "live" ? "live" : "demo";
}

export function getLiveRfqConfig() {
  const databaseUrl = process.env.DATABASE_URL;
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (!databaseUrl || !formspreeEndpoint) {
    throw new Error(
      "Live RFQ mode requires DATABASE_URL and FORMSPREE_ENDPOINT.",
    );
  }

  return { databaseUrl, formspreeEndpoint };
}
