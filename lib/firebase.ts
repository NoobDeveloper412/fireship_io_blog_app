import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);