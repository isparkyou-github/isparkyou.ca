"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/ui/logo";
import { siteContent, type SiteLocale } from "@/content/site";

export function SiteHeader({
  languageHref,
  locale,
}: {
  languageHref?: string;
  locale: SiteLocale;
}) {
  const [open, setOpen] = useState(false);
  const content = siteContent[locale];
  const alternateLanguageHref = languageHref ?? content.languageHref;

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e4f1] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo href={locale === "zh" ? "/zh" : "/"} />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {content.nav.map(([label, href]) => (
            <a
              className="text-[0.82rem] font-bold text-[#31415f] hover:text-[#0758ff]"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
          <a
            className="border-l border-[#cbd9e8] pl-5 text-sm font-extrabold text-[#0758ff] hover:text-[#0645ca]"
            href={alternateLanguageHref}
          >
            {content.languageLabel}
          </a>
          <a
            className="rounded-sm bg-[#0758ff] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(7,88,255,0.18)] hover:bg-[#064ce0]"
            href="#rfq"
          >
            {content.hero.primary}
          </a>
        </nav>
        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded-sm border border-[#cbd9e8] p-2 text-[#09256f] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#e3ebf4] bg-white px-5 py-4 lg:hidden"
        >
          {content.nav.map(([label, href]) => (
            <a
              className="block border-b border-[#e3ebf4] py-3 text-sm font-bold text-[#31415f]"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="block border-b border-[#e3ebf4] py-3 text-sm font-extrabold text-[#0758ff]"
            href={alternateLanguageHref}
            onClick={() => setOpen(false)}
          >
            {content.languageLabel}
          </a>
          <a
            className="mt-4 block rounded-sm bg-[#0758ff] px-5 py-3 text-center text-sm font-bold text-white"
            href="#rfq"
            onClick={() => setOpen(false)}
          >
            {content.hero.primary}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
