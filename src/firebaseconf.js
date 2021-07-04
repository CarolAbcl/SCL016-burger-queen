import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiTfjphE2SZs0QVi2BSbevf0rKy9gRKfk",
  authDomain: "burger-queen-69fc0.firebaseapp.com",
  projectId: "burger-queen-69fc0",
  storageBucket: "burger-queen-69fc0.appspot.com",
  messagingSenderId: "47959008616",
  appId: "1:47959008616:web:7aab87c8d09e35fe50e2dd",
  measurementId: "G-Q5ZTDM3DF4"
};

const fb =firebase.initializeApp(firebaseConfig);
const store =fb.firestore();

export {store}