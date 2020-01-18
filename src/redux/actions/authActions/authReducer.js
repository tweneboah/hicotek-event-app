/** @format */

import { createReducer } from "../../utils/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";

/** @format */

const initialState = {
  authenticated: false,
  currentUser: null
};

const loginUser = (state, payload) => {
  return {
    authenticated: true,
    currentUser: payload.creds.email
  };
};

const signOutUser = () => {
  return {
    authenticated: false,
    currentUser: null
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
});
