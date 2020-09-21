import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "YOUR INFO",
  authDomain: "YOUR INFO",
  databaseURL: "YOUR INFO",
  projectId: "YOUR INFO",
  storageBucket: "YOUR INFO",
  messagingSenderId: "YOUR INFO",
  appId: "YOUR INFO",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({timestampsInSnapshots: true })
export default firebase;
