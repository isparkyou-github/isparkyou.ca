export type RfqMode = "demo" | "live";

export function getRfqMode(): RfqMode {
  return process.env.RFQ_MODE === "live" ? "live" : "demo";
}

export function getLiveRfqConfig() {
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (!formspreeEndpoint) {
    throw new Error("Live RFQ mode requires FORMSPREE_ENDPOINT.");
  }

  return { formspreeEndpoint };
}
