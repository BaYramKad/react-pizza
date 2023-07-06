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
  currentSObj: {
    sortTitle: 'популярности',
    sortType: 'rating',
  },
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
      state.currentSObj = payload;
    },
    setParseObjUrl: (state, { payload }) => {
      state.currentSObj = payload.sortBy;
      state.idC = +payload.category;
      state.isOrder = payload.order;
    },
  },
});

export const { setCategoryId, changeOrder, changeSortType, setParseObjUrl } = filterSlice.actions;

export default filterSlice.reducer;
