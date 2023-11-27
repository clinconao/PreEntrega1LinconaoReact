
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAVHHg4j2TdfCM4w7PMPOeAurNzEbGL1V0",
    authDomain: "worldkpoptemuco.firebaseapp.com",
    projectId: "worldkpoptemuco",
    storageBucket: "worldkpoptemuco.appspot.com",
    messagingSenderId: "329129289063",
    appId: "1:329129289063:web:d91118d7e8445f8a6e3bc2"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app