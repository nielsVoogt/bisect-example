import { test, expect } from "@playwright/test";

test("submitting the form shows the success message", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Type something here...").fill("hello");
  await page.getByRole("button", { name: "Do magic" }).click();

  await expect(page.getByText("Congrats!")).toBeVisible();
});
