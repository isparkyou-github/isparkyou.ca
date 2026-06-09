import type { Metadata } from "next";

import { HomeSections } from "@/components/sections/home-sections";
import { getRfqMode } from "@/lib/env";

export const metadata: Metadata = {
  title: "电气设备供应与技术协调",
  description:
    "面向加拿大和美国项目的变压器、开关设备、控制柜供应，技术文件审查及项目协调。",
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
};

export default function ChineseHome() {
  return <HomeSections demoMode={getRfqMode() === "demo"} locale="zh" />;
}
