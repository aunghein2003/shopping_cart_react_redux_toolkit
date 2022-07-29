import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  cart: {
    item: 0,
    price: 0,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addToCart: (state, action) => {
      state.cart.item += 1;
      state.cart.price =
        Math.round((state.cart.price + action.payload) * 100) / 100;
    },
    deleteCart: (state) => {
      state.cart.item = 0;
      state.cart.price = 0;
    },
  },
});

export const { login, logout, addToCart, deleteCart } = userSlice.actions;
export default userSlice.reducer;
