import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Sort = {
  sortType?: 'rating' | 'price' | 'title';
  sortTitle?: 'популярности' | 'цене' | 'алфавиту';
};

interface initialSortType {
  idC: number;
  categories: string[];
  sortPizza: Sort[];
  isOrder: string;
  sortType: string;
}

const initialState: initialSortType = {
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
  isOrder: 'false',
  sortType: 'rating',
};

export const filterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.idC = action.payload;
    },
    changeOrder: (state) => {
      state.isOrder = '!state.isOrder';
    },
    changeSortType: (state, action: PayloadAction<Sort>) => {
      // state.sortType = action.payload;
    },
    setParseObjUrl: (state, action: PayloadAction<initialSortType>) => {
      state.sortType = action.payload.sortType;
      state.idC = action.payload.idC;
      state.isOrder = action.payload.isOrder;
    },
  },
});

export const { setCategoryId, changeOrder, changeSortType, setParseObjUrl } = filterSlice.actions;
export default filterSlice.reducer;

export const filterSelector = (state: RootState) => state.filter;
