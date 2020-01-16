/** @format */

import { createStore, applyMiddleware } from "redux";
import {
  devToolsEnhancer,
  composeWithDevTools
} from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

//-----------------------------------------------
//configure store
//It takes 2 argument 1. rootReducer 2. Enhancer
// We add middlware as a second parameter
//----------------------------------------------
export const configureStore = () => {
  //We can add more middlewares to our store

  const middlewares = [thunk];
  //devTool also provide composeWithDevTool so that we can add our middleware to it
  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, composedEnhancer);
  return store;
};
