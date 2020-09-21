import authReducer from "./authReducer.js";
import projectReducer from "./projectreducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer, //Detecta cuando hacemos siignin o signup
});

export default rootReducer;
