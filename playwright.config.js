// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config = ({
  testDir: './tests',
  retries: 0,
  timeout: 30*1000,
  workers: 1,
  expect: {
    timeout: 30*1000
  },
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
  name:'chrome' ,  
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
 
  },
},
{
  name:'firefox' ,  
  use: {
    browserName: 'firefox',
    headless: false,
    screenshot: 'on',
    trace: 'on',
 
  },
}

  ]
  
});
module.exports = config;

