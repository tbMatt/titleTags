//DEPENDENCIES
const prompt = require('prompt-sync')();
const jsdom = require('./node_modules/jsdom');
const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// GET USER INPUT FOR TICKERS COVERED
var tickers = window.prompt('Enter all tickers:');
var tickersArr = tickers.split(' ');

// GET THE CURRENT DATE IN MM/DD/YYYY
var today = new Date().toLocaleDateString();

// GET THE COMPANY NAME FROM GOOGLE
// function getCompanyName (tickersArr){
    
//     for(i=0;i<=tickersArr.length;i++){
        
//         var ticker = tickersArr[i]; 

        // const scrapeGoog = async () => {
        //     try{
        //         const data = await axios.get(`https://google.com/search?q=${ticker}+stock`);
        //         const dom = new JSDOM(data, {
        //             runScripts: "dangerously",
        //             resources: "usable"
        //         });
        //         const { document } = dom.window;
        //         const companyName = document.querySelector('.aMEhee');
        //         console.log(document);
        //     } catch (error){
        //         throw error
        //     }
        // };

        // scrapeGoog();




//         request(`https://google.com/search?q=aapl+stock`, (error, response, html) => {
//             if (!error && response.statusCode == 200) {
                
//                 const $ = cheerio.load(html);
//                 const dom = new jsdom.JSDOM($ , { runScripts: "dangerously", resources: "usable"});

//                 //var companyName = document.querySelector('.aMEhee');

//                 console.log($);

//             };
//         });  
        
//     };
    

// };

// GENERATE AN ARRAY OF OBJECTS FOR TITLE AND TAGS
function tagTitle (tickersArr){

    var allInfo = [];

    for(i=0;i<=tickersArr.length;i++){
        
        var ticker = tickersArr[i];

        var title = `${ticker} (name) Stock Technical Analysis | ${today}`;
        var tags = `trade brigade,tradebrigade,technical analysis,stock chart analysis,video charts,${title},${ticker},${ticker} stock,${ticker} technical analysis,${ticker} stock chart,${ticker} price predictions,${ticker} company,${ticker} trade price,${ticker} stock forecast,${ticker} stock news,${ticker} stocktwits,${ticker} buy,${ticker} sell,${ticker} short squeeze,${ticker} short interest,${ticker} catalyst`
    
        var titleNtags = {
            'Title' : title,
            'Tags' : tags
        };

        allInfo.push(titleNtags);
    
    };

    return allInfo;
};


// CALL FUNCTION
// getCompanyName(tickersArr);
tagTitle(tickersArr);