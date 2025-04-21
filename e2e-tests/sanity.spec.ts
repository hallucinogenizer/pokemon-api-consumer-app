import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  expect(await page.getByTestId("loading-card").count()).toBeGreaterThan(1);

  await expect(
    page.getByRole("heading", { name: /List of Pokemons/ })
  ).toBeVisible({ timeout: 100000 });
});
