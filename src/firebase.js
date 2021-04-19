import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn-I_mCRpLadK16M8cCI_NTzPuB7klAXg",
  authDomain: "tiger-survey-2e48d.firebaseapp.com",
  projectId: "tiger-survey-2e48d",
  storageBucket: "tiger-survey-2e48d.appspot.com",
  messagingSenderId: "785591197948",
  appId: "1:785591197948:web:23d2c629100f3978d7f779",
  measurementId: "G-8W9P6SMC2Y"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();