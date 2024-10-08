// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey://your google api key,
  authDomain: //your google authDomain,
  databaseURL: // databaseURL ,
  projectId: projectId,
  storageBucket:  // storageBucket,
  messagingSenderId: //your  messagingSenderId ,
  appId: 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
