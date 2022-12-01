import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {getProductsDetailsReducer, getProductsReducer} from "./reducer/productReducer";
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductsDetails :getProductsDetailsReducer
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store