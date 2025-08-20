import productsReducer from './productsReducer';
import cartReducer from './slice/cartSlice';
import wishListReducer from './slice/wishListSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  }
});
