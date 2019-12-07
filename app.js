//Object of quotes in an array
const quotes = [
  {
    name: 'Unknown',
    quote: '"Do your best, be intentional and trust the process"'
  },
  {
    name: 'Unknown',
    quote: '"Success is taking steps in the direction of accomplishing your objective and ultimately achieving you goals."'
  },
  {
    name: 'Dr. Myles Monroe',
    quote: '"The greatest act of leadership is mentoring. No matter how much you may learn, achieve, accumulate, or accomplish, if it all dies with you, then you are a generational failure"'
  },
  {
    name: 'Jim Rohn',
    quote: '"If you work harder on your job you can make a living, if you work harder on yourself you can make a fortune."'
  },
  {
    name: 'Myles Monroe',
    quote: '"When you believe in your dream and your vision, then it begins to attract its own resources."'
  },
]

const quoteButton = document.querySelector('#quote-button');

const quoteAuthor = document.querySelector('#quoteAuthor');

const quote = document.querySelector('#quote');

quoteButton.addEventListener('click', displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
  console.log(number.name);
}