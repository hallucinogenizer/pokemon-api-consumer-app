import { test, expect } from "@playwright/test";

test("has loading card and page title", async ({ page }) => {
  await page.goto("/");

  expect(await page.getByTestId("loading-card").count()).toBeGreaterThan(1);

  await expect(
    page.getByRole("heading", { name: /List of Pokemons/ })
  ).toBeVisible({ timeout: 100000 });
});

test("pokemon details page", async ({ page }) => {
  test.slow();
  await page.goto("/pokemon/1");

  // await expect(page.getByText("Loading...")).toBeVisible();

  await expect(page.getByRole("heading", { name: "bulbasaur" })).toBeVisible({
    timeout: 50000,
  });
  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByText("Species")).toBeVisible();
});
