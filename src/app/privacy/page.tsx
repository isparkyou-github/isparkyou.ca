import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How iSparkYou handles information submitted through its RFQ form.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <section className="border-b border-[#d9e4f1] bg-[#f5f9ff]">
          <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0758ff]">Privacy</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#061956]">
              RFQ Privacy Notice
            </h1>
            <p className="mt-5 text-base leading-8 text-[#59657c]">
              This notice explains how iSparkYou handles the business contact
              and project information submitted through its RFQ form.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <div className="space-y-9 text-sm leading-7 text-[#4f5e76]">
            <PrivacySection title="Information collected">
              We collect the information you provide in the RFQ form, including
              your company name, contact name, business email, optional phone
              number, project location, project stage, equipment category,
              quantity, voltage level, certification requirement, target
              delivery date, and project details.
            </PrivacySection>
            <PrivacySection title="How the information is used">
              We use this information to review your request, clarify technical
              requirements, assess potential sourcing and compliance pathways,
              and respond to your inquiry. Submitting an RFQ does not create a
              contract or guarantee certification, approval, product
              availability, or delivery.
            </PrivacySection>
            <PrivacySection title="Service providers">
              RFQ records are stored in a hosted PostgreSQL database provided
              by Supabase. Submission notifications are sent through Formspree.
              Business email is handled through Zoho Mail. These providers
              process information only as required to deliver their services.
            </PrivacySection>
            <PrivacySection title="Retention">
              RFQ submissions are retained for up to 24 months to support
              project follow-up and business recordkeeping, then deleted unless
              a longer period is required for an active project, contractual
              obligation, or legal requirement.
            </PrivacySection>
            <PrivacySection title="Contact">
              To request access, correction, or deletion of your RFQ
              information, email{" "}
              <a className="font-bold text-[#0758ff] hover:underline" href="mailto:rfq@isparkyou.ca">
                rfq@isparkyou.ca
              </a>
              .
            </PrivacySection>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function PrivacySection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-[#09256f]">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
