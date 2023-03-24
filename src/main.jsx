import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzTrJW0Piett4iDWsoMjryVsbRpRs-Dw",
  authDomain: "federicogbcommerce.firebaseapp.com",
  projectId: "federicogbcommerce",
  storageBucket: "federicogbcommerce.appspot.com",
  messagingSenderId: "310334070001",
  appId: "1:310334070001:web:e89c36c728ed0831a19d50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
