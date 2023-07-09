import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type AsyncSearchType = {
  imageUrl: string;
  title: string;
  price: number;
  id: number;
  types: number[];
  sizes: number;
  category: number;
  rating: number;
};

export const asyncSearchPizza = createAsyncThunk(
  'async/search',
  async (str: string, { rejectWithValue }) => {
    try {
      if (str) {
        const url = `https://649b279bbf7c145d023a142d.mockapi.io/items?search=${str}`;
        const response = await axios.get<AsyncSearchType[]>(url);
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

export enum Status {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  FULFILLED = 'FULFILLED',
}

interface searchType {
  searchPizza: AsyncSearchType[];
  status: Status;
}

const initialState: searchType = {
  searchPizza: [],
  status: Status.LOADING,
};

export const asyncSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncSearchPizza.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(asyncSearchPizza.fulfilled, (state, action) => {
      state.status = Status.FULFILLED;
      // state.searchPizza = action.payload;
    });
    builder.addCase(asyncSearchPizza.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const search = asyncSearchSlice.actions;
export default asyncSearchSlice.reducer;

export const searchSelector = (state: RootState) => state.search;
