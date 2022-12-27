
const puppeteer = require('puppeteer');

(async () => {
  // Set up Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the first page of the web page
  await page.goto("https://www.finn.no/car/used/search.html?make=0.7147&sort=PUBLISHED_DESC");

  // Loop through each page of the web page
  while (true) {
    // Wait for the page to load and the car elements to be displayed
    await page.waitForSelector('.ads__unit__content');

    // Extract the information for each car
    const cars = await page.evaluate(() => {
      // Find all the car elements on the page
      const carElements = document.querySelectorAll('.ads__unit__content');
      // Extract the information for each car element
      return Array.from(carElements).map((carElement) => {
        return {
          title: carElement.querySelector('h2').innerText,
          price: carElement.querySelector('.ads__unit__content__keys div').innerText,
          location: carElement.querySelector('.ads__unit__content__details').innerText,
        };
      });
    });

    // Print the information for each car
    console.log(cars);

    // Check if the "Next" button is available
    const nextButtonAvailable = await page.evaluate(() => {
      // Check if the "Next" button element exists
      const nextButtonElement = document.querySelector('.icon.icon--chevron-right');
      return nextButtonElement !== null;
    });

    // If the "Next" button is not available, break out of the loop
    if (!nextButtonAvailable) {
      break;
    }

    // Click on the "Next" button to go to the next page
    await page.click('.icon.icon--chevron-right');
  }

  // Close the browser
  await browser.close();
})();
