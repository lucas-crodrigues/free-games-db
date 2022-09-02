import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import gamesReducer from './games/fetchGames';

const storeReducer = configureStore({
  reducer: {
    games: gamesReducer,
  },
}, applyMiddleware(thunk));

export default storeReducer;
