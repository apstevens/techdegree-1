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
    quote: "Every victorious warrior draws his strength from the highest source; his love.",
    source: "Tapan Ghosh",
    citation: "https://www.brainyquote.com/topics/warrior-quotes",
    year: "2018",
    type: "Warrior"
  },
  {
    quote: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    source: "Sun Tzu",
    citation: "https://www.brainyquote.com/topics/warrior-quotes",
    year: "2018",
    type: "Warrior"
  },
  {
    quote: "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.",
    source: "G.K. Chesterton",
    citation: "https://www.brainyquote.com/topics/warrior-quotes",
    year: "2018",
    type: "Warrior"
  },
  {
    quote: "The warrior stands, ready to defend, ready to fight for those he serves. He is a warrior of virtue, A knight of conscience. He is who we all wish to be.",
    source: "Anthony T. Hincks",
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
    quote: "To forgive is to set a prisoner free and discover that the prisoner was you.",
    source: "Lewis B. Smedes",
    citation: "https://www.brainyquote.com/topics/forgiveness-quotes",
    year: "2019",
    type: "Forgiveness"
  },
  {
    quote: "Never forget the three powerful resources you always have available to you: love, prayer, forgiveness.",
    source: "H. Jackson Brown, Jr",
    citation: "https://www.brainyquote.com/topics/forgiveness-quotes",
    year: "2019",
    type: "Forgiveness"
  },
  {
    quote: "Acceptance and tolerance and forgiveness, those are life-altering lessons.",
    source: "Jessica Lange",
    citation: "https://www.brainyquote.com/topics/forgiveness-quotes",
    year: "2019",
    type: "Forgiveness"
  },
  {
    quote: "It's not an easy journey, to get to a place where you forgive people. But it is such a powerful place, because it frees you.",
    source: "Tyler Perry",
    citation: "https://www.brainyquote.com/topics/forgiveness-quotes",
    year: "2019",
    type: "Forgiveness"
  },
  {
    quote: "We think that forgiveness is weakness, but it's absolutely not; it takes a very strong person to forgive..",
    source: "T.D. Jakes",
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
  },
  {
    quote: "If you don't know where you are going, any road will get you there.",
    source: "Lewis Carroll",
    citation: "https://www.brainyquote.com/topics/wisdom-quotes",
    year: "2016",
    type: "Wisdom"
  },
  {
    quote: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    source: "Archimedes",
    citation: "https://www.brainyquote.com/topics/wisdom-quotes",
    year: "2016",
    type: "Wisdom"
  },
  {
    quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    source: "William Arthur Ward",
    citation: "https://www.brainyquote.com/topics/wisdom-quotes",
    year: "2016",
    type: "Wisdom"
  },
  {
    quote: "It is not what happens to you, but how you react to it that matters.",
    source: "Epictetus",
    citation: "https://www.brainyquote.com/topics/wisdom-quotes",
    year: "2016",
    type: "Wisdom"
  },

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