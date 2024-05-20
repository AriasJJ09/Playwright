import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').fill('tester11');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('12345Pp*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('First Name').dblclick();
  await page.getByLabel('First Name').fill('Jose');
  await page.getByLabel('Last Name').dblclick();
  await page.getByLabel('Last Name').fill('perez');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('carrera 31 #66-20');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('1234567892');
  await page.getByLabel('Hobby').selectOption('Movies');
  await page.getByRole('button', { name: 'Save' }).click();
});