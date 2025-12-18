
const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const {ClientAppLoginPage} = require('./ClientAppLoginPage');
const {ClientAppDashboardPage} = require('./ClientAppDashboardPage');
const {ClientAppPlaceOrderPage} = require('./ClientAppPlaceOrderPage');
const {ClientAppOrderConfirmationPage} = require('./ClientAppOrderConfirmationPage');
const {ClientAppCartPage} = require('./ClientAppCartPage');


class POManager {

constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.clientAppLoginPage = new ClientAppLoginPage(page);
        this.clientAppCartPage = new ClientAppCartPage(page);
        this.clientAppDashboardPage = new ClientAppDashboardPage(page);
        this.clientAppPlaceOrderPage = new ClientAppPlaceOrderPage(page);
        this.clientAppOrderConfirmationPage = new ClientAppOrderConfirmationPage(page); 
}

getLoginPage() {
        return this.loginPage;
}

getHomePage() {
        return this.homePage;
}       

getClientAppLoginPage() {
        return this.clientAppLoginPage;
}

getClientAppDashboardPage() {
        return this.clientAppDashboardPage;
}

getClientAppPlaceOrderPage() {
        return this.clientAppPlaceOrderPage;
}

getClientAppOrderConfirmationPage() {
        return this.clientAppOrderConfirmationPage;
}

getClientAppCartPage() {
        return this.clientAppCartPage;
}

}

module.exports = { POManager };