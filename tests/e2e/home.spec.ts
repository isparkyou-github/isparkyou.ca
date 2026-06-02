import { expect, test } from "@playwright/test";

test("shows the approved homepage content", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Electrical Equipment Sourcing, Backed by Engineering Review.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Submit an RFQ" }).first()).toBeVisible();
  await expect(page.getByText("Senye Zhang, Founder")).toBeVisible();
  await expect(page.getByText("iSparkYou Global Solutions Inc.")).toHaveCount(0);
});

test("submits an RFQ in local demo mode", async ({ page }) => {
  await page.goto("/#rfq");

  await page.getByLabel("Company name *").fill("North Test Controls");
  await page.getByLabel("Contact name *").fill("Alex Example");
  await page.getByLabel("Business email *").fill("alex@example.com");
  await page.getByLabel("Project location *").fill("Toronto, Ontario");
  await page.getByLabel("Project stage *").selectOption("Budget");
  await page.getByLabel("Equipment category *").selectOption("PLC control enclosure");
  await page.getByLabel("Quantity *").fill("2");
  await page.getByLabel("Voltage level *").fill("600 VAC / 24 VDC control");
  await page.getByLabel("Certification requirement *").selectOption("CSA / cUL / cETL");
  await page.getByLabel("Target delivery date *").fill("2027-01-15");
  await page
    .getByLabel("Project details *")
    .fill("Two PLC control enclosures for an industrial retrofit project.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Submit RFQ" }).click();

  await expect(page.getByText(/Demo RFQ received/)).toBeVisible();
});
