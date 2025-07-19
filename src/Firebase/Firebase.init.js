// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21jeqOGqvBy-bcqQ-5OEeizar1yMxNWA",
  authDomain: "food-share-a3304.firebaseapp.com",
  projectId: "food-share-a3304",
  storageBucket: "food-share-a3304.firebasestorage.app",
  messagingSenderId: "231203320741",
  appId: "1:231203320741:web:0f64140f7941fe0100ee4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);