import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH4XkrNEuYBNK6TwS1A_WpCi9EQhGCTA0",
    authDomain: "to-do-list-app-with-user-auth.firebaseapp.com",
    projectId: "to-do-list-app-with-user-auth",
    storageBucket: "to-do-list-app-with-user-auth.appspot.com",
    messagingSenderId: "157214660283",
    appId: "1:157214660283:web:968759f4cc8faba4777b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
