import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReduser,
  productListReduser,
} from "./reducers/productsRedusers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReduser,
  productDetails: productDetailsReduser,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = { cartItems: cartItemsFromStorage };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
