import type { Metadata } from "next";

import { PrivacyContent } from "@/components/sections/privacy-content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How iSparkYou handles information submitted through its RFQ form.",
};

export default function PrivacyPage() {
  return <PrivacyContent locale="en" />;
}
