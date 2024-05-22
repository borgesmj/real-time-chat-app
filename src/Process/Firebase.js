// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtwXpxYp4bWbONn8L-osDqeoPUeE24drE",
  authDomain: "borgesmj-real-time-chat-app.firebaseapp.com",
  projectId: "borgesmj-real-time-chat-app",
  storageBucket: "borgesmj-real-time-chat-app.appspot.com",
  messagingSenderId: "937877993861",
  appId: "1:937877993861:web:b30f94b7707b6a0b17ecec",
  measurementId: "G-3H7QPM6HD0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
