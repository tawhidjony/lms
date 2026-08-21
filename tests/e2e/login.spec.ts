import { expect, test } from "@playwright/test";

test.describe("Login page", () => {
  test("loads and redirects creator after submit", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Copia LMS")).toBeVisible();

    const email = page.getByRole("textbox", { name: /メールアドレス/ });
    const password = page.getByLabel(/パスワード/);
    const role = page.getByLabel("ロール");

    await email.click();
    await email.pressSequentially("creator@example.com");
    await password.fill("password123");
    await role.selectOption("creator");

    await page.getByRole("button", { name: "ログイン" }).click();
    await expect(page).toHaveURL("/creator");
  });
});
