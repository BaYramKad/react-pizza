import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idC: 0,
  categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  sortPizza: [
    {
      sortType: 'rating',
      sortTitle: 'популярности',
    },
    {
      sortType: 'price',
      sortTitle: 'цене',
    },
    {
      sortType: 'title',
      sortTitle: 'алфавиту',
    },
  ],
  isOrder: false,
  currentSType: '',
};

export const filterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    setCategoryId: (state, { payload }) => {
      state.idC = payload;
    },
    changeOrder: (state) => {
      state.isOrder = !state.isOrder;
    },
    changeSortType: (state, { payload }) => {
      console.log('payload: ', payload);
      state.currentSType = payload;
    },
  },
});

export const { setCategoryId, changeOrder, changeSortType } = filterSlice.actions;

export default filterSlice.reducer;
