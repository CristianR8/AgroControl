// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvjzCNnPz8xCISplV_gpNZauQwzTHJ5D0",
  authDomain: "agrocontrol-a09a5.firebaseapp.com",
  projectId: "agrocontrol-a09a5",
  storageBucket: "agrocontrol-a09a5.appspot.com",
  messagingSenderId: "377743417541",
  appId: "1:377743417541:web:8957f59dd2ef629ee450ac",
  measurementId: "G-GT9GDV669C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

