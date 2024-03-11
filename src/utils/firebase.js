// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAFKbHHeJzKLY3qDsj8BWdwxvvooz-C4Q",
  authDomain: "netflix-gpt-1d3bb.firebaseapp.com",
  projectId: "netflix-gpt-1d3bb",
  storageBucket: "netflix-gpt-1d3bb.appspot.com",
  messagingSenderId: "151480845329",
  appId: "1:151480845329:web:efd011dffe3bba129f9db0",
  measurementId: "G-RW4JZ5NJJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();