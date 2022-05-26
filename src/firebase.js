import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
    apiKey: 'AIzaSyB2bdeIu89HuBjDZyQTloC1Krypt2lLVCE',
    authDomain: 'auth-development-40d31.firebaseapp.com',
    databaseURL: 'process.env.https://auth-development-40d31-default-rtdb.firebaseio.com',
    projectId: 'auth-development-40d31',
    storageBucket: 'auth-development-40d31.appspot.com',
    messagingSenderId: '757337040292',
    appId: '1:757337040292:web:1fc3ccccfa6752625f4d31'


})

export const auth = app.auth();
export default app