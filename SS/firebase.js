// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhrJxWpHvXpitm3NOg15M0_ul4tLT8rhs",
  authDomain: "wpi-student-success-project.firebaseapp.com",
  projectId: "wpi-student-success-project",
  storageBucket: "wpi-student-success-project.appspot.com",
  messagingSenderId: "1009615024571",
  appId: "1:1009615024571:web:e7ad8908260d0f5865149e",
  measurementId: "G-XTMRRGF4J3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);