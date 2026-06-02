import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Must be ${max} characters or fewer.`)
    .optional()
    .or(z.literal(""));

export const rfqSchema = z.object({
  companyName: z.string().trim().min(2, "Enter your company name.").max(120),
  contactName: z.string().trim().min(2, "Enter your name.").max(120),
  businessEmail: z
    .string()
    .trim()
    .email("Enter a valid business email address.")
    .max(180),
  phone: optionalText(50),
  projectLocation: z
    .string()
    .trim()
    .min(2, "Enter the project location.")
    .max(160),
  projectStage: z.string().trim().min(1, "Select the project stage.").max(80),
  equipmentCategory: z
    .string()
    .trim()
    .min(1, "Select an equipment category.")
    .max(120),
  quantity: z.coerce
    .number()
    .int("Enter a whole number.")
    .positive("Enter a quantity greater than zero.")
    .max(100000),
  voltageLevel: z.string().trim().min(1, "Enter the voltage level.").max(80),
  certificationRequirement: z
    .string()
    .trim()
    .min(1, "Select a certification requirement.")
    .max(120),
  targetDeliveryDate: z.string().trim().min(1, "Select a target delivery date."),
  projectDetails: z
    .string()
    .trim()
    .min(20, "Add at least 20 characters of project detail.")
    .max(4000, "Project details must be 4,000 characters or fewer."),
  consent: z.literal("on", {
    message: "Confirm that we may use this information to respond to your RFQ.",
  }),
  gotcha: z.string().max(0, "Automated submission detected."),
});

export type RfqInput = z.infer<typeof rfqSchema>;
