const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

setDefaultTimeout(120 * 1000); 

let browser;
let page;



Given('que estou na página de um produto disponível', async function () {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://site.fastshop.com.br/iphone-16-pro-max-apple--256gb--titanio-preto--tela-de-6-9---5g-e-camera-de-48mp-aemywv3beapto_prd-63804/p', { waitUntil: 'networkidle2' });
});


When('eu clicar no botão de Comprar Agora', async function () {
 await page.$eval('button[data-testid="buy-button"] span', (element) => {
    element.scrollIntoView();
    element.click();
  });
  
});


Then('o produto deve ir para o carrinho', async function () {
  await page.waitForSelector('a[data-testid="fs-link-button"]', { timeout: 15000 });
  await page.$('a[data-testid="fs-link-button"]');
  await browser.close();
});

