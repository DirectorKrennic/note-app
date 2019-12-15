import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

//Note App Firebase Config 
const firebaseConfig = {
    apiKey: "AIzaSyCF3JM--AY2re_Wsy3jzXoqM0-K7PZojRM",
    authDomain: "note-app-25dea.firebaseapp.com",
    databaseURL: "https://note-app-25dea.firebaseio.com",
    projectId: "note-app-25dea",
    storageBucket: "note-app-25dea.appspot.com",
    messagingSenderId: "816270420795",
    appId: "1:816270420795:web:bf6ee1a131c5d2fb45651e",
    measurementId: "G-PBMQFKNPTR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
