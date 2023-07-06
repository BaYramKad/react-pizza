import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncLoadPizza = createAsyncThunk(
  'async/pizza',
  async (params, { rejectWithValue }) => {
    try {
      const { category, sortType, order, currentPage } = params;
      const showAllItems = !!category ? '?limit=5' : '?';
      const url = `https://649b279bbf7c145d023a142d.mockapi.io/items${showAllItems}`;
      const settingsURL = `${url}&sortBy=${sortType}${category}&order=${order}&page=${currentPage}`;
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

const initialState = {
  pizza: [],
  loading: false,
  error: false,
  messageError: '',
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
      console.log('action: ', action);
      state.error = true;
      state.messageError = action.payload;
    });
  },
});

export const pizzaLoad = pizzaSlice.actions;

export default pizzaSlice.reducer;
