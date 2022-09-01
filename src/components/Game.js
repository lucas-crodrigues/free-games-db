import PropTypes from 'prop-types';
import './Game.css';

const Game = (props) => {
  const { game } = props;

  return (
    <>
      <div className="gameCard">
        <div className="gameTitle">
          <img className="gamePic" src={game.image} alt={`Game ${game.title}`} />
          {game.title}
          <p className="gameType" id={`${game.type.split(' ')[0]}`}>{game.type}</p>
          <small>
            Works with:&nbsp;
            {game.platforms}
          </small>
        </div>
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
