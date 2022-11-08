// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATRFAJ6JV_HbjPKHYi9LyjS1gA1kHe76E",
    authDomain: "perfect-click-photography.firebaseapp.com",
    projectId: "perfect-click-photography",
    storageBucket: "perfect-click-photography.appspot.com",
    messagingSenderId: "836361087402",
    appId: "1:836361087402:web:cf230eeba2226a09cf63d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;