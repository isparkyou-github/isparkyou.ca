"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import {
  submitRfq,
  type RfqActionState,
} from "@/app/actions/submit-rfq";
import type { SiteLocale } from "@/content/site";

type RfqFormProps = {
  demoMode: boolean;
  locale: SiteLocale;
};

const initialRfqActionState: RfqActionState = {
  status: "idle",
  message: "",
};

const formText = {
  en: {
    preview: "Preview mode: submissions are simulated and no information is sent or saved.",
    company: "Company name *",
    contact: "Contact name *",
    email: "Business email *",
    phone: "Phone",
    location: "Project location *",
    locationPlaceholder: "City, province/state",
    stage: "Project stage *",
    stagePlaceholder: "Select a stage",
    stages: ["Budget", "Tender", "Awarded", "Construction", "Retrofit"],
    category: "Equipment category *",
    categoryPlaceholder: "Select equipment",
    categories: [
      "Transformer",
      "Switchgear or switchboard",
      "Motor control centre",
      "Industrial control panel",
      "Energy monitoring or smart metering",
      "Other electrical equipment",
    ],
    quantity: "Quantity *",
    voltage: "Voltage / rating *",
    voltagePlaceholder: "Example: 600 V, 1500 kVA, 25 kA",
    certification: "Certification requirement *",
    certificationPlaceholder: "Select requirement",
    certifications: [
      "CSA / cUL / cETL",
      "UL / NRTL",
      "Field evaluation",
      "Customer specification provided",
      "To be confirmed",
    ],
    date: "Target delivery date *",
    details: "Project details *",
    detailsPlaceholder:
      "Describe the application, ratings, installation environment, available drawings, documentation needs, and known constraints.",
    consent:
      "I agree that iSparkYou may use this information to review and respond to this RFQ.",
    boundary:
      "Submitting this form does not create a contract or guarantee availability, certification, approval, pricing, or delivery.",
    submit: "Submit RFQ",
    submitting: "Submitting...",
  },
  zh: {
    preview: "演示模式：提交仅用于展示，不会发送或保存任何信息。",
    company: "公司名称 *",
    contact: "联系人 *",
    email: "商务邮箱 *",
    phone: "电话",
    location: "项目地点 *",
    locationPlaceholder: "城市，省/州",
    stage: "项目阶段 *",
    stagePlaceholder: "请选择阶段",
    stages: ["预算", "投标", "已授标", "施工", "改造"],
    category: "设备类别 *",
    categoryPlaceholder: "请选择设备",
    categories: [
      "变压器",
      "开关柜或配电柜",
      "电机控制中心（MCC）",
      "工业控制柜",
      "能源监测或智能计量",
      "其他电气设备",
    ],
    quantity: "数量 *",
    voltage: "电压 / 额定参数 *",
    voltagePlaceholder: "例如：600 V、1500 kVA、25 kA",
    certification: "认证要求 *",
    certificationPlaceholder: "请选择要求",
    certifications: [
      "CSA / cUL / cETL",
      "UL / NRTL",
      "现场评估",
      "已提供客户规格",
      "待确认",
    ],
    date: "目标交付日期 *",
    details: "项目说明 *",
    detailsPlaceholder:
      "请说明应用场景、额定参数、安装环境、已有图纸、文件要求和已知限制。",
    consent: "我同意 iSparkYou 使用这些信息审查并回复本次询价。",
    boundary:
      "提交本表单不构成合同，也不保证产品可用性、认证、审批、价格或交付时间。",
    submit: "提交询价",
    submitting: "正在提交...",
  },
} as const;

function SubmitButton({ locale }: { locale: SiteLocale }) {
  const { pending } = useFormStatus();
  const text = formText[locale];

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#0758ff] px-6 py-3 text-sm font-bold tracking-wide text-white shadow-[0_10px_24px_rgba(7,88,255,0.2)] hover:-translate-y-0.5 hover:bg-[#064ce0] disabled:cursor-wait disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <>
          <LoaderCircle aria-hidden="true" className="animate-spin" size={17} />
          {text.submitting}
        </>
      ) : (
        <>
          <Send aria-hidden="true" size={16} />
          {text.submit}
        </>
      )}
    </button>
  );
}

