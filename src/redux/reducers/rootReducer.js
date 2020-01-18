/** @format */

import { combineReducers } from "redux";
import eventReducer from "./eventReducers/eventReducer";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import { firebaseReducer } from "react-redux-firebase";

import { firestoreReducer } from "redux-firestore";
import authReducer from "../actions/authActions/authReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  toastr: ToastrReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
});

export default rootReducer;
