import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBIwmTuvcSrAY4CwYncjwFpC5fas4TQ6Xo",
    authDomain: "appfinancas-cb166.firebaseapp.com",
    projectId: "appfinancas-cb166",
    storageBucket: "appfinancas-cb166.appspot.com",
    messagingSenderId: "749916343702",
    appId: "1:749916343702:web:4323f228a4d1c1f69561b7",
    measurementId: "G-Z2LP0CTRQR"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;