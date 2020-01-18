/** @format */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../../app/config/firebase";

//reactReduxFirebase = our store enhancer able to get more functions ffrom firebase

//getFirebase = Able to get instance of firebase inside our actions and this will be used by our redux thunk

//reduxFirestore and getFirestore help us for bindings, thus connecting our component directly to firestore

//-----------------------------------------------
//configure store
//It takes 2 argument 1. rootReducer 2. Enhancer
// We add middlware as a second parameter
//----------------------------------------------

//------------------------------
//FIREBASE CONFIGURATION
//-------------------------------

//React redux firebase config

const rrfConfig = {
  userProfile: "users", //Users are stored  = table
  attachAuthIsReady: true, //Wait before a user is authenticated before rendering our app
  useFirestoreForProfile: true,
  updateProfileOnLogin: false
};

export const configureStore = () => {
  //We can add more middlewares to our store

  //Thunk help us to dispatch actions for async but it can also provide more async calls by using .withExtraArgument() which we will pass our getFirebase and getFireStore

  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  //devTool also provide composeWithDevTool so that we can add our middleware to it

  //pass our rrfConfig and our custom firebase config to our composed enhancer

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  const store = createStore(rootReducer, composedEnhancer);
  return store;
};
