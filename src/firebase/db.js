var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyAnd1jyyTn1wxJOfV2cuxGW1Zm_NhWKLQ8",
  authDomain: "dnd-app-a906c.firebaseapp.com",
  databaseURL: "https://dnd-app-a906c.firebaseio.com",
  projectId: "dnd-app-a906c",
  storageBucket: "dnd-app-a906c.appspot.com",
  messagingSenderId: "1094096694813",
  appId: "1:1094096694813:web:12c4049c8e81bf9340a0f4",
  measurementId: "G-VKST12V3SX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
export default db;
