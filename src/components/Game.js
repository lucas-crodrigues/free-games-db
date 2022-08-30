import "./Game.css";

const Game = (props) => {
  const { game } = props;

  const handleClick = (e) => {
    e.target.previousSibling.classList.toggle('show');
  };

  return (
    <>
    <div className="gameCard">
      <div className="gameTitle">
        <a href={game.open_giveaway} rel="noopener noreferrer" target="_blank">
          <img className="gamePic" src={game.image} />
          {game.title}
        </a>
        <p className="gameType">{game.type}</p>
      </div>
      <div className="info show">
        <p style={{whiteSpace: "pre-wrap"}} >{game.instructions}</p>
        <small>Works with: {game.platforms}</small>
        <small>Ends at: {game.end_date}</small>
      </div>
      <button type="button" onClick={handleClick}>Toggle Info</button>
    </div>
    </>
  );
}

export default Game;