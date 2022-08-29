import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://www.gamerpower.com/api/giveaways';

export const getGames = createAsyncThunk(
  'games/getGames',
  async () => {
    try {
      const response = await axios.get(BASE_URL);
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
