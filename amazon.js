// https://github.com/michaelkitas/Nodejs-Puppeteer-Tutorial

const puppeteer = require('puppeteer');


(async () => {
  // Initiate the browser 
  const browser = await puppeteer.launch();

  // Create a new page with the default browser context 
  const page = await browser.newPage();

  // Go to the target website 
  await page.goto("https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A11036071%2Cp_36%3A1253503011&dc&fs=true&qid=1635596580&rnid=16225007011&ref=sr_pg_1");

  // await page.waitForSelector('[data-cel-widget="search_result_0"]');

  const productsHandles = await page.$$(
    "div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item"
  );


  for (const producthandle of productsHandles) {
    let title = "Null";
    let price = "Null";
    let img = "Null";


    try {
      title = await page.evaluate(
        (el) => el.querySelector("h2 > a > span").textContent,
        producthandle
      );
    } catch (error) { }
    console.log(title);
  }

  // Closes the browser and all of its pages 
  await browser.close();
})();



// var selected = document.querySelector('.outer').textContent;
// var selected = document.querySelector('.outer p').textContent;
// var selected = document.querySelector('.outer').querySelector("p");
