import { test, expect } from '@playwright/test';
import { loginToSwagLabs } from '../../utils/login'; //call the utils/login

test('Login feature @tc2', async ({ page }) =>{

    await loginToSwagLabs(page,'problem_user','secret_sauce');

    const header = page.getByText('Products');
    await expect(header).toBeVisible();
});



