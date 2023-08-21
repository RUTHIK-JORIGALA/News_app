// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcvi82gPh_aoozvqNXVykRZUbS-tZOtUE",
  authDomain: "sunnynews-4b1dd.firebaseapp.com",
  projectId: "sunnynews-4b1dd",
  storageBucket: "sunnynews-4b1dd.appspot.com",
  messagingSenderId: "870657250048",
  appId: "1:870657250048:web:d23764908e6fe9869e19e5",
  measurementId: "G-BWB18T1EP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);