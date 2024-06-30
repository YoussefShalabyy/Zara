import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAvKxcYcCzd90wfIRzm8rZfpX53L2u430o",
  authDomain: "zara-8a3a4.firebaseapp.com",
  projectId: "zara-8a3a4",
  storageBucket: "zara-8a3a4.appspot.com",
  messagingSenderId: "614751574955",
  appId: "1:614751574955:web:acc378cd88b2d980f850ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
