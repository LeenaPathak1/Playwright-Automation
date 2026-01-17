const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/loginTestData.json')));

test.describe.configure({mode: 'parallel'});

test('@Regression Login to automation practice website', async({page}) =>
{
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   const homePage = poManager.getHomePage();
   await loginPage.gotoLoginPage(dataSet.url);
   await loginPage.validLogin(dataSet.username, dataSet.password);
   await homePage.verifyLoggedInMessage('Logged in as Auto Practice');
}
);

test('child window test', async({browser}) =>
{
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 
   const [allPages] = await Promise.all(
      [
         context.waitForEvent('page'),
         page.locator('.blinkingText').click(),

      ]
   );
   const text = await allPages.locator('.red').textContent();
   console.log(text);
   const arr = text.split('@');
   const domain = arr[1].split(' ')[0];
   console.log(domain);

}
);