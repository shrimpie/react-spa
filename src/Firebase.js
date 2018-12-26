import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDQ8NpschY_B6Yh5GYH339uNJyRUp4eH1w",
  authDomain: "react-spa-ed48b.firebaseapp.com",
  databaseURL: "https://react-spa-ed48b.firebaseio.com",
  projectId: "react-spa-ed48b",
  storageBucket: "react-spa-ed48b.appspot.com",
  messagingSenderId: "221177358260"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
