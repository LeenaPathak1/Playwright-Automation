const { test, expect } = require('@playwright/test');
const { RSALoginPage } = require('../pageobjects/RSALoginPage');

test('Login with valid credentials using RSALoginPage', async ({ page }) => {
  const loginPage = new RSALoginPage(page);
  await loginPage.goto();
  await loginPage.login('rahulshettyacademy', 'learning');

  // Wait for dashboard button (example of successful login)
  const dashboardVisible = await loginPage.isDashboardVisible();
  expect(dashboardVisible).toBeTruthy();
});
