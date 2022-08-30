import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBP8vmxE1jCFYlZZ-UdizA5TvIbZ_io5_Q",
    authDomain: "restaurantapp-59edf.firebaseapp.com",
    databaseURL: "https://restaurantapp-59edf-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-59edf",
    storageBucket: "restaurantapp-59edf.appspot.com",
    messagingSenderId: "744153621752",
    appId: "1:744153621752:web:1f369206e389661036070d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }

