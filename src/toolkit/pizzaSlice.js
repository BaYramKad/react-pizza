import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalAmount: 0,
  countPizza: 0,
  items: [],
  type: ['тонкое', 'традиционное'],
  size: [26, 30, 40],
};

export const pizzaSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItemsCart: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      const type = action.payload.type;
      const size = action.payload.size;

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          type: state.type[type],
          size: state.size[size],
          count: 1,
        });
      }

      state.totalAmount = state.items.reduce((acc, item) => item.price * item.count + acc, 0);
      state.countPizza = state.items.reduce((acc, item) => item.count + acc, 0);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = state.items.reduce((acc, item) => item.price * item.count + acc, 0);
      state.countPizza = state.items.reduce((acc, item) => item.count + acc, 0);
    },
    incrementItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalAmount = state.items.reduce((acc, item) => item.price * item.count + acc, 0);
      state.countPizza = state.items.reduce((acc, item) => item.count + acc, 0);
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalAmount = 0;
      state.countPizza = 0;
    },
  },
});

export const { setItemsCart, deleteItem, incrementItem, clearCart } = pizzaSlice.actions;
export default pizzaSlice.reducer;
