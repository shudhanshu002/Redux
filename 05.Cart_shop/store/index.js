// Import the necessary functions from the Redux library.
// combineReducers is used to merge multiple reducers into one.
// createStore is the core function that creates the Redux store.
import { combineReducers, createStore } from 'redux';

// Import the reducer that manages the list of all products.
import productsReducer from './productsReducer';

// Import the cart reducer and its specific action creators.
// Action creators are functions that create action objects for dispatching.
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './cartReducer';

// Import the wishlist reducer and its action creators.
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './wishListReducer';

// Create a single "root" reducer by combining the separate reducers.
// The keys in this object ('products', 'cartItems', 'wishList') will define
// the shape of your application's state.
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// Create the Redux store.
// The first argument is the root reducer that will handle all actions.
// The second argument is an "enhancer" that enables the Redux DevTools extension
// in the browser for easier debugging. The `?.()` ensures it doesn't crash if the extension isn't installed.
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// The lines below are examples of how you would dispatch actions to the store.
// They are commented out because this setup file should only create the store,
// not interact with it. Actions are typically dispatched from UI components in response to user events.

// // Example: Add product with ID 1 to the cart.
// store.dispatch(addCartItem(1));
// // Example: Add product with ID 12 to the cart.
// store.dispatch(addCartItem(12));

// // Example: Increase the quantity of product 12 in the cart.
// store.dispatch(increaseCartItemQuantity(12));

// // Example: Decrease the quantity of product 12, twice.
// store.dispatch(decreaseCartItemQuantity(12));
// store.dispatch(decreaseCartItemQuantity(12));

// // Example: Add products to the wishlist.
// store.dispatch(addWishListItem(18));
// store.dispatch(addWishListItem(11));

// // Example: Remove products from the wishlist.
// store.dispatch(removeWishListItem(11));
// store.dispatch(removeWishListItem(18));