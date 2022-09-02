import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/games/fetchGames';
import './details.css';

function Details() {
  const params = useParams();
  const gamesD = useSelector((state) => state.games.games);
  const status = useSelector((state) => state.games.status);
  const dispatchD = useDispatch();

  React.useEffect(() => {
    if (!gamesD.length) {
      dispatchD(getGames());
    }
  });

  let content;
  if (status === 'loading') {
    content = <p>Loading</p>;
  }
  if (status === 'succeeded') {
    const gamesArr = gamesD.filter((game) => game.id.toString().includes(params.id.toString()));
    const game = gamesArr[0];
    content = (
      <div className="game-details">
        <img src={game.image} alt={`Game ${game.title}`} />
        <h2>{game.title}</h2>
        <p className="gameType" id={`${game.type.split(' ')[0]}`}>{game.type}</p>
        <p>{game.description}</p>
        <a className="giveaway" href={game.open_giveaway} rel="noopener noreferrer" target="_blank">Go to giveaway</a>
        <p style={{ whiteSpace: 'pre-wrap' }}>{game.instructions}</p>
        <small>
          Works with:&nbsp;
          {game.platforms}
        </small>
        <br />
        <small>
          Ends at:&nbsp;
          {game.end_date}
        </small>
      </div>
    );
  }

  return (
    <>
      <div className="detailsPage">
        <header>
          <Link to="/">‹ Back to the Home Page</Link>
        </header>
        {content}
      </div>
    </>
  );
}

export default Details;
