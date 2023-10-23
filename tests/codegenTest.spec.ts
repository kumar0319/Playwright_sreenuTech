import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://sreenutech.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('kumar');
  await page.getByLabel('Name *').press('Tab');

  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByText('Quick Contact Us').first().click();
    await page.getByLabel('Email *').click();
    await page.fill('','3434')
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('ku');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('go@gmail.com');
  await page.locator('input[name="phone2"]').click();
  await page.locator('input[name="phone2"]').fill('12321312312');
  await page.locator('#message').click();
  await page.locator('#message').fill('123123');
  await page.getByLabel('Submit').click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('ku1231231232');
  await page.getByLabel('Submit').click();
  await page.getByLabel('Name *').click({
    clickCount: 3
  });
  await page.getByLabel('Name *').fill('33');
  await page.getByText('Hi ku1231231232, your message has been sent. Thank you!').click();
  await page.getByText('Hi ku1231231232, your message has been sent. Thank you!').click();
});