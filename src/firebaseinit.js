// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_ZCIpZTMoiRlFGOah8dshm_LpSBWrWs",
  authDomain: "bloggingapp-81fcc.firebaseapp.com",
  projectId: "bloggingapp-81fcc",
  storageBucket: "bloggingapp-81fcc.appspot.com",
  messagingSenderId: "88309127328",
  appId: "1:88309127328:web:be4ff8968262b7729311c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);