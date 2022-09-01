import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getGames } from './redux/games/fetchGames';
import Home from './pages/home';
import Games from './pages/details';
import gameIcon from './art/game_icon.svg';
import pcIcon from './art/pc_icon.svg';
import consoleIcon from './art/console_icon.svg';
import mobileIcon from './art/mobile_icon.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.games);

  React.useEffect(() => {
    if (!games.length) {
      dispatch(getGames());
    }
  });

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
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              key="games"
              games={games}
              pcGames={pcGames}
              consoleGames={consoleGames}
              mobileGames={mobileGames}
              allGames={allGames}
              allDLC={allDLC}
              allEarly={allEarly}
            />
        )}
        />
        <Route path="/games/*" element={<Games key="gamesPage" gameList={games} icon={gameIcon} title="All Content" />} />
        <Route path="/pc/*" element={<Games key="gamesPage" gameList={pcGames} icon={pcIcon} title="PC Content" />} />
        <Route path="/console/*" element={<Games key="gamesPage" gameList={consoleGames} icon={consoleIcon} title="Console Content" />} />
        <Route path="/mobile/*" element={<Games key="gamesPage" gameList={mobileGames} icon={mobileIcon} title="Mobile Content" />} />
      </Routes>
      <small>
        Powered by:
        <a href="https://www.gamerpower.com/api-read" rel="noopener noreferrer" target="_blank">GamerPower</a>
      </small>
    </div>
  );
}

export default App;