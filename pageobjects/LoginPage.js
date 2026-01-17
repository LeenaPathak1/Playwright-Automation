
const {PageUtils} = require('../utils/PageUtils');
class LoginPage{

constructor(page){
    this.page = page;
    this.loginPage = new PageUtils(page);

}

 getUsermameLocator() {
    return this.page.locator("input[data-qa='login-email']");
}

 getPasswordLocator() {
    return this.page.getByPlaceholder('Password');
}

 getLoginButtonLocator() {
    return this.page.getByRole('button', {name: 'Login'});
}

async gotoLoginPage(url) {
   await this.loginPage.navigateToURL(url);
}

async validLogin(username, password){
  
    await this.loginPage.fillInput( this.getUsermameLocator(), username);
    await this.loginPage.fillInput( this.getPasswordLocator(), password);
    await this.loginPage.clickElement( this.getLoginButtonLocator());
}
}

module.exports = { LoginPage };
