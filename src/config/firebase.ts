import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBlTSODl1ptK1xSDs0nwyImdsokAWWxwLw",
  authDomain: "mb-labs-test.firebaseapp.com",
  projectId: "mb-labs-test",
  storageBucket: "mb-labs-test.appspot.com",
  messagingSenderId: "1011855685015",
  appId: "1:1011855685015:web:b71978f63c80a141ad40d2",
  measurementId: "G-7HP66J7XV1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase