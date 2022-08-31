import PropTypes from 'prop-types';
import './Game.css';

const Game = (props) => {
  const { game } = props;

  return (
    <>
      <div className="gameCard">
        <div className="gameTitle">
          <a href={game.open_giveaway} rel="noopener noreferrer" target="_blank">
            <img className="gamePic" src={game.image} alt={`Game ${game.title}`} />
            {game.title}
          </a>
          <p className="gameType" id={`${game.type.split(' ')[0]}`}>{game.type}</p>
        </div>
        <details className="info">
          <summary>More Info</summary>
          <p style={{ whiteSpace: 'pre-wrap' }}>{game.instructions}</p>
          <small>
            Works with:
            {game.platforms}
          </small>
          <small>
            Ends at:
            {game.end_date}
          </small>
        </details>
      </div>
    </>
  );
};

Game.propTypes = {
  game: PropTypes.shape(
    {
      open_giveaway: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      instructions: PropTypes.string,
      platforms: PropTypes.string,
      end_date: PropTypes.string,
    },
  ).isRequired,
};

export default Game;
