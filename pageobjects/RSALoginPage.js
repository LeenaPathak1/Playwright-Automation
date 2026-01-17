class RSALoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.signInButton = '#signInBtn';
    this.dashboardButton = '.btn.btn-info';
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInButton);
  }

  async isDashboardVisible() {
    await this.page.waitForSelector(this.dashboardButton);
    return await this.page.isVisible(this.dashboardButton);
  }
}

module.exports = { RSALoginPage };
