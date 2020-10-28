import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReduser,
  productListReduser,
} from "./reducers/productsRedusers";

const reducer = combineReducers({
  productList: productListReduser,
  productDetails: productDetailsReduser,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
