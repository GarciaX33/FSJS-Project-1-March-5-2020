/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array section
***/

// Will create the array of quote objects and name it quotes
var quotes = [
  {
    //Will add quote and author as strings
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "H.Jackson Brown Jr"
  },
  {
    
    quote: "Every human life is worth the same, and worth saving.",
    author: "J.K. Rowling"
  },
  {
    
    quote: "Get busy living, or get busy dying.",
    author: "Stephen King"
  },
  {
    
    quote: "The goal isn’t to live forever, the goal is to create something that will.",
    author: "Chuck Palahniuk"
  },
  {
    
    quote: "Travel far enough, you meet yourself.",
    author: "David Mitchell"
  },
  {
    
    quote: "None of us really changes over time. We only become more fully what we are.",
    author: "Anne Rice"
  }
];

/***
 * `getRandomQuote` function section
***/

// Will create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(arr){
  return arr[ Math.floor(Math.random() * 6)];
}

/***
 * `printQuote` function section
***/

// Will create the printQuote function and name it printQuote
function printQuote(){
  var quoteObject = getRandomQuote(quotes);
  //Will add certain quotes and replace quote and author classes
  var addQuote = '<p class="quote">' + quoteObject.quote +'</p> <p class="author">' + quoteObject.author + '</p>';
  document.getElementById('quote-box').innerHTML = addQuote;
}

/***
 * click event listener for the print quote button section
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);