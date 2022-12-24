// finner ting på finn og syntaks er tatt i fra nettsiden under.
// https://oxylabs.io/blog/puppeteer-tutorial?utm_source=pocket_reader

const puppeteer = require("puppeteer");


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.finn.no/car/used/search.html?model=1.808.8395&sort=PUBLISHED_DESC");

  const nextButtonSelector = ".icon.icon--chevron-right"

  try {

    while (await page.$(nextButtonSelector)) {
      // await page.waitForTimeout(2000);
      await page.click(nextButtonSelector);
      console.log("in the loop");
    }

  } catch (error) {
    console.error(error);
    console.log("Mysterious error ???")
  }

  console.log("finished");
  // console.log(headings);
  // await browser.close();
})();
