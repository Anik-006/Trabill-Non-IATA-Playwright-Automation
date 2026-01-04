import {test,expect, chromium} from '@playwright/test';

export default async()=>{
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page = await context.newPage();

  await page.goto('https://www.trabill.biz/login');
  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('trabill');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('customer@');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page).toHaveURL('https://www.trabill.biz/');
  
   await context.storageState({ path: 'auth.json'});



   await browser.close();
}
