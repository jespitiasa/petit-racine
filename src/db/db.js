import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuBa59JA9VNoil9mvYuupyGIXjpgl5ZBY",
  authDomain: "petit-a6bde.firebaseapp.com",
  projectId: "petit-a6bde",
  storageBucket: "petit-a6bde.firebasestorage.app",
  messagingSenderId: "232079850272",
  appId: "1:232079850272:web:83145b8c80a732fc753545"
  };
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;