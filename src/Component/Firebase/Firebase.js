// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3FsbjeFPqFT-BJXFPn06MsjehL2iFDMs",
  authDomain: "resume-builder-bf910.firebaseapp.com",
  projectId: "resume-builder-bf910",
  storageBucket: "resume-builder-bf910.firebasestorage.app",
  messagingSenderId: "431906497590",
  appId: "1:431906497590:web:99ac8e367e0c87af446497"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);