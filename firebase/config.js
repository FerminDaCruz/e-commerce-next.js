// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuLNPwwJWI12x8EFsZvhu6mo8PvLqOHgg",
    authDomain: "next-coderhouse.firebaseapp.com",
    projectId: "next-coderhouse",
    storageBucket: "next-coderhouse.firebasestorage.app",
    messagingSenderId: "225986413941",
    appId: "1:225986413941:web:e002a42c975f08b06c3f3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
