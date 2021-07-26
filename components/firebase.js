import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnaVX-7V3tZcncBR5guTvARLx2rWi4qig",
  authDomain: "appfood-55355.firebaseapp.com",
  projectId: "appfood-55355",
  storageBucket: "appfood-55355.appspot.com",
  messagingSenderId: "414472736932",
  appId: "1:414472736932:web:3c74893cff5a9a39701631",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
