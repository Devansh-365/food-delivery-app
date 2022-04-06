import { getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCXWQBK_CThEzCA7aCLN-EUsPpbkZgu0BM",
    authDomain: "fooddeliveryapp-e307d.firebaseapp.com",
    databaseURL: "https://fooddeliveryapp-e307d-default-rtdb.firebaseio.com",
    projectId: "fooddeliveryapp-e307d",
    storageBucket: "fooddeliveryapp-e307d.appspot.com",
    messagingSenderId: "477058531160",
    appId: "1:477058531160:web:29fc8b2c1f1b8dac402f2d"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage}