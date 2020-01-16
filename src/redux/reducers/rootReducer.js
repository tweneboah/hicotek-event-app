/** @format */

import { combineReducers } from "redux";
import eventReducer from "./eventReducers/eventReducer";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import { firebaseReducer } from "react-redux-firebase";

import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  toastr: ToastrReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
