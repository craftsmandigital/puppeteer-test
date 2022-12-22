const puppeteer = require('puppeteer');

(async () => {
  // Initiate the browser 
  const browser = await puppeteer.launch();

  // Create a new page with the default browser context 
  const page = await browser.newPage();

  // Go to the target website 
  await page.goto('https://craftsmandigital.net/');


  // Get the node and extract the text 
  const titleNode = await page.$('h1');
  const title = await page.evaluate(el => el.innerText, titleNode);

  // We can do both actions with one command 
  // In this case, extract the href attribute instead of the text 
  const link = await page.$eval('a', anchor => anchor.getAttribute('href'));

  console.log({ title, link });
  // Closes the browser and all of its pages 
  await browser.close();
})();
