import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC2NM83x1SpXeNnrUiUjX3aCDuFZFrXLrg",
    authDomain: "fire-blog-7490f.firebaseapp.com",
    projectId: "fire-blog-7490f",
    storageBucket: "fire-blog-7490f.appspot.com",
    messagingSenderId: "92083464719",
    appId: "1:92083464719:web:d0b559ad17e3aa8339917a"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();



