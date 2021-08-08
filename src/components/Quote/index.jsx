import PropTypes from 'prop-types';

export const Quote = ({ anime, character, quote }) => {
  return (
    <div className="quote">
      <h2>Anime: {anime}</h2>
      <p>Character: {character}</p>
      <p>{quote}</p>
    </div>
  );
};

Quote.propTypes = {
  anime: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
