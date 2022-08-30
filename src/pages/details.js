import React from "react";
import { NavLink } from "react-router-dom";
import Game from "../components/Game";
import "./details.css";

const Games = (props) => {
  const { gameList, icon, title } = props;
  
  return (
    <>
      <div className="header">
        <NavLink to="/" >‹</NavLink>
        <h1>Free Games DB</h1>
      </div>
      <div className="pageTitle">
        <img src={icon} />
        <h2>{title}</h2>
      </div>
      <div className="gamesList">
        {gameList.map(game => <Game key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default Games;