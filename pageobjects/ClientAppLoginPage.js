const {PageUtils} = require('../utils/PageUtils');
class ClientAppLoginPage{

    constructor(page){
        this.page = page;
        this.clientAppLoginPage = new PageUtils(page);
    }

    getUserEmailLocator() {
        return this.page.locator('#userEmail');
    }
    getUserPasswordLocator() {
        return this.page.locator('#userPassword');
    }   
    getLoginButtonLocator() {
        return this.page.locator('#login');
    }

    async navigateToClientAppLoginPage(url) {
          await this.clientAppLoginPage.navigateToURL(url);
    }

    async loginToClientApp(userEmail, userPassword){
        await this.clientAppLoginPage.fillInput(this.getUserEmailLocator(), userEmail);
        await this.clientAppLoginPage.fillInput(this.getUserPasswordLocator(), userPassword);
        await this.clientAppLoginPage.clickElement(this.getLoginButtonLocator());
        await this.clientAppLoginPage.waitForPageLoad();
    }
}

module.exports = { ClientAppLoginPage };
