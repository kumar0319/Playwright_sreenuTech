import { test, expect } from "@playwright/test";

test.describe("This to Automate the HRM login use cases", () => {
    test("To verify the login functionality with valid details ", async ({
        page,
    }) => {
        // test.slow();

        await page.goto(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"),
            await page.waitForTimeout(5000);
            expect.soft(await page.getByAltText('company-branding')).toBeVisible();
        
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Username').fill('Admin')

        await page.getByPlaceholder('Password').clear();
        await page.getByPlaceholder('Password').fill('admin123')


        await page.getByRole('button', { name: ' Login ' }).click();

        await page.pause();

        // http://zero.webappsecurity.com/login.html?login_error=true
        let name = await page.locator(".alert-error")
            

        // expect(name).toBe("Jacqueline Wagner");
    });
});
