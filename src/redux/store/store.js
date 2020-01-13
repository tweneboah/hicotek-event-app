/** @format */

import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

//-----------------------------------------------
//configure store
//It takes 2 argument 1. rootReducer 2. Enhancer
//----------------------------------------------
export const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};
