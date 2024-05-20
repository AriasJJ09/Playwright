import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByText('Votes').click();
  await page.getByRole('link', { name: 'Lamborghini HURACÁN' }).click();
  await expect(page.locator('my-model')).toContainText('You need to be logged in to vote.');
});