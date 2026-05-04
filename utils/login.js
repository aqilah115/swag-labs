//utils/login.js

export async function loginToSwagLabs(page,username,password){
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);

    await page.click('#login-button');
}

//module.exports = {loginToSwagLabs};