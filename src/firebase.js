import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9ykGYX8SFXZ02jfNlWyQswtfPHK6hTuk",
    authDomain: "netflix-clone-bcb54.firebaseapp.com",
    projectId: "netflix-clone-bcb54",
    storageBucket: "netflix-clone-bcb54.appspot.com",
    messagingSenderId: "425805771150",
    appId: "1:425805771150:web:9a7c449a1d3e43d7caf4df",
    measurementId: "G-J8RXHP8CV6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;