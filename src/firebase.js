import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLHsUcUnJsHyvhtqf1BFJmjmAXCEVmTt0",
  authDomain: "zyvar-e-commerse.firebaseapp.com",
  projectId: "zyvar-e-commerse",
  storageBucket: "zyvar-e-commerse.firebasestorage.app",
  messagingSenderId: "327550775734",
  appId: "1:327550775734:web:bc8667a462009862c25117",
  measurementId: "G-P81K1DWTZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
