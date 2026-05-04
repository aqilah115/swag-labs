import {expect} from '@playwright/test';
export async function logoutFromSwagLabs(page){

//click burger menu
await page.click('#react-burger-menu-btn');

await page.locator('#logout_sidebar_link').click();

await expect(page).toHaveURL('https://www.saucedemo.com/');
}