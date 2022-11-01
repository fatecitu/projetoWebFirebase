/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyCJoQLYXRkE2pScMsDpPZWGFWQVnR3GyMs",
  authDomain: "leme-fatecitu-gti.firebaseapp.com",
  databaseURL: "https://leme-fatecitu-gti-default-rtdb.firebaseio.com",
  projectId: "leme-fatecitu-gti",
  storageBucket: "leme-fatecitu-gti.appspot.com",
  messagingSenderId: "394057380184",
  appId: "1:394057380184:web:9f9755997a28697b41b52d",
  measurementId: "G-5ZVJSVZ7XZ"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
