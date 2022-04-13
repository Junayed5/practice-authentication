// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrWxW3vQ9SKAk5OCdK_Xk6UZLsPPgFjs",
  authDomain: "genius-car-services-6dea3.firebaseapp.com",
  projectId: "genius-car-services-6dea3",
  storageBucket: "genius-car-services-6dea3.appspot.com",
  messagingSenderId: "128862769255",
  appId: "1:128862769255:web:6e6be92f3711286e3b84c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;