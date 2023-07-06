import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncSearchPizza = createAsyncThunk(
  'async/search',
  async (str, { rejectWithValue }) => {
    try {
      if (str) {
        const url = `https://649b279bbf7c145d023a142d.mockapi.io/items?search=${str}`;
        const response = await axios.get(url);
        if (response.status !== 200) {
          throw new Error('Ошибка Сервера');
        }
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const initialState = {
  searchPizza: [],
  loading: false,
  error: false,
};
export const asyncSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncSearchPizza.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(asyncSearchPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.searchPizza = action.payload;
    });
    builder.addCase(asyncSearchPizza.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const search = asyncSearchSlice.actions;

export default asyncSearchSlice.reducer;
