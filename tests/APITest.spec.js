const {test, expect} = require('@playwright/test');
import { request } from '@playwright/test';


test('API Test', async () => {
  const apiContext = await request.newContext();
  const payload = {
    email: 'autopractice2025@yopmail.com',
    password: 'home_study2025'
  };

    
  // Make a GET request to the API endpoint
  const response = await apiContext.post('https://automationexercise.com/api/verifyLogin',
        {
          data: payload
          ,
      headers: {
        'Content-Type': 'application/json'
      }
        }
      )
  
  
  // Check if the response status is OK
  expect(response.status()).toBe(200);
  
  // Parse the JSON response
  const parsedresponse = await response.json();
  
  // Validate the response content
  console.log(parsedresponse.message);
  
});
