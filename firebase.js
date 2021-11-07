import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSqtmIXVMaLPhz-28x85caW_zWF4Z6x-g",
  authDomain: "uber-clone-abfda.firebaseapp.com",
  projectId: "uber-clone-abfda",
  storageBucket: "uber-clone-abfda.appspot.com",
  messagingSenderId: "72489186203",
  appId: "1:72489186203:web:bf09463778854d9231e73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}