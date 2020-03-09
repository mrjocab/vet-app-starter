import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDKdeum8ukZSZXBZCmsO_uaTVfeCKU11QU",
    authDomain: "vet-app-c6770.firebaseapp.com",
    databaseURL: "https://vet-app-c6770.firebaseio.com",
    projectId: "vet-app-c6770",
    storageBucket: "vet-app-c6770.appspot.com",
    messagingSenderId: "370823537349",
    appId: "1:370823537349:web:7d73f09b432edda95b86ac",
    measurementId: "G-8STFZH74QX"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;