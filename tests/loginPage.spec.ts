import test, { expect } from "@playwright/test";

test.describe("Testing Jam-Board", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://jam.up.railway.app/login");
  });
  test("login page", async ({ page }) => {
    const title = page.getByText(/Login to Your Account/);
    await expect(title).toBeVisible();
  });

  test("should render login page", async ({ page }) => {
    const loginText = page.locator("h2", { hasText: "Login" });
    const username = page.getByText("Username");
    const password = page.getByText("Password");
    const loginBtn = page.getByRole("button", { name: "Login" });
  });

  test("should login with valid credentials", async ({ page }) => {
    const userInput = page.locator("#username");

    console.log("input", userInput);
    await userInput.fill("test0215");
    const passInput = page.locator("input#password");
    await passInput.fill("Hw@nhee18");
    //   const passInput = page.locator("input#password");
    //   await passInput.fill("djseo");
    //   await page.getByLabel("Username").fill("test0215");
    //   await page.getByLabel("Password").fill("Hw@nhee18");
    await page.getByRole("button", { name: "Login" }).click();

    // const logOutBtn = page.getByRole("button", { name: "Log Out" });
    // await expect(logOutBtn).toBeVisible();
    // await logOutBtn.click();
  });
});
