/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwtGYJXpY_Lyuh3s9SmbrAM4gRZW1agf4",
  authDomain: "fir-demo-d3e68.firebaseapp.com",
  databaseURL: "https://fir-demo-d3e68.firebaseio.com",
  projectId: "fir-demo-d3e68",
  storageBucket: "fir-demo-d3e68.appspot.com",
  messagingSenderId: "461698938452",
  appId: "1:461698938452:web:16ad255f56c19a61995fc1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
