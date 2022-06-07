import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCEbgOaXePdI3PhumQpvZ0KOdeXSL8PQoU',
  authDomain: 'bugtracker-dbd26.firebaseapp.com',
  projectId: 'bugtracker-dbd26',
  storageBucket: 'bugtracker-dbd26.appspot.com',
  messagingSenderId: '1046470181502',
  appId: '1:1046470181502:web:aca32195dbbc698bd90e2f',
};

//initialize firease
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestammp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, timestamp };
