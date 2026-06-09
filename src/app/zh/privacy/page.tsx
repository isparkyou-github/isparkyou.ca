import type { Metadata } from "next";

import { PrivacyContent } from "@/components/sections/privacy-content";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "iSparkYou 如何处理通过询价表单提交的信息。",
};

export default function ChinesePrivacyPage() {
  return <PrivacyContent locale="zh" />;
}
