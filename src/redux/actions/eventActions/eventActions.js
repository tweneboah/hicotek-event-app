/** @format */

import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";
import { toastr } from "react-redux-toastr";

export const createEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event
        }
      });

      toastr.success("Success", "Event has been created");
    } catch (error) {
      toastr.error("Oops", "Something went Wrong");
    }
  };
};

export const updateEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });

      toastr.success("Success", "Event has been Updated");
    } catch (error) {
      toastr.error("Oops", "Something went Wrong");
    }
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};
