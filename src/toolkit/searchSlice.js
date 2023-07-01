import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
