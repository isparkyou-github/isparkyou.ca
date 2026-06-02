import {
  date,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const rfqSubmissions = pgTable("rfq_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  businessEmail: text("business_email").notNull(),
  phone: text("phone"),
  projectLocation: text("project_location").notNull(),
  projectStage: text("project_stage").notNull(),
  equipmentCategory: text("equipment_category").notNull(),
  quantity: integer("quantity").notNull(),
  voltageLevel: text("voltage_level").notNull(),
  certificationRequirement: text("certification_requirement").notNull(),
  targetDeliveryDate: date("target_delivery_date").notNull(),
  projectDetails: text("project_details").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});
