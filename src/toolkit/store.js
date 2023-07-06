import { configureStore } from '@reduxjs/toolkit';

import filter from './filterSlice';
import pizzaCart from './pizzaSlice';
import pagination from './paginationSlice';
import pizzaLoad from './asyncLoadPizza/pizzaSlice';
import search from './asyncSearchSlice/asyncSearch';

export const store = configureStore({
  reducer: {
    filter,
    pagination,
    pizzaLoad,
    search,
    pizzaCart,
  },
});
