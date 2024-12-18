import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGpqk9TRSwA2-c2paC-9is2iKT38i40gQ",
  authDomain: "lab-d-97b80.firebaseapp.com",
  projectId: "lab-d-97b80",
  storageBucket: "lab-d-97b80.firebasestorage.app",
  messagingSenderId: "1062403681508",
  appId: "1:1062403681508:web:d62c95986975d60d9950f1",
  measurementId: "G-2LFWM2KV2F"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
