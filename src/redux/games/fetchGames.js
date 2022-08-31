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

const initialState = [];

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGames.fulfilled, (state, action) => action.payload);
  },
});

export default gameSlice.reducer;
