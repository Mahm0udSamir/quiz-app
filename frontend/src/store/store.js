import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = [thunk];

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
