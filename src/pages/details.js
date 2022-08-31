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
        <img src={icon} alt="logo"/>
        <h2>{title}</h2>
      </div>
      <div className="filters">
        <NavLink to="/games">All Free Content</NavLink>
        <NavLink to="/pc">All PC Content</NavLink>
        <NavLink to="/console">All Console Content</NavLink>
        <NavLink to="/mobile">All Mobile Content</NavLink>
      </div>
      <div className="gamesList">
        {gameList.map(game => <Game key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default Games;