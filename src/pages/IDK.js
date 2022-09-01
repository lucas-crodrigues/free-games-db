import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Details() {
  const params = useParams();
  const games = useSelector((state) => state.games.games);

  const gamesArr = games.filter((game) => game.id === params.id);
  const game = gamesArr[0];

  return (
    <>
      <p>Details</p>
    </>
  );
}

