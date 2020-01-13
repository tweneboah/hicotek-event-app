/** @format */

import { combineReducers } from "redux";
import eventReducer from "./eventReducers/eventReducer";

const rootReducer = combineReducers({
  events: eventReducer
});

export default rootReducer;
