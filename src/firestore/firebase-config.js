import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDuK6WTe-UsSdwpwirroEgOmyLZ0lOws10",
    authDomain: "mesaregalos-44f86.firebaseapp.com",
    projectId: "mesaregalos-44f86",
    storageBucket: "mesaregalos-44f86.appspot.com",
    messagingSenderId: "921425810626",
    appId: "1:921425810626:web:8d140057d111e263de175b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { 
    firebase,
    googleProvider,
    db
}