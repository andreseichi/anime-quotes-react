import { useEffect, useState } from 'react';

import { Quote } from './components/Quote';

export const App = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const response = await fetch(
      'https://animechan.vercel.app/api/quotes/anime?title=brotherhood',
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    setQuotes(responseJSON);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  console.log(quotes);

  return (
    <div className="App">
      {quotes.map((quote) => (
        <Quote
          key={quote.quote}
          anime={quote.anime}
          character={quote.character}
          quote={quote.quote}
        />
      ))}
    </div>
  );
};
