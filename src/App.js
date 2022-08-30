import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from "./redux/games/fetchGames";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Games from './pages/details';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.games);

  React.useEffect(() => {
    if (!games.length) {
      dispatch(getGames());
    }
  });

  const filterList = (data, query) => {
    return data.filter(name => name.platforms.toString().toUpperCase().includes(query.toUpperCase()));
  };

  const pcGames = filterList(games, 'PC');
  const consoleGames = filterList(games, 'xbox' || 'playstation' || 'nintendo');
  const mobileGames = filterList(games, 'android' || 'ios');

  const DEBUG = () => {
    console.log(mobileGames);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home key={"games"} games={games} pcGames={pcGames} consoleGames={consoleGames} mobileGames={mobileGames} />} />
        <Route path="/games" element={<Games key={"gamesPage"} props={games} />} />
        <Route path="/pc" element={<Games key={"gamesPage"} props={pcGames} />} />
        <Route path="/console" element={<Games key={"gamesPage"} props={consoleGames} />} />
        <Route path="/mobile" element={<Games key={"gamesPage"} props={mobileGames} />} />
      </Routes>
      <button type="button" onClick={DEBUG}>debug app</button>
    </div>
  );
}

export default App;
