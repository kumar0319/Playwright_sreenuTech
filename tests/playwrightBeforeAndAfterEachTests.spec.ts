import { test, expect, chromium, firefox, Page } from '@playwright/test';
let page1: Page;

test.describe('AfterEach This is to test playwright website module list', () => {

    test.beforeEach(async ({ page }, testInfo) => {

        page1 = page;
        console.log(`Running ${testInfo.title}`);
        await page1.goto('https://playwright.dev/');
      });

    
    test('In doc mudule -- Test the docs link with browser context', async () => {

       
        console.log(await page1)
        await page1.pause();

    

    });  


    test('In doc mudule -- Test the docs link', async () => {
      
        await page1.goto("https://playwright.dev/docs/api/class-test#test-before-each-1")
        
        await page1.pause();
    

    }); 


    test.afterEach('Status check', async ({ page }, testInfo) => {
        console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
      
        if (testInfo.status !== testInfo.expectedStatus)
            await page1.pause();
      });

   
});
    
