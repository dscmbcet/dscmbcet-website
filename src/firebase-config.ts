// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOXj3UF6v46Lxv-7ukczItFC9o_NQVPJM",
  authDomain: "dscmbcet-admin.firebaseapp.com",
  projectId: "dscmbcet-admin",
  storageBucket: "dscmbcet-admin.appspot.com",
  messagingSenderId: "705554898608",
  appId: "1:705554898608:web:5aa537bb05bf658a152575",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
