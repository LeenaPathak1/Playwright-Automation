const {Before,After, BeforeAll, AfterAll, BeforeStep, AfterStep,Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test'); 
const {POManager} = require('../../pageobjects/POManager');
const dotenv = require('dotenv');
const path = require('path');


const testenv = process.env.ENV || 'staging';
const browser= process.env.BROWSER || 'chrome';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${testenv}`) });

Before( {tags: "@Regression"},async function(){
    
    if(browser === 'chrome'){
     const browser = await playwright.chromium.launch({ headless: false });
     const context = await browser.newContext();
     this.page = await context.newPage();
     this.poManager = new POManager(this.page);
    }
});

After( async function(){
    console.log('Test execution completed. Closing browser.');
});

BeforeStep(async function (scenario) {
    console.log(`Starting step: ${scenario.pickle.name}`);
});

AfterStep(async function ({result} ) {
    await this.page.screenshot({ path: `screenshots/${Date.now()}.png`, fullPage: true });
    if (result.status === Status.FAILED) {
        console.log(`Step failed. Screenshot taken.`);
    } else {
        console.log(`Step passed. Screenshot taken.`);
    }
});

