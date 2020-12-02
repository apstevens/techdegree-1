/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects
***/
const quotes = [
  {
    quote: "It is during our darkest moments that we must focus to see the light",
    source: "Aristotle",
    citation: "https://www.brainyquote.com/quotes/aristotle_119068",
    year: "2017"
  },
  {
    quote: "What we do now echoes in eternity",
    source: "Marcus Aurelius",
    citation: "http://www.notable-quotes.com/a/aurelius_marcus.html",
    year: "180 AD"
  },
  {
    quote: "Generally speaking, the way of the warrior is resolute acceptance of death.",
    source: "Miyamoto Musashi",
    citation: "https://www.brainyquote.com/topics/warrior-quotes",
    year: "2018",
    type: "Warrior"
  },
  {
    quote: "To err is human; to forgive is divine.",
    source: "Alexander Pope",
    citation: "https://www.brainyquote.com/topics/forgiveness-quotes",
    year: "2019",
    type: "Forgiveness"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu",
    citation: "https://www.brainyquote.com/topics/wisdom-quotes",
    year: "2016",
    type: "Wisdom"
  }

];

console.log(quotes); // Logging output to console

/***
 * Random color generator
***/

function getRandomColor() {
  const letters = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    'A', 'B', 'C', 'D', 'E', 
    'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 
    'Z'
  ];
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

  console.log(color)
}

/***
 * Random quote generator
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length); // Gets random number the length of the array index
  return quotes[randomNumber];

  console.log(randomNumber);
}

console.log(getRandomQuote());

// Sets the random color

function setRandomColor() {
  let randomQuote = getRandomQuote();
  let body_bg = document.querySelector('body');
  if (randomQuote.type === undefined) {
    body_bg.style.backgroundColor = getRandomColor();
  }
  
  console.log(body_bg);
}

/***
 * Print quote function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    html += `
    <span class="citation">${randomQuote.citation}</span>`;
    if (randomQuote.year) {
      html += `
      <span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.type) {
      html += `
      <span class="year">${randomQuote.type}</span>`;
    }
    html += `</p>`;
  }

  console.log(html)

  setRandomColor();
  return document.getElementById('quote-box').innerHTML = html;
}


setInterval(printQuote, 5000);



/***
 * click event listener for the print quote button
 * 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);