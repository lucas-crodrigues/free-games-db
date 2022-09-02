/* eslint-disable import/extensions */
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" exact element={<Details />} />
        </Routes>
      </Router>
      <small className="credits">
        Powered by:&nbsp;
        <a href="https://www.gamerpower.com/api-read" rel="noopener noreferrer" target="_blank">GamerPower</a>
      </small>
    </div>
  );
}

export default App;
