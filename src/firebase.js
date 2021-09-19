import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEaCnBFX-1ga2lsTPOGi2EmhWtUdZ1I7k",
  authDomain: "snapchat-clone-43346.firebaseapp.com",
  projectId: "snapchat-clone-43346",
  storageBucket: "snapchat-clone-43346.appspot.com",
  messagingSenderId: "722871658829",
  appId: "1:722871658829:web:89b57f4618c7f98f7aef04",
  measurementId: "G-BLVG3GX4RX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

