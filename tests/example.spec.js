// @ts-check
import { test, expect } from '@playwright/test';

test('Practice 1', async ({ page }) => {
  await page.goto('https://herokuapp.com');

  //Fill in username (use label)
  await page.getByLabel('Username').fill('Aqilah');

  //Fill in password
  await page.getByLabel('Password'). fill('Secretpassword1234');

  //Click login button (using role)
  await page.getByRole('button', {name: 'Login'}).click();

  //Assert: check if we logged in by looking for the green alert
  const successAlert = page.locator('#flash'); //using id selector her
  await expect(successAlert).toContainText('You logged into a secure area!');
});

