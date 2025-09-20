
const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');

class POManager {

constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
}

getLoginPage() {
        return this.loginPage;
}

getHomePage() {
        return this.homePage;
}       


}

module.exports = { POManager };