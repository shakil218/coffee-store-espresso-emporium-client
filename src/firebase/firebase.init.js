// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9z_MGl0yAv4jZ_Qe0Y8oDMpJzmdwN0Vs",
  authDomain: "coffee-store-espresso-em-22485.firebaseapp.com",
  projectId: "coffee-store-espresso-em-22485",
  storageBucket: "coffee-store-espresso-em-22485.firebasestorage.app",
  messagingSenderId: "891948606325",
  appId: "1:891948606325:web:f070dd4c9038ae91dee93c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)