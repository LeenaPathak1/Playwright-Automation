class LoginPage{

constructor(page){
    this.page = page;
    this.username = page.locator("input[data-qa='login-email']");
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', {name: 'Login'});
}

async gotoLoginPage(url) {
    await this.page.goto(url);
}

async validLogin(username, password){

    await this.username.fill(username);
    await this.password.fill(password);  
    await this.loginButton.click();
}
}

module.exports = { LoginPage };
