import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from "@googlemaps/js-api-loader"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA87_or3eKbueBrPd25Fz4NB3eoFm2TtUU",
  authDomain: "oceansfive-a962b.firebaseapp.com",
  projectId: "oceansfive-a962b",
  storageBucket: "oceansfive-a962b.appspot.com",
  messagingSenderId: "399590352458",
  appId: "1:399590352458:web:868b661bb736aae65de8b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// for hosting: npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
