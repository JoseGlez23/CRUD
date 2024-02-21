
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdwHmqiXRHy4sCTWzQPGjTMl7olhM5_yE",
  authDomain: "todo-app-j-eeff3.firebaseapp.com",
  projectId: "todo-app-j-eeff3",
  storageBucket: "todo-app-j-eeff3.appspot.com",
  messagingSenderId: "264990457525",
  appId: "1:264990457525:web:6ed45a903baa0acfb7c8fc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)