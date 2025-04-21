import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Loading...")).toBeVisible();

  await expect(
    page.getByRole("heading", { name: /List of Pokemons/ })
  ).toBeVisible({ timeout: 100000 });
});
