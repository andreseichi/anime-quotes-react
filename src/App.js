import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const App = () => {
  const Quote = ({ anime, character, quote }) => {
    return (
      <div>
        <h2>Anime: {anime}</h2>
        <p>Character:{character}</p>
        <p>{quote}</p>
      </div>
    );
  };

  Quote.propTypes = {
    anime: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  };

  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const response = await fetch('https://animechan.vercel.app/api/quotes');
    const responseJSON = await response.json();

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
