import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEKhek80yGzEhXA8Yqlo6iDNiedUqiK14",
  authDomain: "ecommerce-db-d961f.firebaseapp.com",
  databaseURL: "https://ecommerce-db-d961f.firebaseio.com",
  projectId: "ecommerce-db-d961f",
  storageBucket: "ecommerce-db-d961f.appspot.com",
  messagingSenderId: "792774791655",
  appId: "1:792774791655:web:3f377d21d9dfbf56b2ad42",
  measurementId: "G-FGVRNL88WC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// setup google auth utility

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google popup when we use authentication
provider.setCustomParameters({ prompt:'select_account'});
// signin with pop up take provider object
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
