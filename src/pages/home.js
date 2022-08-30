import React from "react";
import { NavLink } from "react-router-dom";
import pcIcon from "../art/pc_icon.svg";
import consoleIcon from "../art/console_icon.svg";
import mobileIcon from "../art/mobile_icon.svg";
import "./home.css";

const Home = (props) => {
  const { games, pcGames, consoleGames, mobileGames } = props;

  const DEBUG = () => {
    console.log(games);
  };


  return (
    <>
      <div className="homePage">
        <div className="header">
          <NavLink to="/" >‹</NavLink>
          <h1>Free Games DB</h1>
        </div>
        <div className="stats">
          <NavLink to="/games">All Free Content: {games.length}</NavLink>
        </div>
        <div className="pages">
          <div className="pcContent">
            <NavLink to="/pc" className="pageLink">
              <img src={pcIcon} className="pagesIcon" />All PC Content: {pcGames.length}
            </NavLink>
          </div>
          <div className="consoleContent">
            <NavLink to="/console" className="pageLink">
              <img src={consoleIcon} className="pagesIcon" />All Console Content: {consoleGames.length}
            </NavLink>
          </div>
          <div className="mobileContent">
            <NavLink to="/mobile" className="pageLink">
              <img src={mobileIcon} className="pagesIcon" />All Mobile Content: {mobileGames.length}
            </NavLink>
          </div>
        </div>
      </div>
      <button type="button" onClick={DEBUG}>debug home</button>
    </>
  );
};

export default Home;