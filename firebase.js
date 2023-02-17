// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSLliARBJQ_VoTjcF2PoYLRTwfeyy_kz0",
  authDomain: "portfolio-edd27.firebaseapp.com",
  projectId: "portfolio-edd27",
  storageBucket: "portfolio-edd27.appspot.com",
  messagingSenderId: "447973997407",
  appId: "1:447973997407:web:4f83d3623c9b9882f214ea",
  measurementId: "G-QVF66VKG9D",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
