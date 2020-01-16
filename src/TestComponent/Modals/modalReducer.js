/** @format */

import { createReducer } from "../../redux/utils/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

/** @format */

const initialState = null;

const openModalReducer = (state = initialState, payload) => {
  //destrcture the payload we are getting
  const { modalType, modalProps } = payload;

  return { modalType, modalProps }; //This is what it will be in our state
};

const closeModalReducer = (state = initialState) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModalReducer,
  [MODAL_CLOSE]: closeModalReducer
});
