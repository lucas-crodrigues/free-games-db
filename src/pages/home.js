import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Game from '../components/Game';
import {
  getGames,
  noFilter,
  filterPC,
  filterConsole,
  filterMobile,
  filterGame,
  filterDLC,
  filterEarly,
} from '../redux/games/fetchGames';
import logo from '../art/logo.svg';
import './home.css';

function Home() {
  const games = useSelector((state) => state.games.games);
  const filteredGames = useSelector((state) => state.games.filteredGames);
  const status = useSelector((state) => state.games.status);
  const filter = useSelector((state) => state.games.filter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!games.length) {
      dispatch(getGames());
    }
  });

  let content;
  if (status === 'loading') {
    content = <p>Loading</p>;
  }
  if (status === 'succeeded') {
    content = filteredGames.map((game) => (
      <Link key={game.id} to={`/${game.id}`}>
        <Game game={game} />
      </Link>
    ));
  }

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'all-content':
        dispatch(noFilter());
        break;
      case 'pc-content':
        dispatch(filterPC());
        break;
      case 'console-content':
        dispatch(filterConsole());
        break;
      case 'mobile-content':
        dispatch(filterMobile());
        break;
      case 'all-games':
        dispatch(filterGame());
        break;
      case 'all-dlc':
        dispatch(filterDLC());
        break;
      case 'all-early':
        dispatch(filterEarly());
        break;
      default:
        break;
    }
  };

  const filterListPlatform = (data, query) => (
    data.filter((name) => name.platforms.toString().toUpperCase().includes(query.toUpperCase()))
  );
  const filterListType = (data, query) => (
    data.filter((name) => name.type.toString().toUpperCase().includes(query.toUpperCase()))
  );

  const pcGames = filterListPlatform(games, 'PC');
  const consoleGames = filterListPlatform(games, 'xbox' || 'playstation' || 'nintendo');
  const mobileGames = filterListPlatform(games, 'android' || 'ios');
  const allGames = filterListType(games, 'Game');
  const allDLC = filterListType(games, 'DLC');
  const allEarly = filterListType(games, 'Early Access');

  return (
    <>
      <div className="homePage">
        <div className="header">
          <select defaultValue={filter} onChange={handleChange}>
            <option value="all-content">All Content</option>
            <option value="pc-content">PC Content</option>
            <option value="console-content">Console Content</option>
            <option value="mobile-content">Mobile Content</option>
            <option value="all-games">All Full Games</option>
            <option value="all-dlc">All DLCs</option>
            <option value="all-early">All Early Access</option>
          </select>
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
                Content
              </small>
              <p>{games.length}</p>
            </div>
            <div>
              <small>
                PC
                <br />
                Content
              </small>
              <p>{pcGames.length}</p>
            </div>
            <div>
              <small>
                Console
                <br />
                Content
              </small>
              <p>{consoleGames.length}</p>
            </div>
            <div>
              <small>
                Mobile
                <br />
                Content
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
        <div className="gameList">{content}</div>
      </div>
    </>
  );
}

export default Home;
