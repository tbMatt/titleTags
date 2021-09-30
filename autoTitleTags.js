// DEPENDENCIES
const prompt = require('prompt-sync')();
const puppeteer = require('puppeteer');
const fs = require('fs/promises');


(async () => {

    // GET THE CURRENT DATE IN MM/DD/YYYY
    var today = new Date().toLocaleDateString();

    // GET USER INPUT FOR TICKERS TO USE
    var tickers = prompt('Enter all tickers:');
    var tickersArr = tickers.split(' ');

    var nameList = [];
    var allInfo = [];

    // GET THE COMPANY NAME FROM GOOGLE
    const browser = await puppeteer.launch();

    for (i = 0; i < tickersArr.length; i++) {

        const page = await browser.newPage();
        await page.goto(`https://www.google.com/search?q=${tickersArr[i]}+stock`);

        // GET THE NAME FROM RENDERED PAGE
        const name = await page.evaluate(() => {

            return document.querySelector('span.aMEhee').textContent;

        });

        nameList.push(name);

    };

    await browser.close();

    // GENERATE AN ARRAY OF OBJECTS FOR TITLE AND TAGS
    for (i = 0; i < tickersArr.length; i++) {

        var ticker = tickersArr[i];
        var company = nameList[i];

        var title = `${ticker} (${company}) Stock Technical Analysis | ${today}`;
        var tags = `trade brigade,technical analysis,stock chart analysis,${title},${ticker},${company},${ticker} stock,${ticker} technical analysis,${ticker} stock chart,${ticker} price predictions,${ticker} company,${ticker} trade price,${ticker} stock forecast,${ticker} stock news,${ticker} stocktwits,${ticker} buy,${ticker} sell,${ticker} short squeeze,${ticker} short interest,${ticker} catalyst,${ticker} earnings,${company} stock`

        var titleNtags = {
            'Title': title,
            'Tags': tags
        };

        allInfo.push(titleNtags);

    };

    await fs.writeFile('titleTags.txt', JSON.stringify(allInfo));

})();