

import { quotes } from '../../../../helpers/quotes.js';
import css from './QuoteBlock.module.css';
import books from '../../../../assets/images/books.png';

export const QuoteBlock = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const words = randomQuote.content.split(" ");   

    const contentWithHighlight = words.map((word, index) => {
        if ((index + 1) % 5 === 0) { 
            return (
                <span key={index} className={css.highlight}>
                    {word}
                </span>
            );
        }
        return word; 
    });

    return (
        <div className={css.blockquote}>
            <img src={books} alt="iphone" className={css.books} />
            <div className={css.blockquoteWrapper}>
           <span className={css.quoteContent}>
                &quot;{contentWithHighlight.reduce((prev, curr) => [prev, ' ', curr])}&quot;
                </span>
                <div>
                <span className={css.quoteAuthor}> — {randomQuote.author},</span>
                    <span className={css.quoteBook}>&quot;{randomQuote.book}&quot;</span>
                </div>
                </div>
        </div>
    );
};




 



