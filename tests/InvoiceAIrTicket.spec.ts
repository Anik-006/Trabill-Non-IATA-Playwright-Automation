import { test, expect } from '@playwright/test';

test('Invoice Air Ticket', async ({page}) =>{
    await page.goto('https://www.trabill.biz/');
    //await expect(page.locator('h1')).toHaveText('Invoice Air Ticket');
})
test('User can click AIr ticket Invoice', async ({page}) =>{
    await page.goto('https://www.trabill.biz/');
    await page.getByText('Invoice (Air Ticket)').click();
    await page.getByRole('link', { name: 'New Invoice (Air Ticket)' }).click();
})