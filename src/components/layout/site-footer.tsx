import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { siteContent, type SiteLocale } from "@/content/site";

export function SiteFooter({
  languageHref,
  locale,
}: {
  languageHref?: string;
  locale: SiteLocale;
}) {
  const content = siteContent[locale];
  const homeHref = locale === "zh" ? "/zh" : "/";
  const privacyHref = locale === "zh" ? "/zh/privacy" : "/privacy";
  const alternateLanguageHref = languageHref ?? content.languageHref;

  return (
    <footer className="bg-[#061956] text-white">
      <div className="section-rule h-2" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <Logo className="brightness-0 invert" href={homeHref} />
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c7d8f4]">
            {content.footer.text}
          </p>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#a9bde1]">
            {content.footer.legal}
          </p>
        </div>
        <div className="text-sm leading-7 text-[#d9e7ff] md:text-right">
          <a className="block hover:text-white" href="mailto:rfq@isparkyou.ca">
            rfq@isparkyou.ca
          </a>
          <span className="block">isparkyou.ca</span>
          <Link className="block hover:text-white" href={privacyHref}>
            {content.footer.privacy}
          </Link>
          <Link className="block font-bold text-[#70a8ff] hover:text-white" href={alternateLanguageHref}>
            {content.languageLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
