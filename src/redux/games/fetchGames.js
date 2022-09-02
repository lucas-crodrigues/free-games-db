/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
  headers: {
    'X-RapidAPI-Key': '62ec6365c4mshe35f6cf778529e2p16bc36jsn4f84e7881ace',
    'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
  },
};

export const getGames = createAsyncThunk(
  'games/getGames',
  async () => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const gameSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    filteredGames: [],
    filter: 'all-content',
    status: 'idle',
  },
  reducers: {
    noFilter(state) {
      return ({
        ...state,
        filteredGames: state.games,
        filter: 'all-content',
      });
    },
    filterPC(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.platforms.toString().toLowerCase().includes('pc')
        )),
        filter: 'pc-content',
      });
    },
    filterConsole(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.platforms.toString().toLowerCase().includes('xbox' || 'playstation' || 'nintendo')
        )),
        filter: 'console-content',
      });
    },
    filterMobile(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.platforms.toString().toLowerCase().includes('android' || 'ios')
        )),
        filter: 'mobile-content',
      });
    },
    filterGame(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.type.toString().toLowerCase().includes('game')
        )),
        filter: 'all-games',
      });
    },
    filterDLC(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.type.toString().toLowerCase().includes('dlc')
        )),
        filter: 'all-dlc',
      });
    },
    filterEarly(state) {
      return ({
        ...state,
        filteredGames: state.games.filter((name) => (
          name.type.toString().toLowerCase().includes('early access')
        )),
        filter: 'all-early',
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.games = action.payload;
        state.filteredGames = action.payload;
      });
  },
});

export const {
  noFilter,
  filterPC,
  filterConsole,
  filterMobile,
  filterGame,
  filterDLC,
  filterEarly,
} = gameSlice.actions;

export default gameSlice.reducer;
