import { test, expect } from '@playwright/test';
import { loginToSwagLabs } from '../../utils/login'; 
import { logoutFromSwagLabs } from '../../utils/logout'; //call the utils/logout

test('Logout feature @tc3', async ({ page }) =>{

    await loginToSwagLabs(page,'problem_user','secret_sauce');

    const header = page.getByText('Products');
    await expect(header).toBeVisible();

    await logoutFromSwagLabs(page);
});