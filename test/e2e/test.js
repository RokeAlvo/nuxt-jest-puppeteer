const {beforeAll, describe, it} = require("@jest/globals")

const timeout = 5000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('localhost:3000');
    }, timeout);

    it('should load without error', async () => {
      const title = await page.title();
      expect(title).toBe('jest-puppeteer');
    });
    it('click to button and show h1', async () => {
      await Promise.all( [page.click('button'), page.waitForSelector('h1')])
      const h1 = await page.evaluate(() => {
        return document.querySelector('h1').innerText
      })
      expect(h1).toBe('jest-puppeteer');
    }, timeout);
  }
);
