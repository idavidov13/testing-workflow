import { Page } from "@playwright/test";

export async function login(page: Page, username: string, password: string) {
  await page.goto("https://news.ycombinator.com/");
  await page.getByRole("link", { name: "login" }).click();
  await page
    .locator("form")
    .filter({ hasText: "username:password: login" })
    .locator('input[name="acct"]')
    .fill(username);
  await page
    .locator("form")
    .filter({ hasText: "username:password: login" })
    .locator('input[name="pw"]')
    .fill(password);
  await page.getByRole("button", { name: "login" }).click();
}
