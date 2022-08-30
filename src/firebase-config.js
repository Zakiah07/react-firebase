import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4vYQK6ATtyprZdtRhnCKoeIXgK2U24Co",
  authDomain: "blogging-project-3512f.firebaseapp.com",
  projectId: "blogging-project-3512f",
  storageBucket: "blogging-project-3512f.appspot.com",
  messagingSenderId: "132404404984",
  appId: "1:132404404984:web:3478a553879aa5de19110d",
  measurementId: "G-CX1RKCNY6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
