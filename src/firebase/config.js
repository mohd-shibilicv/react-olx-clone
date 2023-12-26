import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhUKH4r6x4j_M9Ybd_XDbdT4NgObH3aww",
    authDomain: "react-clone-project-282ad.firebaseapp.com",
    projectId: "react-clone-project-282ad",
    storageBucket: "react-clone-project-282ad.appspot.com",
    messagingSenderId: "406568542817",
    appId: "1:406568542817:web:5f75af527c979e1482c020"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);