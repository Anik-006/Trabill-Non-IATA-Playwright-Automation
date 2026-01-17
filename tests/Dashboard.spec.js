import {test, expect} from '@playwright/test';

test('user can successfully redirect to dashboard', async ({page}) => {
  await page.goto('https://www.trabill.biz/');
  await expect(page).toHaveURL('https://www.trabill.biz/');
});

test('User can successfully click textbox field ', async ({page}) => {
  await page.goto('https://www.trabill.biz/');
  const DsbrdTxtBx =page.getByRole('textbox', {name : 'Write Text And Press Enter..'});
  await DsbrdTxtBx.click();
  await DsbrdTxtBx.fill("ANC-0274");
  await page.keyboard.press('Enter');

});

test('user can successfully click textbox filed and can search with cliet name', async ({page}) => {
  await page.goto('https://www.trabill.biz/');
  const DsbrdTxtBx =page.getByRole('textbox', {name : 'Write Text And Press Enter..'});
  await DsbrdTxtBx.click();
  await DsbrdTxtBx.fill("Add");
  await page.keyboard.press('Enter'); 
});
