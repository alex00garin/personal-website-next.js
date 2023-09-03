import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7aGBvUWwu5Nuz-qHY60FRPx8G_lqsQso",
  authDomain: "contact-form-bee5e.firebaseapp.com",
  projectId: "contact-form-bee5e",
  storageBucket: "contact-form-bee5e.appspot.com",
  messagingSenderId: "674404530704",
  appId: "1:674404530704:web:4cd284a71740c0dedca895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);