// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvLKmG88Xklrtzy1kDGQTHDCKN6A7KOx4",
  authDomain: "buybusy-5a0f7.firebaseapp.com",
  projectId: "buybusy-5a0f7",
  storageBucket: "buybusy-5a0f7.appspot.com",
  messagingSenderId: "491876383047",
  appId: "1:491876383047:web:c349b59e9c0fee78edf462"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
