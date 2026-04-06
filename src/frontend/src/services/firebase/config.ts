import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAsSkDiFZpk1eqMWS4qDDxx5ksZBONSJ4Q",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "odigyan-a5d08.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "odigyan-a5d08",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "odigyan-a5d08.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "25985064791",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:25985064791:web:b935dbf321dbc0b2c5e812",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseFunctions = getFunctions(firebaseApp);
