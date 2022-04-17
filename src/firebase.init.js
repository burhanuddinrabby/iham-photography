import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAyaAbr7VSo_DdC4WM2_uJsnUvZEMPMshI",
    authDomain: "iham-photography.firebaseapp.com",
    projectId: "iham-photography",
    storageBucket: "iham-photography.appspot.com",
    messagingSenderId: "957710945753",
    appId: "1:957710945753:web:c011596099a57cb6f71dc8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;