import firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export const facebookAuth = async () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  try {
    const user = await firebase.auth().signInWithPopup(provider);
    return user;
  } catch (error) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
  }
};

export const googleAuth = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  try {
    const user = await firebase.auth().signInWithPopup(provider);
    return user;
  } catch (error) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
  }
};
