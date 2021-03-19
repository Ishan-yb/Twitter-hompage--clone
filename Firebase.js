import firebase from "firebase"; 
const firebaseConfig = {
    apiKey: "AIzaSyDLFfO45ldwNxC5SBebEIWfcrPm0tF2iDE",
    authDomain: "dark-6003.firebaseapp.com",
    projectId: "dark-6003",
    storageBucket: "dark-6003.appspot.com",
    messagingSenderId: "574233905699",
    appId: "1:574233905699:web:5c2b0e0d6b3d2f9a0b3f96"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig); 
  const db =firebaseApp.firestore();
  export default db;