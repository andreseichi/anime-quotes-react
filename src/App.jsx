import { useEffect, useState } from 'react';

import { Quote } from './components/Quote';
import { QuoteJson } from './components/QuoteJson';

import fullmetalQuotes from './utils/fullmetal-quotes.json';

import './App.css';

export const App = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const response = await fetch(
      'https://animechan.vercel.app/api/quotes/anime?title=brotherhood&page=10',
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    setQuotes(responseJSON);
  };

  const quotesFullmetal = () => {
    setQuotes(fullmetalQuotes);
  };

  useEffect(() => {
    quotesFullmetal();
    // getQuotes();
  }, []);

  return (
    <div className="App">
      <div className="quotes">
        {quotes.map((quote) => (
          <Quote
            key={quote.quote}
            anime={quote.anime}
            character={quote.character}
            quote={quote.quote}
          />
        ))}
      </div>

      {/* {quotes.map((quote) => (
        <QuoteJson
          key={quote.quote}
          anime={quote.anime}
          character={quote.character}
          quote={quote.quote}
        />
      ))} */}
    </div>
  );
};
