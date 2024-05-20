import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('tester11');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Tester12*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('');
  await expect(page.locator('form')).toContainText('First Name is required');
  await expect(page.locator('form')).toContainText('Last Name is required');
});