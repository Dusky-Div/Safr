// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "safr-ee331.firebaseapp.com",
  projectId: "safr-ee331",
  storageBucket: "safr-ee331.firebasestorage.app",
  messagingSenderId: "660892318292",
  appId: "1:660892318292:web:c89775a3857dfba76d0bc1",
  measurementId: "G-GC9L6W9K36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth: any = getAuth(app);
export default app;
