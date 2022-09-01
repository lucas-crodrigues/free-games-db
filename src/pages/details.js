import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/games/fetchGames';

function Details() {
  const params = useParams();
  const gamesD = useSelector((state) => state.games.games);
  const dispatchD = useDispatch();

  React.useEffect(() => {
    if (!gamesD.length) {
      dispatchD(getGames());
    }
  });

  const gamesArr = gamesD.filter((game) => game.id === params.id);
  const game = gamesArr[0];

  return (
    <>
      <div className="detailsPage">
        <header>
          <Link to="/">‹</Link>
        </header>
        <img src={game.image} alt={`Game ${game.title}`} />
      </div>
    </>
  );
}

export default Details;
