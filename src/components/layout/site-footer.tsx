import Link from "next/link";

import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer className="bg-[#061956] text-white">
      <div className="section-rule h-2" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <Logo className="brightness-0 invert" />
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c7d8f4]">
            Electrical equipment sourcing and technical solutions for North
            American projects.
          </p>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#a9bde1]">
            Final product approval, installation approval, and code compliance
            remain subject to the applicable certification body, field
            evaluation agency, licensed electrical contractor, engineer of
            record, and authority having jurisdiction.
          </p>
        </div>
        <div className="text-sm leading-7 text-[#d9e7ff] md:text-right">
          <a className="block hover:text-white" href="mailto:rfq@isparkyou.ca">
            rfq@isparkyou.ca
          </a>
          <span className="block">isparkyou.ca</span>
          <Link className="block hover:text-white" href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
