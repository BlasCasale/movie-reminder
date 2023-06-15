import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyA6vOU-jUcMisBZkqPCrC-myhMIUwCTRlE",
authDomain: "movie-reminder-fbdcf.firebaseapp.com",
projectId: "movie-reminder-fbdcf",
storageBucket: "movie-reminder-fbdcf.appspot.com",
messagingSenderId: "587670608571",
appId: "1:587670608571:web:4fce8067e4db97b945679e",
measurementId: "G-33PSE7776Q",
};

{ /*
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
*/}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)