/** @format */

// /** @format */

// export const login = (creds) => {
//   //Pass in firebase methods to the redux thunk which currently gives us dispatch
//   //The authentication is in firebase instead of firestore

//   // return async (dispatch, getState, { getFirebase }) => {
//   //   const firebase = getFirebase(); //This help us to get firebase methods
//   //   // await firebase.auth.signInWithEmailAndPassword(
//   //   //   credentials.email,
//   //   //   credentials.password
//   //   // );
//   //   try {
//   //     await firebase
//   //       .auth()
//   //       .signInWithEmailAndPassword(credentials.email, credentials.password);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return async (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     try {
//       await firebase
//         .auth()
//         .signInWithEmailAndPassword(creds.email, creds.password);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const login = (loginCredentials) => {
//   return {
//     type: LOGIN_USER,
//     payload: loginCredentials
//   };
// };

import { SubmissionError, reset } from "redux-form";
import { toastr } from "react-redux-toastr";

export const login = (creds) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      console.log(error);
      //this will be available in our form
      throw new SubmissionError({
        _error: "Login failed"
      });
    }
  };
};

export const registerUser2 = (user) => {
  return async (dispatch, getState, { getFirebase, getfirestore }) => {
    //Remember we don't use getState but since we want to get access to getFirebase and getfirestore we have to provide
    return async (dispatch, getState, { getFirebase, getfirestore }) => {
      const firebase = getFirebase();
      const firestore = getfirestore();

      //1. Use firebase auth method to create the user with the email and password we passed in via the form

      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log(createdUser);

      //Update the displayName of the user just created
      await createdUser.user.updateProfile({
        displayName: user.displayName //This is from the form
      });

      //Create a new profile for the user in the firestore db

      let newUser = {
        displayName: user.displayName,
        createdAt: firestore.fieldvalue.serverTimestamp() //firestore timeStamp
      };

      //Insert this user in the collection of firestore
      //When we use firestore.add(), it means we want firestore to create id for us and use firestore.set() if we know the id we are using because at this point we know the user uid

      //`users/${createdUser.user.uid}` this is for our documents reference
      await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });

      try {
      } catch (error) {
        console.log(error);
      }
    };
  };
};

export const registerUser = (user) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
    await createdUser.user.updateProfile({
      displayName: user.displayName
    });
    let newUser = {
      displayName: user.displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
  } catch (error) {
    console.log(error);
    throw new SubmissionError({
      _error: error.message
    });
  }
};

export const socialLogin = (selectedProvider) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      const user = await firebase.login({
        provider: selectedProvider,
        type: "popup" //Poping up social login window
      });

      //Check if it's a new user then we update the user profile

      // if (user.additionalUserInfo.isNewUser) {
      //   await firestore.set(`users/${user.user.uid}`, {
      //     displayName: user.profile.displayName,
      //     photoURL: user.profile.avatarUrl,
      //     createdAt: firestore.fieldvalue.serverTimestamp()
      //   });
      // }

      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp()
        });
      }

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePassword2 = (crendentials) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const user = firebase.auth.currentUser;
    try {
      await user.updatePassword(crendentials.newPassword1);
      //reset Form
      await dispatch(reset("account")); //This takes the name of the form
      //Notification for success
      toastr.success("Success", "Your password has been updated");
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const updatePassword = (creds) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  try {
    await user.updatePassword(creds.newPassword1);
    await dispatch(reset("account"));
    toastr.success("Success", "Your password has been updated");
  } catch (error) {
    throw new SubmissionError({
      _error: error.message
    });
  }
};
