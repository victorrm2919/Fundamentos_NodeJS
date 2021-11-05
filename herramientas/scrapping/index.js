const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    console.log('Cerrando navegador ...');

    browser.close();
    console.log('Navegador cerrado');
})();