import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isparkyou.ca"),
  title: {
    default: "iSparkYou | Electrical Equipment Sourcing & Technical Solutions",
    template: "%s | iSparkYou",
  },
  description:
    "Transformer, switchgear, and control panel supply coordination with engineering-led document review for Canadian and U.S. projects.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
