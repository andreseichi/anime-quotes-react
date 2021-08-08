import PropTypes from 'prop-types';

export const QuoteJson = ({ anime, character, quote }) => {
  return (
    // <div>
    //   <h2>Anime: {anime}</h2>
    //   <p>Character: {character}</p>
    //   <p>{quote}</p>
    // </div>

    <div>
      <pre>
        {'{'}
        {'\n'}
        {'"anime":'} {'"'}
        {anime}
        {'"'},{'\n'}
        {'"character":'} {'"'}
        {character}
        {'"'},{'\n'}
        {'"quote":'} {'"'}
        {quote}
        {'"'}
        {'\n'}
        {'}'},
      </pre>
    </div>
  );
};

QuoteJson.propTypes = {
  anime: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
