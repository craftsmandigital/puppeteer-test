
const puppeteer = require('puppeteer');

(async () => {
  // Set up Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the web page
  await page.goto("https://www.finn.no/car/used/search.html?make=0.7147&sort=PUBLISHED_DESC");

  // Wait for the page to load and the car elements to be displayed
  await page.waitForSelector('.ads__unit__content');

  // Extract the information for each car
  const cars = await page.evaluate(() => {
    // Find all the car elements on the page
    const carElements = document.querySelectorAll('.ads__unit__content');
    // Extract the information for each car element
    return Array.from(carElements).map((carElement) => {
      return {
        // Name: carElement.querySelector('h2').textContent,
        // place: car.querySelector(".ads__unit__content__details").textContent,
        // year: car.querySelector(".ads__unit__content__keys div").textContent,
        // km: car.querySelector(".ads__unit__content__keys div").nextElementSibling.textContent,
        // price: car.querySelector(".ads__unit__content__keys div").nextElementSibling.nextElementSibling.textContent,
        // owner: car.querySelector(".ads__unit__content__list").textContent,
        // mics: car.querySelector(".ads__unit__content__list").nextElementSibling ? car.querySelector(".ads__unit__content__list").nextElementSibling.textContent : "Undefined",
        title: carElement.querySelector('h2').innerText,
        price: carElement.querySelector('.ads__unit__content__keys div').innerText,
        location: carElement.querySelector('.ads__unit__content__details').innerText,
      };
    });
  });

  // Print the information for each car
  console.log(cars);

  // Close the browser
  await browser.close();
})();
