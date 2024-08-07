// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6f999.firebaseapp.com",
  projectId: "mern-estate-6f999",
  storageBucket: "mern-estate-6f999.appspot.com",
  messagingSenderId: "1035550091363",
  appId: "1:1035550091363:web:ef9cd72668a9e5ebe2f056"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);