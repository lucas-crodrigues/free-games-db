import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../art/logo.svg';
import './home.css';

const Home = (props) => {
  const {
    games, pcGames, consoleGames, mobileGames, allGames, allDLC, allEarly,
  } = props;

  return (
    <>
      <div className="homePage">
        <div className="header">
          <div className="invisible" />
          <h1>Free Games DB</h1>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <h3>STATS</h3>
          <div className="stats">
            <div>
              <small>
                All
                <br />
                games
              </small>
              <p>{games.length}</p>
            </div>
            <div>
              <small>
                PC
                <br />
                games
              </small>
              <p>{pcGames.length}</p>
            </div>
            <div>
              <small>
                Console
                <br />
                games
              </small>
              <p>{consoleGames.length}</p>
            </div>
            <div>
              <small>
                Mobile
                <br />
                games
              </small>
              <p>{mobileGames.length}</p>
            </div>
            <div>
              <small>
                Full
                <br />
                games
              </small>
              <p>{allGames.length}</p>
            </div>
            <div>
              <small>
                All
                <br />
                DLCs
              </small>
              <p>{allDLC.length}</p>
            </div>
            <div>
              <small>
                Early
                <br />
                Access
              </small>
              <p>{allEarly.length}</p>
            </div>
          </div>
        </div>
        <div className="pages">
          <div className="gameContent page">
            <NavLink to="/games" className="pageLink">
              All Free Content:
              {' '}
              {games.length}
            </NavLink>
          </div>
          <div className="pcContent page">
            <NavLink to="/pc" className="pageLink">
              All PC Content:
              {' '}
              {pcGames.length}
            </NavLink>
          </div>
          <div className="consoleContent page">
            <NavLink to="/console" className="pageLink">
              All Console Content:
              {' '}
              {consoleGames.length}
            </NavLink>
          </div>
          <div className="mobileContent page">
            <NavLink to="/mobile" className="pageLink">
              All Mobile Content:
              {' '}
              {mobileGames.length}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

/* eslint-disable react/forbid-prop-types */

Home.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  pcGames: PropTypes.arrayOf(PropTypes.object).isRequired,
  consoleGames: PropTypes.arrayOf(PropTypes.object).isRequired,
  mobileGames: PropTypes.arrayOf(PropTypes.object).isRequired,
  allGames: PropTypes.arrayOf(PropTypes.object).isRequired,
  allDLC: PropTypes.arrayOf(PropTypes.object).isRequired,
  allEarly: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
