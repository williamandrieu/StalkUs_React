import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

// Initalize and export Firebase.

var config = {
    apiKey: "AIzaSyDKXPN505oOQ43T7ObkW6FnIW_5OJfmMUg",
    authDomain: "stalkus-30ad7.firebaseapp.com",
    databaseURL: "https://stalkus-30ad7.firebaseio.com",
    projectId: "stalkus-30ad7",
    storageBucket: "stalkus-30ad7.appspot.com",
    messagingSenderId: "712503758022"
  };
 

export default firebase.initializeApp(config);