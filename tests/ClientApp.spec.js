const {test, expect} = require('@playwright/test');
const { beforeEach } = require('node:test');
const {POManager} = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/ClientAppLoginTestData.json')));

let clientAppCartPage;
let clientAppPlaceOrderPage;
let clientAppOrderConfirmationPage; 
let clientAppDashboardPage;

test.beforeEach(async({page}) => {
    const poManager = new POManager(page);
    const clientAppLoginPage = poManager.getClientAppLoginPage();
    clientAppCartPage = poManager.getClientAppCartPage();
    clientAppDashboardPage = poManager.getClientAppDashboardPage();
    clientAppPlaceOrderPage = poManager.getClientAppPlaceOrderPage();
    clientAppOrderConfirmationPage = poManager.getClientAppOrderConfirmationPage(); 
    await clientAppLoginPage.navigateToClientAppLoginPage(dataSet.url);
    await clientAppLoginPage.loginToClientApp(dataSet.userEmail, dataSet.userPassword);

});

test('@Smoke Client App test', async({page}) => {
    
    await clientAppDashboardPage.addProductToCart('ZARA COAT 3');
    await clientAppDashboardPage.clickOnCartButton();
    expect(await clientAppCartPage.verifyProductInCart('ZARA COAT 3')).toBeTruthy();
    await clientAppCartPage.clickOnCheckoutButton();
    await clientAppPlaceOrderPage.enterCountry('India');
    await clientAppPlaceOrderPage.placeOrder();
    await clientAppOrderConfirmationPage.waitForOrderId();
    const orderId = await clientAppOrderConfirmationPage.getOrderId();
    console.log(orderId);
    expect(orderId.length).toBeGreaterThan(0);
});