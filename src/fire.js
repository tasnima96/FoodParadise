import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAmjLwvAdHPU7ml641eF1I4MVFJWoWitN0",
    authDomain: "foodparadise-a4993.firebaseapp.com",
    databaseURL: "https://foodparadise-a4993-default-rtdb.firebaseio.com",
    projectId: "foodparadise-a4993",
    storageBucket: "foodparadise-a4993.appspot.com",
    messagingSenderId: "664557717099",
    appId: "1:664557717099:web:fa8f97d189d5324365d32e"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
