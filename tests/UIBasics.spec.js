const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/loginTestData.json')));

test('Login to automation practice website', async({page}) =>
{
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   const homePage = poManager.getHomePage();
   await loginPage.gotoLoginPage(dataSet.url);
   await loginPage.validLogin(dataSet.username, dataSet.password);
   await homePage.verifyLoggedInMessage('Logged in as Auto Practice');
}
);