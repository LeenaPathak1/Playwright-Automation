const {test, expect} = require('@playwright/test');
import { request } from '@playwright/test';


test('API Test', async () => {
  const apiContext = await request.newContext();
  const payload = {
    userEmail: 'playwright.test@yopmail.com',
    userPassword: 'Learning2025'
  };

    
  // Make a GET request to the API endpoint
  const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
          data: payload
          ,
      headers: {
        'Content-Type': 'application/json'
      }
        }
      )
  
  
  // Check if the response status is OK
  expect(response.ok()).toBeTruthy();
  
  // Parse the JSON response
  const parsedresponse = await response.json();
  
  // Validate the response content
  console.log(parsedresponse.token);
  
});
