import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('Prueba1');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('juan');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('arias');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('12345P*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('12345P*');
  await page.getByRole('button', { name: 'Register' }).click();
});