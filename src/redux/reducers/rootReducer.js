/** @format */

import { combineReducers } from "redux";
import eventReducer from "./eventReducers/eventReducer";
import { reducer as FormReducer } from "redux-form";
import modalReducer from "../../TestComponent/Modals/modalReducer";
import { reducer as ToastrReducer } from "react-redux-toastr";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modal: modalReducer,
  toastr: ToastrReducer
});

export default rootReducer;
