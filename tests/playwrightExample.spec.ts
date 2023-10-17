import { test, expect, chromium, firefox } from '@playwright/test';

test.describe('This is to test playwright website module list', () => {
    
    test('In doc mudule -- Test the docs link with browser context', async () => {

        let browser = await chromium.launch();

        let context = await browser.newContext();

        let page = await context.newPage()

        await page.goto("https://playwright.dev/")
        
        await page.pause();

    

    });  


    test.only('In doc mudule -- Test the docs link', async ({ page}) => {
      
        await page.goto("https://playwright.dev/")
        
        // await page.pause();

    

    }); 
   
});
    
