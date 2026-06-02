"use server";

import { createDatabase } from "@/db";
import { rfqSubmissions } from "@/db/schema";
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
  };
}

function getExpiryDate() {
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + 24);
  return expiresAt;
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
    return {
      status: "error",
      message: "Please review the highlighted fields and submit the RFQ again.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const input = result.data;

  if (isRateLimited(input.businessEmail.toLowerCase())) {
    return {
      status: "error",
      message:
        "We have received several requests from this email address. Please wait 15 minutes before submitting another RFQ.",
    };
  }

  if (getRfqMode() === "demo") {
    return {
      status: "success",
      message:
        "Demo RFQ received. This local preview did not send email or save data.",
    };
  }

  try {
    const { databaseUrl, formspreeEndpoint } = getLiveRfqConfig();
    const database = createDatabase(databaseUrl);

    await database.insert(rfqSubmissions).values({
      companyName: input.companyName,
      contactName: input.contactName,
      businessEmail: input.businessEmail,
      phone: input.phone || null,
      projectLocation: input.projectLocation,
      projectStage: input.projectStage,
      equipmentCategory: input.equipmentCategory,
      quantity: input.quantity,
      voltageLevel: input.voltageLevel,
      certificationRequirement: input.certificationRequirement,
      targetDeliveryDate: input.targetDeliveryDate,
      projectDetails: input.projectDetails,
      expiresAt: getExpiryDate(),
    });

    try {
      await notifyFormspree(formspreeEndpoint, input);
    } catch {
      return {
        status: "success",
        message:
          "Your RFQ has been received. Our email notification is delayed, but your request is recorded for follow-up.",
      };
    }

    return {
      status: "success",
      message:
        "Your RFQ has been received. We will review the project details and follow up shortly.",
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not record your RFQ. Please email rfq@isparkyou.ca or try again shortly.",
    };
  }
}
