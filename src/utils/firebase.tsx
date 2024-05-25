// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ffd4b.firebaseapp.com",
  projectId: "blog-ffd4b",
  storageBucket: "blog-ffd4b.appspot.com",
  messagingSenderId: "727656516388",
  appId: "1:727656516388:web:51f7ad48844d185836c1b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
