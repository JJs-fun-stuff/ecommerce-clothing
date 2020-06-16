import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// better scalability when we keep middleware as elements in array
const middlewares = [logger];

// this code is about creating store
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// add middleware to our store
export default store;