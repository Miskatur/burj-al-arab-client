// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjGGK8O_UD2yrdd01AYhKp6WOLGaz4hA8",
    authDomain: "burj-al-arab-90f0b.firebaseapp.com",
    projectId: "burj-al-arab-90f0b",
    storageBucket: "burj-al-arab-90f0b.appspot.com",
    messagingSenderId: "1026547512017",
    appId: "1:1026547512017:web:0a1d6330d3050d7ea44bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;