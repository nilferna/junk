const { test, expect, PlaywrightTestConfig } = require('@playwright/test');
import  {E} from './utils/selectorWorking';
test.setTimeout(65000)


test('basic test', async ({ page }) => { 
await page.goto(E.olybeteu.accessUrl, {
    
    // waitUntil: "networkidle"
  });
  // await page.waitForLoadState('networkidle');
  await page.setViewportSize({ width: 1920, height: 2080 });
  await page.locator(E.olybeteu.declineNotifications).click();
  await page.waitForTimeout(1000);
  await page.locator(E.olybeteu.loginButtonHeader).click();
  await page.waitForTimeout(1000);
  await page.waitForLoadState('networkidle');
  await page.locator(E.olybeteu.loginInput).fill(E.olybeteu.login);
  await page.locator(E.olybeteu.passwordInput).fill(E.olybeteu.password);
  await page.locator(E.olybeteu.loginButton).click();
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(500, 0);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(500, 0);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(500, 0);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: './screenshots/olybeteu/' + (E.getTimestamp)+'.png' , fullPage: true });
  

});
