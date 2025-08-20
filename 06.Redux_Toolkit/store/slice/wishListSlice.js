import { createSlice } from '@reduxjs/toolkit';

// createSlice will manage all the logic for this piece of state.
const wishListSlice = createSlice({
  // The name for this slice of state, used in action types (e.g., 'wishList/addWishListItem')
  name: 'wishList',
  
  // The initial state for this reducer, an empty array
  initialState: [],
  
  // An object of "case reducers". The key names will be used to generate actions.
  reducers: {
    // Reducer for adding an item.
    // Redux Toolkit uses Immer, so you can write code that "mutates" the state directly.
    addWishListItem(state, action) {
      // To prevent duplicates, we first check if the item already exists.
      const itemExists = state.some(
        (item) => item.productId === action.payload.productId
      );
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    
    // Reducer for removing an item.
    // Returning a new state (like from .filter()) is also perfectly valid.
    removeWishListItem(state, action) {
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    },
  },
});

// Export the auto-generated action creators.
// The names match the keys in the `reducers` object.
export const { addWishListItem, removeWishListItem } = wishListSlice.actions;

// Export the reducer function itself to be used in the store.
export default wishListSlice.reducer;