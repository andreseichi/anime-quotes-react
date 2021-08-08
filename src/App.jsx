import { useEffect, useState } from 'react';

import { Quote } from './components/Quote';

import fullmetalQuotes from './utils/fullmetal-quotes.json';

export const App = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const response = await fetch(
      'https://animechan.vercel.app/api/quotes/anime?title=brotherhood',
    );
    const responseJSON = await response.json();
    setQuotes(responseJSON);
  };

  const quotesFullmetal = () => {
    setQuotes(fullmetalQuotes);
  };

  useEffect(() => {
    quotesFullmetal();
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
    </div>
  );
};
