import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.js';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm3hUrH95rQf0080t9BRchH6o-b3MGVOU",
  authDomain: "oceans-five-defd9.firebaseapp.com",
  projectId: "oceans-five-defd9",
  storageBucket: "oceans-five-defd9.appspot.com",
  messagingSenderId: "248250340918",
  appId: "1:248250340918:web:5d7390ce6f47f7721d6a97"
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
