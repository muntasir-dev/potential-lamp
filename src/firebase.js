// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmNE4l_t3op2mBY6cf_3YCkjpyLv1BWE",
  authDomain: "chatbox-bd.firebaseapp.com",
  projectId: "chatbox-bd",
  storageBucket: "chatbox-bd.appspot.com",
  messagingSenderId: "256527262849",
  appId: "1:256527262849:web:a7486daf32011d43671980",
  measurementId: "G-RS5JEE0JNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);