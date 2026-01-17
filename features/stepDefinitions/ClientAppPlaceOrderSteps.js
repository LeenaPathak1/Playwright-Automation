const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const { beforeEach } = require('node:test');
const {POManager} = require('../../pageobjects/POManager');
const {Given, When, Then} = require('@cucumber/cucumber');
const {Hooks} = require('../support/Hooks');


         Given('Navigate to url and login with valid {string} and {string}', {timeout: 200 * 1000}, async function (username, password) {
            const clientAppLoginPage = this.poManager.getClientAppLoginPage();
            await clientAppLoginPage.navigateToClientAppLoginPage(process.env.BASE_URL);
            await clientAppLoginPage.loginToClientApp(username, password);
         });

   

         When('I add a specific {string} to my cart', {timeout: 100 * 1000},async function (productname) {
            this.clientAppDashboardPage = this.poManager.getClientAppDashboardPage();
            await this.clientAppDashboardPage.addProductToCart(productname);
            await this.clientAppDashboardPage.clickOnCartButton();
            this.clientAppCartPage = this.poManager.getClientAppCartPage();
            expect(await this.clientAppCartPage.verifyProductInCart(productname)).toBeTruthy();
          
         });

   

         When('I proceed to place an order', {timeout: 60 * 1000},async function () {
            await this.clientAppCartPage.clickOnCheckoutButton();
            this.clientAppPlaceOrderPage = this.poManager.getClientAppPlaceOrderPage();
            await this.clientAppPlaceOrderPage.enterCountry('India');
            await this.clientAppPlaceOrderPage.placeOrder();
         });

 

         Then('I should see a confirmation message with an order ID', async function () {
            this.clientAppOrderConfirmationPage = this.poManager.getClientAppOrderConfirmationPage();
            await this.clientAppOrderConfirmationPage.waitForOrderId();
            const orderId = await this.clientAppOrderConfirmationPage.getOrderId();
            console.log(orderId);
            expect(orderId.length).toBeGreaterThan(0);
         });