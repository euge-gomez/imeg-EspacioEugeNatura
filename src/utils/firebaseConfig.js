// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJRobFTw1Ur5-muuXbq_Xf66Gb2p3wTgA",
  authDomain: "espacionaturaeuge.firebaseapp.com",
  projectId: "espacionaturaeuge",
  storageBucket: "espacionaturaeuge.appspot.com",
  messagingSenderId: "319602299798",
  appId: "1:319602299798:web:6583e9d1b3932696ec43b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;