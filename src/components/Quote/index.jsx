import PropTypes from 'prop-types';

import './styles.css';

export const Quote = ({ anime, character, quote }) => {
  return (
    <div className="quote">
      <h2>“{quote}”</h2>
      <p>Character: {character}</p>
      <p>Anime: {anime}</p>
    </div>
  );
};

Quote.propTypes = {
  anime: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
