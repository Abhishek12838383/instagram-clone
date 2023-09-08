// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGI63yv-Av93jICVjUHLNkMzP0Ti4o1GM",
  authDomain: "instagram-17c9c.firebaseapp.com",
  projectId: "instagram-17c9c",
  storageBucket: "instagram-17c9c.appspot.com",
  messagingSenderId: "374486803399",
  appId: "1:374486803399:web:f5bee84ad66288f69eefe2",
  measurementId: "G-6CR7X5PHBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();