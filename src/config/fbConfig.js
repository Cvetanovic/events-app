import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyChJ9c4IPkYMvuwZVL-GUc6Cd766u2jSk4",
  authDomain: "events-app-4fc5e.firebaseapp.com",
  databaseURL: "https://events-app-4fc5e.firebaseio.com",
  projectId: "events-app-4fc5e",
  storageBucket: "events-app-4fc5e.appspot.com",
  messagingSenderId: "179408136358",
  appId: "1:179408136358:web:ba4bf15d6a974ff0a22c67",
  measurementId: "G-1HR3M0CJHV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
