


import {quotes} from '../../../../helpers/quotes.js';

export const QuoteBlock = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return <blockquote>{randomQuote.content} — {randomQuote.author}</blockquote>;
};




 



