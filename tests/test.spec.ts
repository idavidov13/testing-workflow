import { test } from "@playwright/test";
import { login } from "../util/login";

const title = process.env.TITLE!;

const username = process.env.USERNAME || "testuser";
const password = process.env.PASSWORD || "TestPass123!";

test("vote", async ({ page }) => {
  await login(page, username, password);
  await page.getByRole("link", { name: "new", exact: true }).click();
  await page
    .getByRole("link", { name: title })
    .locator("..")
    .locator("..")
    .locator("..")
    .locator(".votelinks")
    .click();
});
