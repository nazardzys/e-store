import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';

const config = {
  apiKey: 'AIzaSyDgKCZbAIHDP2BM_2LH4uYTsdSe1bcwEbE',
  authDomain: 'e-store-db-58a76.firebaseapp.com',
  projectId: 'e-store-db-58a76',
  storageBucket: 'e-store-db-58a76.appspot.com',
  messagingSenderId: '856698880262',
  appId: '1:856698880262:web:4c901b6810db55b63cde87',
  measurementId: 'G-RW140PSDG4',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
