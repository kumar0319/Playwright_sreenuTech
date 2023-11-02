import { test, expect } from "@playwright/test";

test.describe("This to Automate the HRM login use cases", () => {
    test("To verify the login functionality with valid details @r1223", async ({browser}) => {
 
        const context = await browser.newContext();
        // await context.tracing.start({ screenshots: true, snapshots: true });
        const page = await context.newPage();

        console.log()

        await page.goto(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"),
            await page.waitForTimeout(5000);
            expect.soft(await page.getByAltText('company-branding')).toBeVisible();
        
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Username').fill('Admin')

        await page.getByPlaceholder('Password').clear();
        await page.getByPlaceholder('Password').fill('admin123')


        await page.getByRole('button', { name: ' Login ' }).click();
        
        // await context.tracing.stop({ path: 'traceHRM.zip' });

    });
});
