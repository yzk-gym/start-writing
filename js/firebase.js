// Initialize Firebase

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD1yGsxATyeJ-LlwgtAgFZSk3juieScJys",
  authDomain: "first-write.firebaseapp.com",
  databaseURL: "https://first-write.firebaseio.com",
  projectId: "first-write",
  storageBucket: "first-write.appspot.com",
  messagingSenderId: "1090385959667"
};
firebase.initializeApp(config);

exports.firebase = firebase;