function FieldError({
  errors,
  name,
}: {
  errors?: RfqActionState["errors"];
  name: string;
}) {
  const message = errors?.[name]?.[0];

  return message ? <span className="field-error">{message}</span> : null;
}

export function RfqForm({ demoMode, locale }: RfqFormProps) {
  const [state, formAction] = useActionState(
    submitRfq,
    initialRfqActionState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const text = formText[locale];

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="border border-[#b9cce2] bg-white p-5 shadow-[0_18px_45px_rgba(9,37,111,0.07)] sm:p-7"
      ref={formRef}
    >
      <input name="locale" type="hidden" value={locale} />
      {demoMode ? (
        <p className="mb-6 border-l-2 border-[#0758ff] bg-[#eaf3ff] px-4 py-3 text-sm leading-6 text-[#31415f]">
          {text.preview}
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <FormField errors={state.errors} label={text.company} name="companyName" required />
        <FormField errors={state.errors} label={text.contact} name="contactName" required />
        <FormField errors={state.errors} label={text.email} name="businessEmail" required type="email" />
        <FormField errors={state.errors} label={text.phone} name="phone" type="tel" />
        <FormField
          errors={state.errors}
          label={text.location}
          name="projectLocation"
          placeholder={text.locationPlaceholder}
          required
        />
        <SelectField
          errors={state.errors}
          label={text.stage}
          name="projectStage"
          options={text.stages}
          placeholder={text.stagePlaceholder}
        />
        <SelectField
          errors={state.errors}
          label={text.category}
          name="equipmentCategory"
          options={text.categories}
          placeholder={text.categoryPlaceholder}
        />
        <FormField
          errors={state.errors}
          label={text.quantity}
          min="1"
          name="quantity"
          required
          type="number"
        />
        <FormField
          errors={state.errors}
          label={text.voltage}
          name="voltageLevel"
          placeholder={text.voltagePlaceholder}
          required
        />
        <SelectField
          errors={state.errors}
          label={text.certification}
          name="certificationRequirement"
          options={text.certifications}
          placeholder={text.certificationPlaceholder}
        />
        <FormField
          errors={state.errors}
          label={text.date}
          name="targetDeliveryDate"
          required
          type="date"
        />
      </div>
      <label className="mt-5 block">
        <span className="field-label">{text.details}</span>
        <textarea
          className="field-control min-h-32 resize-y"
          name="projectDetails"
          placeholder={text.detailsPlaceholder}
          required
        />
        <FieldError errors={state.errors} name="projectDetails" />
      </label>
      <label className="sr-only" aria-hidden="true">
        Leave this field blank
        <input autoComplete="off" name="_gotcha" tabIndex={-1} />
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#59657c]">
        <input
          className="mt-1 h-4 w-4 accent-[#0758ff]"
          name="consent"
          required
          type="checkbox"
        />
        <span>
          {text.consent}
          <FieldError errors={state.errors} name="consent" />
        </span>
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton locale={locale} />
        <p className="max-w-md text-xs leading-5 text-[#68758d]">{text.boundary}</p>
      </div>
      {state.message ? (
        <p
          className={`mt-5 flex items-start gap-2 border px-4 py-3 text-sm leading-6 ${
            state.status === "success"
              ? "border-[#a6ddbd] bg-[#f0fbf4] text-[#19633b]"
              : "border-[#f1b8b3] bg-[#fff4f2] text-[#9f2d24]"
          }`}
          role="status"
        >
          {state.status === "success" ? (
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
          ) : null}
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

function FormField({
  errors,
  label,
  name,
  ...inputProps
}: {
  errors?: RfqActionState["errors"];
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <input className="field-control" name={name} {...inputProps} />
      <FieldError errors={errors} name={name} />
    </label>
  );
}

function SelectField({
  errors,
  label,
  name,
  options,
  placeholder,
}: {
  errors?: RfqActionState["errors"];
  label: string;
  name: string;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <select className="field-control" defaultValue="" name={name} required>
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <FieldError errors={errors} name={name} />
    </label>
  );
}
