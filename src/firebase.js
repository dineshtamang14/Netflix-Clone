import firebase from "firebase";
// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9KVXEVFzImHaJI10nYm6747peKkuhzNA",
  authDomain: "netflix-clone-c45d1.firebaseapp.com",
  projectId: "netflix-clone-c45d1",
  storageBucket: "netflix-clone-c45d1.appspot.com",
  messagingSenderId: "694289365227",
  appId: "1:694289365227:web:782dcb67534584947ce6ae",
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {auth};
export default db;

