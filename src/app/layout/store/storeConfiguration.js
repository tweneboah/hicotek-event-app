import { createStore } from "redux";
import testReducer from "../../../features/testarea/testReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(testReducer, devToolsEnhancer());



