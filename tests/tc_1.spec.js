// @ts-check
import { test, expect } from '@playwright/test';

//Test 1: Negative scenario
test('Negative testing - Invalid username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //assert, check if the tittle of the new page contain words
  await expect(page).toHaveTitle(/Swag Labs/);
 
  //Fill in invalid username (use label)
  await page.getByPlaceholder('Username').fill('aqilah');

  //Fill in password
  await page.getByPlaceholder('Password'). fill('secret_sauce');

  //Click login button (using role)
  await page.getByRole('button', {name: 'Login'}).click();
  
  //Check the error 
  const errorContainer = page.locator('[data-test="error"]');
  await expect(errorContainer).toBeVisible();

});
//Test 2: Negative scenario - locked out user
test('Negative testing - locked out username', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  //Fill in username (use label)
  await page.getByPlaceholder('Username').fill('locked_out_user');

  //Fill in password
  await page.getByPlaceholder('Password'). fill('secret_sauce');

  //Click login button (using role)
  await page.getByRole('button', {name: 'Login'}).click();
  
  //Check the error 
  const errorContainer = page.locator('[data-test="error"]');
  await expect(errorContainer).toBeVisible();


});

//Test 3: Positive scenario
test('Positive testing - valid username', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  //Fill in username (use label)
  await page.getByPlaceholder('Username').fill('problem_user');

  //Fill in password
  await page.getByPlaceholder('Password'). fill('secret_sauce');

  //Click login button (using role)
  await page.getByRole('button', {name: 'Login'}).click();

  //Check if successfully landing to correct page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

  //to verify the header
  const header = page.getByText('Products');
  await expect(header).toBeVisible();

  await page.waitForTimeout(10000);

});

