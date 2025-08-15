import { test, expect } from '@playwright/test';

test('Add and remove a single item to the cart from the products page', async ({ page }) => {

  //Login
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //Add Backpack to cart from products page
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  //Remove Backpack from cart and cofirm action button set back to "Add to Cart"
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
});