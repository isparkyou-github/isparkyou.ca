import {
  ArrowRight,
  Boxes,
  Cable,
  Check,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FileSearch,
  Globe2,
  ListChecks,
  Map,
  PackageCheck,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Image from "next/image";

import { RfqForm } from "@/components/forms/rfq-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteContent, type SiteLocale } from "@/content/site";

const productIcons = [Boxes, PanelsTopLeft, CircuitBoard];
const capabilityIcons = [
  FileSearch,
  Cable,
  ListChecks,
  ClipboardCheck,
  ShieldCheck,
  FileCheck2,
];
const marketIcons = [Map, Globe2, Factory];
const processIcons = [ClipboardCheck, FileSearch, Route, PackageCheck];

export function HomeSections({
  demoMode,
  locale,
}: {
  demoMode: boolean;
  locale: SiteLocale;
}) {
  const content = siteContent[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <main lang={locale === "zh" ? "zh-CN" : "en"}>
        <section className="relative overflow-hidden border-b border-[#d9e4f1] bg-white">
          <div className="absolute inset-y-0 left-0 w-[48%] blueprint-grid opacity-55" />
          <div className="relative mx-auto grid max-w-[90rem] items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:pl-[max(3rem,calc((100vw-80rem)/2))]">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.07] tracking-[-0.05em] text-[#061956] sm:text-5xl lg:text-[4rem]">
                {content.hero.title}
              </h1>
              <div className="mt-7 h-0.5 w-24 bg-[#0758ff]" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#485872] sm:text-lg">
                {content.hero.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#rfq">
                  {content.hero.primary}
                  <ArrowRight aria-hidden="true" size={16} />
                </ButtonLink>
                <ButtonLink href="#products" variant="secondary">
                  {content.hero.secondary}
                </ButtonLink>
              </div>
              <div className="mt-10 grid gap-5 border-t border-[#cbd9e8] pt-6 sm:grid-cols-3">
                {content.hero.points.map(([title, text]) => (
                  <div key={title}>
                    <p className="text-sm font-extrabold text-[#09256f]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#68758d]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[23rem] overflow-hidden border-t border-[#d9e4f1] bg-[#f6f9fd] lg:min-h-[42rem] lg:border-l lg:border-t-0">
              <Image
                alt={
                  locale === "zh"
                    ? "干式变压器、低压开关柜和工业控制柜"
                    : "Dry-type transformer, low-voltage switchgear, and industrial control panel"
                }
                className="object-cover object-center"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 53vw"
                src="/images/electrical-equipment-hero-v2.png"
              />
            </div>
          </div>
          <div className="section-rule h-2" />
        </section>

        <section className="bg-white py-20 sm:py-24" id="products">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <SectionHeading
                label={content.products.label}
                text={content.products.text}
                title={content.products.title}
              />
              <div className="grid border-t border-[#b9cce2] md:grid-cols-3">
                {content.products.items.map((product, index) => {
                  const Icon = productIcons[index];
                  return (
                    <article
                      className="border-b border-[#b9cce2] py-7 md:border-l md:px-6"
                      key={product.title}
                    >
                      <Icon
                        aria-hidden="true"
                        className="text-[#0758ff]"
                        size={30}
                        strokeWidth={1.55}
                      />
                      <h3 className="mt-6 text-xl font-extrabold text-[#061956]">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-[#315078]">
                        {product.subtitle}
                      </p>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-[#59657c]">
                        {product.details.map((detail) => (
                          <li className="flex gap-2" key={detail}>
                            <span className="mt-2 h-1 w-1 shrink-0 bg-[#0758ff]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#d9e4f1] bg-[#f7faff] py-20 sm:py-24"
          id="capabilities"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div>
              <SectionHeading
                label={content.capabilities.label}
                text={content.capabilities.text}
                title={content.capabilities.title}
              />
              <div className="mt-10 grid border-t border-[#cbd9e8] sm:grid-cols-2">
                {content.capabilities.items.map(([title, text], index) => {
                  const Icon = capabilityIcons[index];
                  return (
                    <article
                      className="grid grid-cols-[auto_1fr] gap-3 border-b border-[#cbd9e8] py-5 sm:pr-5"
                      key={title}
                    >
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 text-[#0758ff]"
                        size={21}
                        strokeWidth={1.7}
                      />
                      <div>
                        <h3 className="text-sm font-extrabold text-[#09256f]">{title}</h3>
                        <p className="mt-1 text-xs leading-5 text-[#66738a]">{text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="blueprint-grid relative overflow-hidden border border-[#b9cce2] bg-white p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-1 w-2/3 bg-[#0758ff]" />
              <div className="flex items-center gap-3">
                <FileCheck2 aria-hidden="true" className="text-[#0758ff]" size={29} />
                <h3 className="text-xl font-extrabold text-[#061956]">
                  {content.capabilities.visualTitle}
                </h3>
              </div>
              <div className="mt-8 bg-white/90">
                {content.capabilities.visualItems.map((item, index) => (
                  <div
                    className="flex items-center gap-4 border-b border-[#cbd9e8] py-4"
                    key={item}
                  >
                    <span className="flex h-7 w-7 items-center justify-center bg-[#eaf3ff] text-xs font-extrabold text-[#0758ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold text-[#31415f]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex items-center gap-3 border-l-2 border-[#0758ff] bg-[#f5f9ff] px-4 py-4 text-xs leading-5 text-[#53627a]">
                <Sparkles aria-hidden="true" className="shrink-0 text-[#0758ff]" size={18} />
                <span>
                  {locale === "zh"
                    ? "资料不完整并不会阻止初步沟通，但会影响报价准确性和项目进度。"
                    : "An incomplete package does not prevent an initial discussion, but it can affect quotation accuracy and project timing."}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#061956] py-20 text-white sm:py-24" id="markets">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <div>
              <p className="section-label text-[#70a8ff]">{content.markets.label}</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                {content.markets.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#c7d8f4]">
                {content.markets.text}
              </p>
            </div>
            <div className="border-t border-[#315192]">
              {content.markets.items.map(([title, text], index) => {
                const Icon = marketIcons[index];
                return (
                  <article
                    className="grid gap-4 border-b border-[#315192] py-6 sm:grid-cols-[auto_0.35fr_0.65fr] sm:items-start"
                    key={title}
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-[#69a4ff]"
                      size={26}
                      strokeWidth={1.6}
                    />
                    <h3 className="text-lg font-extrabold">{title}</h3>
                    <p className="text-sm leading-7 text-[#c7d8f4]">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="process">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              label={content.process.label}
              title={content.process.title}
            />
            <div className="mt-12 grid border-t border-[#b9cce2] md:grid-cols-2 lg:grid-cols-4">
              {content.process.items.map(([number, title, text], index) => {
                const Icon = processIcons[index];
                return (
                  <article
                    className="relative border-b border-[#b9cce2] py-7 md:px-6 md:first:pl-0 lg:border-l lg:first:border-l-0"
                    key={number}
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-[#0758ff] px-2 py-1 text-sm font-extrabold text-white">
                        {number}
                      </span>
                      <Icon aria-hidden="true" className="text-[#0758ff]" size={23} />
                    </div>
                    <h3 className="mt-7 text-xl font-extrabold text-[#061956]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#59657c]">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9e4f1] bg-[#f7faff] py-20 sm:py-24" id="about">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div className="blueprint-grid relative min-h-80 overflow-hidden border border-[#cbd9e8] bg-white p-7">
              <div className="absolute inset-x-0 bottom-0 h-2 section-rule" />
              <Wrench aria-hidden="true" className="text-[#0758ff]" size={38} strokeWidth={1.6} />
              <p className="mt-16 max-w-sm text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#061956]">
                {locale === "zh"
                  ? "面向现场实际、可维护性和清晰项目沟通。"
                  : "Grounded in field reality, maintainability, and clear project communication."}
              </p>
            </div>
            <div>
              <p className="section-label">{content.about.label}</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#061956] sm:text-4xl">
                {content.about.title}
              </h2>
              <p className="mt-5 text-lg font-bold text-[#09256f]">{content.about.founder}</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#59657c]">
                {content.about.text}
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {content.about.items.map((item) => (
                  <div className="flex items-start gap-3 text-sm leading-6 text-[#31415f]" key={item}>
                    <Check
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[#0758ff]"
                      size={17}
                      strokeWidth={2.2}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="rfq">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionHeading
                  label={content.rfq.label}
                  text={content.rfq.text}
                  title={content.rfq.title}
                />
                <div className="mt-9 border-t border-[#cbd9e8]">
                  <h3 className="py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#09256f]">
                    {content.rfq.documentsTitle}
                  </h3>
                  {content.rfq.documents.map((document) => (
                    <div
                      className="flex items-center gap-3 border-t border-[#e0e8f1] py-3 text-sm text-[#53627a]"
                      key={document}
                    >
                      <span className="h-3.5 w-3.5 border border-[#8ea7c5]" />
                      {document}
                    </div>
                  ))}
                </div>
              </div>
              <RfqForm demoMode={demoMode} locale={locale} />
            </div>
          </div>
        </section>

        <section className="border-t border-[#cbd9e8] bg-[#eaf3ff]">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 md:grid-cols-[auto_0.28fr_0.72fr] md:items-center lg:px-8">
            <ShieldCheck aria-hidden="true" className="text-[#0758ff]" size={36} strokeWidth={1.65} />
            <h2 className="text-xl font-extrabold text-[#061956]">{content.boundary.title}</h2>
            <p className="text-xs leading-6 text-[#4d5d75]">{content.boundary.text}</p>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

function SectionHeading({
  label,
  text,
  title,
}: {
  label: string;
  text?: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#061956] sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-[#59657c]">{text}</p> : null}
    </div>
  );
}
