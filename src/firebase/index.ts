import {initializeApp} from "firebase/app";
import  'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDz1JZLmCZr6wl6ur4X8AxdpeNDLYr_0A8",
  authDomain: "api-redux-firebase.firebaseapp.com",
  projectId: "api-redux-firebase",
  storageBucket: "api-redux-firebase.appspot.com",
  messagingSenderId: "861558448766",
  appId: "1:861558448766:web:422c7959f30afa6652ae2f"
};


export const app = initializeApp(firebaseConfig)


