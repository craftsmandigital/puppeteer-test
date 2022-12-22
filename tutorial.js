// https://oxylabs.io/blog/puppeteer-tutorial
const puppeteer = require("puppeteer");
(async () => {
  let url = "https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation&property_type_id%5B%5D=8";
  const browser = await puppeteer.launch(url);
  const page = await browser.newPage();
  await page.goto(url);


  headings = await page.evaluate(() => {
    // headings_elements = document.querySelectorAll("._x6q4xl h3");
    headings_elements = document.querySelectorAll("div.g1qv1ctd");
    headings_array = Array.from(headings_elements);
    return headings_array.map(heading => heading.textContent);
  });
  console.log(headings);



  await browser.close();
})();
