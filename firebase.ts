import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG5Maj_fuMoOgeBJ0-Dsy7VWRZLf0sBw4",
  authDomain: "commune-bridge-14ea2.firebaseapp.com",
  projectId: "commune-bridge-14ea2",
  storageBucket: "commune-bridge-14ea2.firebasestorage.app",
  messagingSenderId: "240595448560",
  appId: "1:240595448560:web:160c5df777dbeceffc4835",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);