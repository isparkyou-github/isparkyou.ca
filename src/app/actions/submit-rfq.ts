"use server";

import { getLiveRfqConfig, getRfqMode } from "@/lib/env";
import { rfqSchema, type RfqInput } from "@/lib/validation/rfq";

export type RfqActionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

const submissionWindowMs = 15 * 60 * 1000;
const submissionLimit = 3;
const submissionHistory = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recentSubmissions = (submissionHistory.get(key) ?? []).filter(
    (timestamp) => now - timestamp < submissionWindowMs,
  );

  if (recentSubmissions.length >= submissionLimit) {
    return true;
  }

  submissionHistory.set(key, [...recentSubmissions, now]);
  return false;
}

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "");
}

function getInput(formData: FormData) {
  return {
    companyName: getField(formData, "companyName"),
    contactName: getField(formData, "contactName"),
    businessEmail: getField(formData, "businessEmail"),
    phone: getField(formData, "phone"),
    projectLocation: getField(formData, "projectLocation"),
    projectStage: getField(formData, "projectStage"),
    equipmentCategory: getField(formData, "equipmentCategory"),
    quantity: getField(formData, "quantity"),
    voltageLevel: getField(formData, "voltageLevel"),
    certificationRequirement: getField(
      formData,
      "certificationRequirement",
    ),
    targetDeliveryDate: getField(formData, "targetDeliveryDate"),
    projectDetails: getField(formData, "projectDetails"),
    consent: getField(formData, "consent"),
    gotcha: getField(formData, "_gotcha"),
    locale: getField(formData, "locale"),
  };
}

async function notifyFormspree(endpoint: string, input: RfqInput) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _subject: `New iSparkYou RFQ: ${input.companyName}`,
      _replyto: input.businessEmail,
      company: input.companyName,
      contact: input.contactName,
      email: input.businessEmail,
      phone: input.phone,
      project_location: input.projectLocation,
      project_stage: input.projectStage,
      equipment_category: input.equipmentCategory,
      quantity: input.quantity,
      voltage_level: input.voltageLevel,
      certification_requirement: input.certificationRequirement,
      target_delivery_date: input.targetDeliveryDate,
      project_details: input.projectDetails,
      language: input.locale === "zh" ? "Chinese" : "English",
    }),
  });

  if (!response.ok) {
    throw new Error("Formspree notification failed.");
  }
}

export async function submitRfq(
  _previousState: RfqActionState,
  formData: FormData,
): Promise<RfqActionState> {
  const result = rfqSchema.safeParse(getInput(formData));

  if (!result.success) {
    const locale = getField(formData, "locale") === "zh" ? "zh" : "en";
    return {
      status: "error",
      message:
        locale === "zh"
          ? "请检查标记的字段后重新提交。"
          : "Please review the highlighted fields and submit the RFQ again.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const input = result.data;
  const chinese = input.locale === "zh";

  if (isRateLimited(input.businessEmail.toLowerCase())) {
    return {
      status: "error",
      message: chinese
        ? "此邮箱已提交多次请求，请等待15分钟后再试。"
        : "We have received several requests from this email address. Please wait 15 minutes before submitting another RFQ.",
    };
  }

  if (getRfqMode() === "demo") {
    return {
      status: "success",
      message: chinese
        ? "演示询价已接收。本次预览不会发送邮件或保存数据。"
        : "Demo RFQ received. This preview did not send email or save data.",
    };
  }

  try {
    const { formspreeEndpoint } = getLiveRfqConfig();
    await notifyFormspree(formspreeEndpoint, input);

    return {
      status: "success",
      message: chinese
        ? "您的询价已接收。我们将审查项目资料并尽快回复。"
        : "Your RFQ has been received. We will review the project details and follow up shortly.",
    };
  } catch {
    return {
      status: "error",
      message: chinese
        ? "暂时无法发送询价，请发送邮件至 rfq@isparkyou.ca 或稍后重试。"
        : "We could not send your RFQ. Please email rfq@isparkyou.ca or try again shortly.",
    };
  }
}
