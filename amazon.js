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

    cars = headings_array.map(car => ({
      Name: car.querySelector('h2').textContent,
      place: car.querySelector(".ads__unit__content__details").textContent,
      year: car.querySelector(".ads__unit__content__keys div").textContent,
      km: car.querySelector(".ads__unit__content__keys div").nextElementSibling.textContent,
      price: car.querySelector(".ads__unit__content__keys div").nextElementSibling.nextElementSibling.textContent,
      owner: car.querySelector(".ads__unit__content__list").textContent,
      mics: car.querySelector(".ads__unit__content__list").nextElementSibling ? car.querySelector(".ads__unit__content__list").nextElementSibling.textContent : "Undefined",
    }))


    return cars;
  });
  console.log(headings);
  await browser.close();
})();
