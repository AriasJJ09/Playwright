import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('tester11');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Tester12*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Lamborghini AVENTADOR' }).click();
  await page.getByRole('button', { name: 'Vote!' }).click();
  await expect(page.locator('my-model')).toContainText('Thank you for your vote!');
});