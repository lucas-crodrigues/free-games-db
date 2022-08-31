import "./Game.css";

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
        <p style={{whiteSpace: "pre-wrap"}} >{game.instructions}</p>
        <small>Works with: {game.platforms}</small>
        <small>Ends at: {game.end_date}</small>
      </details>
    </div>
    </>
  );
}

export default Game;