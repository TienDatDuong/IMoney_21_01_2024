import { initializeApp } from 'firebase/app';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXkxgNh6xw9WyW5Ufm6gCdOfx-YHrwYKI",
  authDomain: "mywallet-df544.firebaseapp.com",
  projectId: "mywallet-df544",
  storageBucket: "mywallet-df544.appspot.com",
  messagingSenderId: "330265261657",
  appId: "1:330265261657:web:a8e58c59a28ca6579a6348",
  measurementId: "G-TF8W9S8K0Y"
};

const app = initializeApp(firebaseConfig)
const projectStore = getFirestore(app)

const projectAuth = getAuth(app)

export {projectStore,projectAuth,createUserWithEmailAndPassword,updateDoc,serverTimestamp, signInWithEmailAndPassword}
