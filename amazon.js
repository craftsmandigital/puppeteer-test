// finner ting på finn og syntaks er tatt i fra nettsiden under.
// https://oxylabs.io/blog/puppeteer-tutorial?utm_source=pocket_reader

const puppeteer = require("puppeteer");


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.finn.no/car/used/search.html?make=0.808&sort=PUBLISHED_DESC");

  headings = await page.evaluate(() => {
    headings_elements = document.querySelectorAll(".ads__unit > .ads__unit__content");
    headings_array = Array.from(headings_elements);
    return headings_array.map(heading => heading.textContent);
  });
  console.log(headings);
  await browser.close();
})();
