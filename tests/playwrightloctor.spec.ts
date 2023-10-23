import { test, expect, chromium, firefox } from '@playwright/test';

test.describe('Locator test', () => {

   
    
    test('locator testing or practice ', async ({page}) => {

        await page.goto('https://playwright.dev/'),
            
            await page.locator('xpath=//a[text()="Get started"]').click();

    

    });  

});  