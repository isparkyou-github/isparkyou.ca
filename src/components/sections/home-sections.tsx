import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  Cable,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileSearch,
  Gauge,
  Globe2,
  PackageCheck,
  PanelsTopLeft,
  RadioTower,
  Route,
  Send,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { RfqForm } from "@/components/forms/rfq-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";

const services = [
  {
    title: "Equipment Sourcing",
    text: "Source selected equipment from qualified Chinese manufacturers based on real project requirements.",
    icon: Factory,
  },
  {
    title: "Documentation Review",
    text: "Organize and review datasheets, schematics, BOMs, terminal schedules, manuals, and FAT records.",
    icon: FileSearch,
  },
  {
    title: "Compliance Pathway Coordination",
    text: "Clarify CSA, cUL, cETL, NRTL, or field-evaluation requirements before a formal quotation.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery Support",
    text: "Coordinate documentation, shipment readiness, spare-parts communication, and delivery follow-up.",
    icon: PackageCheck,
  },
];

const products: [string, LucideIcon][] = [
  ["Low-Voltage Control Panels", PanelsTopLeft],
  ["PLC Control Enclosures", TerminalSquare],
  ["Relay and Terminal Junction Boxes", Cable],
  ["Energy Monitoring and Smart Metering", Gauge],
  ["Communication Gateways", RadioTower],
];

const workflow: [string, string, string, LucideIcon][] = [
  ["01", "Share Your RFQ", "Provide project location, equipment requirements, target delivery date, and available documentation.", Send],
  ["02", "Clarify Requirements", "Confirm electrical ratings, installation environment, approval expectations, and responsibility boundaries.", ClipboardList],
  ["03", "Review Supply and Compliance Path", "Assess manufacturer documentation, product fit, and the practical approval route before quotation.", Route],
  ["04", "Coordinate Delivery", "Track technical documentation, shipment readiness, logistics details, and project communication.", PackageCheck],
];

