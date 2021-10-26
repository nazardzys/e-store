import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDgKCZbAIHDP2BM_2LH4uYTsdSe1bcwEbE",
    authDomain: "e-store-db-58a76.firebaseapp.com",
    projectId: "e-store-db-58a76",
    storageBucket: "e-store-db-58a76.appspot.com",
    messagingSenderId: "856698880262",
    appId: "1:856698880262:web:4c901b6810db55b63cde87",
    measurementId: "G-RW140PSDG4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;