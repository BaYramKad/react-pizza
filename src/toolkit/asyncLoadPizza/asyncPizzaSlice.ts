import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface AsyncLoadType {
  category: number;
  sortType: string;
  order: string;
  currentPage: number;
}

export const asyncLoadPizza = createAsyncThunk(
  'async/pizza',
  async (params: AsyncLoadType, { rejectWithValue }) => {
    try {
      const { category, sortType, order, currentPage } = params;
      const showAllItems = !!category ? '?limit=5' : '?';
      const url = `https://649b279bbf7c145d023a142d.mockapi.io/items${showAllItems}`;
      const settingsURL = `${url}&sortBy=${sortType}&category=${category}&order=${order}&page=${currentPage}`;
      const response = await axios.get(settingsURL);
      if (response.status !== 200) {
        throw new Error('Ошибка Сервера');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

interface pizzaLoadType {
  pizza: object[];
  loading: boolean;
  error: boolean;
}

const initialState: pizzaLoadType = {
  pizza: [],
  loading: false,
  error: false,
};
export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncLoadPizza.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(asyncLoadPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.pizza = action.payload;
    });
    builder.addCase(asyncLoadPizza.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const pizzaLoad = pizzaSlice.actions;
export default pizzaSlice.reducer;

export const pizzaLoadSelector = (state: RootState) => state.pizzaLoad;
