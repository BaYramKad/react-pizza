import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;

export const paginationSelector = (state: RootState) => state.pagination.page;
