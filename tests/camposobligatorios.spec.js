import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('prueba123');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('juan');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('arias');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('prueba12345');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('prueba12345');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('');
});