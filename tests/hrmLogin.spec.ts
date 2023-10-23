import { test, expect, chromium, firefox } from '@playwright/test';

test.describe('This to Automate the HRM login use cases', () => {

   
    
    test('To verify the login functionality with valid details ', async ({page}) => {

        // test.slow();
        await page.pause()

        await page.goto('https://kumar019-trials710.orangehrmlive.com/auth/seamlessLogin'),
            
            await page.locator("id=txtUsername").fill('admin')
        
        // //div[@id='txtUsername']
           await page.locator("id=txtPassword").fill('nlDVrC@73S')
        await page.locator("//button[@type='submit']").click();
       let name= await page.locator("//div[@id='sidebar-profile-picture']/a").textContent();

        expect(name).toBe('Jacqueline Wagner2222')

    });  

});  