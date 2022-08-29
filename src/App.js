import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Games from './components/games';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