export function HomeSections({ demoMode }: { demoMode: boolean }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-[#d9e4f1] bg-white">
          <div className="absolute inset-y-0 right-0 hidden w-[52%] blueprint-grid opacity-70 lg:block" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#061956] sm:text-5xl lg:text-[4.25rem]">
                Electrical Equipment Sourcing, Backed by Engineering Review.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#59657c] sm:text-lg">
                We help North American customers source qualified electrical
                equipment from selected Chinese manufacturers, with
                documentation review, compliance pathway coordination, and
                delivery support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#rfq">
                  Submit an RFQ
                  <ArrowRight aria-hidden="true" size={16} />
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                  Explore Our Capabilities
                </ButtonLink>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#d9e4f1] pt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#09256f]">
                <span>Canada</span>
                <span>United States</span>
                <span>Qualified Supply Network</span>
              </div>
            </div>
            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[26rem] lg:min-h-[34rem]">
              <Image
                alt="Industrial low-voltage control enclosure and communication gateway"
                className="object-cover object-center mix-blend-multiply"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                src="/images/control-panel-hero.png"
              />
            </div>
          </div>
          <div className="section-rule h-2" />
        </section>

        <section className="bg-white py-20 sm:py-24" id="services">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              label="Services"
              text="Practical support from RFQ clarification through documentation and delivery."
              title="Engineering-Led Support"
            />
            <div className="mt-12 grid gap-x-8 border-t border-[#cbd9e8] md:grid-cols-2">
              {services.map(({ icon: Icon, text, title }) => (
                <article
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-[#cbd9e8] py-7 md:pr-6"
                  key={title}
                >
                  <Icon aria-hidden="true" className="mt-1 text-[#0758ff]" size={24} strokeWidth={1.8} />
                  <div>
                    <h3 className="text-lg font-bold text-[#09256f]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#59657c]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#061956] py-20 text-white sm:py-24" id="products">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#69a4ff]">Product Focus</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Start with equipment that has a clear approval path.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#c7d8f4]">
                The first-phase focus stays conservative: low-voltage and
                monitoring products where documentation quality, installation
                context, and approval expectations can be assessed early.
              </p>
              <p className="mt-8 border-l-2 border-[#176dff] pl-4 text-sm leading-7 text-[#d9e7ff]">
                Medium-voltage and high-voltage equipment are considered only
                when project-specific technical review, documentation, and
                customer acceptance requirements are clear.
              </p>
            </div>
            <div className="border-t border-[#315192]">
              {products.map(([title, icon]) => {
                const Icon = icon;
                return (
                  <div className="flex items-center gap-4 border-b border-[#315192] py-5" key={title}>
                    <Icon aria-hidden="true" className="text-[#69a4ff]" size={22} strokeWidth={1.7} />
                    <span className="text-base font-bold tracking-wide text-white sm:text-lg">{title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f9ff] py-20 sm:py-24" id="workflow">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              label="How It Works"
              text="Each opportunity begins with project facts, approval expectations, and a defined responsibility boundary."
              title="A Practical Project Workflow"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map(([number, title, text, icon]) => {
                const Icon = icon;
                return (
                  <article className="border-t-2 border-[#0758ff] bg-white px-5 py-6 shadow-[0_10px_28px_rgba(9,37,111,0.06)]" key={number}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold tracking-[0.16em] text-[#0758ff]">{number}</span>
                      <Icon aria-hidden="true" className="text-[#09256f]" size={20} strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-[#09256f]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#59657c]">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="about">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <div className="blueprint-grid relative min-h-72 overflow-hidden border border-[#d9e4f1] bg-[#f9fbff] p-7">
              <div className="absolute inset-x-0 bottom-0 h-2 section-rule" />
              <Zap aria-hidden="true" className="text-[#0758ff]" fill="currentColor" size={42} />
              <p className="mt-16 text-xs font-bold uppercase tracking-[0.2em] text-[#0758ff]">Engineering Perspective</p>
              <p className="mt-3 max-w-sm text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#061956]">
                Designed around field reality, maintainability, and clear project communication.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0758ff]">About</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#061956] sm:text-4xl">
                Built for Real Project Constraints
              </h2>
              <p className="mt-5 text-lg font-bold text-[#09256f]">Senye Zhang, Founder</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#59657c]">
                iSparkYou brings an engineering-led approach to electrical
                equipment sourcing and technical coordination. The focus is
                practical: review the documentation, clarify the installation
                context, identify approval constraints early, and keep project
                communication organized.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Schematics, BOMs, and terminal schedules",
                  "Terminal blocks, wire tags, and PLC I/O",
                  "Industrial troubleshooting perspective",
                  "Bilingual manufacturer communication",
                ].map((item) => (
                  <div className="flex items-start gap-2 text-sm leading-6 text-[#31415f]" key={item}>
                    <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-[#0758ff]" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d9e4f1] bg-[#f5f9ff] py-20 sm:py-24" id="rfq">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0758ff]">RFQ</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#061956] sm:text-4xl">
                Start with a Clear RFQ
              </h2>
              <p className="mt-5 text-base leading-8 text-[#59657c]">
                Share the available project details first. We will review the
                equipment category, technical requirements, documentation
                needs, and likely approval path before discussing a formal
                quotation.
              </p>
              <div className="mt-8 space-y-4 text-sm leading-6 text-[#31415f]">
                <ContactLine icon={BookOpenCheck} text="Structured technical clarification" />
                <ContactLine icon={Globe2} text="Canada and United States project context" />
                <ContactLine icon={Wrench} text="Practical installation and documentation review" />
                <ContactLine icon={Boxes} text="Project-based sourcing without unnecessary inventory commitments" />
              </div>
            </div>
            <RfqForm demoMode={demoMode} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SectionHeading({
  label,
  text,
  title,
}: {
  label: string;
  text: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0758ff]">{label}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#061956] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#59657c]">{text}</p>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  text,
}: {
  icon: typeof BookOpenCheck;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon aria-hidden="true" className="mt-1 shrink-0 text-[#0758ff]" size={17} />
      <span>{text}</span>
    </div>
  );
}
