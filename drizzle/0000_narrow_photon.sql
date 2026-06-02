CREATE TABLE "rfq_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_name" text NOT NULL,
	"contact_name" text NOT NULL,
	"business_email" text NOT NULL,
	"phone" text,
	"project_location" text NOT NULL,
	"project_stage" text NOT NULL,
	"equipment_category" text NOT NULL,
	"quantity" integer NOT NULL,
	"voltage_level" text NOT NULL,
	"certification_requirement" text NOT NULL,
	"target_delivery_date" date NOT NULL,
	"project_details" text NOT NULL,
	"status" text DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
