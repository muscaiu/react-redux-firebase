import firebase from 'firebase/app'; //core functionality
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC7U6mcRjTk1P0cCV5qofXJDQhWt6bHfpk",
  authDomain: "react-redux-firebase-6fe44.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-6fe44.firebaseio.com",
  projectId: "react-redux-firebase-6fe44",
  storageBucket: "react-redux-firebase-6fe44.appspot.com",
  messagingSenderId: "997402867981"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
