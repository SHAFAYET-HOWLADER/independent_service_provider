// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyfDx7wsC0AHqw_Nh9XiauieT-XDWzpU",
  authDomain: "handle-firebase-project.firebaseapp.com",
  projectId: "handle-firebase-project",
  storageBucket: "handle-firebase-project.appspot.com",
  messagingSenderId: "141159667628",
  appId: "1:141159667628:web:f623bfc8c09b288abb8c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;