import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdmm044uRp9sZaRHkV-RJ2wfF7Z4SqHbg",
  authDomain: "forgeplanapp.firebaseapp.com",
  databaseURL: "https://forgeplanapp.firebaseio.com",
  projectId: "forgeplanapp",
  storageBucket: "forgeplanapp.appspot.com",
  messagingSenderId: "688492648216",
  appId: "1:688492648216:web:54070dd17cc8c27f0a706d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({timestampsInSnapshots: true })
export default firebase;
