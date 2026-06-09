import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { SiteLocale } from "@/content/site";

const privacyContent = {
  en: {
    label: "Privacy",
    title: "RFQ Privacy Notice",
    intro:
      "This notice explains how iSparkYou handles business contact and project information submitted through its RFQ form.",
    sections: [
      [
        "Information collected",
        "We collect the information you provide in the RFQ form, including company and contact details, project location, equipment category, ratings, certification expectations, target date, and project description.",
      ],
      [
        "How the information is used",
        "We use this information only to review the request, clarify technical requirements, assess potential supply and compliance pathways, and respond to the inquiry. Submitting an RFQ does not create a contract or guarantee availability, certification, approval, pricing, or delivery.",
      ],
      [
        "Preview and live modes",
        "The public preview form simulates submission and does not transmit or store the entered information. If live submission is enabled, the form is sent through Formspree to the iSparkYou business email. The first-phase website does not maintain an RFQ database or accept file uploads.",
      ],
      [
        "Retention",
        "Email inquiries are retained only as reasonably required for project follow-up, business records, contractual obligations, or legal requirements. You may request deletion when no continuing obligation applies.",
      ],
    ],
    contact: "To request access, correction, or deletion, email",
  },
  zh: {
    label: "隐私",
    title: "询价隐私说明",
    intro: "本说明介绍 iSparkYou 如何处理通过询价表单提交的商务联系和项目信息。",
    sections: [
      [
        "收集的信息",
        "我们收集您在询价表单中提供的信息，包括公司和联系人资料、项目地点、设备类别、额定参数、认证预期、目标日期和项目说明。",
      ],
      [
        "信息用途",
        "这些信息仅用于审查询价、澄清技术要求、评估潜在供应和合规路径并回复咨询。提交询价不构成合同，也不保证产品可用性、认证、审批、价格或交付。",
      ],
      [
        "演示与正式模式",
        "公开演示表单仅模拟提交，不会传输或保存所填写的信息。启用正式提交后，表单将通过 Formspree 发送至 iSparkYou 商务邮箱。第一阶段网站不建立询价数据库，也不接受文件上传。",
      ],
      [
        "保留期限",
        "邮件询价仅在项目跟进、业务记录、合同义务或法律要求合理需要的期限内保留。在不存在持续义务时，您可以申请删除。",
      ],
    ],
    contact: "如需访问、更正或删除相关信息，请发送邮件至",
  },
} as const;

export function PrivacyContent({ locale }: { locale: SiteLocale }) {
  const content = privacyContent[locale];
  const languageHref = locale === "zh" ? "/privacy" : "/zh/privacy";

  return (
    <>
      <SiteHeader languageHref={languageHref} locale={locale} />
      <main className="flex-1 bg-white" lang={locale === "zh" ? "zh-CN" : "en"}>
        <section className="border-b border-[#d9e4f1] bg-[#f5f9ff]">
          <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
            <p className="section-label">{content.label}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#061956]">
              {content.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-[#59657c]">{content.intro}</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <div className="space-y-9 text-sm leading-7 text-[#4f5e76]">
            {content.sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-lg font-bold text-[#09256f]">{title}</h2>
                <p className="mt-2">{text}</p>
              </section>
            ))}
            <section>
              <h2 className="text-lg font-bold text-[#09256f]">
                {locale === "zh" ? "联系我们" : "Contact"}
              </h2>
              <p className="mt-2">
                {content.contact}{" "}
                <a
                  className="font-bold text-[#0758ff] hover:underline"
                  href="mailto:rfq@isparkyou.ca"
                >
                  rfq@isparkyou.ca
                </a>
                。
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter languageHref={languageHref} locale={locale} />
    </>
  );
}
