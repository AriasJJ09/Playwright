import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('tester11');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Tester12*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByRole('link', { name: 'Lamborghini Murciélago' }).click();
  await page.getByLabel('Your Comment (optional)').click();
  await page.getByLabel('Your Comment (optional)').fill('que buen coche ');
  await page.getByRole('button', { name: 'Vote!' }).click();
  await expect(page.locator('tbody')).toContainText('que buen coche');
});