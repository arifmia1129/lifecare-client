import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.evn.REACT_APP_apiKey,
    authDomain: process.evn.REACT_APP_authDomain,
    projectId: process.evn.REACT_APP_projectId,
    storageBucket: process.evn.REACT_APP_storageBucket,
    messagingSenderId: process.evn.REACT_APP_messagingSenderId,
    appId: process.evn.REACT_APP_appId,
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;