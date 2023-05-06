// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs_8MWEg3YKlmxkQgpZiNrF62cKWBqyqk",
  authDomain: "coderecommercevictorvarela.firebaseapp.com",
  projectId: "coderecommercevictorvarela",
  storageBucket: "coderecommercevictorvarela.appspot.com",
  messagingSenderId: "288539078706",
  appId: "1:288539078706:web:2325c34f8e577cfe914c2b",
  measurementId: "G-XF3D0QM992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirebase=()=> app