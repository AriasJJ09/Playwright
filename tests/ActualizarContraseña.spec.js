import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('tester11');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345Pp*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('Current Password').click();
  await page.getByLabel('Current Password').fill('12345Pp*');
  await page.getByLabel('New Pasword').click();
  await page.getByLabel('New Pasword').fill('Tester12*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Tester12*');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('form')).toContainText('The profile has been saved successful');
});