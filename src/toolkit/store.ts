import { configureStore } from '@reduxjs/toolkit';

import filter from './filterSlice';
import pizzaCart from './pizzaSlice';
import pagination from './paginationSlice';
import pizzaLoad from './asyncLoadPizza/asyncPizzaSlice';
import search from './asyncSearchSlice/asyncSearch';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    pagination,
    pizzaLoad,
    search,
    pizzaCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
