import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from "@googlemaps/js-api-loader"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKn_LboJLfRffdHPxaOfUypX02W5qVRUY",
  authDomain: "nautical-navigator-b0a9c.firebaseapp.com",
  projectId: "nautical-navigator-b0a9c",
  storageBucket: "nautical-navigator-b0a9c.appspot.com",
  messagingSenderId: "514032419600",
  appId: "1:514032419600:web:bdf0722394481e3711db95"
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
