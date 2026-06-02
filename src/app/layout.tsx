import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iSparkYou | Electrical Equipment Sourcing & Technical Solutions",
    template: "%s | iSparkYou",
  },
  description:
    "Engineering-led electrical equipment sourcing, documentation review, compliance pathway coordination, and delivery support for North American projects.",
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
