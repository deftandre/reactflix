"use strict";

import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDkz7c1ZeiNQYdKK_ISM2rppiYFMHIGg94",
    authDomain: "reactflix-23c9c.firebaseapp.com",
    databaseURL: "https://reactflix-23c9c-default-rtdb.firebaseio.com",
    projectId: "reactflix-23c9c",
    storageBucket: "reactflix-23c9c.appspot.com",
    messagingSenderId: "911149137143",
    appId: "1:911149137143:web:2136746ecbc27a35e1a7f2",
    measurementId: "G-DH73CEMFE7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };
