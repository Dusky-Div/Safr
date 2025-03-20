// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChl6uHqbuahSk1oX1_gMWa-sAhGmtk17k",
  authDomain: "refactr-455eb.firebaseapp.com",
  projectId: "refactr-455eb",
  storageBucket: "refactr-455eb.firebasestorage.app",
  messagingSenderId: "154397569136",
  appId: "1:154397569136:web:e858188c8ac3ebd12ac4b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth: any = getAuth(app);
export default app;
