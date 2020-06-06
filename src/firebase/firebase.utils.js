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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if there is no user  userAuth = false
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if there are any data exists ?
  // we want to create new user
  if (!snapShot.exists) {
    // we extract some value that we need to have for create a new user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // we create new user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  // console.log(firestore.doc('users/1234dfaaa'))
  console.log(userRef)
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google auth utility

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google popup when we use authentication
provider.setCustomParameters({ prompt: "select_account" });
// signin with pop up take provider object
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
