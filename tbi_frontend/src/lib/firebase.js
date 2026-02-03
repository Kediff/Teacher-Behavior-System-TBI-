// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCunhE09NKXNVEdrUASBncoK1BP7_6DnY4",
  authDomain: "tbidbms-e6524.firebaseapp.com",
  projectId: "tbidbms-e6524",
  storageBucket: "tbidbms-e6524.firebasestorage.app",
  messagingSenderId: "12732755542",
  appId: "1:12732755542:web:2d0341ff641833af2b15f7",
  measurementId: "G-KEXBBQGJD8"
};

// ✅ Prevent double initialization (THIS FIXES YOUR ERROR)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
