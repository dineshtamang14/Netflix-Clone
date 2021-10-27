import firebase from "firebase";
// import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCV6imLl1QU6j1DRKgY7bZKR1oSYJWfoB8",
    authDomain: "netflix-clone-fe6cf.firebaseapp.com",
    projectId: "netflix-clone-fe6cf",
    storageBucket: "netflix-clone-fe6cf.appspot.com",
    messagingSenderId: "1071096604529",
    appId: "1:1071096604529:web:de01b215673cc352f538d0"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {auth};
export default db;

