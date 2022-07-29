import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import shopItemsReducer from './shopItemsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopItemsReducer,
  },
});

export default store;
