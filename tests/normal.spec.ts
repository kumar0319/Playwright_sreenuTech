import { test } from "@playwright/test";
const { chromium } = require('playwright');
const v8toIstanbul = require('v8-to-istanbul');
test.describe("This toss Automate the HRM login use cases", () => {
    test("To verify thess login functionality with valid details ", async ({browser}) => {

        
        (async () => {
          const browser = await chromium.launch();
          const page = await browser.newPage();
          await page.coverage.startJSCoverage();
          await page.goto('https://chromium.org');
          const coverage = await page.coverage.stopJSCoverage();
          for (const entry of coverage) {
            const converter = v8toIstanbul('', 0, { source: entry.source });
            await converter.load();
            converter.applyCoverage(entry.functions);
            console.log(JSON.stringify(converter.toIstanbul()));
          }
          await browser.close();
        })();



});

});