const { test, expect, PlaywrightTestConfig } = require('@playwright/test');
import  {E} from './utils/selectorWorking';
test.setTimeout(65000)


test('basic test', async ({ page }) => { 
await page.goto(E.interdan.accessUrl, {
    
    // waitUntil: "networkidle"
  });
await page.setViewportSize({ width: 1920, height: 2080 });
await page.locator(E.interdan.cookieAccept).click();
await page.waitForLoadState('networkidle');
await page.locator(E.interdan.filter).click();



  await page.waitForLoadState('networkidle');
 



});
